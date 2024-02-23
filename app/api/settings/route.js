import { setSettings, delSettings, getSettings } from '@/utils/database'
import { NextResponse } from 'next/server'

export async function GET(request) {
    const formData = await request.formData()
    const key = formData.get('key')
    let settings = await getSettings(key)
    return NextResponse.json({data: settings}, { status: 200 })
}

export async function POST(request) {
    const formData = await request.formData()
    const key = formData.get('key')
    const value = formData.get('value')
    let settings = await setSettings(key, value)
    return NextResponse.json({data: settings}, { status: 200 })
}

export async function DELETE(request) {
    const formData = await request.formData()
    const key = formData.get('key')
    const settings = await delSettings(key)
    return NextResponse.json({data: settings}, { status: 200 })
}