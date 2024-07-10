"use client"

import React from 'react'
import DeleteButton from '../deleteButton'

const QueryItem = ({id, name, email, createDate, query, queries, setQueries}) => {
    const [open, setOpen] = React.useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    const handleDelete = async (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append("id", id)
        const response = await fetch('/api/query', {
            method: 'DELETE',
            body: formData,
        })

        queries.forEach((query, index) => {
            if (query.id == id) {
                setQueries(queries.toSpliced(index, 1))
            }
        })
    }

    if (open) {
        return (
            <div className='w-11/12 bg-base-100 rounded-xl p-2 text-neutral'>
                <div className='flex flex-row justify-between items-center'>
                    <div className='basis-1/5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-caret-down cursor-pointer" viewBox="0 0 16 16" onClick={handleOpen}>
                            <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659"/>
                        </svg>
                    </div>
                    <p className='basis-1/5 text-center'>{name}</p>
                    <p className='basis-1/5 text-center'>{email}</p>
                    <p className='basis-1/5 text-center'>{createDate.toLocaleString()}</p>
                    <div className='basis-1/5 text-right'>
                        <DeleteButton handleDelete={handleDelete} />
                    </div>
                </div>
                <p>{query}</p>
            </div>
        )
    }
    return (
        <div className='w-11/12 bg-base-100 rounded-xl p-2 text-neutral'>
            <div className='flex flex-row items-center'>
                <div className='basis-1/5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-caret-right cursor-pointer" viewBox="0 0 16 16" onClick={handleOpen}>
                        <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753"/>
                    </svg>
                </div>
                <p className='basis-1/5 text-center'>{name}</p>
                <p className='basis-1/5 text-center'>{email}</p>
                <p className='basis-1/5 text-center'>{createDate.toLocaleString()}</p>
                <div className='basis-1/5 text-right'>
                    <DeleteButton handleDelete={handleDelete} />
                </div>
            </div>
        </div>
    )
}

export default QueryItem