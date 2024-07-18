"use client"

import React from 'react'

const Description = ({defaultDescription}) => {
    const [description, setDescription] = React.useState(defaultDescription)
    const [chars, setChars] = React.useState(description.length)

    React.useEffect(() => {
        async function getAllDescription() {
            const formData = new FormData()
            formData.set("key", "description")
            const response = await fetch('/api/settings', {
                method: 'PUT',
                body: formData
            })

            const description = await response.json()
            const defaultDescription = JSON.parse(description.data?.value || '""')
            setDescription(defaultDescription)
            setChars(defaultDescription.length)
        }
        getAllDescription()
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        formData.set("key", "description")
        formData.set("value", JSON.stringify(formData.get("description")))
        const response = fetch('/api/settings', {
            method: 'POST',
            body: formData,
        })
    }

    const handleChange = (event) => {
        setChars(event.target.value.length)
        setDescription(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea id="description" name="description" className='w-full block h-40' onChange={handleChange} value={description}></textarea>
            <div className="flex flex-row justify-evenly">
                <p className='py-3'>{chars} / 160 doporučených znaků</p>
                <input type="submit" value="Submit" className="btn"/>
            </div>
        </form>
    )
}

export default Description