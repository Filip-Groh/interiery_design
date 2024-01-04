import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ArticlePreview = ({id, title, tags, path, alt}) => {
    return (
        <Link href={`blog/${id}`}>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure>
                    <Image width={500} height={295} src={path || "/shoes.jpg"} alt={alt} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <div className="card-actions justify-end">
                        {tags.map((tag) => {
                            return <div key={tag.id} className="badge badge-outline">{tag.name}</div> 
                        })}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ArticlePreview