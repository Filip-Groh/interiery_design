"use client"

import React from 'react'
import SettingsMenu from '@/app/components/settings/menu'
import RealizationDialog from '@/app/components/settings/realization/dialog'
import RealizationPreview from '@/app/components/settings/realization/realizationPreview'
import AddButton from '@/app/components/settings/add'

const ClientRealizationPage = ({defaultRealization, images, previews, tags}) => {
    const [realizations, setRealizations] = React.useState(defaultRealization)
    const [allImages, setAllImages] = React.useState(images)
    const [allPreviews, setAllPreviews] = React.useState(previews)

    React.useEffect(() => {
        async function getAllImages() {
            const response = await fetch('/api/image', {
                method: 'GET'
            })
    
            const images = await response.json()
            setAllImages(images.data)
        }
        getAllImages()
    }, [])

    React.useEffect(() => {
        async function getAllPreviews() {
            const response = await fetch('/api/preview', {
                method: 'GET'
            })
    
            const previews = await response.json()
            setAllPreviews(previews.data)
        }
        getAllPreviews()
    }, [])

    React.useEffect(() => {
        async function getAllRealizations() {
            const response = await fetch('/api/realization', {
                method: 'GET'
            })
    
            const realizations = await response.json()
            setRealizations(realizations.data)
        }
        getAllRealizations()
    }, [])

    return (
        <SettingsMenu activeTabName="Realization">
            <div className="flex flex-col">
                <div className="flex flex-row w-full">
                    <div className="flex flex-col basis-1/2">
                        <AddButton modalId="addRealization" />
                        <RealizationDialog dialogId="addRealization" imagePass={allImages} previewPass={allPreviews} tagsPass={tags} realizations={realizations} setRealizations={setRealizations}/>
                        {realizations.map((realization, index) => {
                            if (index % 2 == 0) {
                                return <RealizationPreview key={realization.id} id={realization.id} title={realization.title} description={realization.task} previewImage={realization.image[0]} tags={realization.tags} realizations={realizations} setRealizations={setRealizations}/>
                            }
                        })}
                    </div>
                    <div className="flex flex-col basis-1/2">
                        {realizations.map((realization, index) => {
                            if (index % 2 == 1) {
                                return <RealizationPreview key={realization.id} id={realization.id} title={realization.title} description={realization.task} previewImage={realization.image[0]} tags={realization.tags} realizations={realizations} setRealizations={setRealizations}/>
                            }
                        })}
                    </div>
                </div>
            </div>
        </SettingsMenu>
    )
}

export default ClientRealizationPage