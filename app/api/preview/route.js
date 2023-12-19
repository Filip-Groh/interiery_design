import { getPreview, setPreview, delPreview } from '@/utils/database'
import { NextResponse } from 'next/server'

export async function GET() {
    const tags = await getTag()
    return NextResponse.json({data: tags}, { status: 200 })
}

export async function POST(request) {
    const formData = await request.formData()
    const title = formData.get('title')
    const image1 = Number(formData.get('image1'))
    const image2 = Number(formData.get('image2'))
    const tag = await setPreview(title, image1, image2)
    return NextResponse.json({data: tag}, { status: 200 })
}

export async function DELETE(request) {
    const formData = await request.formData()
    const id = Number(formData.get('id'))
    const tag = await delTag(id)
    return NextResponse.json({data: tag}, { status: 200 })
}