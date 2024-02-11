import ArticlePreview from '@/app/components/settings/article/articlePreview'
import AddButton from '@/app/components/settings/add'
import ArticleDialog from '@/app/components/settings/article/dialog'
import SettingsMenu from '@/app/components/settings/menu'
import { getArticle, getImage, getComment } from '@/utils/database'
import React from 'react'

const ArticleSettings = async () => {
    const articles = await getArticle()
    const firstHalfArticles = articles.filter((article, index) => {return index % 2 == 0})
    const secondHalfArticles = articles.filter((article, index) => {return index % 2 == 1})

    const images = await getImage()
    const tags = await getComment()

    return (
        <SettingsMenu activeTabName="Article">
            <div className="flex flex-col">
                <div className="flex flex-row w-full">
                    <div className="flex flex-col basis-1/2">
                        <AddButton modalId="addArticle" />
                        <ArticleDialog dialogId="addArticle" imagesPass={images} tagsPass={tags} />
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