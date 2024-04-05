"use client"

import React from 'react'
import Image from 'next/image'
import DeleteButton from '@/app/components/settings/deleteButton'
import Tag from '../../tag'

const RealizationPreview = ({id, title, description, tags, previewImage, realizations, setRealizations}) => {
    const handleDelete = async (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append("id", id)
        const response = await fetch('/api/realization', {
            method: 'DELETE',
            body: formData,
        })

        realizations.forEach((realization, index) => {
            if (realization.id == id) {
                setRealizations(realizations.toSpliced(index, 1))
            }
        })
    }

    return (
        <div className="card w-80 bg-base-100 shadow-xl m-2">
            <figure>
                <Image width={500} height={295} src={previewImage?.path || "/logo.jpg"} alt={previewImage?.description}/>
            </figure>
            <div className="card-body text-neutral">
                <h2 className="card-title">
                    {title}
                    <DeleteButton handleDelete={handleDelete} />
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    {tags?.map((tag) => {
                        return <Tag key={tag.id} name={tag.name} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default RealizationPreview