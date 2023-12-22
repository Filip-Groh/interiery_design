import React from 'react'
import Comment from '@/app/components/comment/comment'
import UserImage from './images/userImage'
import UserPreview from './images/userPreview'

const Realization = ({comments, images, previews, tags, title, task, createDate}) => {
    return (
        <div className="flex flex-row justify-center">
            <div className="w-3/4">
                <div>
                    <div className="flex flex-row justify-between">
                        <h1>{title}</h1>
                        <p>{createDate.toLocaleString()}</p>
                    </div>

                    <UserImage path="/logo.jpg" description="aaa"/>
                </div>

                <ul className="flex flex-row gap-2">
                    {tags.map((tag) => {
                        return <li key={tag.id} className="rounded-md bg-slate-500 px-2">{tag.name}</li>
                    })}
                </ul>

                <p className="m-4">
                    {task}
                </p>

                {images.map((image) => {
                    return <UserImage key={image.id} path={image.path} description={image.description} />
                })}

                {previews.map((preview) => {
                    return <UserPreview key={preview.id} title={preview.title} beforePath={preview.path} beforeDescription={preview.description} afterPath={preview.path} afterDescription={preview.description} />
                })}

                {comments?.length > 0 ? <h2>Komentáře</h2> : null}
                <ul className="flex flex-col gap-2">
                    {comments?.map((comment) => {
                        return <Comment />
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Realization