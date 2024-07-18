"use client"

import React from 'react'
import SettingsMenu from '../menu'
import AddDesigner from './add'
import DesignerDialog from './dialog'
import Designer from './designer'

const ClientDesignerPage = ({defaultDesigners, imagesPass}) => {
    const [designers, setDesigners] = React.useState(defaultDesigners)
    const [allImages, setAllImages] = React.useState(imagesPass)

    React.useEffect(() => {
        async function getAllImages() {
            const response = await fetch('/api/image', {
                method: 'GET'
            })
    
            const images = await response.json()
            setAllImages(images.data)
        }
        getAllImages()
    }, [])

    React.useEffect(() => {
        async function getAllDesigners() {
            const response = await fetch('/api/designer', {
                method: 'GET'
            })
    
            const designers = await response.json()
            setAllImages(designers.data)
        }
        getAllDesigners()
    }, [])

    return (
        <SettingsMenu activeTabName="Designer">
            <div className="flex flex-wrap gap-2 m-2">
                <AddDesigner modalId="addDesigner" />
                <DesignerDialog dialogId="addDesigner" imagesPass={allImages} designers={designers} setDesigners={setDesigners}/>
                {designers.map((people) => {
                    return <Designer key={people.id} id={people.id} name={people.name} role={people.role} email={people.email} phone={people.mobil} image={people.image.path} designers={designers} setDesigners={setDesigners}/>
                })}
            </div>
        </SettingsMenu>
    )
}

export default ClientDesignerPage