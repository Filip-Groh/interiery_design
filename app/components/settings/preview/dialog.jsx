"use client"

import React from 'react'

const PreviewDialog = ({dialogId}) => {
    const submit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const response = await fetch('/api/preview', {
            method: 'POST',
            body: formData,
        })
    }

    return (
        <dialog id={dialogId} className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg mb-2">Creating of Preview</h3>
                <form onSubmit={submit}>
                    <label htmlFor="image1">Id of image 1: </label>
                    <input type="text" accept="image/*" id="image1" name="image1" placeholder="Id" className="file-input file-input-bordered w-full" />
                    <label htmlFor="image2">Id of image 2: </label>
                    <input type="text" accept="image/*" id="image2" name="image2" placeholder="Id" className="file-input file-input-bordered w-full" />
                    <label htmlFor="title">Title: </label>
                    <div className="flex flex-row">
                        <input type="text" id="title" name="title" placeholder="Title" className="rounded w-full p-2" />
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

export default PreviewDialog