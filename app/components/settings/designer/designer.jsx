"use client"

import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from "react";

const Designer = ({id, name, role, email, phone, image}) => {
    const [nameState, setNameState] = useState(name)
    const [roleState, setRoleState] = useState(role)
    const [emailState, setEmailState] = useState(email)
    const [phoneState, setPhoneState] = useState(phone)
    const [valueChanged, setValueChanged] = useState(false)

    useEffect(() => {
        if (nameState == name && roleState == role && emailState == email && phoneState == phone) {
            setValueChanged(false)
        } else {
            setValueChanged(true)
        }
    }, [nameState, roleState, emailState, phoneState, name, role, email, phone])

    const handleDelete = async (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append("id", id)
        const response = await fetch('/api/designer', {
            method: 'DELETE',
            body: formData,
        })
    }

    const handleReset = () => {
        setNameState(name)
        setRoleState(role)
        setEmailState(email)
        setPhoneState(phone)
    }

    const submit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        formData.append("id", id)
        const response = await fetch('/api/designer', {
            method: 'PATCH',
            body: formData,
        })
    }

    return (
        <div className="card card-compact w-72 bg-base-100 shadow-xl overflow-visible">
            <figure className="p-8 pb-2 overflow-visible">
                <div className="avatar">
                    <div className="w-48 mask mask-squircle transition-transform">
                        <Image width={200} height={200} src={image} alt="Human" placeholder="blur" blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDbopKK7RBRRSUAFNNLSGgYhpppxppoAQ000ppDSAaaQ0pppoAQ0hpTSGgBKSiigApKKKQGlRSZozVCCkozSZoAKQ0UlAAaaaUmmk0ABpppTTTSGIaQ0E0hNACGkoNJQAUlGaSkAtJSUUAaOaM0maTNUIdmkzSZpM0ALmkJpM0hNAATSE0E00mkAE0hNBNNJoADTSaCaQmgYE0maQmkzSAM0ZpM0maAFopM0ZoAv5ozTc0ZpiHZpM03NGaAFzSE0maQmgBSaaTSE0hNACk00mkJpCaQATSE0hNNJoAUmkJpCaQmgBc0maTNJmkA7NGaZmjNAGhmkzTc0ZqhDs0mabmkzQA7NITSZpuaQDiaaTSE0hNACk00mkJpCaAFJppNITTSaQxxNNzSE0hNAC5pM0maTNADs0ZpmaM0AX80ZpmaM0xDs0ZpuaTNADs0mabmkJoAUmkJpCaaTSAUmkJpCaaTQApNITSE00mgBSaTNNJpM0gHZpM03NJmgB+aTNNzRmgC/mkzTc0ZqhDs0maTNJmkAuaQmkzSZoAUmkJpCaaTQApNITSE00mgBSaaTSE0hNIBSaTNNJpM0ALmjNNzSZoAdmjNNzRmgC/mjNJmjNMBc0maTNJQAuaTNFJQAE00mg0hNIQE00mg0hoAQmkJoNNNAATSZoJpppALmkzSZpM0ALmjNJmjNAjRoooqhiUUUlABSGikNACGkNKaQ0gGmkNKaaaAENNNONNNACGmmnGmmkISkpaSgAopKKAP/9k="/>
                    </div>
                </div>
            </figure>
            <div className="card-body">
                <form className="flex flex-col gap-1 text-neutral" onSubmit={submit}>
                    <div>
                        <label htmlFor="name">Jméno: </label>
                        <br />
                        <input type="text" id="name" name="name" value={nameState} placeholder={name} required className="rounded w-full p-1" onChange={(e) => setNameState(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="role">Role: </label>
                        <br />
                        <input type="text" id="role" name="role" value={roleState} placeholder={role} required className="rounded w-full p-1" onChange={(e) => setRoleState(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="email">E-mail: </label>
                        <br />
                        <input type="email" id="email" name="email" value={emailState} placeholder={email} required className="rounded w-full p-1" onChange={(e) => setEmailState(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="phone">Telefon: </label>
                        <br />
                        <input type="text" id="phone" name="phone" value={phoneState} placeholder={phone} required className="rounded w-full p-1" onChange={(e) => setPhoneState(e.target.value)} />
                    </div>
                    <div className="flex flex-row gap-2 my-2 w-full">
                        <input type="reset" value="Reset" onClick={handleReset} className={"btn flex-grow" + (valueChanged ? "" : " btn-disabled")} />
                        <input type="submit" value="Update" className={"btn flex-grow" + (valueChanged ? "" : " btn-disabled")} />
                        <button onClick={handleDelete}>
                            <Image src="/svg/delete.svg" width={50} height={50} alt="Delete SVG Image" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Designer