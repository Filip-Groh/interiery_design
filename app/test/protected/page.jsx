import React from 'react'

const LogoutTestPage = () => {
    return (
        <main>
            <h1>Protected</h1>
            <a href="/api/auth/signout">sign out</a>
        </main>
    )
}

export default LogoutTestPage