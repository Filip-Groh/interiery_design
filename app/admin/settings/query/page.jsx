import React from 'react'
import { getQueries } from '@/utils/database'
import ClientQueryPage from '@/app/components/settings/query/clientQueryPage'

const Query = async () => {
    let queries = await getQueries()

    return (
        <ClientQueryPage defaultQueries={queries} />
    )
}

export default Query