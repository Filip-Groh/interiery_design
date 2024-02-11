import { getComment, setComment, delComment } from '@/utils/database'
import { NextResponse } from 'next/server'

export async function GET() {
    const tags = await getComment()
    return NextResponse.json({data: tags}, { status: 200 })
}

export async function POST(request) {
    const formData = await request.formData()
    const name = formData.get('name')
    const tag = await setComment(name)
    return NextResponse.json({data: tag}, { status: 200 })
}

export async function DELETE(request) {
    const formData = await request.formData()
    const id = Number(formData.get('id'))
    const tag = await delComment(id)
    return NextResponse.json({data: tag}, { status: 200 })
}