import React from 'react'
import UserImage from '../images/userImage'
import { auth } from '@/app/api/auth/[...nextauth]/auth'
import Tag from '../tag'
import CommentSection from '../comment/commentSection'

const Article = async ({id, comments, images, tags, title, text, createDate}) => {
    const session = await auth()
    const state = comments.map((comment) => {
        let userLiked = false
        if (comment.likers.length > 0) {
            comment.likers.forEach((value) => {
                userLiked = userLiked || value.email == session?.user?.email
            })
        }
        if (userLiked) {
            return 1
        }
    
        let userDisliked = false
        if (comment.dislikers.length > 0) {
            comment.dislikers.forEach((value) => {
                userDisliked = userDisliked || value.email == session?.user?.email
            })
        }
        if (userDisliked) {
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
                <section className='text-neutral flex flex-col items-center'>
                    <p className="text-sm animate-fade-down">{createDate.toLocaleString()}</p>
                    <UserImage path={images[0]?.path} description={images[0]?.description} isAnimated={true} tags={images[0]?.tags}/>
                    <h1 className="sm:text-4xl text-2xl font-bold animate-fade-up">{title}</h1>
                </section>

                <section className="flex flex-row flex-wrap gap-2">
                    {tags.map((tag) => {
                        return <Tag key={tag.id} name={tag.name} isAnimated={true}/>
                    })}
                </section>
                
                <section>
                    <p className="m-4 text-neutral animate-fade-up whitespace-pre-line">
                        {text}
                    </p>
                </section>

                <section className='flex w-full snap-x items-center gap-4 overflow-x-auto bg-base-300 rounded-2xl text-neutral animate-fade-right'>
                    {images.map((image) => {
                        return (<div key={image.id} className='h-auto w-[min(40rem,80vw)] shrink-0 snap-center'>
                            <UserImage path={image.path} description={image.description} tags={image.tags}/>
                        </div>)
                    })}
                </section>

                <section>
                    <h2 className='animate-fade-right text-neutral sm:text-2xl text-xl font-semibold'>Komentáře</h2>
                    <CommentSection session={session} id={id} realizationOrArticle={"ARTICLE"} defaultComments={comments} state={state}/>
                </section>
            </article>
        </main>
    )
}

export default Article