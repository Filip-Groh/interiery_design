"use client"

import React from 'react'
import JoinImage from '../joinImage'
import { useState } from "react";

const PreviewDialog = ({dialogId, images}) => {
    const [image1Id, setimage1Id] = useState()
    const [image2Id, setimage2Id] = useState()

    const submit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const response = await fetch('/api/preview', {
            method: 'POST',
            body: formData,
        })
    }

    return (
        <>
            <dialog id={dialogId} className="modal">
                <div className="modal-box text-neutral">
                    <h3 className="font-bold text-lg mb-2">Vytváření porovnání</h3>
                    <form onSubmit={submit}>
                        <label htmlFor="image1">Id fotky 1: </label>
                        <div className="flex flex-row">
                            <input type="text" accept="image/*" id="image1" name="image1" placeholder="Id fotky 1" value={image1Id} className="file-input file-input-bordered w-full" onChange={(e) => setimage1Id(e.target.value)} required />
                            <button className='btn' onClick={()=>document.getElementById("joinImage1").showModal()}>Připojit</button>
                        </div>
                        <label htmlFor="image2">Id fotky 2: </label>
                        <div className="flex flex-row">
                            <input type="text" accept="image/*" id="image2" name="image2" placeholder="Id fotky 2" value={image2Id} className="file-input file-input-bordered w-full" onChange={(e) => setimage2Id(e.target.value)} required />
                            <button className='btn' onClick={()=>document.getElementById("joinImage2").showModal()}>Připojit</button>
                        </div>
                        <label htmlFor="title">Nadpis: </label>
                        <div className="flex flex-row">
                            <input type="text" id="title" name="title" placeholder="Nadpis" className="rounded w-full p-2" required />
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
            <JoinImage dialogId="joinImage1" update={setimage1Id} images={images} />
            <JoinImage dialogId="joinImage2" update={setimage2Id} images={images} />
        </>
    )
}

export default PreviewDialog