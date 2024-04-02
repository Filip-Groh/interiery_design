"use client"

import React from 'react'
import Image from 'next/image'
import { ImgComparisonSlider } from '@img-comparison-slider/react'

const UserPreview = ({title, beforePath, beforeDescription, afterPath, afterDescription, isAnimated=false}) => {
    return (
        <ImgComparisonSlider className={`focus:outline-none rounded-2xl m-2 w-fit ${isAnimated ? "animate-fade-up" : ""}`}>
            <figure slot="first" class="before">
                <Image width={1000} height={1000} src={beforePath} alt={beforeDescription} />
                <p className='absolute bottom-4 left-1/2 -translate-x-1/2 font-bold px-2 py-1 leading-[100%] bg-opacity-75 bg-base-300 rounded-lg z-10'>{title}</p>
                <figcaption className='left-4 absolute bottom-6 translate-y-1/2 font-bold px-2 py-1 leading-[100%] bg-opacity-75 bg-base-300 rounded-lg'>Before</figcaption>
            </figure>
            <figure slot="second" class="after">
                <Image width={1000} height={1000} src={afterPath} alt={afterDescription} />
                <p className='absolute bottom-4 left-1/2 -translate-x-1/2 font-bold px-2 py-1 leading-[100%] bg-opacity-75 bg-base-300 rounded-lg z-10'>{title}</p>
                <figcaption className='right-4 absolute bottom-6 translate-y-1/2 font-bold px-2 py-1 leading-[100%] bg-opacity-75 bg-base-300 rounded-lg'>After</figcaption>
            </figure>
            <svg slot="handle" xmlns="http://www.w3.org/2000/svg" width="100" viewBox="-8 -3 16 6">
                <path stroke="#fff" d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2" stroke-width="1" fill="#fff" vector-effect="non-scaling-stroke" />
            </svg>
        </ImgComparisonSlider>
    )
}

export default UserPreview