import React from 'react'
import { getArticle } from '@/utils/database'
import ArticlePreview from '../components/article/articlePreview'
import NavigationPath from '../components/navigation/navigation'

const Articles = async () => {
    const articles = await getArticle()
    return (
        <>
            <NavigationPath path={["Home", "Blog"]} links={["/", "/blog"]} />
            <div className="flex flex-wrap justify-center w-full gap-10 my-10">
                {articles.map((article) => {
                    return <ArticlePreview key={article.id} id={article.id} title={article.title} tags={article.tags} />
                })}
            </div>
        </>
    )
}

export default Articles