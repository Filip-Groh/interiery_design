"use client"

import React from 'react'
import { useState } from "react"
import JoinImage from '../joinImage'

const DesignerDialog = ({dialogId, imagesPass, tagsPass}) => {
    const [image, setImage] = useState()

    const submit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const response = await fetch('/api/designer', {
            method: 'POST',
            body: formData,
        })
    }

    return (
        <>
            <dialog id={dialogId} className="modal">
                <div className="modal-box text-neutral">
                    <h3 className="font-bold text-lg mb-2">Vytváření pracovníka</h3>
                    <form onSubmit={submit} className="flex flex-col gap-1">
                        <label htmlFor="image">Id fotky: </label>
                            <div className="flex flex-row">
                                <input type="text" id="image" name="image" placeholder="Id fotky" value={image} className="file-input file-input-bordered w-full" onChange={(e) => setImage(e.target.value)} required />
                                <button className='btn' onClick={()=>document.getElementById("joinImage").showModal()}>Připojit</button>
                            </div>
                        <label htmlFor="name">Jméno: </label>
                        <input type="text" id="name" name="name" placeholder="Jméno" className="rounded w-full p-2" required />
                        <label htmlFor="role">Role: </label>
                        <input type="text" id="role" name="role" placeholder="Role" className="rounded w-full p-2" required />
                        <label htmlFor="email">E-mail: </label>
                        <input type="email" id="email" name="email" placeholder="E-mail" className="rounded w-full p-2" required />
                        <label htmlFor="phone">Telefon: </label>
                        <div className="flex flex-row">
                            <input type="text" id="phone" name="phone" placeholder="Telefon" className="rounded w-full p-2" required />
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
            <JoinImage dialogId={"joinImage"} update={setImage} images={imagesPass} tagsPass={tagsPass}/>
        </>
    )
}

export default DesignerDialog