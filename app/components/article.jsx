import React from 'react'
import Comment from '@/app/components/comment/comment'
import UserImage from './images/userImage'

const Article = ({comments, images, tags, title, text, createDate}) => {
    return (
        <div className="flex flex-row justify-center">
            <div className="w-3/4">
                <div>
                    <div className="flex flex-row justify-between">
                        <h1>{title}</h1>
                        <p>{createDate.toLocaleString()}</p>
                    </div>

                    <UserImage path={images[0]?.path} description={images[0]?.description}/>
                </div>

                <ul className="flex flex-row gap-2">
                    {tags.map((tag) => {
                        return <li key={tag.id} className="rounded-md bg-slate-500 px-2">{tag.name}</li>
                    })}
                </ul>

                <p className="m-4">
                    {text}
                </p>

                {images.map((image) => {
                    <UserImage key={image.id} path={image.path} description={image.description} />
                })}

                {comments?.length > 0 ? <h2>Komentáře</h2> : null}
                <ul className="flex flex-col gap-2">
                    {comments?.map((comment) => {
                        <Comment />
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Article