"use client"

import React from 'react'
import ArticlePreview from '../components/article/articlePreview'
import NavigationPath from '../components/navigation/navigation'
import Pager from '../components/pagination/pager'
import Tagsearch from '../components/pagination/tagsearch'

const Articles = () => {
    const pageSize = 1
    const [currentPage, setCurrentPage] = React.useState(1)
    const [numberOfPages, setNumberOfPages] = React.useState(1)
    const [articles, setArticles] = React.useState([])
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
    }, [currentPage, tags])

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
    }, [tags])

    React.useEffect(() => {
        if (numberOfPages == 0) {

        } else if (numberOfPages < currentPage) {
            setCurrentPage(numberOfPages)
        } else if (currentPage < 1) {
            setCurrentPage(1)
        }
    }, [currentPage, numberOfPages])

    return (
        <>
            <NavigationPath path={["Home", "Blog"]} links={["/", "/blog"]} />
            <div className='flex flex-row justify-between'>
                <Tagsearch tags={tags} setTags={setTags} />
                <Pager numberOfPages={numberOfPages} currentPage={currentPage} setCurrentPage={setCurrentPage}>
                    <div className="flex flex-wrap justify-center w-full gap-10 my-10">
                        {articles.map((article) => {
                            return <ArticlePreview key={article.id} id={article.id} title={article.title} tags={article.tags} path={article.images[0]?.path} alt={article.images[0]?.description} />
                        })}
                    </div>
                </Pager>
                <span />
            </div>
        </>
    )
}

export default Articles