import React from 'react'
import Link from 'next/link'
import AdminMenu from './adminMenu'

const SettingsMenu = ({children, activeTabName}) => {
    return (
        <>
            <AdminMenu activeId={1} />
            <div className="flex justify-center">
                <div className="flex flex-row bg-base-200 w-10/12 rounded-lg mb-2">
                    <ul className="menu bg-base-100 w-56 rounded-lg m-2">
                        <li><Link href="/admin/settings" className={activeTabName == "Basic" && "active"}>Basic</Link></li>
                        <li><Link href="/admin/settings/designer" className={activeTabName == "Designer" && "active"}>Designer</Link></li>
                        <li><Link href="/admin/settings/realization" className={activeTabName == "Realization" && "active"}>Realization</Link></li>
                        <li><Link href="/admin/settings/article" className={activeTabName == "Article" && "active"}>Article</Link></li>
                        <li><Link href="/admin/settings/preview" className={activeTabName == "Preview" && "active"}>Preview</Link></li>
                        <li><Link href="/admin/settings/tag" className={activeTabName == "Tag" && "active"}>Tag</Link></li>
                        <li><Link href="/admin/settings/image" className={activeTabName == "Image" && "active"}>Image</Link></li>
                    </ul>
                    {children}
                </div>
            </div>
        </>
    )
}

export default SettingsMenu