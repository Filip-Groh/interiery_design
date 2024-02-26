"use client"

import React from 'react'

const Address = ({defaultAddress, defaultCity, defaultPsc, defaultContact}) => {
    const [address, setAddress] = React.useState(defaultAddress)
    const [city, setCity] = React.useState(defaultCity)
    const [psc, setPsc] = React.useState(defaultPsc)
    const [contact, setContact] = React.useState(defaultContact)

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        formData.set("key", "address")
        const data = {
            address: formData.get("address"),
            city: formData.get("city"),
            psc: formData.get("psc"),
            contact: formData.get("contact")
        }
        formData.set("value", JSON.stringify(data))
        const response = fetch('/api/settings', {
            method: 'POST',
            body: formData,
        })
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-1'>
            <input type="text" id="address" name="address" placeholder="Adresa" className="file-input file-input-bordered w-full" required value={address} onChange={(e) => setAddress(e.target.value)}/>
            <input type="text" id="city" name="city" placeholder="Město" className="file-input file-input-bordered w-full" required value={city} onChange={(e) => setCity(e.target.value)}/>
            <input type="text" id="psc" name="psc" placeholder="PSČ" className="file-input file-input-bordered w-full" required value={psc} onChange={(e) => setPsc(e.target.value)}/>
            <div className="flex flex-row">
                <input type="text" id="contact" name="contact" placeholder="Kontakty" className="file-input file-input-bordered w-full" required value={contact} onChange={(e) => setContact(e.target.value)}/>
                <input type="submit" value="Upravit" className="btn"/>
            </div>
        </form>
    )
}

export default Address