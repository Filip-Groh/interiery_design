import React from 'react'
import NavigationPath from '../components/navigation/navigation'
import { getArticle } from '@/utils/database'
import Article from '../components/article'

const Gallery = async () => {
    const articles = await getArticle()
    return (
        <>
            <NavigationPath path={["Home", "Gallery", "Gallery 2"]}/>
            {articles.map((article) => {
                return <Article key={article.id} title={article.title} text={article.text} createDate={article.createDate} tags={article.tags} images={article.images} comments={article.comments} />
            })}
        </>
    )
}

export default Gallery