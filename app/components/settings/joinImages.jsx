import React from 'react'
import UserImage from '../images/userImage'

const JoinImages = ({dialogId, update, images}) => {
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
                <h3 className="font-bold text-lg mb-2 text-neutral">Vybírání fotek</h3>
                <form onSubmit={submit} className="flex flex-col">
                    <input type="submit" value="Připojit" className="btn" />
                    <div className="flex flex-row w-full">
                        <div className="flex flex-col basis-1/2">
                            {images.map((image, index) => {
                                if (index % 2 == 0) {
                                    return (
                                        <label key={image.id} className="swap swap-flip">
                                            <input type="checkbox" id={image.id} name={image.id} className='image-reset'/>
                                            <div className="swap-on text-primary">
                                                <UserImage path={image.path} description={image.description} isOpenable={false} tags={image.tags} isHighlighted={true}/>
                                            </div>
                                            <div className="swap-off">
                                                <UserImage path={image.path} description={image.description} isOpenable={false} tags={image.tags}/>
                                            </div>
                                        </label>
                                    )
                                }
                            })}
                        </div>
                        <div className="flex flex-col basis-1/2">
                            {images.map((image, index) => {
                                if (index % 2 == 1) {
                                    return (
                                        <label key={image.id} className="swap swap-flip">
                                            <input type="checkbox" id={image.id} name={image.id} className='image-reset'/>
                                            <div className="swap-on text-primary">
                                                <UserImage path={image.path} description={image.description} isOpenable={false} tags={image.tags} isHighlighted={true}/>
                                            </div>
                                            <div className="swap-off">
                                                <UserImage path={image.path} description={image.description} isOpenable={false} tags={image.tags}/>
                                            </div>
                                        </label>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </form>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-neutral">✕</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

export default JoinImages