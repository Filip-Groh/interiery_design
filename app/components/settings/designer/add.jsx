"use client"

import React from 'react'

const AddDesigner = ({modalId}) => {
    return (
        <div className="card card-compact w-72 bg-base-100 shadow-xl overflow-visible">
            <div className="card-body">
                <button className="bg-base-100 p-2 rounded-lg" onClick={()=>document.getElementById(modalId).showModal()}>ADD</button>
            </div>
        </div>
    )
}

export default AddDesigner