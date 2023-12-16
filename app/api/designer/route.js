import { setDesigner } from '@/utils/database'
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