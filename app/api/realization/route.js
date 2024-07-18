import { getRealizationBySet, delRealization, setRealization, getNumberOfRealizations, getRealizationBySetWithTags, getNumberOfRealizationsWithTags, getRealization } from '@/utils/database'
import { NextResponse } from 'next/server'

export async function GET() {
    const realizations = await getRealization()
    return NextResponse.json({data: realizations}, { status: 200 })
}

export async function PUT(request) {
    const formData = await request.formData()
    let tags = formData.get('tags')
    if (tags.length > 0) {
        tags = tags.split(",")
        tags = tags.map(tag => {
            return Number(tag.trim())
        })

        let count = await getNumberOfRealizationsWithTags(tags)
        return NextResponse.json({data: count}, { status: 200 })
    }
    let count = await getNumberOfRealizations()
    return NextResponse.json({data: count}, { status: 200 })
}

export async function PATCH(request) {
    const formData = await request.formData()
    const pageSize = Number(formData.get('pageSize'))
    const currentPage = Number(formData.get('currentPage'))
    let tags = formData.get('tags')
    if (tags.length > 0) {
        tags = tags.split(",")
        tags = tags.map(tag => {
            return Number(tag.trim())
        })
        let realizations = await getRealizationBySetWithTags(pageSize, currentPage, tags)
        return NextResponse.json({data: realizations}, { status: 200 })
    }
    let realizations = await getRealizationBySet(pageSize, currentPage)
    return NextResponse.json({data: realizations}, { status: 200 })
}

export async function POST(request) {
    const formData = await request.formData()
    const title = formData.get('title')
    const task = formData.get('task')
    let images = formData.get('images')
    images = images.split(",")
    images = images.map(image => {
        return image.trim()
    })
    let previews = formData.get('previews')
    if (previews.length > 0) {
        previews = previews.split(",")
        previews = previews.map(preview => {
            return preview.trim()
        })
    } else {
        previews = []
    }
    let tags = formData.get('tags')
    tags = tags.split(",")
    tags = tags.map(tag => {
        return tag.trim()
    })
    const realization = await setRealization(title, task, images, previews, tags)
    return NextResponse.json({data: realization}, { status: 200 })
}

export async function DELETE(request) {
    const formData = await request.formData()
    const id = Number(formData.get('id'))
    const tag = await delRealization(id)
    return NextResponse.json({data: tag}, { status: 200 })
}