"use client"

import React from 'react'
import ArticlePreview from '@/app/components/settings/article/articlePreview'
import AddButton from '@/app/components/settings/add'
import ArticleDialog from '@/app/components/settings/article/dialog'
import SettingsMenu from '@/app/components/settings/menu'

const ClientArticlePage = ({defaultArticles, images, tags}) => {
    const [articles, setArticles] = React.useState(defaultArticles)
    const [allImages, setAllImages] = React.useState(images)

    React.useEffect(() => {
        async function getAllImages() {
            const response = await fetch('/api/image', {
                method: 'GET'
            })
    
            const images = await response.json()
            setAllImages(images.data)
        }
        getAllImages()
    }, [])

    React.useEffect(() => {
        async function getAllArticles() {
            const response = await fetch('/api/article', {
                method: 'GET'
            })
    
            const articles = await response.json()
            setArticles(articles.data)
        }
        getAllArticles()
    }, [])

    return (
        <SettingsMenu activeTabName="Article">
            <div className="flex flex-col">
                <div className="flex flex-row w-full">
                    <div className="flex flex-col basis-1/2">
                        <AddButton modalId="addArticle" />
                        <ArticleDialog dialogId="addArticle" imagesPass={allImages} tagsPass={tags} articles={articles} setArticles={setArticles}/>
                        {articles.map((article, index) => {
                            if (index % 2 == 0) {
                                return <ArticlePreview key={article.id} id={article.id} title={article.title} description={article.text} tags={article.tags} previewImage={article.images[0]} articles={articles} setArticles={setArticles}/>
                            }
                        })}
                    </div>
                    <div className="flex flex-col basis-1/2">
                        {articles.map((article, index) => {
                            if (index % 2 == 1) {
                                return <ArticlePreview key={article.id} id={article.id} title={article.title} description={article.text} tags={article.tags} previewImage={article.images[0]} articles={articles} setArticles={setArticles}/>
                            }
                        })}
                    </div>
                </div>
            </div>
        </SettingsMenu>
    )
}

export default ClientArticlePage