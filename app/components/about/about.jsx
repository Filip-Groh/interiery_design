import React from 'react'
import Image from 'next/image'

const About = ({isRight, heading, text, image}) => {
    return (
        <div className="hero min-h-[20rem] bg-base-200">
            <div className={`hero-content flex-col ${isRight ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                <Image className="max-w-sm rounded-lg shadow-2xl hover:scale-[110%] sm:hover:scale-[150%] transition-transform" width={450} height={0} src={image} alt="Spiderman" />
                <div>
                    <h1 className="text-5xl font-bold">{heading}</h1>
                    <p className="py-6">{text}</p>
                </div>
            </div>
        </div>
    )
}

export default About