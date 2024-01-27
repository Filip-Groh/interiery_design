import React from 'react'
import Link from 'next/link'

const LogoutButton = () => {
    return (
        <Link href="/api/auth/signout">Logout</Link>
    )
}

export default LogoutButton