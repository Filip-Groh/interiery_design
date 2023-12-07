import React from 'react'
import Image from 'next/image'

const Gallery1Card = ({title, description}) => {
    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <figure>
                <Image width={500} height={295} src="/shoes.jpg" alt="Shoes" placeholder="blur" blurDataURL="data:image/jpeg;base64,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"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div> 
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    )
}

export default Gallery1Card