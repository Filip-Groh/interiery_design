"use client"

import React from 'react'
import KeywordList from './keywordList'

const Keyword = ({defaultKeywords}) => {
    const [keywords, setKeywords] = React.useState(defaultKeywords)
    const [actualData, setActualData] = React.useState(false)

    React.useEffect(() => {
        async function getAllKeywords() {
            const formData = new FormData()
            formData.set("key", "keywords")
            const response = await fetch('/api/settings', {
                method: 'PUT',
                body: formData
            })

            const keywords = await response.json()
            const defaultKeywords = JSON.parse(keywords.data?.value || "[]")
            setKeywords(defaultKeywords)
        }
        getAllKeywords()
        setActualData(true)
    }, [])

    React.useEffect(() => {
        if (actualData) {
            const formData = new FormData()
            formData.set("key", "keywords")
            formData.set("value", JSON.stringify(keywords))
            const response = fetch('/api/settings', {
                method: 'POST',
                body: formData,
            })
        }
    }, [keywords, actualData])

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        setKeywords(keywords.concat(formData.get("keyword")))

        event.target.elements.keyword.value = ""
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-row">
                    <input type="text" id="keyword" name="keyword" placeholder="Klíčové slovo" className="file-input file-input-bordered w-full" required />
                    <input type="submit" value="Přidat" className="btn"/>
                </div>
            </form>
            <ul className='flex flex-row flex-wrap'>
                {keywords.map((keyword, index) => {
                    return (
                        <KeywordList key={keyword} keyword={keyword} index={index} keywords={keywords} setKeywords={setKeywords}/>
                    )
                })}
            </ul>
        </>
    )
}

export default Keyword