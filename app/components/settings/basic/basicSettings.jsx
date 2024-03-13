import React from 'react'

const BasicSettings = ({children, title}) => {
    return (
        <div className="m-2 h-min rounded-lg border-4 border-black text-neutral">
            <h2 className='ml-2 mt-1 w-full text-center text-xl'>{title}</h2>
            <div className="p-4 pt-2">
                {children}
            </div>
        </div>
    )
}

export default BasicSettings