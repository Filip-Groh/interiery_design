"use client"

import React from 'react'
import JoinImages from '../joinImages'
import { useState } from "react"
import JoinTags from '../joinTags'

const ArticleDialog = ({dialogId, imagesPass, tagsPass}) => {
    const [images, setImages] = useState()
    const [tags, setTags] = useState()

    const submit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const response = await fetch('/api/article', {
            method: 'POST',
            body: formData,
        })
    }

    return (
        <>
            <dialog id={dialogId} className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-2">Creating of Article</h3>
                    <form onSubmit={submit}>
                        <label htmlFor="title">Title: </label>
                        <input type="text" id="title" name="title" placeholder="title" className="file-input file-input-bordered w-full" required />
                        <label htmlFor="images">Id of Images: </label>
                        <div className="flex flex-row">
                            <input type="text" id="images" name="images" placeholder="Id of Images" value={images} className="file-input file-input-bordered w-full" onChange={(e) => setImages(e.target.value)} required />
                            <button className='btn' onClick={()=>document.getElementById("joinImages").showModal()}>Select</button>
                        </div>
                        <label htmlFor="tags">Id of Tags: </label>
                        <div className="flex flex-row">
                            <input type="text" id="tags" name="tags" placeholder="Id of Tags" value={tags} className="file-input file-input-bordered w-full" onChange={(e) => setTags(e.target.value)} required />
                            <button className='btn' onClick={()=>document.getElementById("joinTags").showModal()}>Select</button>
                        </div>
                        <label htmlFor="text">Text: </label>
                        <div className="flex flex-row">
                            <input type="text" id="text" name="text" placeholder="Text" className="rounded w-full p-2" required />
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
            <JoinImages dialogId="joinImages" update={setImages} images={imagesPass} />
            <JoinTags dialogId="joinTags" update={setTags} tags={tagsPass} />
        </>
    )
}

export default ArticleDialog