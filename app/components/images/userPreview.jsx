"use client"

import React from 'react'
import Image from 'next/image'
import { ImgComparisonSlider } from '@img-comparison-slider/react'
import Tag from '../tag'

const UserPreview = ({title, beforePath, beforeDescription, afterPath, afterDescription, tags, isAnimated=false, isHighlighted=false}) => {
    return (
        <div className={`relative ${isAnimated ? "animate-fade-up" : ""}`}>
            <ImgComparisonSlider className="focus:outline-none rounded-2xl m-2 w-fit">
                <figure slot="first" className="before">
                    <Image width={1000} height={1000} src={beforePath} alt={beforeDescription} />
                    <p className='absolute bottom-4 left-1/2 -translate-x-1/2 font-bold px-2 py-1 leading-[100%] bg-opacity-75 bg-base-300 rounded-lg z-10'>{title}</p>
                    <figcaption className='left-4 absolute bottom-6 translate-y-1/2 font-bold px-2 py-1 leading-[100%] bg-opacity-75 bg-base-300 rounded-lg'>Before</figcaption>
                </figure>
                <figure slot="second" className="after">
                    <Image width={1000} height={1000} src={afterPath} alt={afterDescription} />
                    <p className='absolute bottom-4 left-1/2 -translate-x-1/2 font-bold px-2 py-1 leading-[100%] bg-opacity-75 bg-base-300 rounded-lg z-10'>{title}</p>
                    <figcaption className='right-4 absolute bottom-6 translate-y-1/2 font-bold px-2 py-1 leading-[100%] bg-opacity-75 bg-base-300 rounded-lg'>After</figcaption>
                </figure>
                <svg slot="handle" xmlns="http://www.w3.org/2000/svg" width="100" viewBox="-8 -3 16 6">
                    <path stroke="#fff" d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2" strokeWidth="1" fill="#fff" vectorEffect="non-scaling-stroke" />
                </svg>
            </ImgComparisonSlider>
            <div className='absolute top-4 left-4 flex flex-row justify-between right-4 gap-2'>
                <div>
                    {tags.map((tag) => {
                        return <Tag key={tag.id} name={tag.name} isHighlighted={isHighlighted}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default UserPreview