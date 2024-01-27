import React from 'react'
import { auth } from '/app/api/auth/[...nextauth]/auth'

const DropItem = async ({name, children, authRequired=false}) => {
    const session = await auth()
    if (session || !authRequired) {
        return (
            <li tabIndex={1}>
                <details>
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