import React from 'react'

const NavigationPath = (props) => {
    return (
        <div className="text-sm breadcrumbs">
            <ul className="justify-center">
                {props.path.map((destination) => 
                    <li key="destination"><a>{destination}</a></li>
                )}
            </ul>
        </div>
    )
}

export default NavigationPath