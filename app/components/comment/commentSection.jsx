"use client"

import React from 'react'
import Comment from '@/app/components/comment/comment'
import WriteComment from '../comment/writeComment'

const CommentSection = ({session, id, realizationOrArticle, defaultComments, state}) => {
    const [comments, setComments] = React.useState(defaultComments)

    return (
        <>
            <WriteComment session={session} id={id} realizationOrArticle={realizationOrArticle} comments={comments} setComments={setComments}/>
            <ul className="flex flex-col gap-2 mb-4">
                {comments?.map((comment, index) => {
                    return <Comment key={comment.id} session={session} id={comment.id} comments={comments} setComments={setComments} name={comment.user.name} email={comment.user.email} image={comment.user.image} title={comment.title} text={comment.text} likes={comment.likes} state={state[index]} />
                })}
            </ul>
        </>
    )
}

export default CommentSection