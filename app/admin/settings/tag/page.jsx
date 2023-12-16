import TagEditable from '@/app/components/tag/tag-settings'
import React from 'react'
import { getTags } from '@/utils/database'
import SettingsMenu from '@/app/components/settings/menu'

const TagSettings = async () => {
    const tags = await getTags()

    return (
        <SettingsMenu activeTabName="Tag">
            <div className="flex flex-row flex-wrap">
                {tags.map((tag) => {
                    return <TagEditable key={tag.id} name={tag.name} />
                })}
            </div>
        </SettingsMenu>
    )
}

export default TagSettings