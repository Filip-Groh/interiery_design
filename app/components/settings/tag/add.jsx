"use client"

import React from 'react'
import Image from 'next/image'

const AddTag = ({modalId}) => {
    return (
        <button className="w-fit h-fit m-2 bg-base-100 rounded-lg" onClick={()=>document.getElementById(modalId).showModal()}>
            <Image src="/svg/add.svg" width={25} height={25} className="w-8 h-8 p-2" alt="Add SVG Image" />
        </button>
    )
}

export default AddTag