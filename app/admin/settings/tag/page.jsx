"use client"

import TagCreating from '@/app/components/tag/creating'
import TagEditable from '@/app/components/tag/tag-settings'
import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const TagSettings = () => {
    const [tags, setTags] = useState()
    useEffect(() => {
        fetch("/api/tag", {
            method: "GET"
        })
            .then((res) => res.json())
            .then((data) => {
                setTags(data)
        })
    }, [])

    return (
        <>
            <div className="flex justify-center p-2">
                <div role="tablist" className="tabs tabs-boxed w-8/12">
                    <Link role="tab" className="tab" href="/admin">Dashboard</Link>
                    <Link role="tab" className="tab tab-active" href="/admin/settings">Settings</Link>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="bg-base-200 w-10/12 rounded-lg mb-2">
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
                </div>
            </div>
            <TagCreating />
            <div>
                {tags?.map((tag) => {
                    return <TagEditable key={tag.id} id={tag.id} name={tag.name} />
                })}
            </div>
        </>
    )
}

export default TagSettings