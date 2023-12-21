"use client"

import React from 'react'
import Image from 'next/image'

const AddRealization = ({modalId}) => {
    return (
        <button className="m-2 bg-base-100 min-h-10 rounded-lg" onClick={()=>document.getElementById(modalId).showModal()}>
            <Image src="/svg/add.svg" width={75} height={75} className="inline p-2" alt="Add SVG Image" />
        </button>
    )
}

export default AddRealization