import React from 'react'
import UserImage from '../images/userImage'

const JoinImage = ({dialogId, update, images}) => {
    const firstHalfImages = images.filter((image, index) => {return index % 2 == 0})
    const secondHalfImages = images.filter((image, index) => {return index % 2 == 1})

    return (
        <dialog id={dialogId} className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg mb-2 text-neutral">Vybírání fotky</h3>
                <div className="flex flex-col">
                    <div className="flex flex-row w-full">
                        <div className="flex flex-col basis-1/2">
                            {firstHalfImages.map((image) => {
                                return (
                                    <button key={image.id} onClick={(event) => {
                                        update(image.id)
                                        document.getElementById(dialogId).close()
                                    }}>
                                        <UserImage path={image.path} description={image.description} isOpenable={false} tags={image.tags}/>
                                    </button>
                                )
                            })}
                        </div>
                        <div className="flex flex-col basis-1/2">
                            {secondHalfImages.map((image) => {
                                return (
                                    <button key={image.id} onClick={(event) => {
                                        update(image.id)
                                        document.getElementById(dialogId).close()
                                    }}>
                                        <UserImage path={image.path} description={image.description} isOpenable={false} tags={image.tags}/>
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-neutral">✕</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

export default JoinImage