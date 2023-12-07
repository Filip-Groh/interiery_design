import React from 'react'

const CommentPrototypes = () => {
    return (
        <div className="flex justify-center">
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
                        <button className="join-item p-1">Like</button>
                        <p className="join-item p-1">120</p>
                        <button className="join-item p-1">Dislike</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentPrototypes