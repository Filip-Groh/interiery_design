import React from 'react'
import Image from 'next/image'

const DeleteButton = ({handleDelete, isDependent=false, width=20, height=20}) => {
    return (
        <button onClick={handleDelete} disabled={isDependent}>
            <Image src="/svg/delete.svg" width={width} height={height} alt="Delete SVG Image" />
        </button>
    )
}

export default DeleteButton