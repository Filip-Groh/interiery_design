import { setArticle, delArticle } from '@/utils/database'
import { NextResponse } from 'next/server'

export async function POST(request) {
    const formData = await request.formData()
    const title = formData.get('title')
    const text = formData.get('text')
    const tag = await setArticle(title, text)
    return NextResponse.json({data: tag}, { status: 200 })
}

export async function DELETE(request) {
    const formData = await request.formData()
    const id = Number(formData.get('id'))
    const tag = await delArticle(id)
    return NextResponse.json({data: tag}, { status: 200 })
}