import React from 'react'
import RealizationPage from '../components/realization/realizationPage'
import { getNumberOfRealizations, getRealizationBySet, getSettings, getTag } from '@/utils/database'

export const metadata = {
    title: 'Realizace',
}

const Realizations = async () => {
    const pageSize = await getSettings("pageSize")
    const defaultPageSize = JSON.parse(pageSize?.value || "0")

    const newDuration = await getSettings("newDuration")
    const defaultNewDuration = JSON.parse(newDuration?.value || "0")

    const numberOfPages = await getNumberOfRealizations()
    const defaultNumberOfPages = Math.ceil(numberOfPages / defaultPageSize)

    const realizations = await getRealizationBySet(defaultPageSize, 1)

    const tags = await getTag()

    return (
        <RealizationPage pageSize={defaultPageSize} defaultNumberOfPages={defaultNumberOfPages} defaultRealizations={realizations} defaultTags={tags} defaultNewDuration={defaultNewDuration}/>
    )
}

export default Realizations