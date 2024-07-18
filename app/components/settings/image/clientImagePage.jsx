"use client"

import React from 'react'
import DatabaseImage from '@/app/components/images/databaseImage'
import AddButton from '@/app/components/settings/add'
import ImageDialog from '@/app/components/settings/image/dialog'
import SettingsMenu from '@/app/components/settings/menu'

const ClientImagePage = ({defaultImages, tagsPass}) => {
    const [images, setImages] = React.useState(defaultImages)

    React.useEffect(() => {
        async function getAllImages() {
            const response = await fetch('/api/image', {
                method: 'GET'
            })
    
            const images = await response.json()
            setImages(images.data)
        }
        getAllImages()
    }, [])

    return (
        <SettingsMenu activeTabName="Image">
            <div className="flex flex-col">
                <div className="flex flex-row w-full">
                    <div className="flex flex-col basis-1/2">
                        <AddButton modalId="addImage" />
                        <ImageDialog dialogId="addImage" images={images} setImages={setImages} tagsPass={tagsPass}/>
                        {images.map((image, index) => {
                            if (index % 2 == 0) {
                                let isDependent = image._count.realization !== 0 || image._count.article !== 0 || image._count.preview !== 0 || image._count.Designer !== 0
                                return <DatabaseImage key={image.id} id={image.id} path={image.path} description={image.description} isDependent={isDependent} images={images} setImages={setImages} tags={image.tags}/>
                            }
                        })}
                    </div>
                    <div className="flex flex-col basis-1/2">
                        {images.map((image, index) => {
                            if (index % 2 == 1) {
                                let isDependent = image._count.realization !== 0 || image._count.article !== 0 || image._count.preview !== 0 || image._count.Designer !== 0
                                return <DatabaseImage key={image.id} id={image.id} path={image.path} description={image.description} isDependent={isDependent} images={images} setImages={setImages} tags={image.tags}/>
                            }
                        })}
                    </div>
                </div>
            </div>
        </SettingsMenu>
    )
}

export default ClientImagePage