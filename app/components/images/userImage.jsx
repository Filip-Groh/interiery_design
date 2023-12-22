import React from 'react'
import Image from 'next/image'

const UserImage = ({path, description}) => {
    return (
        <div className="flex justify-center">
            <div className="w-full m-2 relative h-min flex justify-center">
                <div className="absolute bottom-2 left-2 flex flex-row bg-black bg-opacity-50 rounded-2xl p-2">                
                    <h1 className="font-bold px-2 z-10">{description}</h1>
                </div>
                <Image className="rounded-2xl" width={1000} height={1000} src={path || "/logo.jpg"} alt={description} />
            </div>
        </div>
    )
}

export default UserImage