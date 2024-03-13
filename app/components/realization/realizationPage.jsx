"use client"

import React from 'react'
import NavigationPath from '../navigation/navigation'
import Pager from '../pagination/pager'
import RealizationPreview from './realizationPreview'
import Tagsearch from '../pagination/tagsearch'

const RealizationPage = ({pageSize, defaultNumberOfPages, defaultRealizations, defaultTags, defaultNewDuration}) => {
    const [currentPage, setCurrentPage] = React.useState(1)
    const [numberOfPages, setNumberOfPages] = React.useState(defaultNumberOfPages)
    const [realizations, setRealizations] = React.useState(defaultRealizations)
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
    }, [currentPage, tags, pageSize])

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
        <>
            <NavigationPath path={["Home", "Realizace"]} links={["/", "/realization"]} />
            <div className='flex flex-row justify-between'>
                <div className='basis-1/5'>
                    <Tagsearch tags={tags} setTags={setTags} defaultTags={defaultTags}/>
                </div>
                <div className='basis-3/5'>
                    <Pager numberOfPages={numberOfPages} currentPage={currentPage} setCurrentPage={setCurrentPage}>
                        <div className="flex flex-wrap justify-center w-full gap-10 my-10">
                            {realizations.map((realization) => {
                                return <RealizationPreview key={realization.id} id={realization.id} title={realization.title} tags={realization.tags} path={realization.image[0]?.path} alt={realization.image[0]?.description} defaultNewDuration={defaultNewDuration} createDate={realization.createDate}/>
                            })}
                        </div>
                    </Pager>
                </div>
                <div className='basis-1/5' />
            </div>
        </>
    )
}

export default RealizationPage