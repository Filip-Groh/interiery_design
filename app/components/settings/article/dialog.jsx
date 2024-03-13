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
                <div className="modal-box text-neutral">
                    <h3 className="font-bold text-lg mb-2">Vytváření článků</h3>
                    <form onSubmit={submit}>
                        <label htmlFor="title">Nadpis: </label>
                        <input type="text" id="title" name="title" placeholder="Nadpis" className="file-input file-input-bordered w-full" required />
                        <label htmlFor="images">Id fotek: </label>
                        <div className="flex flex-row">
                            <input type="text" id="images" name="images" placeholder="Id fotek" value={images} className="file-input file-input-bordered w-full" onChange={(e) => setImages(e.target.value)} required />
                            <button className='btn' onClick={()=>document.getElementById("joinImages").showModal()}>Připojit</button>
                        </div>
                        <label htmlFor="tags">Id tagů: </label>
                        <div className="flex flex-row">
                            <input type="text" id="tags" name="tags" placeholder="Id tagů" value={tags} className="file-input file-input-bordered w-full" onChange={(e) => setTags(e.target.value)} required />
                            <button className='btn' onClick={()=>document.getElementById("joinTags").showModal()}>Připojit</button>
                        </div>
                        <label htmlFor="text">Text: </label>
                        <div className="flex flex-row">
                            <input type="text" id="text" name="text" placeholder="Text" className="rounded w-full p-2" required />
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
            <JoinImages dialogId="joinImages" update={setImages} images={imagesPass} />
            <JoinTags dialogId="joinTags" update={setTags} tags={tagsPass} />
        </>
    )
}

export default ArticleDialog