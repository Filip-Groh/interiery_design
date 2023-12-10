import React from 'react'
import Image from 'next/image'

const Image1 = () => {
    return (
        <div className="flex w-full justify-center">
            <div className="aspect-video w-96 m-10 relative">
                <h1 className="absolute font-bold bottom-2 left-2 bg-black bg-opacity-50 rounded-2xl px-2">Name</h1>
                <Image className="rounded-2xl" width={2000} height={2000} src="/test_image.jpg" alt="test image" /> 
            </div>
        </div>
    )
}

export default Image1