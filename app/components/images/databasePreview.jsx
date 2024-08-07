"use client"

import React from 'react'
import Image from 'next/image'
import DeleteButton from '../settings/deleteButton'
import { ImgComparisonSlider } from '@img-comparison-slider/react'
import Tag from '../tag'

const DatabasePreview = ({id, title, beforePath, afterPath, beforeDescription, afterDescription, isDependent, previews, setPreviews, tags}) => {
    const handleDelete = async (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append("id", id)
        const response = await fetch('/api/preview', {
            method: 'DELETE',
            body: formData,
        })

        previews.forEach((preview, index) => {
            if (preview.id == id) {
                setPreviews(previews.toSpliced(index, 1))
            }
        })
    }

    return (
        <div className='relative'>
            <ImgComparisonSlider className='focus:outline-none rounded-2xl m-2'>
                <figure slot="first" className="before">
                    <Image width={1000} height={1000} src={beforePath} alt={beforeDescription} />
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 leading-[100%] bg-opacity-75 bg-base-300 rounded-lg flex flex-row px-2 gap-2">
                        <p className='font-bold py-1 text-neutral z-10'>{title}</p>
                    </div>
                    <figcaption className='left-4 absolute bottom-6 translate-y-1/2 font-bold px-2 py-1 leading-[100%] bg-opacity-75 bg-base-300 rounded-lg text-neutral'>Before</figcaption>
                </figure>
                <figure slot="second" className="after">
                    <Image width={1000} height={1000} src={afterPath} alt={afterDescription} />
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 leading-[100%] bg-opacity-75 bg-base-300 rounded-lg flex flex-row px-2 gap-2">
                        <p className='font-bold py-1 text-neutral z-10'>{title}</p>
                    </div>
                    <figcaption className='right-4 absolute bottom-6 translate-y-1/2 font-bold px-2 py-1 leading-[100%] bg-opacity-75 bg-base-300 rounded-lg text-neutral'>After</figcaption>
                </figure>
                <svg slot="handle" xmlns="http://www.w3.org/2000/svg" width="100" viewBox="-8 -3 16 6">
                    <path stroke="#fff" d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2" strokeWidth="1" fill="#fff" vectorEffect="non-scaling-stroke" />
                </svg>
            </ImgComparisonSlider>
            <div className='absolute top-4 left-4 flex flex-row justify-between right-4 gap-2'>
                <span className='bg-base-300 rounded-full w-6 h-6 shrink-0 flex flex-row justify-center'>
                    <DeleteButton handleDelete={handleDelete} isDependent={isDependent} id={id}/>
                </span>
                <div>
                    {tags.map((tag) => {
                        return <Tag key={tag.id} name={tag.name} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default DatabasePreview