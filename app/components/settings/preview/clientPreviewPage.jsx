"use client"

import React from 'react'
import SettingsMenu from '@/app/components/settings/menu'
import PreviewDialog from '@/app/components/settings/preview/dialog'
import AddButton from '@/app/components/settings/add'
import DatabasePreview from '@/app/components/images/databasePreview'

const ClientPreviewPage = ({defaultPreviews, images, tagsPass}) => {
    const [previews, setPreviews] = React.useState(defaultPreviews)

    return (
        <SettingsMenu activeTabName="Preview">
            <div className="flex flex-row w-full">
                <div className="flex flex-col basis-1/2">
                    <AddButton modalId="addPreview" />
                    <PreviewDialog dialogId="addPreview" images={images} previews={previews} setPreviews={setPreviews} tagsPass={tagsPass}/>
                    {previews.map((preview, index) => {
                        if (index % 2 == 0) {
                            let isDependent = preview._count.realization !== 0
                            return <DatabasePreview key={preview.id} id={preview.id} title={preview.title} tags={preview.tags} beforePath={preview.images[0].path} beforeDescription={preview.images[0].description} afterPath={preview.images[1].path} afterDescription={preview.images[1].description} isDependent={isDependent} previews={previews} setPreviews={setPreviews}/>    
                        }
                    })}
                </div>
                <div className="flex flex-col basis-1/2">
                    {previews.map((preview, index) => {
                        if (index % 2 == 1) {
                            let isDependent = preview._count.realization !== 0
                            return <DatabasePreview key={preview.id} id={preview.id} title={preview.title} tags={preview.tags} beforePath={preview.images[0].path} beforeDescription={preview.images[0].description} afterPath={preview.images[1].path} afterDescription={preview.images[1].description} isDependent={isDependent} previews={previews} setPreviews={setPreviews}/>
                        }
                    })}
                </div>
            </div>
        </SettingsMenu>
    )
}

export default ClientPreviewPage