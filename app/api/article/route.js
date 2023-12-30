import { setArticle, delArticle } from '@/utils/database'
import { NextResponse } from 'next/server'

export async function POST(request) {
    const formData = await request.formData()
    const title = formData.get('title')
    const text = formData.get('text')
    let images = formData.get('images')
    images = images.split(",")
    images = images.map(image => {
        return image.trim()
    })
    let tags = formData.get('tags')
    tags = tags.split(",")
    tags = tags.map(tag => {
        return tag.trim()
    })
    const tag = await setArticle(title, text, images, tags)
    return NextResponse.json({data: tag}, { status: 200 })
}

export async function DELETE(request) {
    const formData = await request.formData()
    const id = Number(formData.get('id'))
    const tag = await delArticle(id)
    return NextResponse.json({data: tag}, { status: 200 })
}