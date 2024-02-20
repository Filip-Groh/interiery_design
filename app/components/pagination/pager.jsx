"use client"

import React from 'react'

const Pager = ({children, numberOfPages, currentPage, setCurrentPage}) => {
    let pages = []
    for (let index = 1; index <= numberOfPages; index++) {
        if (index == currentPage) {
            pages.push(<button key={index} className="join-item btn btn-active" onClick={async () => {setCurrentPage(index)}}>{index}</button>)
            continue
        }
        pages.push(<button key={index} className="join-item btn" onClick={async () => {setCurrentPage(index)}}>{index}</button>)
    }

    if (pages.length < currentPage) {
        setCurrentPage(pages.length)
    }

    const handleFirstPage = async () => {
        setCurrentPage(1)
    }

    const handlePreviousPage = async () => {
        setCurrentPage(currentPage - 1)
    }

    const handleNextPage = async () => {
        setCurrentPage(currentPage + 1)
    }

    const handleLastPage = async () => {
        setCurrentPage(numberOfPages)
    }


    return (
        <div>
            <div className="join w-full justify-center my-2">
                <button className={"join-item btn " + (currentPage > 1 ? "" : "btn-disabled")} onClick={handleFirstPage}>{"<<"}</button>
                <button className={"join-item btn " + (currentPage > 1 ? "" : "btn-disabled")} onClick={handlePreviousPage}>{"<"}</button>
                {pages}
                <button className={"join-item btn " + (currentPage < numberOfPages ? "" : "btn-disabled")} onClick={handleNextPage}>{">"}</button>
                <button className={"join-item btn " + (currentPage < numberOfPages ? "" : "btn-disabled")} onClick={handleLastPage}>{">>"}</button>
            </div>
            {children}
            <div className="join w-full justify-center my-2">
                <button className={"join-item btn " + (currentPage > 1 ? "" : "btn-disabled")} onClick={handleFirstPage}>{"<<"}</button>
                <button className={"join-item btn " + (currentPage > 1 ? "" : "btn-disabled")} onClick={handlePreviousPage}>{"<"}</button>
                {pages}
                <button className={"join-item btn " + (currentPage < numberOfPages ? "" : "btn-disabled")} onClick={handleNextPage}>{">"}</button>
                <button className={"join-item btn " + (currentPage < numberOfPages ? "" : "btn-disabled")} onClick={handleLastPage}>{">>"}</button>
            </div>
        </div>
    )
}

export default Pager