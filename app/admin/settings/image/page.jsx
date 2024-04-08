import React from 'react'
import { getImage, getTag } from '@/utils/database'
import ClientImagePage from '@/app/components/settings/image/clientImagePage'

const ImageSettings = async () => {
    let defaultImages = await getImage()
    let tags = await getTag()

    return (
        <ClientImagePage defaultImages={defaultImages} tagsPass={tags}/>
    )
}

export default ImageSettings