import React from 'react'
import { getImage, getPreview, getTag } from '@/utils/database'
import GalleryPage from '../components/gallery/galleryPage'

export const metadata = {
    title: 'Galerie',
}

const Gallery = async () => {
    const images = await getImage()
    const previews = await getPreview()
    const tags = await getTag()

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

    return (
        <GalleryPage defaultOutput={output} defaultTags={tags}/>
    )
}

export default Gallery