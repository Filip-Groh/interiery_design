"use client"

import React from 'react'

const ContactForm = () => {
    const submit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const response = await fetch('/api/query', {
            method: 'POST',
            body: formData,
        })

        event.target.elements.name.value = ""
        event.target.elements.email.value = ""
        event.target.elements.text.value = ""
    }

    return (
        <form className='sm:w-10/12 sm:m-8 my-4' onSubmit={submit}>
            <label htmlFor="name">Jak vás máme oslovovat: </label>
            <input type="text" id="name" name="name" placeholder="Jméno" className="file-input file-input-bordered w-full mb-2" required />
            <label htmlFor="email">Kde vás máme kontaktovat: </label>
            <input type="email" id="email" name="email" placeholder="E-mail" className="file-input file-input-bordered w-full mb-2" required />
            <label htmlFor="text">Na co se chcete zeptat: </label>
            <textarea id="text" name="text" className="file-input file-input-bordered w-full" placeholder="Dotaz" required></textarea>
            <input type="submit" value="Odeslat dotaz" className="btn max-sm:btn-wide mt-2"/>
        </form>
    )
}

export default ContactForm