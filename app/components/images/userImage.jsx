import React from 'react'
import DisplayImage from './image'

const UserImage = ({path, description, isOpenable=true}) => {
    return (
        <div className="flex justify-center">
            <div className="w-full m-2 relative h-min flex justify-center">
                <div className="absolute bottom-2 left-2 flex flex-row bg-black bg-opacity-50 rounded-2xl p-2">                
                    <h1 className="font-bold px-2 z-10">{description}</h1>
                </div>
                <DisplayImage classes='rounded-2xl' width={1000} height={1000} src={path} alt={description} isScaling={false} isOpenable={isOpenable}/>
            </div>
        </div>
    )
}

export default UserImage