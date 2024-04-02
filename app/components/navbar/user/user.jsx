import React from 'react'
import LoginButton from './login'
import LogoutButton from './logout'
import { auth } from '/app/api/auth/[...nextauth]/auth'
import Image from 'next/image'

const User = async () => {
    const session = await auth()

    return (
        <ul>
            <li tabIndex={1}>
                <details className="dropdown dropdown-end">
                    <summary className="list-none">
                        <div className="avatar">
                            <div className="w-10 rounded-full">
                                <Image src={session?.user?.image || "/svg/user.svg"} alt='User avatar image' width={1000} height={1000} />
                            </div>
                        </div>
                    </summary>
                    <ul className="p-2 z-50 dropdown-content menu shadow bg-base-100 rounded-box w-max text-neutral animate-fade-down animate-duration-500">
                        <li className="p-2">{session?.user?.name || "Anonym"}</li>
                        <li>
                            {session ? <LogoutButton /> : <LoginButton />}
                        </li>
                    </ul>
                </details>
            </li>
        </ul>
    )
}

export default User