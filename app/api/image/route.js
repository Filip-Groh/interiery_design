import { setImage, delImage, getImage } from '@/utils/database'
import { NextResponse } from 'next/server'

export async function GET() {
    const images = await getImage()
    return NextResponse.json({data: images}, { status: 200 })
}

export async function POST(request) {
    const formData = await request.formData()
    const file = formData.get('file')
    const description = formData.get('description')
    let tags = formData.get('tags')
    tags = tags.split(",")
    tags = tags.map(tag => {
        return tag.trim()
    })
    const image = await setImage(file, description, tags)
    return NextResponse.json({data: image}, { status: 200 })
}

export async function DELETE(request) {
    const formData = await request.formData()
    const id = Number(formData.get('id'))
    const tag = await delImage(id)
    return NextResponse.json({data: tag}, { status: 200 })
}