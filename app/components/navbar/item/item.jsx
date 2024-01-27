import Link from 'next/link'
import React from 'react'
import { auth } from '/app/api/auth/[...nextauth]/auth'

const NavbarItem = async ({url, name, authRequired=false}) => {
    const session = await auth()
    if (session || !authRequired) {
        return (
            <li>
                <Link href={url}>{name}</Link>
            </li>
        )
    }
}

export default NavbarItem