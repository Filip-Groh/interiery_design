import React from 'react'
import { getQandA } from '@/utils/database'
import ClientQandAPage from '@/app/components/settings/QandA/clientQandAPage'

const QandA = async () => {
    let QandAs = await getQandA()

    return (

        <ClientQandAPage defaultQandAs={QandAs}/>
    )
}

export default QandA