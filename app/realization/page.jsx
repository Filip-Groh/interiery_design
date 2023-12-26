import React from 'react'
import { getRealization } from '@/utils/database'
import RealizationPreview from '../components/realization/realizationPreview'
import NavigationPath from '../components/navigation/navigation'

const Realizations = async () => {
    const realizations = await getRealization()

    return (
        <>
            <NavigationPath path={["Home", "Realizace"]} links={["/", "/realization"]} />
            <div className="flex flex-wrap justify-center w-full gap-10 my-10">
                {realizations.map((realization) => {
                    return <RealizationPreview key={realization.id} id={realization.id} title={realization.title} tags={realization.tags} />
                })}
            </div>
        </>
    )
}

export default Realizations