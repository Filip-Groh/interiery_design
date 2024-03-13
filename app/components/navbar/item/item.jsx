import Link from 'next/link'
import React from 'react'
import { auth } from '/app/api/auth/[...nextauth]/auth'
import { getSettings } from '@/utils/database'

const NavbarItem = async ({url, name, authRequired=false}) => {
    const session = await auth()
    const admins = await getSettings("adminLogin")

    if (!authRequired || (session && JSON.parse(admins?.value).findIndex((value) => {return value == session.user.email}) != -1)) {
        return (
            <li className='bg-base-100 text-neutral'>
                <Link href={url}>{name}</Link>
            </li>
        )
    }
}

export default NavbarItem