import React from 'react'
import NavigationPath from '../components/navigation/navigation'

const Gallery = () => {
    return (
        <>
            <NavigationPath path={["Home", "Gallery", "Gallery 2"]}/>
            <div>Gallery2</div>
        </>
    )
}

export default Gallery