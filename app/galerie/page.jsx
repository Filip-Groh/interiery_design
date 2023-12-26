import React from 'react'
import NavigationPath from '../components/navigation/navigation'
import Gallery1Card from '../components/gallery/1/card'

const Gallery = () => {
    return (
        <>
            <NavigationPath path={["Home", "Galerie"]} links={["/", "/galerie"]} />
            <div className="flex flex-wrap justify-center w-full gap-10 my-10">
                <Gallery1Card />
                <Gallery1Card />
                <Gallery1Card />
                <Gallery1Card />
                <Gallery1Card />
                <Gallery1Card />
                <Gallery1Card />
                <Gallery1Card />
                <Gallery1Card />
                <Gallery1Card />
                <Gallery1Card />
                <Gallery1Card />
                <Gallery1Card />
                <Gallery1Card />
                <Gallery1Card />
                <Gallery1Card />
                <Gallery1Card />
                <Gallery1Card />
                <Gallery1Card />
                <Gallery1Card />
                <Gallery1Card />
            </div>
        </>
    )
}

export default Gallery