import React from 'react'
import Comment from '@/app/components/comment/comment'
import UserImage from '../images/userImage'
import WriteComment from '../comment/writeComment'
import { auth } from '@/app/api/auth/[...nextauth]/auth'
import Tag from '../tag'

const Article = async ({id, comments, images, tags, title, text, createDate}) => {
    const session = await auth()
    const state = comments.map((comment) => {
        if (comment.likers.length > 0 && comment.likers.reduce((previousValue, currentValue, index) => {
            return previousValue || currentValue.id == session?.user?.id
        })) {
            return 1
        } else if (comment.dislikers.length > 0 && comment.dislikers.reduce((previousValue, currentValue, index) => {
            return previousValue || currentValue.id == session?.user?.id
        })) {
            return -1
        }
        return 0
    })
    // -1 = dislike
    // 0 = neutral
    // 1 = like

    return (
        <div className="flex flex-row justify-center">
            <div className="w-3/4">
                <div className='text-neutral'>
                    <div className="flex flex-row justify-between">
                        <h1>{title}</h1>
                        <p>{createDate.toLocaleString()}</p>
                    </div>

                    <UserImage path={images[0]?.path} description={images[0]?.description}/>
                </div>

                <div className="flex flex-row gap-2">
                    {tags.map((tag) => {
                        return <Tag key={tag.id} name={tag.name} />
                    })}
                </div>

                <p className="m-4 text-neutral">
                    {text}
                </p>

                <div className='flex w-full snap-x items-center gap-4 overflow-x-auto bg-base-300 rounded-2xl text-neutral'>
                    {images.map((image) => {
                        return (<div key={image.id} className='h-auto w-[min(40rem,80vw)] shrink-0 snap-center'>
                            <UserImage path={image.path} description={image.description} />
                        </div>)
                    })}
                </div>

                <h2>Komentáře</h2>

                <WriteComment session={session} id={id} realizationOrArticle="ARTICLE" />

                <ul className="flex flex-col gap-2 mb-4">
                    {comments?.map((comment, index) => {
                        return <Comment key={comment.id} session={session} id={comment.id} name={comment.user.name} email={comment.user.email} image={comment.user.image} title={comment.title} text={comment.text} likes={comment.likes} state={state[index]} />
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Article