import React from 'react'
import { getDesigner, getImage } from '@/utils/database'
import ClientDesignerPage from '@/app/components/settings/designer/clientDesignerPage'

const DesignerSettings = async () => {
    const designers = await getDesigner()
    const images = await getImage()

    return (
        <ClientDesignerPage defaultDesigners={designers} imagesPass={images}/>
    )
}

export default DesignerSettings