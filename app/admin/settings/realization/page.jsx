import React from 'react'
import SettingsMenu from '@/app/components/settings/menu'
import RealizationDialog from '@/app/components/settings/realization/dialog'
import { getRealization, getImage, getPreview, getTag } from '@/utils/database'
import RealizationPreview from '@/app/components/gallery/2/realizationPreview'
import AddButton from '@/app/components/settings/add'

const RealizationSettings = async () => {
    const realizations = await getRealization()
    const firstHalfRealizations = realizations.filter((realization, index) => {return index % 2 == 0})
    const secondHalfRealization = realizations.filter((realization, index) => {return index % 2 == 1})

    const images = await getImage()
    const previews = await getPreview()
    const tags = await getTag()

    return (
        <SettingsMenu activeTabName="Realization">
            <div className="flex flex-col">
                <div className="flex flex-row w-full">
                    <div className="flex flex-col basis-1/2">
                        <AddButton modalId="addRealization" />
                        <RealizationDialog dialogId="addRealization" imagePass={images} previewPass={previews} tagsPass={tags} />
                        {firstHalfRealizations.map((realization) => {
                            return <RealizationPreview key={realization.id} id={realization.id} title={realization.title} description={realization.task} previewImage={realization.image[0]} />
                        })}
                    </div>
                    <div className="flex flex-col basis-1/2">
                        {secondHalfRealization.map((realization) => {
                            return <RealizationPreview key={realization.id} id={realization.id} title={realization.title} description={realization.task} previewImage={realization.image[0]} />
                        })}
                    </div>
                </div>
            </div>
        </SettingsMenu>
    )
}

export default RealizationSettings