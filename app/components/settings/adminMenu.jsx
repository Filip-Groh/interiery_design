import React from 'react'
import Link from 'next/link'

const AdminMenu = ({activeId}) => {
    return (
        <div className="flex justify-center p-2">
            <div role="tablist" className="tabs tabs-boxed w-8/12">
                <Link role="tab" className={`tab ${activeId == 0 ? "tab-active" : ""}`} href="/admin">Dashboard</Link>
                <Link role="tab" className={`tab ${activeId == 1 ? "tab-active" : ""}`} href="/admin/settings">Nastavení</Link>
            </div>
        </div>
    )
}

export default AdminMenu