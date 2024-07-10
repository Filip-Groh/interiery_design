import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Tag from '../tag'

const HomepageRealizationPreview = ({id, title, description, path, alt, tags}) => {
    return (
        <div className='sm:w-3/4'>
            <Image width={1000} height={1000} src={path} alt={alt} className='rounded-lg' />
            <h2 className='sm:text-3xl text-xl m-2'><strong>{title}</strong></h2>
            <div className='flex sm:flex-row flex-col m-2 justify-between items-center max-w-full gap-2'>
                <p className='truncate basis-[80%] sm:w-96 w-[calc(100vw-4rem)]'>{description}</p>
                <div className='btn basis-[20%]'>
                    <Link href={`realization/${id}`}>Číst dál</Link>
                </div>
            </div>
            <div className='ml-2'>
                {tags.map((tag) => {
                    return <Tag key={tag.id} name={tag.name} />
                })}
            </div>
        </div>
    )
}

export default HomepageRealizationPreview