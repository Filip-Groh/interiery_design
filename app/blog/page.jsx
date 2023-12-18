import React from 'react'
import NavigationPath from '../components/navigation/navigation'
import { getArticle } from '@/utils/database'
import ArticlePreview from '../components/gallery/2/articlePreview'

const Gallery = async () => {
    const articles = await getArticle()
    console.log(articles)
    return (
        <>
            <NavigationPath path={["Home", "Gallery", "Gallery 2"]}/>
            {articles.map((article) => {
                return <ArticlePreview key={article.id} id={article.id} title={article.title} description={article.description} tags={article.tags} previewImage={article.images[0]} />
            })}
        </>
    )
}

export default Gallery