import { getArticleById } from '@/utils/database'
import NavigationPath from '@/app/components/navigation/navigation'
import React from 'react'
import Article from '@/app/components/article/article'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }) {
    const id = params.id
    const article = await getArticleById(Number(id))
    
    return {
      title: article.title,
    }
}

const BlogPage = async ({params: {id}}) => {
    try {
        var article = await getArticleById(Number(id))
    } catch (err) {
        notFound();
    }

    if (!article) {
        notFound();
    }

    return (
        <>
            <NavigationPath path={["Home", "Blog", article.title]} links={["/", "/blog", `/blog/${id}`]} />
            <Article key={article.id} id={article.id} title={article.title} text={article.text} createDate={article.createDate} tags={article.tags} images={article.images} comments={article.comments} />
        </>
    )
}

export default BlogPage