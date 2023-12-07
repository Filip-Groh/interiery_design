"use client"

import TagCreating from '@/app/components/tag/creating'
import TagEditable from '@/app/components/tag/tag-settings'
import React from 'react'
import { useState, useEffect } from 'react'

const TagSettings = () => {
    const [tags, setTags] = useState([])
    useEffect(() => {
        fetch("/api/tag", {
            method: "GET"
        })
            .then((res) => res.json())
            .then((data) => {
                setTags(data)
        })
    }, [])

    return (
        <>
            <TagCreating />
            <div>
                {tags.map((tag) => {
                    return <TagEditable key={tag.id} id={tag.id} name={tag.name} />
                })}
            </div>
        </>
    )
}

export default TagSettings