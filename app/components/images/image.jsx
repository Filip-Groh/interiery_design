"use client"

import Image from 'next/image'
import React from 'react'

const DisplayImage = ({src, alt, width, height, classes="max-w-sm rounded-lg", isScaling=true, isOpenable=true}) => {
    const handleOpen = () => {
        if (isOpenable) {
            document.getElementById(src).showModal()
        }
    }

    return (
        <>
            <Image className={`${classes} shadow-2xl cursor-pointer ${isScaling? "hover:scale-[110%] sm:hover:scale-[150%] transition-transform" : ""}`} onClick={handleOpen} width={width} height={height} src={src} alt={alt} />
            <dialog id={src} className="modal">
                <div className="modal-box max-w-[90vw] max-h-[90vh] flex justify-center align-middle">
                    <Image className="rounded-lg shadow-2xl max-h-full max-w-full object-contain block" width={2000} height={0} src={src} alt={alt} />
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-1 top-1 bg-base-200 caret-transparent text-neutral">✕</button>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop h-screen">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}

export default DisplayImage