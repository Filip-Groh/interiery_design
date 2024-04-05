import { getArticle, getImage, getTag } from '@/utils/database'
import React from 'react'
import ClientArticlePage from '@/app/components/settings/article/clientArticlePage'

const ArticleSettings = async () => {
    const defaultArticles = await getArticle()

    const images = await getImage()
    const tags = await getTag()

    return (
        <ClientArticlePage defaultArticles={defaultArticles} images={images} tags={tags} />
    )
}

export default ArticleSettings