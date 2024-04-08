import React from 'react'
import Designer from '@/app/components/settings/designer/designer'
import { getDesigner, getImage, getTag } from '@/utils/database'
import AddDesigner from '@/app/components/settings/designer/add'
import DesignerDialog from '@/app/components/settings/designer/dialog'
import SettingsMenu from '@/app/components/settings/menu'

const DesignerSettings = async () => {
    const designers = await getDesigner()
    const images = await getImage()
    const tags = await getTag()

    return (
        <SettingsMenu activeTabName="Designer">
            <div className="flex flex-wrap gap-2 m-2">
                <AddDesigner modalId="addDesigner" />
                <DesignerDialog dialogId="addDesigner" imagesPass={images} tagsPass={tags}/>
                {designers.map((people) => {
                    return <Designer key={people.id} id={people.id} name={people.name} role={people.role} email={people.email} phone={people.mobil} image={people.image.path}/>
                })}
            </div>
        </SettingsMenu>
    )
}

export default DesignerSettings