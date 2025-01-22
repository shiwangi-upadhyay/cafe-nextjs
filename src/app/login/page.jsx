'use client'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const[buttonDisabled, setButtonDisabled] = useState(false);
  const[loading, setLoading] = useState(false);

  const onLogin = async () => {
    try {
      // Example API call logic
      setLoading(true);
      console.log(user);
      const response = await axios.post('/api/users/login', user);
      console.log('Login successful:', response.data);
      toast.success('Login successful');
      router.push('/profile');
    } catch (error) {
      console.error('Login failed:', error.message);
      toast.error(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if(user.email.length > 0 && user.password.length > 0){
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <Card 
      color="transparent" 
      shadow={false} 
      className="flex flex-col items-center justify-center min-h-screen py-2"
    >
      <Typography variant="h4" color="white">
        Login
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to Login.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
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
            className="!border-t-white-200 focus:!border-t-gray-900 text-white"
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
            className="!border-t-white-200 focus:!border-t-gray-900 text-white"
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
        <Button className="mt-6" fullWidth onClick={onLogin}>
          Login
        </Button>
      </form>
      <Link href="/signup">Visit Signup Page</Link>
    </Card>
  );
}

