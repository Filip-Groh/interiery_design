"use client"

import React from 'react'
import Image from 'next/image'

const WriteComment = ({session, id, realizationOrArticle}) => {
    const submit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        formData.append("userName", session?.user?.name)
        formData.append("userEmail", session?.user?.email)
        formData.append("id", id)
        formData.append("realizationOrArticle", realizationOrArticle)
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: formData,
        })
    }

    return (
        <div className="flex flex-col w-full bg-base-300 my-2 relative">
            <form onSubmit={submit} className={`flex flex-row w-full ${session ? "opacity-100": "opacity-0 invisible"}`} >
                <div className="p-2 flex flex-col max-w-min">
                    <span className="w-full aspect-square rounded-full">
                        <Image src={session?.user?.image || "/svg/user.svg"} alt='User avatar image' width={1000} height={1000} className="rounded-full" />
                    </span>
                    <p className="p-1 text-xs text-neutral">{session?.user?.name || "Anonym"}</p>
                    <input type="submit" value="Okomentovat" className="btn" />
                </div>
                <div className='flex flex-col p-2 gap-2 w-full text-neutral'>
                    <input type="text" id="title" name="title" placeholder="Nadpis" className="rounded w-full p-2" required />
                    <input type="text" id="text" name="text" placeholder="Komentář" className="rounded w-full h-full p-2" required />
                </div>
            </form>
            <p className={`text-2xl text-neutral absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${session ? "opacity-0 hidden": "opacity-100"}`}>Pro napsání komentáře se musíte přihlásit.</p>
        </div>
    )
}

export default WriteComment