import React from 'react'
import SettingsMenu from '@/app/components/settings/menu'
import AddRealization from '@/app/components/settings/realization/add'
import RealizationDialog from '@/app/components/settings/realization/dialog'
import { getRealization } from '@/utils/database'
import RealizationPreview from '@/app/components/gallery/2/realizationPreview'

const RealizationSettings = async () => {
    const previews = await getRealization()
    const firstHalfRealizations = previews.filter((realization, index) => {return index % 2 == 0})
    const secondHalfRealization = previews.filter((realization, index) => {return index % 2 == 1})

    return (
        <SettingsMenu activeTabName="Realization">
            <div className="flex flex-row w-full">
                <div className="flex flex-col basis-1/2">
                    <AddRealization modalId="addRealization" />
                    <RealizationDialog dialogId="addRealization" />
                    {firstHalfRealizations.map((realization) => {
                        return <RealizationPreview key={realization.id} id={realization.id} title={realization.title} description={realization.task} />
                    })}
                </div>
                <div className="flex flex-col basis-1/2">
                    {secondHalfRealization.map((realization) => {
                        return <RealizationPreview key={realization.id} id={realization.id} title={realization.title} description={realization.task} />
                    })}
                </div>
            </div>
        </SettingsMenu>
    )
}

export default RealizationSettings