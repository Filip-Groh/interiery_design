import { getDesigners } from '@/utils/database'
import React from 'react'

const Users = async () => {
    const queryOutput = await getDesigners()
    const value = JSON.stringify(queryOutput, null, 4)
    return (
        <div>{value}</div>
    )
}

export default Users