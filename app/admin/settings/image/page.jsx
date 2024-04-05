import React from 'react'
import { getImage } from '@/utils/database'
import ClientImagePage from '@/app/components/settings/image/clientImagePage'

const ImageSettings = async () => {
    let defaultImages = await getImage()

    return (
        <ClientImagePage defaultImages={defaultImages} />
    )
}

export default ImageSettings