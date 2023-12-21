import { setImage, delImage } from '@/utils/database'
import { NextResponse } from 'next/server'

export async function POST(request) {
    const formData = await request.formData()
    const file = formData.get('file')
    const description = formData.get('description')
    const image = await setImage(file, description)
    return NextResponse.json({data: image}, { status: 200 })
}

export async function DELETE(request) {
    const formData = await request.formData()
    const id = Number(formData.get('id'))
    const tag = await delImage(id)
    return NextResponse.json({data: tag}, { status: 200 })
}