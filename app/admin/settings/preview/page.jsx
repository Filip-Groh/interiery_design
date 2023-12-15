import React from 'react'
import Link from 'next/link'
import DatabasePreview from '@/app/components/images/databasePreview'
import { getPreviews } from '@/utils/database'

const PreviewSettings = async () => {
    const previews = await getPreviews()
    const firstHalfPreviews = previews.filter((preview, index) => {return index % 2 == 0})
    const secondHalfPreviews = previews.filter((preview, index) => {return index % 2 == 1})

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
                        <li><Link href="/admin/settings/preview" className="active">Preview</Link></li>
                        <li><Link href="/admin/settings/tag">Tag</Link></li>
                        <li><Link href="/admin/settings/image">Image</Link></li>
                    </ul>
                    <div className="flex flex-row w-full">
                        <div className="flex flex-col basis-1/2">
                            {firstHalfPreviews.map((preview) => {
                                return <DatabasePreview key={preview.id} title={preview.title} beforePath={preview.images[0].path} beforeDescription={preview.images[0].description} afterPath={preview.images[1].path} afterDescription={preview.images[1].description} />
                            })}
                        </div>
                        <div className="flex flex-col basis-1/2">
                            {secondHalfPreviews.map((preview) => {
                                return <DatabasePreview key={preview.id} title={preview.title} beforePath={preview.images[0].path} beforeDescription={preview.images[0].description} afterPath={preview.images[1].path} afterDescription={preview.images[1].description} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PreviewSettings