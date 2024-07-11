"use client"

import React from 'react'
import NavigationPath from '../navigation/navigation'
import Tagsearch from '../pagination/tagsearch'
import Pager from '../pagination/pager'
import ArticlePreview from './articlePreview'

const ArticlePage = ({pageSize, defaultNumberOfPages, defaultArticles, defaultTags, defaultNewDuration}) => {
    const [currentPage, setCurrentPage] = React.useState(1)
    const [numberOfPages, setNumberOfPages] = React.useState(defaultNumberOfPages)
    const [articles, setArticles] = React.useState(defaultArticles)
    const [tags, setTags] = React.useState([])

    React.useEffect(() => {
        const formData = new FormData()
        formData.append("pageSize", pageSize)
        formData.append("currentPage", currentPage)
        formData.append("tags", tags.toString().replace(",", ", "))
        const response = fetch('/api/article', {
            method: 'PATCH',
            body: formData,
        })
        response.then(
            function(value) { 
                value.json().then(function(value) {
                    setArticles(value.data)
                })
            }
          );
    }, [currentPage, tags, pageSize])

    React.useEffect(() => {
        const formData = new FormData()
        formData.append("tags", tags.toString().replace(",", ", "))
        const response = fetch('/api/article', {
            method: 'PUT',
            body: formData
        })
        response.then(
            function(value) { 
                value.json().then(function(value) {
                    setNumberOfPages(Math.ceil(value.data / pageSize))
                })
            }
          );
    }, [tags, pageSize])

    React.useEffect(() => {
        if (numberOfPages == 0) {

        } else if (numberOfPages < currentPage) {
            setCurrentPage(numberOfPages)
        } else if (currentPage < 1) {
            setCurrentPage(1)
        }
    }, [currentPage, numberOfPages])

    return (
        <main>
            <NavigationPath path={["Home", "Blog"]} links={["/", "/blog"]} />
            <div className='flex md:flex-row flex-col justify-between'>
                <section className='md:basis-1/5 pl-16'>
                    <Tagsearch tags={tags} setTags={setTags} defaultTags={defaultTags} />
                </section>
                <section className='md:basis-3/5'>
                    <Pager numberOfPages={numberOfPages} currentPage={currentPage} setCurrentPage={setCurrentPage}>
                        <div className="flex flex-wrap justify-center w-full gap-10 my-10">
                            {articles.map((article) => {
                                return <ArticlePreview key={article.id} id={article.id} title={article.title} tags={article.tags} path={article.images[0]?.path} alt={article.images[0]?.description} defaultNewDuration={defaultNewDuration} createDate={article.createDate}/>
                            })}
                        </div>
                    </Pager>
                </section>
                <div className='md:basis-1/5' />
            </div>
        </main>
    )
}

export default ArticlePage