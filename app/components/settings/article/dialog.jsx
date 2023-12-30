"use client"

import React from 'react'

const ArticleDialog = ({dialogId}) => {
    const submit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const response = await fetch('/api/article', {
            method: 'POST',
            body: formData,
        })
    }

    return (
        <dialog id={dialogId} className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg mb-2">Creating of Article</h3>
                <form onSubmit={submit}>
                    <label htmlFor="title">Title: </label>
                    <input type="text" id="title" name="title" placeholder="title" className="file-input file-input-bordered w-full" />
                    <label htmlFor="images">Id of Images: </label>
                    <input type="text" id="images" name="images" placeholder="Id of Images" className="file-input file-input-bordered w-full" />
                    <label htmlFor="tags">Id of Tags: </label>
                    <input type="text" id="tags" name="tags" placeholder="Id of Tags" className="file-input file-input-bordered w-full" />
                    <label htmlFor="text">Text: </label>
                    <div className="flex flex-row">
                        <input type="text" id="text" name="text" placeholder="Text" className="rounded w-full p-2" />
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

export default ArticleDialog