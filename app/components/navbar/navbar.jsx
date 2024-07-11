import React from 'react'
import DarkmodeSwap from './darkmodeSwap'
import ItemGroup from './itemGroup'
import Image from 'next/image'
import Link from 'next/link'
import User from './user/user'

const Navbar = async () => {
    return (
        <header className="navbar bg-base-100">
            <div className="navbar-start">
                <nav className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <menu tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50">
                        <ItemGroup />
                    </menu>
                </nav>
                <Link className="btn btn-ghost p-0 normal-case text-xl flex justify-center content-center overflow-hidden" href="/">
                    <Image className="rounded-xl" width={150} height={150} src="/static/logo.jpg" alt="Company logo" />
                </Link>
            </div>
            <nav className="navbar-center hidden lg:flex">
                <menu className="menu menu-horizontal px-1 z-50">
                    <ItemGroup />
                </menu>
            </nav>
            <div className="navbar-end gap-2">
                <User />
                <DarkmodeSwap />
            </div>
        </header>
    )
}

export default Navbar