import { getImageWithTags, getPreviewWithTags, getImage, getPreview} from '@/utils/database'
import { NextResponse } from 'next/server'

export async function PATCH(request) {
    let images, previews
    const formData = await request.formData()
    let tags = formData.get('tags')
    if (tags.length > 0) {
        tags = tags.split(",")
        tags = tags.map(tag => {
            return Number(tag.trim())
        })
        images = await getImageWithTags(tags)
        previews = await getPreviewWithTags(tags)
    } else {
        images = await getImage()
        previews = await getPreview()
    }

    let output = []
    while (images.length > 0 || previews.length > 0) {
        if (images.length == 0) {
            previews.forEach((preview) => {
                output.push({
                    type: "Preview",
                    data: preview
                })
            })
            break
        }
        if (previews.length == 0) {
            images.forEach((image) => {
                output.push({
                    type: "Image",
                    data: image
                })
            })
            break
        }

        let currentImage = images[0]
        let currentPreview = previews[0]
        let imageDate = currentImage.createDate
        let previewDate = currentPreview.createDate
        if (imageDate > previewDate) {
            output.push({
                type: "Image",
                data: currentImage
            })
            images.shift()
        } else if (previewDate > imageDate) {
            output.push({
                type: "Preview",
                data: currentPreview
            })
            previews.shift()
        } else {
            output.push({
                type: "Image",
                data: currentImage
            })
            output.push({
                type: "Preview",
                data: currentPreview
            })
            images.shift()
            previews.shift()
        }
    }
    return NextResponse.json({data: output}, { status: 200 })
}