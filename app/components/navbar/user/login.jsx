import Link from 'next/link'
import React from 'react'

const LoginButton = () => {
    return (
        <Link href="/api/auth/signin">Login</Link>
    )
}

export default LoginButton