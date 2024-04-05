import React from 'react'
import { getImage, getPreview } from '@/utils/database'
import ClientPreviewPage from '@/app/components/settings/preview/clientPreviewPage'

const PreviewSettings = async () => {
    const defaultPreviews = await getPreview()
    const images = await getImage()

    return (
        <ClientPreviewPage defaultPreviews={defaultPreviews} images={images} />
    )
}

export default PreviewSettings