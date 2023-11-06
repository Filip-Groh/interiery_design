import React from 'react'
import NavigationPath from '../components/navigation/navigation'
import People from '../components/contacts/people'
import Location from '../components/contacts/location'
import Company from '../components/contacts/company'

const Contact = () => {
    return (
        <>
            <NavigationPath path={["Home", "Kontakty"]}/>
            <div className="flex flex-wrap justify-evenly gap-8 my-10">
                <People name="Ing. Martina Černíková" role="jednatel – design interiérů" email="martina@interierydesign.cz" phone="736 763 715" image="/people.jpg"/>
                <People name="Kateřina Brožová" role="design interiérů / možnost anglické konverzace" email="katerina@interierydesign.cz" phone="775 278 222" image="/people.jpg"/>
                <Location />
                <Company />
            </div>
        </>
    )
}

export default Contact