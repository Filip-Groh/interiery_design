"use client"

import React from 'react'

const TagDialog = ({dialogId}) => {
    const submit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const response = await fetch('/api/tag', {
            method: 'POST',
            body: formData,
        })
    }

    return (
        <dialog id={dialogId} className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg mb-2">Vytváření tagu</h3>
                <form onSubmit={submit}>
                    <label htmlFor="name">Jméno: </label>
                    <div className="flex flex-row">
                        <input type="text" id="name" name="name" placeholder="Jméno" className="rounded w-full p-2" required />
                        <input type="submit" value="Vytvořit" className="btn"/>
                    </div>
                </form>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

export default TagDialog