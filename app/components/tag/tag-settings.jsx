"use client"

import React from 'react'

const TagEditable = ({name}) => {
    return (
        <div className="rounded-md bg-slate-700 w-min h-min m-2 flex flex-row border-[1px] border-black">
            <p className="px-2 py-1">
                {name}
            </p>
            <span className="bg-black w-[1px]" />
            <form className="px-2 py-1">
                <button type="submit">DEL</button>
            </form>
        </div>
    )
}

export default TagEditable