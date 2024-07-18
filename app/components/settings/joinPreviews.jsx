import React from 'react'
import UserPreview from '../images/userPreview'

const JoinPreviews = ({dialogId, update, previews}) => {
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
                <h3 className="font-bold text-lg mb-2 text-neutral">Vybírání porovnání</h3>
                <form onSubmit={submit} className="flex flex-col">
                    <input type="submit" value="Připojit" className="btn" />
                    <div className="flex flex-row w-full">
                        <div className="flex flex-col basis-1/2">
                            {previews.map((preview, index) => {
                                if (index % 2 == 0) {
                                    return (
                                        <label key={preview.id} className="swap swap-flip grid-cols-1">
                                            <input type="checkbox" id={preview.id} name={preview.id} className='preview-reset'/>
                                            <div className="swap-on text-primary">
                                                <UserPreview title={preview.title} isHighlighted={true} tags={preview.tags} beforePath={preview.images[0].path} beforeDescription={preview.images[0].description} afterPath={preview.images[1].path} afterDescription={preview.images[1].description} />
                                            </div>
                                            <div className="swap-off text-neutral">
                                                <UserPreview title={preview.title} tags={preview.tags} beforePath={preview.images[0].path} beforeDescription={preview.images[0].description} afterPath={preview.images[1].path} afterDescription={preview.images[1].description} />
                                            </div>
                                        </label>
                                    )
                                }
                            })}
                        </div>
                        <div className="flex flex-col basis-1/2">
                            {previews.map((preview, index) => {
                                if (index % 2 == 1) {
                                    return (
                                        <label key={preview.id} className="swap swap-flip grid-cols-1">
                                            <input type="checkbox" id={preview.id} name={preview.id} className='preview-reset'/>
                                            <div className="swap-on text-primary">
                                                <UserPreview title={preview.title} isHighlighted={true} tags={preview.tags} beforePath={preview.images[0].path} beforeDescription={preview.images[0].description} afterPath={preview.images[1].path} afterDescription={preview.images[1].description} />
                                            </div>
                                            <div className="swap-off text-neutral">
                                                <UserPreview title={preview.title} tags={preview.tags} beforePath={preview.images[0].path} beforeDescription={preview.images[0].description} afterPath={preview.images[1].path} afterDescription={preview.images[1].description} />
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

export default JoinPreviews