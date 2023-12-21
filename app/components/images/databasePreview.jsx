"use client"

import React from 'react'
import Image from 'next/image'

const DatabasePreview = ({id, title, beforePath, afterPath, beforeDescription, afterDescription}) => {
    const handleDelete = async (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append("id", id)
        const response = await fetch('/api/preview', {
            method: 'DELETE',
            body: formData,
        })
    }

    return (
        <div className="flex justify-center w-full">
            <div className="diff aspect-[16/9] w-full rounded-2xl relative m-2">
                <div className="diff-item-1">
                    <Image width={1000} height={1000} src={beforePath} alt={beforeDescription} />
                </div>
                <div className="diff-item-2">
                    <Image width={1000} height={1000} src={afterPath} alt={afterDescription} />
                </div>
                <div className="diff-resizer scale-[2] translate-x-[0.3rem] translate-y-[0.25rem] w-[16.5vw]"></div>
                <div className="font-bold absolute bottom-2 left-2 z-10 bg-black bg-opacity-50 rounded-lg px-2 py-1">
                    <p className="leading-4 text-center">Před</p>
                </div>
                <div className="font-bold absolute bottom-2 right-2 z-10 bg-black bg-opacity-50 rounded-lg px-2 py-1">
                    <p className="leading-4 text-center">Po</p>
                </div>
                <div className="font-bold absolute bottom-2 left-1/2 -translate-x-1/2 z-10 bg-black bg-opacity-50 rounded-lg px-2 py-1 flex flex-row">
                    <p className="leading-4 text-center pr-1">{title}</p>
                    <button onClick={handleDelete}>
                        <Image src="/svg/delete.svg" width={20} height={20} alt="Delete SVG Image" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DatabasePreview