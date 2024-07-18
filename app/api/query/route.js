import { delQuery, getQueries, setQuery } from '@/utils/database'
import { NextResponse } from 'next/server'

export async function GET() {
    const queries = await getQueries()
    return NextResponse.json({data: queries}, { status: 200 })
}

export async function POST(request) {
    const formData = await request.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    const text = formData.get('text')
    const query = await setQuery(name, email, text)
    return NextResponse.json({data: query}, { status: 200 })
}

export async function DELETE(request) {
    const formData = await request.formData()
    const id = Number(formData.get('id'))
    const query = await delQuery(id)
    return NextResponse.json({data: query}, { status: 200 })
}