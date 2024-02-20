"use client"

import React from 'react'

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
        if (event.target.className == "bg-red-600") {
            setTags(tags.toSpliced(tags.indexOf(event.target.id), 1))
            event.target.className = ""
        } else {
            setTags(tags.concat(event.target.id))
            event.target.className = "bg-red-600"
        }
    }

    return (
        <div>
            {localTags.map((tag) => {
                return <button key={tag.id} id={tag.id} onClick={toggleButton}>{tag.name}</button>
            })}
        </div>
    )
}

export default Tagsearch