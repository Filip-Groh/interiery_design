"use client"

import React from 'react'
import Tag from '../tag'

const TagButton = ({tag, tags, setTags}) => {
    const [active, setActive] = React.useState(false)

    const handleToggle = () => {
        if (active) {
            setTags(tags.toSpliced(tags.indexOf(tag.id), 1))
            setActive(false)
        } else {
            setTags(tags.concat(tag.id))
            setActive(true)
        }
    }

    return (
        <button id={tag.id} onClick={handleToggle} >
            <Tag name={tag.name} isHighlighted={active}/>
        </button>
    )
}

export default TagButton