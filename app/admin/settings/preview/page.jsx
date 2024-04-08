import React from 'react'
import { getImage, getPreview, getTag } from '@/utils/database'
import ClientPreviewPage from '@/app/components/settings/preview/clientPreviewPage'

const PreviewSettings = async () => {
    const defaultPreviews = await getPreview()
    const images = await getImage()
    const tags = await getTag()

    return (
        <ClientPreviewPage defaultPreviews={defaultPreviews} images={images} tagsPass={tags}/>
    )
}

export default PreviewSettings