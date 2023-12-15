import TagCreating from '@/app/components/tag/creating'
import TagEditable from '@/app/components/tag/tag-settings'
import React from 'react'
import Link from 'next/link'
import { getTags } from '@/utils/database'

const TagSettings = async () => {
    const tags = await getTags()

    return (
        <>
            <div className="flex justify-center p-2">
                <div role="tablist" className="tabs tabs-boxed w-8/12">
                    <Link role="tab" className="tab" href="/admin">Dashboard</Link>
                    <Link role="tab" className="tab tab-active" href="/admin/settings">Settings</Link>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-row bg-base-200 w-10/12 rounded-lg mb-2">
                    <ul className="menu bg-base-100 w-56 rounded-lg m-2">
                        <li><Link href="/admin/settings">Basic</Link></li>
                        <li><Link href="/admin/settings/designer">Designer</Link></li>
                        <li><Link href="/admin/settings/realization">Realization</Link></li>
                        <li><Link href="/admin/settings/article">Article</Link></li>
                        <li><Link href="/admin/settings/design">Design</Link></li>
                        <li><Link href="/admin/settings/preview">Preview</Link></li>
                        <li><Link href="/admin/settings/tag" className="active">Tag</Link></li>
                        <li><Link href="/admin/settings/image">Image</Link></li>
                    </ul>
                    <div className="flex flex-row flex-wrap">
                        {tags.map((tag) => {
                            return <TagEditable key={tag.id} name={tag.name} />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TagSettings