"use client"

import React from 'react'
import SettingsMenu from '@/app/components/settings/menu'
import RealizationDialog from '@/app/components/settings/realization/dialog'
import RealizationPreview from '@/app/components/settings/realization/realizationPreview'
import AddButton from '@/app/components/settings/add'

const ClientRealizationPage = ({defaultRealization, images, previews, tags}) => {
    const [realizations, setRealizations] = React.useState(defaultRealization)

    return (
        <SettingsMenu activeTabName="Realization">
            <div className="flex flex-col">
                <div className="flex flex-row w-full">
                    <div className="flex flex-col basis-1/2">
                        <AddButton modalId="addRealization" />
                        <RealizationDialog dialogId="addRealization" imagePass={images} previewPass={previews} tagsPass={tags} realizations={realizations} setRealizations={setRealizations}/>
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