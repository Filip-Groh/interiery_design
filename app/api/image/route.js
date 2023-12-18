import { setImage } from '@/utils/database'
import { NextResponse } from 'next/server'

export async function POST(request) {
    const formData = await request.formData()
    const file = formData.get('file')
    const description = formData.get('description')
    const image = await setImage(file, description)
    return NextResponse.json({data: image}, { status: 200 })
}