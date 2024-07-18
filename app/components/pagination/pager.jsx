"use client"

import React from 'react'

const Pager = ({children, numberOfPages, currentPage, setCurrentPage}) => {
    const getButton = (numberId) => {
        return (
            <button key={numberId} className={`join-item btn ${numberId == currentPage ? "btn-active" : ""}`} onClick={async () => {setCurrentPage(numberId)}}>{numberId}</button>
        )
    }

    let pages = []
    for (let index = 1; index <= numberOfPages; index++) {
        if (Math.floor((currentPage - 1) / 5) == Math.floor((index - 1) / 5)) {
            pages.push(getButton(index))
        }
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
        <div className="text-neutral">
            <div className="join w-full justify-center my-2">
                <button className={"join-item btn " + (currentPage > 1 ? "" : "pointer-events-none bg-base-300 border-base-300 text-base-100")} onClick={handleFirstPage}>{"<<"}</button>
                <button className={"join-item btn " + (currentPage > 1 ? "" : "pointer-events-none bg-base-300 border-base-300 text-base-100")} onClick={handlePreviousPage}>{"<"}</button>
                {pages}
                <button className={"join-item btn " + (currentPage < numberOfPages ? "" : "pointer-events-none bg-base-300 border-base-300 text-base-100")} onClick={handleNextPage}>{">"}</button>
                <button className={"join-item btn " + (currentPage < numberOfPages ? "" : "pointer-events-none bg-base-300 border-base-300 text-base-100")} onClick={handleLastPage}>{">>"}</button>
            </div>
            {children}
            <div className="join w-full justify-center my-2">
                <button className={"join-item btn " + (currentPage > 1 ? "" : "pointer-events-none bg-base-300 border-base-300 text-base-100")} onClick={handleFirstPage}>{"<<"}</button>
                <button className={"join-item btn " + (currentPage > 1 ? "" : "pointer-events-none bg-base-300 border-base-300 text-base-100")} onClick={handlePreviousPage}>{"<"}</button>
                {pages}
                <button className={"join-item btn " + (currentPage < numberOfPages ? "" : "pointer-events-none bg-base-300 border-base-300 text-base-100")} onClick={handleNextPage}>{">"}</button>
                <button className={"join-item btn " + (currentPage < numberOfPages ? "" : "pointer-events-none bg-base-300 border-base-300 text-base-100")} onClick={handleLastPage}>{">>"}</button>
            </div>
        </div>
    )
}

export default Pager