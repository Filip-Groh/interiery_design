import { delRealization, setRealization } from '@/utils/database'
import { NextResponse } from 'next/server'

export async function POST(request) {
    const formData = await request.formData()
    const title = formData.get('title')
    const task = formData.get('task')
    const realization = await setRealization(title, task)
    return NextResponse.json({data: realization}, { status: 200 })
}

export async function DELETE(request) {
    const formData = await request.formData()
    const id = Number(formData.get('id'))
    const tag = await delRealization(id)
    return NextResponse.json({data: tag}, { status: 200 })
}