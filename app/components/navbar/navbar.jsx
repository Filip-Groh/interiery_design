import React from 'react'
import DarkmodeSwap from './darkmodeSwap'
import ItemGroup from './itemGroup'
import Image from 'next/image'
import Link from 'next/link'
import { auth } from '/app/api/auth/[...nextauth]/auth'
import LoginButton from './user/login'
import LogoutButton from './user/logout'

const Navbar = async () => {
    const session = await auth()
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <ItemGroup />
                    </ul>
                </div>
                <Link className="btn btn-ghost p-0 normal-case text-xl flex justify-center content-center overflow-hidden" href="/">
                    <Image className="rounded-xl" width={150} height={150} src="/static/logo.jpg" alt="Company logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <ItemGroup />
                </ul>
            </div>
            <div className="navbar-end">
                {session ? <LogoutButton /> : <LoginButton />}
                <DarkmodeSwap />
            </div>
        </div>
    )
}

export default Navbar