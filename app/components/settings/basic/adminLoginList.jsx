import React from 'react'
import DeleteButton from '../deleteButton'

const AdminLoginList = ({login, index, admin, setAdmin}) => {
    const handleDelete = () => {
        setAdmin(admin.toSpliced(index, 1))
    }

    return (
        <li key="admin" className='bg-base-100 w-56 rounded-lg m-2 py-1 px-4 flex justify-between'>
            {login}
            <DeleteButton handleDelete={handleDelete} isDependent={admin.length < 2}/>
        </li>
    )
}

export default AdminLoginList