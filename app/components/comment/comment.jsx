"use client"

import React from 'react'

const Comment = () => {
    const [like, setLike] = React.useState(0)

    const [activeButton, setActiveButton] = React.useState(0)
    // -1 = dislike
    // 0 = neutral
    // 1 = like

    const handleLike = () => {
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
    const handleDislike = () => {
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

    return (
        <div className="flex flex-col border-white border-2 w-fit bg-base-300">
            <div className="flex flex-row">
                <div className="p-2 flex flex-col max-w-min">
                    <span className="block w-16 h-16 bg-white"></span>
                    <p className="p-1 text-xs">Antonio</p>
                </div>
                <div className="">
                    <h1 className="text-2xl">Záclony</h1>
                    <p className="text-sm">Velmi se mi líbí záclony</p>
                </div>
            </div>
            <div className="h-0.5 bg-white" />
            <div className="flex flex-row gap-4">
                <div className="flex flex-row justify-between p-1 text-xs gap-2 align-middle">
                    <p className="">Vytvořeno: 26.11.2023 16:03</p>
                    <p className="">Upraveno: 26.11.2023 17:32</p>
                </div>
                <div className="join join-horizontal text-xs border-white border-2">
                    <button className={"join-item p-1 " + (activeButton == 1 ? "bg-red-600" : "")} onClick={handleLike}>Like</button>
                    <p className="join-item p-1">{like}</p>
                    <button className={"join-item p-1 " + (activeButton == -1 ? "bg-red-600" : "")} onClick={handleDislike}>Dislike</button>
                </div>
            </div>
        </div>
    )
}

export default Comment