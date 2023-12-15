"use client"

import React from 'react'

const AddButton = ({modalId}) => {
    return (
        <button className="bg-base-100 p-2 rounded-lg" onClick={()=>document.getElementById(modalId).showModal()}>ADD</button>
    )
}

export default AddButton