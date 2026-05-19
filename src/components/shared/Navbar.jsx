'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from '@/assets/user.png';
import NavLink from './NavLink';
import { FaGoogle } from 'react-icons/fa';
import { authClient } from "@/lib/auth-client"

const Navbar = () => {
    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    return (
        <div className="navbar bg-[#1E3A8A] shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="relative z-21 btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-22 mt-3 w-52 p-2 shadow">
                        <li><NavLink href={'/home'}>Home</NavLink></li>
                        <li><NavLink href={'/products'}>Products</NavLink></li>
                        <li><NavLink href={'/myprofile'}>My Profile</NavLink></li>
                        <li>
                            {isPending ? (<span className="loading loading-spinner loading-lg"></span>) : user ? (<div className='flex flex-col items-center gap-2'>
                                <h2>Hello, {user.name}</h2>
                                <Image src={user.image || userAvatar} alt="User Avatar" width={60} height={60}></Image>
                                <button className='btn mr-4 bg-red-500 text-white' onClick={async () => await authClient.signOut()}>Logout</button>
                            </div>) :
                                (
                                    <div className='flex flex-col'>
                                        <Link href={'/register'}><button className='btn mr-4 bg-blue-500 text-white'>Register</button></Link>
                                        <Link href={'/login'}><button className='btn mr-4 bg-green-500 text-white'>Login</button></Link>
                                        <button className='btn border-blue-500 text-blue-500' onClick={handleGoogleSignIn}><FaGoogle /> Login with Google</button>
                                    </div>
                                )}
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl text-white flex">StudyNook</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='text-white'><NavLink href={'/home'}>Home</NavLink></li>
                    <li className='text-white'><NavLink href={'/products'}>Products</NavLink></li>
                    <li className='text-white'><NavLink href={'/myprofile'}>My Profile</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className='hidden md:block'>
                    {isPending ? (<span className="loading loading-spinner loading-lg"></span>) : user ? (<div className='flex items-center gap-2'>
                        <h2 className='text-white'>Hello, {user.name}</h2>
                        <Image src={user.image || userAvatar} alt="User Avatar" width={60} height={60}></Image>
                        <button className='btn mr-4 bg-red-500 text-white' onClick={async () => await authClient.signOut()}>Logout</button>
                    </div>) :
                        (
                            <div className='flex'>
                                <Link href={'/register'}><button className='btn mr-4 bg-blue-500 text-white border-black'>Register</button></Link>
                                <Link href={'/login'}><button className='btn mr-4 bg-green-500 text-white border-black'>Login</button></Link>
                                <button className='btn border-blue-500 text-blue-500' onClick={handleGoogleSignIn}><FaGoogle /> Login with Google</button>
                            </div>
                        )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;

{/* <div className='container mx-auto flex justify-between gap-4 mt-6'>
    <div></div>
    <ul className='flex justify-between items-center text-gray-700 gap-3'>
        <li><NavLink href={'/'}>Home</NavLink></li>
        <li><NavLink href={'/about'}>About</NavLink></li>
        <li><NavLink href={'/career'}>Career</NavLink></li>
    </ul>
    {isPending ? (<span className="loading loading-spinner loading-lg"></span>) : user ? (<div className='flex items-center gap-2'>
        <h2>Hello, {user.name}</h2>
        <Image src={user.image || userAvatar} alt="User Avatar" width={60} height={60}></Image>
        <button className='btn mr-4 bg-red-500 text-white' onClick={async () => await authClient.signOut()}>Logout</button>
    </div>) :
        (
            <div className='flex'>
                <Link href={'/register'}><button className='btn mr-4 bg-blue-500 text-white'>Register</button></Link>
                <Link href={'/login'}><button className='btn mr-4 bg-green-500 text-white'>Login</button></Link>
            </div>
        )}
</div> */}