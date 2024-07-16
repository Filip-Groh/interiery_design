"use client"

import React from 'react'
import DeleteButton from '../deleteButton'
import Tag from '../../tag'

const TagEditable = ({id, name, isDependent, tags, setTags}) => {
    const handleDelete = async (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append("id", id)
        const response = await fetch('/api/tag', {
            method: 'DELETE',
            body: formData,
        })

        tags.forEach((tag, index) => {
            if (tag.id == id) {
                setTags(tags.toSpliced(index, 1))
            }
        })
    }

    return (
        <div className="h-8 my-2 flex flex-col justify-center">
            <Tag name={name}>
                <div className='ml-1 flex flex-col justify-center'>
                    <DeleteButton id={id} handleDelete={handleDelete} isDependent={isDependent} width={15} height={15}/>
                </div>
            </Tag>
        </div>
    )
}

export default TagEditable