import React from 'react'
import Image from 'next/image'

const DatabaseImage = () => {
    let path
    let description

    return (
        <Image width={500} height={500} src={path} alt={description} />
    )
}

export default DatabaseImage