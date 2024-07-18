import { delQandA, getQandA, setQandA } from '@/utils/database'
import { NextResponse } from 'next/server'

export async function GET() {
    const qandas = await getQandA()
    return NextResponse.json({data: qandas}, { status: 200 })
}

export async function POST(request) {
    const formData = await request.formData()
    const question = formData.get('question')
    const answer = formData.get('answer')
    const query = await setQandA(question, answer)
    return NextResponse.json({data: query}, { status: 200 })
}

export async function DELETE(request) {
    const formData = await request.formData()
    const id = Number(formData.get('id'))
    const query = await delQandA(id)
    return NextResponse.json({data: query}, { status: 200 })
}