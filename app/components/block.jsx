"use client"

import React from 'react'
import DisplayImage from './images/image'

const Block = ({isRight, heading, text, image, alt}) => {
    return (
        <section className="hero min-h-[20rem] overflow-hidden max-w-full bg-base-200">
            <div className={`hero-content flex-col ${isRight ? "lg:flex-row-reverse animate-fade-right" : "lg:flex-row animate-fade-left"}`}>
                <DisplayImage src={image} alt={alt} width={1000} height={0} />
                <div className='text-neutral'>
                    <h2 className="text-2xl md:text-5xl font-bold">{heading}</h2>
                    <p className="py-6">{text}</p>
                </div>
            </div>
        </section>
    )
}

export default Block