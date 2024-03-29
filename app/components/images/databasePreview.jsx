"use client"

import React from 'react'
import Image from 'next/image'
import DeleteButton from '../settings/deleteButton'
import { ImgComparisonSlider } from '@img-comparison-slider/react'

const DatabasePreview = ({id, title, beforePath, afterPath, beforeDescription, afterDescription, isDependent}) => {
    const handleDelete = async (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append("id", id)
        const response = await fetch('/api/preview', {
            method: 'DELETE',
            body: formData,
        })
    }

    // return (
    //     <div className="flex justify-center w-full">
    //         <div className="diff aspect-[16/9] w-full rounded-2xl relative m-2">
    //             <div className="diff-item-1">
    //                 <Image width={1000} height={1000} src={beforePath} alt={beforeDescription} />
    //             </div>
    //             <div className="diff-item-2">
    //                 <Image width={1000} height={1000} src={afterPath} alt={afterDescription} />
    //             </div>
    //             <div className="diff-resizer scale-[2] translate-x-[0.3rem] translate-y-[0.25rem] w-[16.5vw]"></div>
    //             <div className="font-bold absolute bottom-2 left-2 z-10 bg-black bg-opacity-50 rounded-lg px-2 py-1">
    //                 <p className="leading-4 text-center">Před</p>
    //             </div>
    //             <div className="font-bold absolute bottom-2 right-2 z-10 bg-black bg-opacity-50 rounded-lg px-2 py-1">
    //                 <p className="leading-4 text-center">Po</p>
    //             </div>
    //             <div className="font-bold absolute bottom-2 left-1/2 -translate-x-1/2 z-10 bg-black bg-opacity-50 rounded-lg px-2 py-1 flex flex-row">
    //                 <p className="leading-4 text-center pr-1">{title}</p>
    //                 <DeleteButton handleDelete={handleDelete} isDependent={isDependent} />
    //             </div>
    //         </div>
    //     </div>
    // )

    return (
        <ImgComparisonSlider className='focus:outline-none rounded-2xl m-2'>
            <figure slot="first" class="before">
                <Image width={1000} height={1000} src={beforePath} alt={beforeDescription} />
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 leading-[100%] bg-opacity-75 bg-base-300 rounded-lg flex flex-row px-2 gap-2">
                    <p className='font-bold py-1 text-neutral z-10'>{title}</p>
                    <DeleteButton handleDelete={handleDelete} isDependent={isDependent} />
                </div>
                <figcaption className='left-4 absolute bottom-6 translate-y-1/2 font-bold px-2 py-1 leading-[100%] bg-opacity-75 bg-base-300 rounded-lg text-neutral'>Before</figcaption>
            </figure>
            <figure slot="second" class="after">
                <Image width={1000} height={1000} src={afterPath} alt={afterDescription} />
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 leading-[100%] bg-opacity-75 bg-base-300 rounded-lg flex flex-row px-2 gap-2">
                    <p className='font-bold py-1 text-neutral z-10'>{title}</p>
                    <DeleteButton handleDelete={handleDelete} isDependent={isDependent} />
                </div>
                <figcaption className='right-4 absolute bottom-6 translate-y-1/2 font-bold px-2 py-1 leading-[100%] bg-opacity-75 bg-base-300 rounded-lg text-neutral'>After</figcaption>
            </figure>
            <svg slot="handle" xmlns="http://www.w3.org/2000/svg" width="100" viewBox="-8 -3 16 6">
                <path stroke="#fff" d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2" stroke-width="1" fill="#fff" vector-effect="non-scaling-stroke" />
            </svg>
        </ImgComparisonSlider>
    )
}

export default DatabasePreview