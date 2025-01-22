"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";


export default function SignupPage(){
    const[user, setUser] = React.useState({
        email: '',
        password: '',
        username: ''
    });
    const onSignup = async () => {
        
    }
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Signup Page</h1>
            <hr />
            <label htmlFor="username">username</label>
            <input 
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 "
                type="text"
                id="username"
                value={user.username}
                onChange={(e) => setUser({...user, username: e.target.value})}
                placeholder="username"
                />

            <label htmlFor="username">email</label>
            <input 
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 "
                type="text"
                id="email"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="username"
                />

            <label htmlFor="username">password</label>
            <input 
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 "
                type="password"
                id="password"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder="password"
                />

                <button
                    className="p-2 bg-blue-500 text-white rounded-lg"
                >Signup here
                </button>
        </div>
        
    )
}