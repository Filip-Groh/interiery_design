import React from 'react'
import DisplayImage from '../images/image'

const Company = () => {
    return (
        <div className="card card-compact w-72 bg-base-100 shadow-xl">
            <figure className="p-0 pb-2">
                <DisplayImage width={500} height={200} src="/static/logo.jpg" alt="Company logo"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">Firemní údaje</h2>
                <h3>IČO :   22773525</h3>
                <h3>DIČ :   CZ22773525</h3>
                <h3>Firma INTERIÉRY DESIGN s.r.o.</h3>
                <br />
                <p>zapsaná 29.února 2012 do OR vedeném KS v Ústí n/Loddíl C, vložka 31364.</p>
            </div>
        </div>
    )
}

export default Company