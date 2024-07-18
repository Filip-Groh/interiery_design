"use client"

import React from 'react'

const PageSize = ({defaultPageSize}) => {
    const [pageSize, setPageSize] = React.useState(defaultPageSize)

    React.useEffect(() => {
        async function getAllPageSize() {
            const formData = new FormData()
            formData.set("key", "pageSize")
            const response = await fetch('/api/settings', {
                method: 'PUT',
                body: formData
            })

            const pageSize = await response.json()
            const defaultPageSize = JSON.parse(pageSize.data?.value || "0")
            setPageSize(defaultPageSize)
        }
        getAllPageSize()
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        formData.set("key", "pageSize")
        formData.set("value", JSON.stringify(Math.max(1, Math.round(Number(formData.get("pageSize"))))))
        const response = fetch('/api/settings', {
            method: 'POST',
            body: formData,
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-row">
                <input type="number" id="pageSize" name="pageSize" placeholder="Články na 1 stránce" className="file-input file-input-bordered w-full" required value={pageSize} onChange={(e) => setPageSize(e.target.value)}/>
                <input type="submit" value="Upravit" className="btn"/>
            </div>
        </form>
    )
}

export default PageSize