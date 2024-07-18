"use client"

import React from 'react'
import AdminLoginList from './adminLoginList'

const AdminLogin = ({defaultAdmin}) => {
    const [admins, setAdmins] = React.useState(defaultAdmin)
    const [actualData, setActualData] = React.useState(false)

    React.useEffect(() => {
        async function getAllAdmins() {
            const formData = new FormData()
            formData.set("key", "adminLogin")
            const response = await fetch('/api/settings', {
                method: 'PUT',
                body: formData
            })

            const admins = await response.json()
            const defaultAdmin = JSON.parse(admins.data?.value || "[]")
            setAdmins(defaultAdmin)
        }
        getAllAdmins()
        setActualData(true)
    }, [])

    React.useEffect(() => {
        if (actualData) {
            const formData = new FormData()
            formData.set("key", "adminLogin")
            formData.set("value", JSON.stringify(admins))
            const response = fetch('/api/settings', {
                method: 'POST',
                body: formData,
            })   
        }

    }, [admins, actualData])

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