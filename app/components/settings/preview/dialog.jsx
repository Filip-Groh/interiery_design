"use client"

import React from 'react'
import JoinImage from '../joinImage'
import { useState } from "react";
import JoinTags from '../joinTags';

const PreviewDialog = ({dialogId, images, previews, setPreviews, tagsPass}) => {
    const [image1Id, setimage1Id] = useState("")
    const [image2Id, setimage2Id] = useState("")
    const [tags, setTags] = useState("")
    const [allTags, setAllTags] = React.useState(tagsPass)

    React.useEffect(() => {
        async function getAllTags() {
            const response = await fetch('/api/tag', {
                method: 'GET'
            })
    
            const tags = await response.json()
            setAllTags(tags.data)
        }
        getAllTags()
    }, [])

    const submit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const response = await fetch('/api/preview', {
            method: 'POST',
            body: formData,
        })

        const newPreview = await response.json()
        setPreviews(() => {return [newPreview.data, ...previews]})

        event.target.elements.image1.value = ""
        event.target.elements.image2.value = ""
        event.target.elements.title.value = ""
        event.target.elements.tags.value = ""

        setimage1Id()
        setimage2Id()
        setTags()

        let tagsToReset = document.getElementsByClassName("tag-reset")
        for (let i = 0; i < tagsToReset.length; i++) {
            tagsToReset.item(i).checked = false
        }

        document.getElementById(dialogId).close()
    }

    return (
        <>
            <dialog id={dialogId} className="modal">
                <div className="modal-box text-neutral">
                    <h3 className="font-bold text-lg mb-2">Vytváření porovnání</h3>
                    <form onSubmit={submit}>
                        <label htmlFor="image1">Id fotky před: </label>
                        <div className="flex flex-row">
                            <input type="text" accept="image/*" id="image1" name="image1" placeholder="Id fotky před" value={image1Id} onChange={() => {}} className="file-input file-input-bordered w-full file-input-disabled" required />
                            <button className='btn' onClick={()=>document.getElementById("joinImage1").showModal()}>Připojit</button>
                        </div>
                        <label htmlFor="image2">Id fotky po: </label>
                        <div className="flex flex-row">
                            <input type="text" accept="image/*" id="image2" name="image2" placeholder="Id fotky po" value={image2Id} onChange={() => {}} className="file-input file-input-bordered w-full file-input-disabled" required />
                            <button className='btn' onClick={()=>document.getElementById("joinImage2").showModal()}>Připojit</button>
                        </div>
                        <label htmlFor="tags">Id tagů: </label>
                        <div className="flex flex-row">
                            <input type="text" id="tags" name="tags" placeholder="Id tagů" value={tags} onChange={() => {}} className="file-input file-input-bordered w-full file-input-disabled" required />
                            <button className='btn' onClick={()=>document.getElementById("joinTags").showModal()}>Připojit</button>
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
            <JoinImage dialogId="joinImage1" update={setimage1Id} images={images}/>
            <JoinImage dialogId="joinImage2" update={setimage2Id} images={images}/>
            <JoinTags dialogId="joinTags" update={setTags} tags={allTags}/>
        </>
    )
}

export default PreviewDialog