"use client"

import React from 'react'
import NavigationPath from '../components/navigation/navigation'
import Pager from '../components/pagination/pager'
import RealizationPreview from '../components/realization/realizationPreview'

const Realizations = () => {
    const pageSize = 1
    const [currentPage, setCurrentPage] = React.useState(1)
    const [numberOfPages, setNumberOfPages] = React.useState(1)
    const [realizations, setRealizations] = React.useState([])

    React.useEffect(() => {
        const formData = new FormData()
        formData.append("pageSize", pageSize)
        formData.append("currentPage", currentPage)
        const response = fetch('/api/realization', {
            method: 'PATCH',
            body: formData,
        })
        response.then(
            function(value) { 
                value.json().then(function(value) {
                    setRealizations(value.data)
                })
            }
          );
    }, [currentPage])

    React.useEffect(() => {
        const response = fetch('/api/realization', {
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
            <NavigationPath path={["Home", "Realizace"]} links={["/", "/realization"]} />
            <Pager numberOfPages={numberOfPages} currentPage={currentPage} setCurrentPage={setCurrentPage}>
                <div className="flex flex-wrap justify-center w-full gap-10 my-10">
                    {realizations.map((realization) => {
                        return <RealizationPreview key={realization.id} id={realization.id} title={realization.title} tags={realization.tags} path={realization.image[0]?.path} alt={realization.image[0]?.description} />
                    })}
                </div>
            </Pager>
        </>
    )
}

export default Realizations