"use client"

import React from 'react'
import Image from 'next/image'

const DatabaseImage = ({id, path, description}) => {
    const handleDelete = async (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append("id", id)
        const response = await fetch('/api/image', {
            method: 'DELETE',
            body: formData,
        })
    }

    return (
        <div className="flex justify-center">
            <div className="w-full m-2 relative h-min">
                <div className="absolute bottom-2 left-2 flex flex-row bg-black bg-opacity-50 rounded-2xl p-2">                
                    <h1 className="font-bold px-2 z-10">{description}</h1>
                    <button onClick={handleDelete}>
                        <Image src="/svg/delete.svg" width={20} height={20} alt="Delete SVG Image" />
                    </button>
                </div>
                <Image className="rounded-2xl" width={1000} height={1000} src={path} alt={description} />
            </div>
        </div>
    )
}

export default DatabaseImage