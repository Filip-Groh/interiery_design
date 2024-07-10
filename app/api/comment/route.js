import { delComment, getCommentById, updateLikesOnComment, likeComment, dislikeComment, unComment, setRealizationComment, setArticleComment } from '@/utils/database'
import { NextResponse } from 'next/server'

export async function POST(request) {
    const formData = await request.formData()
    const text = formData.get('text')
    const userName = formData.get('userName')
    const userEmail = formData.get('userEmail')
    const id = Number(formData.get('id'))
    const realizationOrArticle = formData.get('realizationOrArticle')
    if (realizationOrArticle == "REALIZATION") {
        const comment = await setRealizationComment(text, userName, userEmail, id)
        return NextResponse.json({data: comment}, { status: 200 })
    } else if (realizationOrArticle == "ARTICLE") {
        const comment = await setArticleComment(text, userName, userEmail, id)
        return NextResponse.json({data: comment}, { status: 200 })
    }
    return NextResponse.json({ status: 200 })
}

export async function DELETE(request) {
    const formData = await request.formData()
    const id = Number(formData.get('id'))
    const comment = await delComment(id)
    return NextResponse.json({data: comment}, { status: 200 })
}

export async function PUT(request) {
    const formData = await request.formData()
    const operationType = formData.get("operationType")
    const userEmail = formData.get('userEmail')
    const commentId = Number(formData.get('commentId'))
    const comment = await getCommentById(commentId)

    let userLiked = false
    if (comment.likers.length > 0) {
        comment.likers.forEach((value) => {
            userLiked = userLiked || value.email == userEmail
        })
    }

    let userDisliked = false
    if (comment.dislikers.length > 0) {
        comment.dislikers.forEach((value) => {
            userDisliked = userDisliked || value.email == userEmail
        })
    }

    await unComment(userEmail, commentId)
    if (operationType == "LIKE") {
        if (!userLiked) {
            await likeComment(userEmail, commentId)
        }
    } else if (operationType == "DISLIKE") {
        if (!userDisliked) {
            await dislikeComment(userEmail, commentId)
        }
    }
    await updateLikesOnComment(commentId)
    return NextResponse.json({ status: 200 })
}