"use client"

import React from 'react'
import TagButton from './tagbutton'

const Tagsearch = ({tags, setTags, defaultTags}) => {
    return (
        <div>
            <h2 className='text-neutral'>Vyhledávání pomocí tagů:</h2>
            {defaultTags.map((tag) => {
                return <TagButton key={tag.id} tag={tag} tags={tags} setTags={setTags} />
            })}
        </div>
    )
}

export default Tagsearch