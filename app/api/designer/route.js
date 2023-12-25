import { delDesigner, modDesigner, setDesigner } from '@/utils/database'
import { NextResponse } from 'next/server'

export async function POST(request) {
    const formData = await request.formData()
    const name = formData.get('name')
    const role = formData.get('role')
    const email = formData.get('email')
    const phone = formData.get('phone')
    const designer = await setDesigner(name, role, email, phone)
    return NextResponse.json({data: designer}, { status: 200 })
}

export async function DELETE(request) {
    const formData = await request.formData()
    const id = Number(formData.get('id'))
    const tag = await delDesigner(id)
    return NextResponse.json({data: tag}, { status: 200 })
}

export async function PATCH(request) {
    const formData = await request.formData()
    const id = Number(formData.get('id'))
    const name = formData.get('name')
    const role = formData.get('role')
    const email = formData.get('email')
    const phone = formData.get('phone')
    const designer = await modDesigner(id, name, role, email, phone)
    return NextResponse.json({data: designer}, { status: 200 })
}