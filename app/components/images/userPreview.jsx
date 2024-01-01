import React from 'react'
import Image from 'next/image'

const UserPreview = ({title, beforePath, beforeDescription, afterPath, afterDescription}) => {
    return (
        <div className="flex justify-center">
            <div className="diff aspect-[16/9] rounded-2xl m-2">
                <div className="diff-item-1">
                    <Image width={1000} height={1000} src={beforePath || "/logo.jpg"} alt={beforeDescription} />
                </div>
                <div className="diff-item-2">
                    <Image width={1000} height={1000} src={afterPath || "/logo.jpg"} alt={afterDescription} />
                </div>
                <div className="diff-resizer scale-[2] translate-x-[0.3rem] translate-y-[0.25rem] w-[16.5vw]"></div>
                <div className="font-bold absolute bottom-2 left-2 z-10 bg-black bg-opacity-50 rounded-lg px-2 py-1">
                    <p className="leading-4 text-center">Před</p>
                </div>
                <div className="font-bold absolute bottom-2 right-2 z-10 bg-black bg-opacity-50 rounded-lg px-2 py-1">
                    <p className="leading-4 text-center">Po</p>
                </div>
                <div className="font-bold absolute bottom-2 left-1/2 -translate-x-1/2 z-10 bg-black bg-opacity-50 rounded-lg px-2 py-1 flex flex-row">
                    <p className="leading-4 text-center pr-1">{title}</p>
                </div>
            </div>
        </div>
    )
}

export default UserPreview