import React from 'react'

const DropItem = (props) => {
    return (
        <li tabIndex={1}>
            <details>
                <summary>{props.name}</summary>
                <ul className="p-2 z-10">
                    {props.children}
                </ul>
            </details>
        </li>
    )
}

export default DropItem