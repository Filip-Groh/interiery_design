"use client"

import React from 'react'
import SettingsMenu from '@/app/components/settings/menu'
import QueryItem from '@/app/components/settings/query/queryItem'

const ClientQueryPage = ({defaultQueries}) => {
    const [queries, setQueries] = React.useState(defaultQueries)

    return (
        <SettingsMenu activeTabName="Query">
            <div className='w-full'>
                <div className="flex justify-center py-2 w-full">
                    <div className='w-11/12 bg-base-100 rounded-xl p-2 text-neutral'>
                        <div className='flex flex-row items-center'>
                            <p className='text-left basis-1/5'>Otevřít</p>
                            <p className='text-center basis-1/5'>Jméno</p>
                            <p className='text-center basis-1/5'>Email</p>
                            <p className='text-center basis-1/5'>Datum</p>
                            <p className='text-right basis-1/5'>Smazat</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-2 items-center'>
                    {queries.map((query) => {
                        return (<QueryItem key={query.id} id={query.id} name={query.name} email={query.email} createDate={query.createDate} query={query.query} queries={queries} setQueries={setQueries}/>)
                    })}
                </div>
            </div>
        </SettingsMenu>
    )
}

export default ClientQueryPage