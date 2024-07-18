import { setPreview, delPreview, getPreview } from '@/utils/database'
import { NextResponse } from 'next/server'

export async function GET() {
    const previews = await getPreview()
    return NextResponse.json({data: previews}, { status: 200 })
}

export async function POST(request) {
    const formData = await request.formData()
    const title = formData.get('title')
    const image1 = Number(formData.get('image1'))
    const image2 = Number(formData.get('image2'))
    let tags = formData.get('tags')
    tags = tags.split(",")
    tags = tags.map(tag => {
        return tag.trim()
    })
    const tag = await setPreview(title, image1, image2, tags)
    return NextResponse.json({data: tag}, { status: 200 })
}

export async function DELETE(request) {
    const formData = await request.formData()
    const id = Number(formData.get('id'))
    const tag = await delPreview(id)
    return NextResponse.json({data: tag}, { status: 200 })
}