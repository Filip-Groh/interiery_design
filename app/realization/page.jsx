import React from 'react'
import NavigationPath from '../components/navigation/navigation'
import { getRealization } from '@/utils/database'
import Realization from '../components/realization'

const Gallery = async () => {
    const realizations = await getRealization()
    console.log(realizations[0])

    return (
        <>
            <NavigationPath path={["Home", "Gallery", "Gallery 2"]}/>
            {realizations.map((realization) => {
                return <Realization key={realization.id} title={realization.title} task={realization.task} createDate={realization.createDate} tags={realization.tags} comments={realization.comments} images={realization.image} previews={realization.preview} />
            })}
        </>
    )
}

export default Gallery