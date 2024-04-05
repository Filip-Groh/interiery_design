import React from 'react'
import { getRealization, getImage, getPreview, getTag } from '@/utils/database'
import ClientRealizationPage from '@/app/components/settings/realization/clientRealizationPage'

const RealizationSettings = async () => {
    const defaultRealization = await getRealization()

    const images = await getImage()
    const previews = await getPreview()
    const tags = await getTag()

    return (
        <ClientRealizationPage defaultRealization={defaultRealization} images={images} previews={previews} tags={tags} />
    )
}

export default RealizationSettings