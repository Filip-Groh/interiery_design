"use client"

import React from 'react'
import NavigationPath from '../components/navigation/navigation'
import Pager from '../components/pagination/pager'
import RealizationPreview from '../components/realization/realizationPreview'
import Tagsearch from '../components/pagination/tagsearch'

const Realizations = () => {
    const pageSize = 1
    const [currentPage, setCurrentPage] = React.useState(1)
    const [numberOfPages, setNumberOfPages] = React.useState(1)
    const [realizations, setRealizations] = React.useState([])
    const [tags, setTags] = React.useState([])

    React.useEffect(() => {
        const formData = new FormData()
        formData.append("pageSize", pageSize)
        formData.append("currentPage", currentPage)
        formData.append("tags", tags.toString().replace(",", ", "))
        const response = fetch('/api/realization', {
            method: 'PATCH',
            body: formData
        })
        response.then(
            function(value) { 
                value.json().then(function(value) {
                    setRealizations(value.data)
                })
            }
          );
    }, [currentPage, tags])

    React.useEffect(() => {
        const formData = new FormData()
        formData.append("tags", tags.toString().replace(",", ", "))
        const response = fetch('/api/realization', {
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
            <NavigationPath path={["Home", "Realizace"]} links={["/", "/realization"]} />
            <div className='flex flex-row justify-between'>
                <Tagsearch tags={tags} setTags={setTags}/>
                <Pager numberOfPages={numberOfPages} currentPage={currentPage} setCurrentPage={setCurrentPage}>
                    <div className="flex flex-wrap justify-center w-full gap-10 my-10">
                        {realizations.map((realization) => {
                            return <RealizationPreview key={realization.id} id={realization.id} title={realization.title} tags={realization.tags} path={realization.image[0]?.path} alt={realization.image[0]?.description} />
                        })}
                    </div>
                </Pager>
                <span />
            </div>
        </>
    )
}

export default Realizations