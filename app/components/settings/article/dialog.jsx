"use client"

import React from 'react'
import JoinImages from '../joinImages'
import { useState } from "react"
import JoinTags from '../joinTags'

const ArticleDialog = ({dialogId, imagesPass, tagsPass, articles, setArticles}) => {
    const [images, setImages] = useState("")
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
        console.log(formData.get("text"))
        const response = await fetch('/api/article', {
            method: 'POST',
            body: formData,
        })

        const newArticle = await response.json()
        setArticles(() => {return [newArticle.data, ...articles]})

        event.target.elements.title.value = ""
        event.target.elements.images.value = ""
        event.target.elements.tags.value = ""
        event.target.elements.text.value = ""

        setImages()
        setTags()

        let tagsToReset = document.getElementsByClassName("tag-reset")
        for (let i = 0; i < tagsToReset.length; i++) {
            tagsToReset.item(i).checked = false
        }

        let imagesToReset = document.getElementsByClassName("image-reset")
        for (let i = 0; i < imagesToReset.length; i++) {
            imagesToReset.item(i).checked = false
        }

        document.getElementById(dialogId).close()
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
                            <input type="text" id="images" name="images" placeholder="Id fotek" value={images} onChange={() => {}} className="file-input file-input-bordered w-full file-input-disabled" required />
                            <button className='btn' onClick={()=>document.getElementById("joinImages").showModal()}>Připojit</button>
                        </div>
                        <label htmlFor="tags">Id tagů: </label>
                        <div className="flex flex-row">
                            <input type="text" id="tags" name="tags" placeholder="Id tagů" value={tags} onChange={() => {}} className="file-input file-input-bordered w-full file-input-disabled" required />
                            <button className='btn' onClick={()=>document.getElementById("joinTags").showModal()}>Připojit</button>
                        </div>
                        <label htmlFor="text">Text: </label>
                        <textarea id="text" name="text" className="file-input file-input-bordered w-full h-32 p-2 overflow-y-auto" placeholder="Text" required></textarea>
                        <input type="submit" value="Vytvořit" className="btn w-full mt-2"/>
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                    </div>
                </div>
            </dialog>
            <JoinImages dialogId="joinImages" update={setImages} images={imagesPass}/>
            <JoinTags dialogId="joinTags" update={setTags} tags={allTags} />
        </>
    )
}

export default ArticleDialog