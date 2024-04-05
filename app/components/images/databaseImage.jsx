"use client"

import React from 'react'
import Image from 'next/image'
import DeleteButton from '../settings/deleteButton'

const DatabaseImage = ({id, path, description, isDependent, images, setImages}) => {
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
                <div className="absolute bottom-2 left-2 flex flex-row bg-opacity-75 bg-base-300 rounded-lg text-neutral px-2 gap-2">                
                    <p className='font-bold py-1 leading-[100%] z-10'>{description}</p>
                    <DeleteButton handleDelete={handleDelete} isDependent={isDependent}/>
                </div>
                <Image className="rounded-2xl" width={1000} height={1000} src={path} alt={description} />
            </div>
        </div>
    )
}

export default DatabaseImage