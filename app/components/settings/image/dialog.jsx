"use client"

import React from 'react'

const ImageDialog = ({dialogId, images, setImages}) => {
    const submit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const response = await fetch('/api/image', {
            method: 'POST',
            body: formData,
        })

        const newImage = await response.json()
        setImages(() => {return [newImage.data, ...images]})

        event.target.elements.file.value = ""
        event.target.elements.description.value = ""

        document.getElementById(dialogId).close()
    }

    return (
        <dialog id={dialogId} className="modal">
            <div className="modal-box text-neutral">
                <h3 className="font-bold text-lg mb-2">Vytváření fotky</h3>
                <form onSubmit={submit}>
                    <label htmlFor="file">Soubor s fotkou: </label>
                    <input type="file" accept="image/*" id="file" name="file" className="file-input file-input-bordered w-full" required />
                    <label htmlFor="description">Popis: </label>
                    <div className="flex flex-row">
                        <input type="text" id="description" name="description" placeholder="Popis" className="rounded w-full p-2" required />
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
    )
}

export default ImageDialog