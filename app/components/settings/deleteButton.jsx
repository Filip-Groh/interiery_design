import React from 'react'
import Image from 'next/image'

const DeleteButton = ({handleDelete, isDependent=false}) => {
    return (
        <button onClick={handleDelete} disabled={isDependent}>
            <Image src="/svg/delete.svg" width={20} height={20} alt="Delete SVG Image" />
        </button>
    )
}

export default DeleteButton