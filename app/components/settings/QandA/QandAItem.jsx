"use client"

import React from 'react'
import DeleteButton from '../deleteButton'

const QandAItem = ({id, question, answer, QandAs, setQandAs}) => {
    const handleDelete = async (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append("id", id)
        const response = await fetch('/api/QandA', {
            method: 'DELETE',
            body: formData,
        })

        QandAs.forEach((QandA, index) => {
            if (QandA.id == id) {
                setQandAs(QandAs.toSpliced(index, 1))
            }
        })
    }
    
    return (
        <div className='w-11/12 bg-base-100 rounded-xl p-2 text-neutral'>
            <div className='flex flex-row items-center'>
                <p className='basis-1/3 text-center'>{question}</p>
                <p className='basis-1/3 text-center'>{answer}</p>
                <div className='basis-1/3 text-right'>
                    <DeleteButton handleDelete={handleDelete} />
                </div>
            </div>
        </div>
    )
}

export default QandAItem