"use client"

import React from 'react'
import Image from "next/image"
import DeleteButton from '../settings/deleteButton'

const Comment = ({session, id, name, email, image, title, text, likes, createdDate, updatedDate, state}) => {
    const [like, setLike] = React.useState(likes)

    const [activeButton, setActiveButton] = React.useState(state)
    // -1 = dislike
    // 0 = neutral
    // 1 = like

    const handleLike = async () => {
        const formData = new FormData()
        formData.append("operationType", "LIKE")
        formData.append("userEmail", session?.user?.email)
        formData.append("commentId", id)
        const response = await fetch('/api/comment', {
            method: 'PUT',
            body: formData,
        })

        setActiveButton(1)
        switch (activeButton) {
            case -1:
                setLike(like + 2)
                break
            case 0:
                setLike(like + 1)
                break
            case 1:
                setLike(like - 1)
                setActiveButton(0)
                break
        }
    }
    const handleDislike = async () => {
        const formData = new FormData()
        formData.append("operationType", "DISLIKE")
        formData.append("userEmail", session?.user?.email)
        formData.append("commentId", id)
        const response = await fetch('/api/comment', {
            method: 'PUT',
            body: formData,
        })

        setActiveButton(-1)
        switch (activeButton) {
            case -1:
                setLike(like + 1)
                setActiveButton(0)
                break
            case 0:
                setLike(like - 1)
                break
            case 1:
                setLike(like - 2)
                break
        }
    }

    const handleDelete = async (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append("id", id)
        const response = await fetch('/api/comment', {
            method: 'DELETE',
            body: formData,
        })
    }

    const sameUser = session?.user?.name == name && session?.user?.email == email

    return (
        <div className="flex flex-col w-fit bg-base-300 rounded p-2">
            <div className="flex flex-row">
                <div className="p-2 flex flex-col max-w-min">
                    <span className="block w-16 h-16">
                        <Image src={image || "/svg/user.svg"} alt='User avatar image' width={1000} height={1000} className="rounded-full" />
                    </span>
                    <p className="p-1 text-xs">{name}</p>
                </div>
                <div className='w-full relative'>
                    <h1 className="text-2xl p-1">{title}</h1>
                    <p className="text-sm p-1">{text}</p>
                    <span className="absolute top-0 right-0">
                        {sameUser ? <DeleteButton handleDelete={handleDelete} /> : undefined}
                    </span>
                </div>
            </div>
            <div className="h-0.5 bg-base-100 my-1" />
            <div className="flex flex-row gap-4 bg-base-200 px-2 rounded">
                <div className="flex flex-row justify-between p-1 text-xs gap-2 align-middle">
                    <p className="">{`Vytvořeno: ${createdDate.toLocaleString()}`}</p>
                    <p className="">{`Upraveno: ${updatedDate.toLocaleString()}`}</p>
                </div>
                <div className="join join-horizontal text-xs">
                    <button className={"join-item p-1 " + (activeButton == 1 ? "bg-red-600" : "") + (session ? "": "disabled pointer-events-none text-gray-600")} onClick={handleLike} >Like</button>
                    <p className="join-item p-1">{like}</p>
                    <button className={"join-item p-1 " + (activeButton == -1 ? "bg-red-600" : "") + (session ? "": "disabled pointer-events-none text-gray-600")} onClick={handleDislike} >Dislike</button>
                </div>
            </div>
        </div>
    )
}

export default Comment