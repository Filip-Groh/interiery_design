import Image from 'next/image'
import React from 'react'

const ImagesPrototypes = () => {
    return (
        <div className="flex flex-col w-full justify-center">
            <div className="flex w-full justify-center">
                <div className="aspect-video w-96 m-10 relative">
                    <h1 className="absolute font-bold bottom-2 left-2 bg-black bg-opacity-50 rounded-2xl px-2">Name</h1>
                    <Image className="rounded-2xl" width={2000} height={2000} src="/test_image.jpg" alt="test image" /> 
                </div>
            </div>

            <div className="flex w-full justify-center">
                <div className="aspect-video w-96 m-10 relative">
                    <div className="absolute bottom-2 left-2">
                        <h1 className="font-bold bg-black bg-opacity-50 rounded-t-lg px-2 w-min">Name</h1>
                        <p className="text-[0.5rem] bg-black bg-opacity-50 rounded-b-2xl rounded-tr-2xl px-2 w-fit">Some random description!</p>
                    </div>
                    <Image className="rounded-2xl" width={2000} height={2000} src="/test_image.jpg" alt="test image" /> 
                </div>
            </div>

            <div className="flex justify-center w-full">
                <div className="diff aspect-[16/9] w-96 rounded-2xl relative m-10">
                    <div className="diff-item-1">
                        <Image width={1000} height={1000} src="/before.jpg" alt="before" />
                    </div>
                    <div className="diff-item-2">
                        <Image width={1000} height={1000} src="/after.jpg" alt="after" />
                    </div>
                    <div className="diff-resizer scale-[2] translate-x-[0.3rem] translate-y-[0.25rem] w-[12rem]"></div>
                    <div className="font-bold absolute bottom-2 left-2 z-10 bg-black bg-opacity-50 rounded-lg px-2 py-1">
                        <p className="leading-4 text-center">Před</p>
                    </div>
                    <div className="font-bold absolute bottom-2 right-2 z-10 bg-black bg-opacity-50 rounded-lg px-2 py-1">
                        <p className="leading-4 text-center">Po</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImagesPrototypes