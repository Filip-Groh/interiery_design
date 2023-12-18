import { getTag, setTag, delTag } from '@/utils/database'
import { NextResponse } from 'next/server'

export async function GET() {
    const tags = await getTag()
    return NextResponse.json({data: tags}, { status: 200 })
}

export async function POST(request) {
    const formData = await request.formData()
    const name = formData.get('name')
    const tag = await setTag(name)
    return NextResponse.json({data: tag}, { status: 200 })
}

export async function DELETE(request) {
    const formData = await request.formData()
    const id = Number(formData.get('id'))
    const name = formData.get('name')
    const tag = await delTag(id, name)
    
    return NextResponse.json({data: tag}, { status: 200 })
}