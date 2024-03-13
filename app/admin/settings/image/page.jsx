import React from 'react'
import { getImage } from '@/utils/database'
import DatabaseImage from '@/app/components/images/databaseImage'
import AddButton from '@/app/components/settings/add'
import ImageDialog from '@/app/components/settings/image/dialog'
import SettingsMenu from '@/app/components/settings/menu'

const ImageSettings = async () => {
    const images = await getImage()
    const firstHalfImages = images.filter((image, index) => {return index % 2 == 0})
    const secondHalfImages = images.filter((image, index) => {return index % 2 == 1})

    return (
        <SettingsMenu activeTabName="Image">
            <div className="flex flex-col">
                <div className="flex flex-row w-full">
                    <div className="flex flex-col basis-1/2">
                        <AddButton modalId="addImage" />
                        <ImageDialog dialogId="addImage" />
                        {firstHalfImages.map((image) => {
                            let isDependent = image._count.realization !== 0 || image._count.article !== 0 || image.userId !== null || image._count.preview !== 0 || image._count.Designer !== 0
                            return <DatabaseImage key={image.id} id={image.id} path={image.path} description={image.description} isDependent={isDependent} />
                        })}
                    </div>
                    <div className="flex flex-col basis-1/2">
                        {secondHalfImages.map((image) => {
                            let isDependent = image._count.realization !== 0 || image._count.article !== 0 || image.userId !== null || image._count.preview !== 0 || image._count.Designer !== 0
                            return <DatabaseImage key={image.id} id={image.id} path={image.path} description={image.description} isDependent={isDependent} />
                        })}
                    </div>
                </div>
            </div>
        </SettingsMenu>
    )
}

export default ImageSettings