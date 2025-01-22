import { getTokenData } from "@/helpers/getTokenData";
import {NextResponse} from "next/server"
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";

connect();
export async function GET(request){
    try {
        const userId = await getTokenData(request);
         // Fetch user from database, excluding password
         const user = await User.findOne({ _id: userId }).select("-password");

        return NextResponse.json({
            message: "User Found",
            data: user,
        });

    } catch (error) {
        return NextResponse.json(
            {error:error.message},
            {status:400}
        );
    }
}