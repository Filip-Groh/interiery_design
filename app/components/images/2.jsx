import React from 'react'
import Image from 'next/image'

const Image2 = () => {
    return (
        <div className="flex w-full justify-center">
            <div className="aspect-video w-96 m-10 relative">
                <div className="absolute bottom-2 left-2">
                    <h1 className="font-bold bg-black bg-opacity-50 rounded-t-lg px-2 w-min">Name</h1>
                    <p className="text-[0.5rem] bg-black bg-opacity-50 rounded-b-2xl rounded-tr-2xl px-2 w-fit">Some random description!</p>
                </div>
                <Image className="rounded-2xl" width={2000} height={2000} src="/test_image.jpg" alt="test image" /> 
            </div>
        </div>
    )
}

export default Image2