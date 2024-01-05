import React from 'react'
import Image from 'next/image'

const Gallery1Card = ({path, description}) => {
    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <figure>
                <Image width={500} height={295} src={path || "/shoes.jpg"} alt={description} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {description}
                </h2>
            </div>
        </div>
    )
}

export default Gallery1Card