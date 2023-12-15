import React from 'react'
import Link from 'next/link'
import { getImages } from '@/utils/database'
import DatabaseImage from '@/app/components/images/databaseImage'
import AddButton from '@/app/components/settings/image/add'
import ImageDialog from '@/app/components/settings/image/dialog'

const ImageSettings = async () => {
    const images = await getImages()
    const firstHalfImages = images.filter((image, index) => {return index % 2 == 0})
    const secondHalfImages = images.filter((image, index) => {return index % 2 == 1})

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
                        <li><Link href="/admin/settings/tag">Tag</Link></li>
                        <li><Link href="/admin/settings/image" className="active">Image</Link></li>
                    </ul>
                    <div className="flex flex-col">
                        <div className="w-full h-10 m-2">
                            <AddButton modalId="addImage" />
                            <ImageDialog dialogId="addImage" />
                        </div>
                        <div className="flex flex-row w-full">
                            <div className="flex flex-col basis-1/2">
                                {firstHalfImages.map((image) => {
                                    return <DatabaseImage key={image.id} path={image.path} description={image.description} />
                                })}
                            </div>
                            <div className="flex flex-col basis-1/2">
                                {secondHalfImages.map((image) => {
                                    return <DatabaseImage key={image.id} path={image.path} description={image.description} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageSettings