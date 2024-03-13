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

    const style = {
        fillRule: "evenodd",
        clipRule: "evenodd"
    }
    return (
        <div className="flex flex-col w-fit bg-base-300 rounded p-2">
            <div className="flex flex-row">
                <div className="p-2 flex flex-col max-w-min">
                    <span className="block w-16 h-16">
                        <Image src={image || "/svg/user.svg"} alt='User avatar image' width={1000} height={1000} className="rounded-full" />
                    </span>
                    <p className="p-1 text-xs text-neutral">{name}</p>
                </div>
                <div className='w-full relative text-neutral'>
                    <h1 className="text-2xl p-1">{title}</h1>
                    <p className="text-sm p-1">{text}</p>
                    <span className="absolute top-0 right-0">
                        {sameUser ? <DeleteButton handleDelete={handleDelete} /> : undefined}
                    </span>
                </div>
            </div>
            <div className="h-0.5 bg-base-100 my-1" />
            <div className="flex flex-row gap-4 bg-base-200 px-2 rounded text-neutral">
                <div className="flex flex-row justify-between p-1 text-xs gap-2 align-middle">
                    <p className="">{`Vytvořeno: ${createdDate.toLocaleString()}`}</p>
                    <p className="">{`Upraveno: ${updatedDate.toLocaleString()}`}</p>
                </div>
                <div className="join join-horizontal text-xs">
                    <button className={"join-item p-1 " + (session ? "": "disabled pointer-events-none text-gray-600")} onClick={handleLike} >
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={20} height={20} x="0px" y="0px" viewBox="0 0 122.88 106.16" style={{enableBackground: "new 0 0 122.88 106.16"}} xmlSpace="preserve">
                            <g>
                                <path style={style} className={activeButton == 1 ? "fill-primary" : "fill-neutral"} d="M4.02,44.6h27.36c2.21,0,4.02,1.81,4.02,4.03v53.51c0,2.21-1.81,4.03-4.02,4.03H4.02 c-2.21,0-4.02-1.81-4.02-4.03V48.63C0,46.41,1.81,44.6,4.02,44.6L4.02,44.6z M63.06,4.46c2.12-10.75,19.72-0.85,20.88,16.48 c0.35,5.3-0.2,11.47-1.5,18.36l25.15,0c10.46,0.41,19.59,7.9,13.14,20.2c1.47,5.36,1.69,11.65-2.3,14.13 c0.5,8.46-1.84,13.7-6.22,17.84c-0.29,4.23-1.19,7.99-3.23,10.88c-3.38,4.77-6.12,3.63-11.44,3.63H55.07 c-6.73,0-10.4-1.85-14.8-7.37V51.31c12.66-3.42,19.39-20.74,22.79-32.11V4.46L63.06,4.46z"/>
                            </g>
                        </svg>
                    </button>
                    <p className="join-item p-1 w-8 text-center">{like}</p>
                    <button className={"join-item p-1 " + (session ? "": "disabled pointer-events-none text-gray-600")} onClick={handleDislike} >
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={20} height={20} x="0px" y="0px" viewBox="0 0 122.88 106.16" style={{enableBackground: "new 0 0 122.88 106.16"}} xmlSpace="preserve">
                            <g>
                                <path style={style} className={activeButton == -1 ? "fill-primary" : "fill-neutral"} d="M4.03,61.56h27.36c2.21,0,4.02-1.81,4.02-4.02V4.03C35.41,1.81,33.6,0,31.39,0H4.03C1.81,0,0,1.81,0,4.03 v53.51C0,59.75,1.81,61.56,4.03,61.56L4.03,61.56z M63.06,101.7c2.12,10.75,19.72,0.85,20.88-16.48c0.35-5.3-0.2-11.47-1.5-18.36 l25.15,0c10.46-0.41,19.59-7.9,13.14-20.2c1.47-5.36,1.69-11.65-2.3-14.13c0.5-8.46-1.84-13.7-6.22-17.84 c-0.29-4.23-1.19-7.99-3.23-10.88c-3.38-4.77-6.12-3.63-11.44-3.63H55.07c-6.73,0-10.4,1.85-14.8,7.37v47.31 c12.66,3.42,19.39,20.74,22.79,32.11V101.7L63.06,101.7L63.06,101.7z"/>
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Comment