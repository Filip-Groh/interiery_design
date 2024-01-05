"use client"

import React from 'react'

const ImageDialog = ({dialogId}) => {
    const submit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const response = await fetch('/api/image', {
            method: 'POST',
            body: formData,
        })
    }

    return (
        <dialog id={dialogId} className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg mb-2">Creating of Image</h3>
                <form onSubmit={submit}>
                    <label htmlFor="file">File of image: </label>
                    <input type="file" accept="image/*" id="file" name="file" className="file-input file-input-bordered w-full" required />
                    <label htmlFor="description">Description: </label>
                    <div className="flex flex-row">
                        <input type="text" id="description" name="description" placeholder="Description" className="rounded w-full p-2" required />
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

export default ImageDialog