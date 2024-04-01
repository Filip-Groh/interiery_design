"use client"

import React from 'react'
import AdminLoginList from './adminLoginList'

const AdminLogin = ({defaultAdmin}) => {
    const [admins, setAdmins] = React.useState(defaultAdmin)

    React.useEffect(() => {
        const formData = new FormData()
        formData.set("key", "adminLogin")
        formData.set("value", JSON.stringify(admins))
        const response = fetch('/api/settings', {
            method: 'POST',
            body: formData,
        })
    }, [admins])

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        setAdmins(admins.concat(formData.get("login")))

        event.target.elements.login.value = ""
    }

    return (
        <ul>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-row">
                    <input type="email" id="login" name="login" placeholder="Email" className="file-input file-input-bordered w-full" required />
                    <input type="submit" value="Vytvořit" className="btn"/>
                </div>
            </form>
            {admins.map((admin, index) => {
                return (
                    <AdminLoginList key={admin} login={admin} index={index} admin={admins} setAdmin={setAdmins} />
                )
            })}
        </ul>
    )
}

export default AdminLogin