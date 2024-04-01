import React from 'react'
import DeleteButton from '../deleteButton'

const KeywordList = ({keyword, index, keywords, setKeywords}) => {
    const handleDelete = () => {
        setKeywords(keywords.toSpliced(index, 1))
    }

    return (
        <li className='bg-base-100 rounded-lg m-2 py-1 px-4 flex justify-between gap-2'>
            {keyword}
            <DeleteButton handleDelete={handleDelete} />
        </li>
    )
}

export default KeywordList