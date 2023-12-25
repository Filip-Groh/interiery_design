import TagEditable from '@/app/components/settings/tag/tag-settings'
import React from 'react'
import { getTag } from '@/utils/database'
import SettingsMenu from '@/app/components/settings/menu'
import AddTag from '@/app/components/settings/tag/add'
import TagDialog from '@/app/components/settings/tag/dialog'

const TagSettings = async () => {
    const tags = await getTag()

    return (
        <SettingsMenu activeTabName="Tag">
            <div className="flex flex-row flex-wrap">
                <AddTag modalId="addTag" />
                <TagDialog dialogId="addTag" />
                {tags.map((tag) => {
                    let isDependent = tag.articleId !== null || tag.realizationId !== null
                    return <TagEditable key={tag.id} id={tag.id} name={tag.name} isDependent={isDependent} />
                })}
            </div>
        </SettingsMenu>
    )
}

export default TagSettings