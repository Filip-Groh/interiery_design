import React from 'react'
import Designer from '@/app/components/settings/designer/designer'
import { getDesigner } from '@/utils/database'
import AddDesigner from '@/app/components/settings/designer/add'
import DesignerDialog from '@/app/components/settings/designer/dialog'
import SettingsMenu from '@/app/components/settings/menu'

const DesignerSettings = async () => {
    const designers = await getDesigner()

    return (
        <SettingsMenu activeTabName="Designer">
            <div className="flex flex-wrap gap-2 m-2">
                {designers.map((people) => {
                    return <Designer key={people.id} name={people.name} role={people.role} email={people.email} phone={people.mobil} image="/people.jpg"/>
                })}
                <AddDesigner modalId="addDesigner" />
                <DesignerDialog dialogId="addDesigner" />
            </div>
        </SettingsMenu>
    )
}

export default DesignerSettings