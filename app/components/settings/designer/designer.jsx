"use client"

import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

const Designer = ({id, name, role, email, phone, image, designers, setDesigners}) => {
    const [nameState, setNameState] = useState(name)
    const [roleState, setRoleState] = useState(role)
    const [emailState, setEmailState] = useState(email)
    const [phoneState, setPhoneState] = useState(phone)

    const handleDelete = async (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append("id", id)
        const response = await fetch('/api/designer', {
            method: 'DELETE',
            body: formData,
        })

        designers.forEach((designer, index) => {
            if (designer.id == id) {
                setDesigners(designers.toSpliced(index, 1))
            }
        })
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

    const handleConfirm = (event) => {
        handleDelete(event)
        document.getElementById(id).close()
    }

    return (
        <>
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
                            <input type="submit" value="Update" className="btn flex-grow" />
                            <span onClick={()=>document.getElementById(id).showModal()}>
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width={50} height={50} viewBox="0 0 109.484 122.88" enableBackground="new 0 0 109.484 122.88" xmlSpace="preserve">
                                    <g>
                                        <path fill="#CC0000" fillRule="evenodd" clipRule="evenodd" d="M2.347,9.633h38.297V3.76c0-2.068,1.689-3.76,3.76-3.76h21.144 c2.07,0,3.76,1.691,3.76,3.76v5.874h37.83c1.293,0,2.347,1.057,2.347,2.349v11.514H0V11.982C0,10.69,1.055,9.633,2.347,9.633 L2.347,9.633z M8.69,29.605h92.921c1.937,0,3.696,1.599,3.521,3.524l-7.864,86.229c-0.174,1.926-1.59,3.521-3.523,3.521h-77.3 c-1.934,0-3.352-1.592-3.524-3.521L5.166,33.129C4.994,31.197,6.751,29.605,8.69,29.605L8.69,29.605z M69.077,42.998h9.866v65.314 h-9.866V42.998L69.077,42.998z M30.072,42.998h9.867v65.314h-9.867V42.998L30.072,42.998z M49.572,42.998h9.869v65.314h-9.869 V42.998L49.572,42.998z"/>
                                    </g>
                                </svg>
                            </span>
                        </div>
                    </form>
                </div>
            </div>   
            <dialog id={id} className="modal">
                <div className="modal-box text-neutral">
                    <h3 className="font-bold text-lg mb-2 text-left">Opravdu chcete smazat?</h3>
                    <div className="flex flex-row justify-evenly gap-4 mt-4">
                        <form method="dialog" className='btn w-1/3'>
                            <button className="w-full">Ne</button>
                        </form>
                        <button className="btn w-1/3" onClick={handleConfirm}>Ano, smazat</button>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                    </div>
                </div>
            </dialog>     
        </>

    )
}

export default Designer