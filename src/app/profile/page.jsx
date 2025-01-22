'use client'
import axios from 'axios';
import Link from 'next/link';
import {toast} from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
export default function ProfilePage(){
    const router = useRouter();
    const [data, setData] = useState(null);
    

    const logout= async()=>{
        try {
            await axios.get('/api/users/logout');
            toast.success('Logout successful');
            router.push('/login');
        } catch (error) {
            console.error(error.message);
            toast.error(error.message || 'Logout failed');
        }
    };

    /*const getUserDetails = async () =>{
        await axios.get('/api/users/userData');
        console.log(res.data);
        setData(res.data.data._id); // Update state with user ID
    }*/
    
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile Page</h1>
            <h2 className="p-1 rounded bg-green-500">
                {data ? (
                    <Link href={`/profile/${data}`}>{data}</Link>
                ) : (
                    "Nothing"
                )}
            </h2>
            <button
            onClick={logout}
            className="mt-6 w-[10%] bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
            >Logout</button>



            
        </div>
    )
}