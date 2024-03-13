import React from 'react'

const Welcome = ({heading, text}) => {
    return (
        <div className="hero min-h-[32rem] bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md text-neutral">
                    <h1 className="text-5xl font-bold">{heading}</h1>
                    <p className="py-6">{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Welcome