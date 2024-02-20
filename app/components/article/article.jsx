import React from 'react'
import Comment from '@/app/components/comment/comment'
import UserImage from '../images/userImage'
import WriteComment from '../comment/writeComment'
import { auth } from '@/app/api/auth/[...nextauth]/auth'

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

                <div className='flex w-full snap-x items-center gap-4 overflow-x-auto bg-base-300 rounded-2xl'>
                    {images.map((image) => {
                        return (<div key={image.id} className='h-auto w-[40rem] shrink-0 snap-center'>
                            <UserImage path={image.path} description={image.description} />
                        </div>)
                    })}
                </div>

                <WriteComment session={session} id={id} realizationOrArticle="ARTICLE" />

                {comments?.length > 0 ? <h2>Komentáře</h2> : null}
                <ul className="flex flex-col gap-2">
                    {comments?.map((comment, index) => {
                        return <Comment key={comment.id} session={session} id={comment.id} name={comment.user.name} email={comment.user.email} image={comment.user.image} title={comment.title} text={comment.text} likes={comment.likes} createdDate={comment.createDate} updatedDate={comment.updateDate} state={state[index]} />
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Article