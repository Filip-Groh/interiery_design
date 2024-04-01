import React from 'react'
import NavigationPath from '../components/navigation/navigation'
import Gallery1Card from '../components/gallery/card'
import { getImage } from '@/utils/database'

export const metadata = {
    title: 'Galerie',
}

const Gallery = async () => {
    const images = await getImage()

    return (
        <>
            <NavigationPath path={["Home", "Galerie"]} links={["/", "/galerie"]} />
            <div className="flex flex-wrap justify-center w-full gap-10 my-10">
                {images.map((image) => {
                    return <Gallery1Card key={image.id} path={image.path} description={image.description} />
                })}
            </div>
        </>
    )
}

export default Gallery