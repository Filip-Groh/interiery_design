import React from 'react'
import DisplayImage from './image'
import Tag from '../tag'

const UserImage = ({path, description, tags, isOpenable=true, isAnimated=false, isHighlighted=false}) => {
    return (
        <div className={`flex justify-center ${isAnimated ? "animate-fade-up" : ""}`}>
            <div className="w-full m-2 relative h-min flex justify-center">
                <div className="absolute bottom-2 left-2 right-2 flex flex-row gap-2 flex-wrap justify-between">
                    <p className='font-bold px-2 py-1 leading-[100%] bg-opacity-75 bg-base-300 rounded-lg z-10 text-neutral'>{description}</p>
                    <div>
                        {tags.map((tag) => {
                            return <Tag key={tag.id} name={tag.name} isHighlighted={isHighlighted}/>
                        })}
                    </div>
                </div>
                <DisplayImage classes='rounded-2xl' width={1000} height={1000} src={path} alt={description} isScaling={false} isOpenable={isOpenable}/>
            </div>
        </div>
    )
}

export default UserImage