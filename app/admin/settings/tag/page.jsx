import React from 'react'
import { getTag } from '@/utils/database'
import ClientTagPage from '@/app/components/settings/tag/clientTagPage'

const TagSettings = async () => {
    const defaultTags = await getTag()

    return (
        <ClientTagPage defaultTags={defaultTags} />
    )
}

export default TagSettings