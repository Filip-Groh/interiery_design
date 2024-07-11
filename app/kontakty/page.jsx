import React from 'react'
import NavigationPath from '../components/navigation/navigation'
import People from '../components/contacts/people'
import Location from '../components/contacts/location'
import Company from '../components/contacts/company'
import { getDesigner } from '@/utils/database'

export const metadata = {
    title: 'Kontakty',
}

const Contact = async () => {
    const peoples = await getDesigner()

    return (
        <main>
            <NavigationPath path={["Home", "Kontakty"]} links={["/", "/kontakty"]} />
            <section className="flex flex-wrap justify-evenly gap-8 my-10">
                {peoples.map((people) => {
                    return <People key={people.id} name={people.name} role={people.role} email={people.email} phone={people.mobil} image={people.image.path}/>
                })}
                <Location />
                <Company />
            </section>
        </main>
    )
}

export default Contact