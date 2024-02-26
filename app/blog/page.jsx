import React from 'react'
import ArticlePage from '../components/article/articlePage'
import { getSettings, getNumberOfArticles, getArticleBySet, getTag } from '@/utils/database'

const Articles = async () => {
    const pageSize = await getSettings("pageSize")
    const defaultPageSize = JSON.parse(pageSize?.value || "0")

    const numberOfPages = await getNumberOfArticles()
    const defaultNumberOfPages = Math.ceil(numberOfPages / defaultPageSize)

    const articles = await getArticleBySet(defaultPageSize, 1)

    const tags = await getTag()

    return (
        <ArticlePage pageSize={defaultPageSize} defaultNumberOfPages={defaultNumberOfPages} defaultArticles={articles} defaultTags={tags}/>
    )
}

export default Articles