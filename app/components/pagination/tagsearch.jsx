"use client"

import React from 'react'
import TagButton from './tagbutton'

const Tagsearch = ({tags, setTags}) => {
    const [localTags, setLocalTags] = React.useState([])

    React.useEffect(() => {
        const response = fetch('/api/tag', {
            method: 'GET'
        })
        response.then(
            function(value) { 
                value.json().then(function(value) {
                    setLocalTags(value.data)
                })
            }
          );
    }, [])

    const toggleButton = (event) => {
        if (event.target.value == "active") {
            setTags(tags.toSpliced(tags.indexOf(event.target.id), 1))
            event.target.value = ""
            event.target.className = "rounded-md bg-slate-500 px-2"
        } else {
            setTags(tags.concat(event.target.id))
            event.target.value = "active"
            event.target.className = "rounded-md bg-slate-500 px-2 text-cyan-400"
        }
    }

    return (
        <div>
            {localTags.map((tag) => {
                return <TagButton key={tag.id} tag={tag} toggleButton={toggleButton} />
            })}
        </div>
    )
}

export default Tagsearch