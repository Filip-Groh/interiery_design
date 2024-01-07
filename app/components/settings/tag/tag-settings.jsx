"use client"

import React from 'react'
import Image from 'next/image'
import DeleteButton from '../deleteButton'

const TagEditable = ({id, name, isDependent}) => {
    const handleDelete = async (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append("id", id)
        const response = await fetch('/api/tag', {
            method: 'DELETE',
            body: formData,
        })
    }

    return (
        <div className="rounded-md bg-slate-700 m-2 flex flex-row h-fit border-[1px] border-black px-1">
            <p className="px-1 py-1 pr-2">
                {name}
            </p>
            <DeleteButton handleDelete={handleDelete} isDependent={isDependent} />
        </div>
    )
}

export default TagEditable