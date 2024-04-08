import React from 'react'
import DisplayImage from '../images/image'
import Tag from '../tag'

const GalleryImage = ({path, description, tags}) => {
    return (
        <div className="card w-80 bg-base-100 shadow-xl animate-fade-up">
            <figure>
                <DisplayImage width={500} height={295} src={path} alt={description} />
            </figure>
            <div className="card-body text-neutral">
                <h2 className="card-title">
                    {description}
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

export default GalleryImage