"use client"

import React from 'react'
import Image from 'next/image'

const People = ({name, role, email, phone, image}) => {
    return (
        <>
            <div className="card card-compact w-72 bg-base-100 shadow-xl overflow-visible animate-fade-up">
                <figure className="p-8 pb-2 overflow-visible">
                    <div className="avatar">
                        <div className="w-48 mask mask-squircle hover:scale-[150%] transition-transform shadow-2xl cursor-pointer" onClick={()=>document.getElementById(name).showModal()}>
                            <Image width={200} height={200} src={image} alt="Human"/>
                        </div>
                    </div>
                </figure>
                <div className="card-body text-neutral">
                    <h2 className="card-title">{name}</h2>
                    <h3>{role}</h3>
                    <p>e-mail:  {email}<br />mobil: (+420) {phone}
                    </p>
                </div>
            </div>
            <dialog id={name} className="modal">
                <div className="modal-box max-w-[90vw] max-h-[90vh] flex justify-center align-middle">
                    <Image className="rounded-lg shadow-2xl max-h-full max-w-full object-contain block" width={2000} height={0} src={image} alt="Human" />
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

export default People