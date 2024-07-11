import React from 'react'
import Link from 'next/link'

const NavigationPath = ({path, links}) => {
    return (
        <nav className="text-sm breadcrumbs text-neutral">
            <ul className="justify-center md:flex-row flex-col">
                {path.map((destination, index) => 
                    <li key={destination} className='before:!hidden md:before:!block'><Link href={links[index]}>{destination}</Link></li>
                )}
            </ul>
        </nav>
    )
}

export default NavigationPath