"use client"

import React from 'react'
import Image from 'next/image'
import DeleteButton from '../settings/deleteButton'
import Tag from '../tag'

const DatabaseImage = ({id, path, description, isDependent, images, setImages, tags}) => {
    const handleDelete = async (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append("id", id)
        const response = await fetch('/api/image', {
            method: 'DELETE',
            body: formData,
        })

        images.forEach((image, index) => {
            if (image.id == id) {
                setImages(images.toSpliced(index, 1))
            }
        })
    }

    return (
        <div className="flex justify-center">
            <div className="w-full m-2 relative h-min">
                <div className="absolute bottom-2 left-2 right-2 flex flex-row gap-2 flex-wrap justify-between">
                    <div className="flex flex-row bg-opacity-75 bg-base-300 rounded-lg text-neutral px-2 gap-2">                
                        <p className='font-bold py-1 leading-[100%] z-10'>{description}</p>
                        <DeleteButton handleDelete={handleDelete} isDependent={isDependent} id={id}/>
                    </div>
                    <div>
                        {tags.map((tag) => {
                            return <Tag key={tag.id} name={tag.name} />
                        })}
                    </div>
                </div>
                <Image className="rounded-2xl" width={1000} height={1000} src={path} alt={description} />
            </div>
        </div>
    )
}

export default DatabaseImage