"use client"

import React from 'react'

const NewDuration = ({defaultNewDuration}) => {
    const [newDuration, setNewDuration] = React.useState(defaultNewDuration)

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        formData.set("key", "newDuration")
        formData.set("value", JSON.stringify(Math.max(0, Math.round(Number(formData.get("newDuration"))))))
        const response = fetch('/api/settings', {
            method: 'POST',
            body: formData,
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-row">
                <input type="number" id="newDuration" name="newDuration" placeholder="Počet dní" className="file-input file-input-bordered w-full" required value={newDuration} onChange={(e) => setNewDuration(e.target.value)}/>
                <input type="submit" value="Upravit" className="btn"/>
            </div>
        </form>
    )
}

export default NewDuration