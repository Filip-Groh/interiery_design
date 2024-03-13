import React from 'react'
import Designer from '@/app/components/settings/designer/designer'
import { getDesigner, getImage } from '@/utils/database'
import AddDesigner from '@/app/components/settings/designer/add'
import DesignerDialog from '@/app/components/settings/designer/dialog'
import SettingsMenu from '@/app/components/settings/menu'

const DesignerSettings = async () => {
    const designers = await getDesigner()
    const images = await getImage()

    return (
        <SettingsMenu activeTabName="Designer">
            <div className="flex flex-wrap gap-2 m-2">
                <AddDesigner modalId="addDesigner" />
                <DesignerDialog dialogId="addDesigner" imagesPass={images}/>
                {designers.map((people) => {
                    return <Designer key={people.id} id={people.id} name={people.name} role={people.role} email={people.email} phone={people.mobil} image={people.image.path}/>
                })}
            </div>
        </SettingsMenu>
    )
}

export default DesignerSettings