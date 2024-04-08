"use client"

import React from 'react'
import NavigationPath from '../navigation/navigation'
import GalleryImage from '../gallery/galleryImage'
import GalleryPreview from '../gallery/galleryPreview'
import Tagsearch from '../pagination/tagsearch'

const GalleryPage = ({defaultOutput, defaultTags}) => {
    const [output, setOutput] = React.useState(defaultOutput)
    const [tags, setTags] = React.useState([])

    React.useEffect(() => {
        const formData = new FormData()
        formData.append("tags", tags.toString().replace(",", ", "))
        const response = fetch('/api/gallery', {
            method: 'PATCH',
            body: formData
        })
        response.then(
            function(value) { 
                value.json().then(function(value) {
                    setOutput(value.data)
                })
            }
        );
    }, [tags])

    return (
        <>
            <NavigationPath path={["Home", "Galerie"]} links={["/", "/galerie"]} />
            <div className='flex flex-row justify-center'>
                <Tagsearch tags={tags} setTags={setTags} defaultTags={defaultTags} />
            </div>
            <div className="flex flex-wrap justify-center w-full gap-10 my-10">
                {output.map((item) => {
                    if (item.type == "Image") {
                        let image = item.data
                        return <GalleryImage key={image.id} path={image.path} description={image.description} tags={image.tags}/>
                    } else if (item.type == "Preview") {
                        let preview = item.data
                        return <GalleryPreview key={preview.id} beforePath={preview.images[0].path} beforeDescription={preview.images[0].description} afterPath={preview.images[1].path} afterDescription={preview.images[0].description} title={preview.title} tags={preview.tags} />
                    }
                })}
            </div>
        </>
    )
}

export default GalleryPage