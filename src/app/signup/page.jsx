'use client';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";



export default function SignupPage() {
  const router = useRouter();
  const[user, setUser] = useState({
          email: '',
          password: '',
          username: ''
      });

      const[buttonDisabled, setButtonDisabled] = useState(false);

      const[loading, setLoading] = useState(false);

      const onSignup = async () => {
        try {
          setLoading(true);
          // Example API call logic
          const response = await axios.post('/api/users/signup', user);
          console.log('Signup successful:', response.data);
          router.push('/login');

        } catch (error) {
          console.log("SignUp failed", error.message);
          toast.error(error.message);
        } finally {
          setLoading(false);
        }
      };

      useEffect(() => {
          if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0){
              setButtonDisabled(false);
          }
          else{
              setButtonDisabled(true);
          }
      }, [user]);

  return (
    <Card color="transparent" shadow={false} 
      className="flex flex-col items-center justify-center min-h-screen py-2">
      <Typography variant="h4" color="white">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="white" className="-mb-3">
            Your Name
          </Typography>
          <Input
            type="text"
            id="username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="username"
            size="lg"
            className=" !border-t-white-200 focus:!border-t-gray-900 text-white"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="white" className="-mb-3">
            Your Email
          </Typography>
          <Input
            type="text"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-white-200 focus:!border-t-gray-900 text-white"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="white" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            id="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            size="lg"
            placeholder="********"
            className=" !border-t-white-200 focus:!border-t-gray-900 text-white"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree to the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6 " fullWidth onClick={onSignup}>
          {buttonDisabled ? "No Signup" : "Signup"}
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a href="#" className="font-medium text-gray-900">
            Sign In
          </a>
        </Typography>
      </form>
      <Link href="/login">Visit Login Page</Link>
    </Card>
  );
}
