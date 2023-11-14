import { queryData } from '@/utils/database'
import React from 'react'

const Database = async () => {
    const queryOutput = await queryData()
    const value = JSON.stringify(queryOutput, null, 4)
    return (
        <div>{value}</div>
    )
}

export default Database