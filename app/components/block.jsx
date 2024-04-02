"use client"

import React from 'react'
import DisplayImage from './images/image'

const Block = ({isRight, heading, text, image, alt}) => {
    return (
        <div className="hero min-h-[20rem] overflow-hidden max-w-full bg-base-200">
            <div className={`hero-content flex-col ${isRight ? "lg:flex-row-reverse animate-fade-right" : "lg:flex-row animate-fade-left"}`}>
                <DisplayImage src={image} alt={alt} width={Math.min(window.innerWidth - 50, 450)} height={0} />
                <div className='text-neutral'>
                    <h1 className="text-2xl md:text-5xl font-bold">{heading}</h1>
                    <p className="py-6">{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Block