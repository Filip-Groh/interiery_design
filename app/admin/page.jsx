import Link from 'next/link'
import React from 'react'

const Admin = () => {
    return (
        <>
            <div className="flex justify-center p-2">
                <div role="tablist" className="tabs tabs-boxed w-8/12">
                    <Link role="tab" className="tab tab-active" href="/admin">Dashboard</Link>
                    <Link role="tab" className="tab" href="/admin/settings">Settings</Link>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="bg-base-200 w-10/12 rounded-lg mb-2">
                    <h1>Google Analytics</h1>
                </div>
            </div>
        </>

    )
}

export default Admin