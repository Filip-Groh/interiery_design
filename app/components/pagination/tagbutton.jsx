import React from 'react'

const TagButton = ({tag, toggleButton}) => {
    return (
        <button key={tag.id} id={tag.id} onClick={toggleButton} className='rounded-md bg-slate-500 px-2'>
            {tag.name}
        </button>
    )
}

export default TagButton