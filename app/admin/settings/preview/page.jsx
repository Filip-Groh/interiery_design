import React from 'react'
import DatabasePreview from '@/app/components/images/databasePreview'
import { getImage, getPreview } from '@/utils/database'
import SettingsMenu from '@/app/components/settings/menu'
import AddPreview from '@/app/components/settings/preview/add'
import PreviewDialog from '@/app/components/settings/preview/dialog'

const PreviewSettings = async () => {
    const previews = await getPreview()
    const firstHalfPreviews = previews.filter((preview, index) => {return index % 2 == 0})
    const secondHalfPreviews = previews.filter((preview, index) => {return index % 2 == 1})

    const images = await getImage()

    return (
        <SettingsMenu activeTabName="Preview">
            <div className="flex flex-row w-full">
                <div className="flex flex-col basis-1/2">
                    <AddPreview modalId="addPreview" />
                    <PreviewDialog dialogId="addPreview" images={images} />
                    {firstHalfPreviews.map((preview) => {
                        let isDependent = preview.realizationId !== null
                        return <DatabasePreview key={preview.id} id={preview.id} title={preview.title} beforePath={preview.images[0].path} beforeDescription={preview.images[0].description} afterPath={preview.images[1].path} afterDescription={preview.images[1].description} isDependent={isDependent} />
                    })}
                </div>
                <div className="flex flex-col basis-1/2">
                    {secondHalfPreviews.map((preview) => {
                        let isDependent = preview.realizationId !== null
                        return <DatabasePreview key={preview.id} id={preview.id} title={preview.title} beforePath={preview.images[0].path} beforeDescription={preview.images[0].description} afterPath={preview.images[1].path} afterDescription={preview.images[1].description} isDependent={isDependent} />
                    })}
                </div>
            </div>
        </SettingsMenu>
    )
}

export default PreviewSettings