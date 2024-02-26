import Address from '@/app/components/settings/basic/address'
import AdminLogin from '@/app/components/settings/basic/adminLogin'
import BasicSettings from '@/app/components/settings/basic/basicSettings'
import SettingsMenu from '@/app/components/settings/menu'
import { getSettings } from '@/utils/database'
import React from 'react'

const Settings = async () => {
    const admins = await getSettings("adminLogin")
    const defaultAdmin = JSON.parse(admins?.value || "[]")

    let address = await getSettings("address")
    address = JSON.parse(address?.value || '""')
    const defaultAddress = address.address
    const defaultCity = address.city
    const defaultPsc = address.psc
    const defaultContact = address.contact

    return (
        <SettingsMenu activeTabName="Basic">
            <div className="flex flex-row w-full">
                <div className='basis-1/2'>
                    <BasicSettings title="Admin přihlášení">
                        <AdminLogin defaultAdmin={defaultAdmin} />
                    </BasicSettings>
                </div>
                <div className='basis-1/2'>
                    <BasicSettings title="Adresa">
                        <Address defaultAddress={defaultAddress} defaultCity={defaultCity} defaultPsc={defaultPsc} defaultContact={defaultContact}/>
                    </BasicSettings>
                </div>
            </div>
        </SettingsMenu>
    )
}

export default Settings