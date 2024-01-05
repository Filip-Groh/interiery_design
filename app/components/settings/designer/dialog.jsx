"use client"

import React from 'react'

const DesignerDialog = ({dialogId}) => {
    const submit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const response = await fetch('/api/designer', {
            method: 'POST',
            body: formData,
        })
    }

    return (
        <dialog id={dialogId} className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg mb-2">Creating of Image</h3>
                <form onSubmit={submit} className="flex flex-col gap-1">
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" name="name" placeholder="Name" className="rounded w-full p-2" required />
                    <label htmlFor="role">Role: </label>
                    <input type="text" id="role" name="role" placeholder="Role" className="rounded w-full p-2" required />
                    <label htmlFor="email">E-mail: </label>
                    <input type="email" id="email" name="email" placeholder="E-mail" className="rounded w-full p-2" required />
                    <label htmlFor="phone">Phone: </label>
                    <div className="flex flex-row">
                        <input type="text" id="phone" name="phone" placeholder="Phone" className="rounded w-full p-2" required />
                        <input type="submit" value="Upload" className="btn"/>
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

export default DesignerDialog