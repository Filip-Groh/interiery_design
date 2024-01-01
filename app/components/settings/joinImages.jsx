import React from 'react'
import UserImage from '../images/userImage'

const JoinImages = ({dialogId, update, images}) => {
    const firstHalfImages = images.filter((image, index) => {return index % 2 == 0})
    const secondHalfImages = images.filter((image, index) => {return index % 2 == 1})

    const submit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        let array = []
        formData.forEach((value, key) => {
            array.push(key)
        })
        update(array.toString().replaceAll(",", ", "))
        document.getElementById(dialogId).close()
    }

    return (
        <dialog id={dialogId} className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg mb-2">Selecting Images</h3>
                <form onSubmit={submit} className="flex flex-col">
                    <input type="submit" value="Submit" className="btn" />
                    <div className="flex flex-row w-full">
                        <div className="flex flex-col basis-1/2">
                            {firstHalfImages.map((image) => {
                                return (
                                    <label key={image.id} className="swap swap-flip">
                                        <input type="checkbox" id={image.id} name={image.id} />
                                        <div className="swap-on text-cyan-400">
                                            <UserImage path={image.path} description={image.description} />
                                        </div>
                                        <div className="swap-off">
                                            <UserImage path={image.path} description={image.description} />
                                        </div>
                                    </label>
                                )
                            })}
                        </div>
                        <div className="flex flex-col basis-1/2">
                            {secondHalfImages.map((image) => {
                                return (
                                    <label key={image.id} className="swap swap-flip">
                                        <input type="checkbox" id={image.id} name={image.id} />
                                        <div className="swap-on text-cyan-400">
                                            <UserImage path={image.path} description={image.description} />
                                        </div>
                                        <div className="swap-off">
                                            <UserImage path={image.path} description={image.description} />
                                        </div>
                                    </label>
                                )
                            })}
                        </div>
                    </div>
                </form>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

export default JoinImages