import Image1 from '@/app/components/images/1'
import Image2 from '@/app/components/images/2'
import Image3 from '@/app/components/images/3'
import DatabaseImage from '@/app/components/images/databaseImage'
import React from 'react'

const ImagesPrototypes = () => {
    return (
        <div className="flex flex-col w-full justify-center">
            <Image1 />
            <Image2 />
            <Image3 />
            <DatabaseImage />
        </div>
    )
}

export default ImagesPrototypes