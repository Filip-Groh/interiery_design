import AdminLogin from '@/app/components/settings/basic/adminLogin'
import SettingsMenu from '@/app/components/settings/menu'
import { getSettings } from '@/utils/database'
import React from 'react'

const Settings = async () => {
    const admins = await getSettings("adminLogin")
    const defaultAdmin = JSON.parse(admins?.value || "[]")

    return (
        <SettingsMenu activeTabName="Basic">
            <AdminLogin defaultAdmin={defaultAdmin} />
        </SettingsMenu>
    )
}

export default Settings