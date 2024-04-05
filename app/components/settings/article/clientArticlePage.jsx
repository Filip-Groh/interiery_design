"use client"

import React from 'react'
import ArticlePreview from '@/app/components/settings/article/articlePreview'
import AddButton from '@/app/components/settings/add'
import ArticleDialog from '@/app/components/settings/article/dialog'
import SettingsMenu from '@/app/components/settings/menu'

const ClientArticlePage = ({defaultArticles, images, tags}) => {
    const [articles, setArticles] = React.useState(defaultArticles)

    return (
        <SettingsMenu activeTabName="Article">
            <div className="flex flex-col">
                <div className="flex flex-row w-full">
                    <div className="flex flex-col basis-1/2">
                        <AddButton modalId="addArticle" />
                        <ArticleDialog dialogId="addArticle" imagesPass={images} tagsPass={tags} articles={articles} setArticles={setArticles}/>
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