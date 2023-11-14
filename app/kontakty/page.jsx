import React from 'react'
import NavigationPath from '../components/navigation/navigation'
import People from '../components/contacts/people'
import Location from '../components/contacts/location'
import Company from '../components/contacts/company'
import { getDesigners } from '@/utils/database'

const Contact = async () => {
    const peoples = await getDesigners()

    return (
        <>
            <NavigationPath path={["Home", "Kontakty"]}/>
            <div className="flex flex-wrap justify-evenly gap-8 my-10">
                {peoples.map((people) => {
                    return <People key={people.id} name={people.name} role={people.role} email={people.email} phone={people.mobil} image="/people.jpg"/>
                })}
                <Location />
                <Company />
            </div>
        </>
    )
}

export default Contact