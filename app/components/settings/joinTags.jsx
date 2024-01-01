import React from 'react'

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
                <h3 className="font-bold text-lg mb-2">Selecting Previews</h3>
                <form onSubmit={submit} className="flex flex-col">
                    <input type="submit" value="Submit" className="btn" />
                    <div className="flex flex-row w-full">
                        {tags.map((tag) => {
                            return (
                                <label key={tag.id} className="swap swap-flip">
                                    <input type="checkbox" id={tag.id} name={tag.id} className="min-h-full min-w-full" />
                                    <div className="swap-on text-cyan-400">
                                        <p className="rounded-md bg-slate-500 px-2">{tag.name}</p>
                                    </div>
                                    <div className="swap-off">
                                        <p className="rounded-md bg-slate-500 px-2">{tag.name}</p>
                                    </div>
                                </label>
                            )
                        })}
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

export default JoinTags