import React from 'react'
import Image from 'next/image'

const People = ({name, role, email, phone, image}) => {
    return (
        <div className="card card-compact w-72 bg-base-100 shadow-xl overflow-visible">
            <figure className="p-8 pb-2 overflow-visible">
                <div className="avatar">
                    <div className="w-48 mask mask-squircle hover:scale-[150%] transition-transform">
                        <Image width={200} height={200} src={image} alt="Human" placeholder="blur" blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDbopKK7RBRRSUAFNNLSGgYhpppxppoAQ000ppDSAaaQ0pppoAQ0hpTSGgBKSiigApKKKQGlRSZozVCCkozSZoAKQ0UlAAaaaUmmk0ABpppTTTSGIaQ0E0hNACGkoNJQAUlGaSkAtJSUUAaOaM0maTNUIdmkzSZpM0ALmkJpM0hNAATSE0E00mkAE0hNBNNJoADTSaCaQmgYE0maQmkzSAM0ZpM0maAFopM0ZoAv5ozTc0ZpiHZpM03NGaAFzSE0maQmgBSaaTSE0hNACk00mkJpCaQATSE0hNNJoAUmkJpCaQmgBc0maTNJmkA7NGaZmjNAGhmkzTc0ZqhDs0mabmkzQA7NITSZpuaQDiaaTSE0hNACk00mkJpCaAFJppNITTSaQxxNNzSE0hNAC5pM0maTNADs0ZpmaM0AX80ZpmaM0xDs0ZpuaTNADs0mabmkJoAUmkJpCaaTSAUmkJpCaaTQApNITSE00mgBSaTNNJpM0gHZpM03NJmgB+aTNNzRmgC/mkzTc0ZqhDs0maTNJmkAuaQmkzSZoAUmkJpCaaTQApNITSE00mgBSaaTSE0hNIBSaTNNJpM0ALmjNNzSZoAdmjNNzRmgC/mjNJmjNMBc0maTNJQAuaTNFJQAE00mg0hNIQE00mg0hoAQmkJoNNNAATSZoJpppALmkzSZpM0ALmjNJmjNAjRoooqhiUUUlABSGikNACGkNKaQ0gGmkNKaaaAENNNONNNACGmmnGmmkISkpaSgAopKKAP/9k="/>
                    </div>
                </div>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h3>{role}</h3>
                <p>e-mail:  {email}<br />mobil: (+420) {phone}
                </p>
            </div>
        </div>
    )
}

export default People