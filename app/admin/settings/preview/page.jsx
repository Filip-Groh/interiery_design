import React from 'react'
import DatabasePreview from '@/app/components/images/databasePreview'
import { getPreview } from '@/utils/database'
import SettingsMenu from '@/app/components/settings/menu'

const PreviewSettings = async () => {
    const previews = await getPreview()
    const firstHalfPreviews = previews.filter((preview, index) => {return index % 2 == 0})
    const secondHalfPreviews = previews.filter((preview, index) => {return index % 2 == 1})

    return (
        <SettingsMenu activeTabName="Preview">
            <div className="flex flex-row w-full">
                <div className="flex flex-col basis-1/2">
                    {firstHalfPreviews.map((preview) => {
                        return <DatabasePreview key={preview.id} title={preview.title} beforePath={preview.images[0].path} beforeDescription={preview.images[0].description} afterPath={preview.images[1].path} afterDescription={preview.images[1].description} />
                    })}
                </div>
                <div className="flex flex-col basis-1/2">
                    {secondHalfPreviews.map((preview) => {
                        return <DatabasePreview key={preview.id} title={preview.title} beforePath={preview.images[0].path} beforeDescription={preview.images[0].description} afterPath={preview.images[1].path} afterDescription={preview.images[1].description} />
                    })}
                </div>
            </div>
        </SettingsMenu>
    )
}

export default PreviewSettings