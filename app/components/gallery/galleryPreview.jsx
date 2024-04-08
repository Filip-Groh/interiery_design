"use client"

import React from 'react'
import Tag from '../tag'
import Image from "next/image"
import { ImgComparisonSlider } from '@img-comparison-slider/react'

const GalleryPreview = ({beforePath, beforeDescription, afterPath, afterDescription, title, tags}) => {
    return (
        <div className="card w-80 bg-base-100 shadow-xl animate-fade-up">
            <figure>
                <ImgComparisonSlider className="focus:outline-none rounded-2xl w-fit">
                <figure slot="first" className="before">
                    <Image width={500} height={295} src={beforePath} alt={beforeDescription} />
                    <figcaption className='left-4 absolute bottom-6 translate-y-1/2 font-bold px-2 py-1 leading-[100%] bg-opacity-75 bg-base-300 rounded-lg text-neutral'>Before</figcaption>
                </figure>
                <figure slot="second" className="after">
                    <Image width={500} height={295} src={afterPath} alt={afterDescription} />
                    <figcaption className='right-4 absolute bottom-6 translate-y-1/2 font-bold px-2 py-1 leading-[100%] bg-opacity-75 bg-base-300 rounded-lg text-neutral'>After</figcaption>
                </figure>
                <svg slot="handle" xmlns="http://www.w3.org/2000/svg" width="100" viewBox="-8 -3 16 6">
                    <path stroke="#fff" d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2" strokeWidth="1" fill="#fff" vectorEffect="non-scaling-stroke" />
                </svg>
            </ImgComparisonSlider>
            </figure>
            <div className="card-body text-neutral">
                <h2 className="card-title">
                    {title}
                </h2>
                <div className="card-actions">
                    {tags.map((tag) => {
                        return <Tag key={tag.id} name={tag.name} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default GalleryPreview