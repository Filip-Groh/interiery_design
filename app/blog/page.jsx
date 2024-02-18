"use client"

import React from 'react'
import ArticlePreview from '../components/article/articlePreview'
import NavigationPath from '../components/navigation/navigation'
import Pager from '../components/pagination/pager'

const Articles = () => {
    const pageSize = 1
    const [currentPage, setCurrentPage] = React.useState(1)
    const [numberOfPages, setNumberOfPages] = React.useState(1)
    const [articles, setArticles] = React.useState([])

    React.useEffect(() => {
        const formData = new FormData()
        formData.append("pageSize", pageSize)
        formData.append("currentPage", currentPage)
        const response = fetch('/api/article', {
            method: 'PATCH',
            body: formData,
        })
        response.then(
            function(value) { 
                value.json().then(function(value) {
                    console.log(value.data)
                    setArticles(value.data)
                })
            }
          );
    }, [currentPage])

    React.useEffect(() => {
        const response = fetch('/api/article', {
            method: 'GET'
        })
        response.then(
            function(value) { 
                value.json().then(function(value) {
                    setNumberOfPages(Math.ceil(value.data / pageSize))
                })
            }
          );
    }, [])

    return (
        <>
            <NavigationPath path={["Home", "Blog"]} links={["/", "/blog"]} />
            <Pager numberOfPages={numberOfPages} currentPage={currentPage} setCurrentPage={setCurrentPage}>
                <div className="flex flex-wrap justify-center w-full gap-10 my-10">
                    {articles.map((article) => {
                        return <ArticlePreview key={article.id} id={article.id} title={article.title} tags={article.tags} path={article.images[0]?.path} alt={article.images[0]?.description} />
                    })}
                </div>
            </Pager>
        </>
    )
}

export default Articles