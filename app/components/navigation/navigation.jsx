import React from 'react'
import Link from 'next/link'

const NavigationPath = ({path, links}) => {
    return (
        <div className="text-sm breadcrumbs text-neutral">
            <ul className="justify-center">
                {path.map((destination, index) => 
                    <li key={destination}><Link href={links[index]}>{destination}</Link></li>
                )}
            </ul>
        </div>
    )
}

export default NavigationPath