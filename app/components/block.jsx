import React from 'react'
import DisplayImage from './images/image'

const Block = ({isRight, heading, text, image, alt}) => {
    return (
        <div className="hero min-h-[20rem] bg-base-200">
            <div className={`hero-content flex-col ${isRight ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                <DisplayImage src={image} alt={alt} width={450} height={0} />
                <div>
                    <h1 className="text-5xl font-bold">{heading}</h1>
                    <p className="py-6">{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Block