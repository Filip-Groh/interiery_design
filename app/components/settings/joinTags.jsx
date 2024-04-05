"use client"

import React from 'react'
import SwitchableTag from './tag/switchableTag'

const JoinTags = ({dialogId, update, tags}) => {
    const submit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        let array = []
        formData.forEach((value, key) => {
            array.push(key)
        })
        update(array.toString().replaceAll(",", ", "))
        document.getElementById(dialogId).close()
    }

    return (
        <dialog id={dialogId} className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg mb-2 text-neutral">Vybírání tagů</h3>
                <form onSubmit={submit} className="flex flex-col">
                    <input type="submit" value="Připojit" className="btn" />
                    <div className="flex flex-row w-full">
                        {tags.map((tag) => {
                            return (<SwitchableTag key={tag.id} tag={tag}/>)
                        })}
                    </div>
                </form>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-neutral">✕</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

export default JoinTags