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
                                {session?.user?.image ? 
                                    <Image src={session.user.image} alt='User avatar image' width={1000} height={1000} /> 
                                : 
                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="55px" height="55px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve" className='fill-neutral'>
                                        <g id="user">
                                            <g>
                                                <path d="M256.167,277.721c-55.4,0-100.471-45.071-100.471-100.471S200.767,76.779,256.167,76.779    c55.4,0,100.471,45.071,100.471,100.471S311.567,277.721,256.167,277.721z" id="id_101"/>
                                            </g>
                                            <g>
                                                <path d="M437.19,74.98C388.83,26.63,324.55,0,256.17,0S123.5,26.63,75.15,74.98S0.17,187.62,0.17,256S26.8,388.67,75.15,437.02    C123.5,485.37,187.79,512,256.17,512s132.66-26.63,181.021-74.98C485.54,388.67,512.17,324.38,512.17,256    S485.54,123.33,437.19,74.98z M69.31,399.37C38.75,359.63,20.55,309.9,20.55,256c0-129.92,105.7-235.62,235.62-235.62    S491.78,126.08,491.78,256c0,53.92-18.2,103.67-48.79,143.42c-7.58-25.359-26.88-48-56.183-65.311    c-35.407-20.92-82.02-32.439-131.24-32.439c-49.16,0-95.57,11.521-130.68,32.46C95.91,351.41,76.82,374.01,69.31,399.37z" id="id_102" />
                                            </g>
                                        </g>
                                    </svg>
                                }
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