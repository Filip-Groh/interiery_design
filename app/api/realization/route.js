import { delRealization, setRealization } from '@/utils/database'
import { NextResponse } from 'next/server'

export async function POST(request) {
    const formData = await request.formData()
    const title = formData.get('title')
    const task = formData.get('task')
    let images = formData.get('images')
    images = images.split(",")
    images = images.map(image => {
        return image.trim()
    })
    let previews = formData.get('previews')
    previews = previews.split(",")
    previews = previews.map(preview => {
        return preview.trim()
    })
    let tags = formData.get('tags')
    tags = tags.split(",")
    tags = tags.map(tag => {
        return tag.trim()
    })
    const realization = await setRealization(title, task, images, previews, tags)
    return NextResponse.json({data: realization}, { status: 200 })
}

export async function DELETE(request) {
    const formData = await request.formData()
    const id = Number(formData.get('id'))
    const tag = await delRealization(id)
    return NextResponse.json({data: tag}, { status: 200 })
}