import ArticlePreview from '@/app/components/gallery/2/articlePreview'
import AddArticle from '@/app/components/settings/article/add'
import ArticleDialog from '@/app/components/settings/article/dialog'
import SettingsMenu from '@/app/components/settings/menu'
import { getArticle } from '@/utils/database'
import React from 'react'

const ArticleSettings = async () => {
    const articles = await getArticle()
    const firstHalfArticles = articles.filter((article, index) => {return index % 2 == 0})
    const secondHalfArticles = articles.filter((article, index) => {return index % 2 == 1})

    return (
        <SettingsMenu activeTabName="Article">
            <div className="flex flex-col">
                <div className="flex flex-row w-full">
                    <div className="flex flex-col basis-1/2">
                        <AddArticle modalId="addArticle" />
                        <ArticleDialog dialogId="addArticle" />
                        {firstHalfArticles.map((article) => {
                            return <ArticlePreview key={article.id} id={article.id} title={article.title} description={article.text} tags={article.tags} previewImage={article.images[0]} />
                        })}
                    </div>
                    <div className="flex flex-col basis-1/2">
                        {secondHalfArticles.map((article) => {
                            return <ArticlePreview key={article.id} id={article.id} title={article.title} description={article.text} tags={article.tags} previewImage={article.images[0]} />
                        })}
                    </div>
                </div>
            </div>
        </SettingsMenu>
    )
}

export default ArticleSettings