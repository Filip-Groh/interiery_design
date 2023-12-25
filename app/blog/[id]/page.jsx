import { getArticleById } from '@/utils/database'
import NavigationPath from '@/app/components/navigation/navigation'
import React from 'react'
import Article from '@/app/components/article'
import { notFound } from 'next/navigation'

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
            <NavigationPath path={["Home", "Gallery", "Gallery 2"]}/>
            <Article key={article.id} title={article.title} text={article.text} createDate={article.createDate} tags={article.tags} images={article.images} comments={article.comments} />
        </>
    )
}

export default BlogPage