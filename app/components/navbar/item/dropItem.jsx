import React from 'react'
import { auth } from '/app/api/auth/[...nextauth]/auth'
import { getSettings } from '@/utils/database'

const DropItem = async ({name, children, authRequired=false}) => {
    const session = await auth()
    const admins = await getSettings("adminLogin")

    if (!authRequired || (session && JSON.parse(admins?.value).findIndex((value) => {return value == session.user.email}) != -1)) {
        return (
            <li tabIndex={1}>
                <details className="text-neutral">
                    <summary>{name}</summary>
                    <ul className="p-2 z-10">
                        {children}
                    </ul>
                </details>
            </li>
        )
    }
}

export default DropItem