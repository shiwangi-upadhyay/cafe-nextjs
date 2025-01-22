    import { connect } from "@/dbConfig/dbConfig";

    import User from "@/models/userModel";
    import { NextResponse } from "next/server";
    import bcrypt from "bcryptjs";

    connect();

    export async function POST(request) {
    try {
        const reqBody = await request.json();
        // Destructuring to extract all variables coming in
        const { username, email, password } = reqBody;
        console.log(reqBody);
        // Checking if the user already exists
        const user = await User.findOne({ email });

        if (user) {
        return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        // Hashing the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Creating a new user
        const newUser = new User({
        username,
        email,
        password: hashedPassword,
        });

        // Saving the user
        const savedUser = await newUser.save();
        console.log(savedUser);

        //send verification email
        await sendMail({ email, emailType: "VERIFY", userId: savedUser._id });
        return NextResponse.json({
          message: "User created successfully",
          success: true,
        });
    } catch (error) {
        return NextResponse.json(
        { error: error.message },
        { status: 500 }
        );
    }
    }