"use client"

import React from 'react'
import Image from 'next/image'

const AddDesigner = ({modalId}) => {
    return (
        <div className="card card-compact w-72 bg-base-100 shadow-xl overflow-visible">
            <div className="card-body">
                <button className="bg-base-100 rounded-lg" onClick={()=>document.getElementById(modalId).showModal()}>
                    <Image src="/svg/add.svg" width={75} height={75} className="inline p-2" alt="Add SVG Image" />
                </button>
            </div>
        </div>
    )
}

export default AddDesigner