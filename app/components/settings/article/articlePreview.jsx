"use client"

import Image from 'next/image'
import React from 'react'
import DeleteButton from '@/app/components/settings/deleteButton'

const ArticlePreview = ({id, title, description, tags, previewImage}) => {
    const handleDelete = async (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append("id", id)
        const response = await fetch('/api/article', {
            method: 'DELETE',
            body: formData,
        })
    }

    return (
        <div className="card w-80 bg-base-100 shadow-xl m-2">
            <figure>
                <Image width={500} height={295} src={previewImage?.path || "/logo.jpg"} alt={previewImage?.description}/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <DeleteButton handleDelete={handleDelete} />
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    {tags?.map((tag) => {
                        return <div key={tag.id} className="badge badge-outline">{tag.name}</div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ArticlePreview