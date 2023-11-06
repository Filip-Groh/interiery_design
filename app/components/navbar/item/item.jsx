import Link from 'next/link'
import React from 'react'

const NavbarItem = (props) => {
    return (
        <li>
            <Link href={props.url}>{props.name}</Link>
        </li>
    )
}

export default NavbarItem