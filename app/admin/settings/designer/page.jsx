import React from 'react'
import { getDesigner, getImage, getTag } from '@/utils/database'
import ClientDesignerPage from '@/app/components/settings/designer/clientDesignerPage'

const DesignerSettings = async () => {
    const designers = await getDesigner()
    const images = await getImage()
    const tags = await getTag()

    return (
        <ClientDesignerPage defaultDesigners={designers} imagesPass={images} tagsPass={tags}/>
    )
}

export default DesignerSettings