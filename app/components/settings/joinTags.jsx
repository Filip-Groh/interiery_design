import React from 'react'
import Tag from '../tag'

const JoinTags = ({dialogId, update, tags}) => {
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
                <h3 className="font-bold text-lg mb-2 text-neutral">Vybírání tagů</h3>
                <form onSubmit={submit} className="flex flex-col">
                    <input type="submit" value="Připojit" className="btn" />
                    <div className="flex flex-row w-full">
                        {tags.map((tag) => {
                            return (
                                <label key={tag.id} className="swap swap-flip">
                                    <input type="checkbox" id={tag.id} name={tag.id} className="min-h-full min-w-full" />
                                    <div className="swap-on text-cyan-400">
                                        <Tag name={tag.name} isHighlighted={true} />
                                    </div>
                                    <div className="swap-off">
                                        <Tag name={tag.name} isHighlighted={false} />
                                    </div>
                                </label>
                            )
                        })}
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

export default JoinTags