"use client"

import React from 'react'
import SettingsMenu from '@/app/components/settings/menu'
import QandAItem from './QandAItem'

const ClientQandAPage = ({defaultQandAs}) => {
    const [QandAs, setQandAs] = React.useState(defaultQandAs)

    React.useEffect(() => {
        async function getAllQandAs() {
            const response = await fetch('/api/QandA', {
                method: 'GET'
            })
    
            const qandas = await response.json()
            setQandAs(qandas.data)
        }
        getAllQandAs()
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const response = await fetch('/api/QandA', {
            method: 'POST',
            body: formData,
        })
        const data = await response.json()
        setQandAs(QandAs.concat(data.data))

        event.target.elements.question.value = ""
        event.target.elements.answer.value = ""
    }

    return (
        <SettingsMenu activeTabName="QandA">
            <div className='w-full pt-2'>
                <h1 className='text-neutral text-center text-xl mb-2'>Otázky a Odpovědi</h1>
                <form onSubmit={handleSubmit} className='flex flex-row justify-center w-full'>
                    <div className="flex flex-row gap-2 text-neutral w-11/12">
                        <input type="text" id="question" name="question" placeholder="Otázka" className="file-input file-input-bordered w-full" required />
                        <input type="text" id="answer" name="answer" placeholder="Odpověď" className="file-input file-input-bordered w-full" required />
                        <input type="submit" value="Přidat" className="btn"/>
                    </div>
                </form>
                <div className='flex flex-col gap-2 items-center mt-4'>
                    {QandAs.map((QandA) => {
                        return (<QandAItem key={QandA.id} id={QandA.id} question={QandA.question} answer={QandA.answer} QandAs={QandAs} setQandAs={setQandAs}/>)
                    })}
                </div>
            </div>
        </SettingsMenu>
    )
}

export default ClientQandAPage