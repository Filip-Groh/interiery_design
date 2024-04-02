import React from 'react'
import DisplayImage from '../images/image'

const Gallery1Card = ({path, description}) => {
    return (
        <div className="card w-80 bg-base-100 shadow-xl animate-fade-up">
            <figure>
                <DisplayImage width={500} height={295} src={path} alt={description} />
            </figure>
            <div className="card-body text-neutral">
                <h2 className="card-title">
                    {description}
                </h2>
            </div>
        </div>
    )
}

export default Gallery1Card