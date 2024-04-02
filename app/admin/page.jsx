import React from 'react'
import AdminMenu from '../components/settings/adminMenu'

const Admin = () => {
    return (
        <>
            <AdminMenu activeId={0} />
            <div className="flex justify-center">
                <div className="bg-base-200 w-10/12 rounded-lg mb-2 text-neutral">
                    <h1>Google Analytics</h1>
                    <p>Po zavedení URL adresy, nastavit Google Analytics</p>
                </div>
            </div>
        </>

    )
}

export default Admin