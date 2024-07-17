"use client"

import Image from 'next/image'
import React from 'react'
import DeleteButton from '@/app/components/settings/deleteButton'
import Tag from '../../tag'

const ArticlePreview = ({id, title, description, tags, previewImage, articles, setArticles}) => {
    const handleDelete = async (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append("id", id)
        const response = await fetch('/api/article', {
            method: 'DELETE',
            body: formData,
        })

        articles.forEach((article, index) => {
            if (article.id == id) {
                setArticles(articles.toSpliced(index, 1))
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
                    <DeleteButton handleDelete={handleDelete} id={id}/>
                </h2>
                <p className='truncate'>{description}</p>
                <div className="card-actions justify-end">
                    {tags?.map((tag) => {
                        return <Tag key={tag.id} name={tag.name} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default ArticlePreview