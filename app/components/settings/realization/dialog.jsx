"use client"

import React from 'react'
import JoinImages from '../joinImages'
import { useState } from "react"
import JoinPreviews from '../joinPreviews'
import JoinTags from '../joinTags'

const RealizationDialog = ({dialogId, imagePass, previewPass, tagsPass, realizations, setRealizations}) => {
    const [images, setImages] = useState("")
    const [previews, setPreviews] = useState("")
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
        const response = await fetch('/api/realization', {
            method: 'POST',
            body: formData,
        })

        const newRealization = await response.json()
        setRealizations(() => {return [newRealization.data, ...realizations]})

        event.target.elements.title.value = ""
        event.target.elements.images.value = ""
        event.target.elements.previews.value = ""
        event.target.elements.tags.value = ""
        event.target.elements.task.value = ""

        setImages()
        setPreviews()
        setTags()

        let tagsToReset = document.getElementsByClassName("tag-reset")
        for (let i = 0; i < tagsToReset.length; i++) {
            tagsToReset.item(i).checked = false
        }
        let imagesToReset = document.getElementsByClassName("image-reset")
        for (let i = 0; i < imagesToReset.length; i++) {
            imagesToReset.item(i).checked = false
        }
        let previewsToReset = document.getElementsByClassName("preview-reset")
        for (let i = 0; i < previewsToReset.length; i++) {
            previewsToReset.item(i).checked = false
        }

        document.getElementById(dialogId).close()
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
                            <input type="text" id="images" name="images" placeholder="Id fotek" value={images} onChange={() => {}} className="file-input file-input-bordered w-full file-input-disabled" required />
                            <button className='btn' onClick={()=>document.getElementById("joinImages").showModal()}>Připojit</button>
                        </div>
                        <label htmlFor="previews">Id porovnání: </label>
                        <div className="flex flex-row">
                            <input type="text" id="previews" name="previews" placeholder="Id porovnání" value={previews} onChange={() => {}} className="file-input file-input-bordered w-full file-input-disabled" />
                            <button className='btn' onClick={()=>document.getElementById("joinPreviews").showModal()}>Připojit</button>
                        </div>
                        <label htmlFor="tags">Id tagů: </label>
                        <div className="flex flex-row">
                            <input type="text" id="tags" name="tags" placeholder="Id tagů" value={tags} onChange={() => {}} className="file-input file-input-bordered w-full file-input-disabled" required />
                            <button className='btn' onClick={()=>document.getElementById("joinTags").showModal()}>Připojit</button>
                        </div>
                        <label htmlFor="task">Text: </label>
                        <textarea id="task" name="task" className="file-input file-input-bordered w-full h-32 p-2 overflow-y-auto" placeholder="Text" required></textarea>
                        <input type="submit" value="Vytvořit" className="btn w-full mt-2"/>
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                    </div>
                </div>
            </dialog>
            <JoinImages dialogId="joinImages" update={setImages} images={imagePass}/>
            <JoinPreviews dialogId="joinPreviews" update={setPreviews} previews={previewPass}/>
            <JoinTags dialogId="joinTags" update={setTags} tags={allTags}/>
        </>
    )
}

export default RealizationDialog