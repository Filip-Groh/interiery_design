"use client"

import React from 'react'

const TagEditable = ({id, name}) => {
    const deleteTag = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        formData.set("id", id)
        formData.set("name", name)
        const response = await fetch('/api/tag', {
            method: 'DELETE',
            body: formData,
        })
    }

    return (
        <div className="rounded-md bg-slate-700 w-min m-10 flex flex-row border-[1px] border-black">
            <p className="px-2 py-1">
                {name}
            </p>
            <span className="bg-black w-[1px]" />
            <form className="px-2 py-1" onSubmit={deleteTag}>
                <button type="submit">DEL</button>
            </form>
        </div>
    )
}

export default TagEditable