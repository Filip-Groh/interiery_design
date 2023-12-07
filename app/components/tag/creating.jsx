"use client"

import React from 'react'

const TagCreating = () => {
    const submit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const response = await fetch('/api/tag', {
            method: 'POST',
            body: formData,
        })
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" name="name"/>
                <button type="submit">Vytvořit</button>
            </form>
        </div>
    )
}

export default TagCreating