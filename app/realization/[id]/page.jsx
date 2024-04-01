import { getRealizationById } from '@/utils/database'
import React from 'react'
import NavigationPath from '@/app/components/navigation/navigation'
import { notFound } from 'next/navigation'
import Realization from '@/app/components/realization/realization'

export async function generateMetadata({ params }) {
    const id = params.id
    const realization = await getRealizationById(Number(id))
    
    return {
      title: realization.title,
    }
}

const RealizationPage = async ({params: {id}}) => {
    try {
        var realization = await getRealizationById(Number(id))
    } catch (err) {
        notFound();
    }

    if (!realization) {
        notFound();
    }

    return (
        <>
            <NavigationPath path={["Home", "Realizace", realization.title]} links={["/", "/realization", `/realization/${id}`]} />
            <Realization key={realization.id} id={realization.id} title={realization.title} task={realization.task} createDate={realization.createDate} tags={realization.tags} comments={realization.comments} images={realization.image} previews={realization.preview} />
        </>
    )
}

export default RealizationPage