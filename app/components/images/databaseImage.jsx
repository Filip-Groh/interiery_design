import React from 'react'
import Image from 'next/image'

const DatabaseImage = ({path, description}) => {
    return (
        <div className="flex justify-center">
            <div className="w-full m-2 relative h-min">
                <h1 className="absolute font-bold bottom-2 left-2 bg-black bg-opacity-50 rounded-2xl px-2 z-10">{description}</h1>
                <Image className="rounded-2xl" width={1000} height={1000} src={path} alt={description} />
            </div>
        </div>
    )
}

export default DatabaseImage