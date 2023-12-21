import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const RealizationPreview = ({id, title, description, tags, previewImage}) => {
    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <Link href={`blog/${id}`}>
                <figure>
                    <Image width={500} height={295} src={previewImage?.path || "/logo.jpg"} alt={previewImage?.description}/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        {tags?.map((tag) => {
                            return <div key={tag.id} className="badge badge-outline">{tag.name}</div>
                        })}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default RealizationPreview