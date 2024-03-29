import React from 'react'
import DisplayImage from './image'

const UserImage = ({path, description, isOpenable=true}) => {
    return (
        <div className="flex justify-center">
            <div className="w-full m-2 relative h-min flex justify-center">
                <p className='absolute bottom-2 left-2 font-bold px-2 py-1 leading-[100%] bg-opacity-75 bg-base-300 rounded-lg z-10'>{description}</p>
                <DisplayImage classes='rounded-2xl' width={1000} height={1000} src={path} alt={description} isScaling={false} isOpenable={isOpenable}/>
            </div>
        </div>
    )
}

export default UserImage