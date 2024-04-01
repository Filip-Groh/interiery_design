import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Tag from '../tag'

const ArticlePreview = ({id, title, tags, path, alt, createDate, defaultNewDuration}) => {
    return (
        <Link href={`blog/${id}`}>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure>
                    <Image width={500} height={295} src={path} alt={alt} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-neutral">
                        {title}
                        {(Date.now() - Date.parse(createDate)) < (defaultNewDuration * 24 * 60 * 60 * 1000) ? <div className="badge badge-secondary">NOVINKA</div> : <></>}
                    </h2>
                    <div className="card-actions justify-end">
                        {tags.map((tag) => {
                            return <Tag key={tag.id} name={tag.name} />
                        })}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ArticlePreview