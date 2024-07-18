"use client"

import React from 'react'
import SettingsMenu from '@/app/components/settings/menu'
import AddTag from '@/app/components/settings/tag/add'
import TagDialog from '@/app/components/settings/tag/dialog'
import TagEditable from '@/app/components/settings/tag/tag-settings'

const ClientTagPage = ({defaultTags}) => {
    const [tags, setTags] = React.useState(defaultTags)

    React.useEffect(() => {
        async function getAllTags() {
            const response = await fetch('/api/tag', {
                method: 'GET'
            })
    
            const tags = await response.json()
            setTags(tags.data)
        }
        getAllTags()
    }, [])

    return (
        <SettingsMenu activeTabName="Tag">
            <div className="flex flex-row flex-wrap">
                <AddTag modalId="addTag" />
                <TagDialog dialogId="addTag" tags={tags} setTags={setTags}/>
                {tags.map((tag) => {
                    let isDependent = tag._count.article !== 0 || tag._count.realization !== 0
                    return <TagEditable key={tag.id} id={tag.id} name={tag.name} isDependent={isDependent} tags={tags} setTags={setTags}/>
                })}
            </div>
        </SettingsMenu>
    )
}

export default ClientTagPage