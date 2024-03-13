"use client"

import React from 'react'
import JoinImages from '../joinImages'
import { useState } from "react"
import JoinPreviews from '../joinPreviews'
import JoinTags from '../joinTags'

const RealizationDialog = ({dialogId, imagePass, previewPass, tagsPass}) => {
    const [images, setImages] = useState()
    const [previews, setPreviews] = useState()
    const [tags, setTags] = useState()

    const submit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const response = await fetch('/api/realization', {
            method: 'POST',
            body: formData,
        })
    }

    return (
        <>
            <dialog id={dialogId} className="modal">
                <div className="modal-box text-neutral">
                    <h3 className="font-bold text-lg mb-2">Vytváření realizace</h3>
                    <form onSubmit={submit}>
                        <label htmlFor="title">Nadpis: </label>
                        <input type="text" id="title" name="title" placeholder="Nadpis" className="file-input file-input-bordered w-full" required />
                        <label htmlFor="images">Id fotek: </label>
                        <div className="flex flex-row">
                            <input type="text" id="images" name="images" placeholder="Id fotek" value={images} className="file-input file-input-bordered w-full" onChange={(e) => setImages(e.target.value)} required />
                            <button className='btn' onClick={()=>document.getElementById("joinImages").showModal()}>Připojit</button>
                        </div>
                        <label htmlFor="previews">Id porovnání: </label>
                        <div className="flex flex-row">
                            <input type="text" id="previews" name="previews" placeholder="Id porovnání" value={previews} className="file-input file-input-bordered w-full" onChange={(e) => setPreviews(e.target.value)} required />
                            <button className='btn' onClick={()=>document.getElementById("joinPreviews").showModal()}>Připojit</button>
                        </div>
                        <label htmlFor="tags">Id tagů: </label>
                        <div className="flex flex-row">
                            <input type="text" id="tags" name="tags" placeholder="Id tagů" value={tags} className="file-input file-input-bordered w-full" onChange={(e) => setTags(e.target.value)} required />
                            <button className='btn' onClick={()=>document.getElementById("joinTags").showModal()}>Připojit</button>
                        </div>
                        <label htmlFor="task">Popis: </label>
                        <div className="flex flex-row">
                            <input type="text" id="task" name="task" placeholder="Popis" className="rounded w-full p-2" required />
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
            <JoinImages dialogId="joinImages" update={setImages} images={imagePass} />
            <JoinPreviews dialogId="joinPreviews" update={setPreviews} previews={previewPass} />
            <JoinTags dialogId="joinTags" update={setTags} tags={tagsPass}/>
        </>
    )
}

export default RealizationDialog