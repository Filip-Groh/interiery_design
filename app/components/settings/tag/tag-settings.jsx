"use client"

import React from 'react'
import Image from 'next/image'

const TagEditable = ({id, name, isDependent}) => {
    const submit = async (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append("id", id)
        const response = await fetch('/api/tag', {
            method: 'DELETE',
            body: formData,
        })
    }

    return (
        <div className="rounded-md bg-slate-700 m-2 flex flex-row h-fit border-[1px] border-black">
            <p className="px-2 py-1">
                {name}
            </p>
            <button onClick={submit} className="px-1 py-1" disabled={isDependent}>
                <Image src="/svg/delete.svg" width={20} height={20} alt="Delete SVG Image" />
            </button>
        </div>
    )
}

export default TagEditable