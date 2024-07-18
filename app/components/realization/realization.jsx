import React from 'react'
import UserImage from '@/app/components/images/userImage'
import UserPreview from '@/app/components/images/userPreview'
import { auth } from '@/app/api/auth/[...nextauth]/auth'
import Tag from '../tag'
import CommentSection from '../comment/commentSection'

const Realization = async ({id, comments, images, previews, tags, title, task, createDate}) => {
    const session = await auth()
    const state = comments.map((comment) => {
        if (comment.likers.length > 0 && comment.likers.reduce((previousValue, currentValue, index) => {
            return previousValue || currentValue.id == session?.user?.id
        })) {
            return 1
        } else if (comment.dislikers.length > 0 && comment.dislikers.reduce((previousValue, currentValue, index) => {
            return previousValue || currentValue.id == session?.user?.id
        })) {
            return -1
        }
        return 0
    })
    // -1 = dislike
    // 0 = neutral
    // 1 = like

    return (
        <main className="flex flex-row justify-center">
            <article className="w-3/4">
                <section className='text-neutral'>
                    <div className="flex flex-row justify-between">
                        <h1 className='animate-fade-right'>{title}</h1>
                        <p className='animate-fade-left'>{createDate.toLocaleString()}</p>
                    </div>

                    <UserImage path={images[0]?.path} description={images[0]?.description} isAnimated={true} tags={images[0]?.tags}/>
                </section>

                <section className="flex flex-row gap-2">
                    {tags.map((tag) => {
                        return <Tag key={tag.id} name={tag.name} isAnimated={true}/>
                    })}
                </section>

                <section>
                    <p className="m-4 text-neutral animate-fade-up whitespace-pre-line">
                        {task}
                    </p>
                </section>

                <section className='flex w-full snap-x items-center gap-4 overflow-x-auto bg-base-300 rounded-2xl text-neutral animate-fade-right'>
                    {images.map((image) => {
                        return (<div key={image.id} className='h-auto w-[min(40rem,80vw)] shrink-0 snap-center'>
                            <UserImage path={image.path} description={image.description} tags={image.tags}/>
                        </div>)
                    })}
                </section>

                <section className='text-neutral flex flex-col items-center'>
                    {previews.map((preview) => {
                        return <UserPreview key={preview.id} tags={preview.tags} title={preview.title} beforePath={preview.images[0].path} beforeDescription={preview.images[0].description} afterPath={preview.images[1].path} afterDescription={preview.images[1].description} isAnimated={true}/>
                    })}
                </section>

                <section>
                    <h2 className='animate-fade-right text-neutral'>Komentáře</h2>
                    <CommentSection session={session} id={id} realizationOrArticle={"REALIZATION"} defaultComments={comments} state={state}/>
                </section>
            </article>
        </main>
    )
}

export default Realization