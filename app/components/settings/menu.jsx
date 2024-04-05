import React from 'react'
import Link from 'next/link'
import AdminMenu from './adminMenu'

const SettingsMenu = ({children, activeTabName}) => {
    return (
        <>
            <AdminMenu activeId={1} />
            <div className="flex justify-center">
                <div className="flex flex-row bg-base-200 w-10/12 rounded-lg mb-2">
                    <ul className="menu bg-base-100 w-56 rounded-lg m-2 text-neutral">
                        <li><Link href="/admin/settings" className={activeTabName == "Basic" ? "active" : ""}>Basic</Link></li>
                        <li><Link href="/admin/settings/designer" className={activeTabName == "Designer" ? "active" : ""}>Pracovníci</Link></li>
                        <li><Link href="/admin/settings/realization" className={activeTabName == "Realization" ? "active" : ""}>Realizace</Link></li>
                        <li><Link href="/admin/settings/article" className={activeTabName == "Article" ? "active" : ""}>Články</Link></li>
                        <li><Link href="/admin/settings/preview" className={activeTabName == "Preview" ? "active" : ""}>Porovnání</Link></li>
                        <li><Link href="/admin/settings/tag" className={activeTabName == "Tag" ? "active" : ""}>Tagy</Link></li>
                        <li><Link href="/admin/settings/image" className={activeTabName == "Image" ? "active" : ""}>Fotky</Link></li>
                        <li><Link href="/admin/settings/metadata" className={activeTabName == "Metadata" ? "active" : ""}>Metadata</Link></li>
                    </ul>
                    {children}
                </div>
            </div>
        </>
    )
}

export default SettingsMenu