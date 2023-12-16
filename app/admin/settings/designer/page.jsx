import React from 'react'
import Link from 'next/link'
import Designer from '@/app/components/settings/designer/designer'
import { getDesigners } from '@/utils/database'
import AddDesigner from '@/app/components/settings/designer/add'
import DesignerDialog from '@/app/components/settings/designer/dialog'

const DesignerSettings = async () => {
    const designers = await getDesigners()

    return (
        <>
            <div className="flex justify-center p-2">
                <div role="tablist" className="tabs tabs-boxed w-8/12">
                    <Link role="tab" className="tab" href="/admin">Dashboard</Link>
                    <Link role="tab" className="tab tab-active" href="/admin/settings">Settings</Link>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-row bg-base-200 w-10/12 rounded-lg mb-2">
                    <ul className="menu bg-base-100 w-56 rounded-lg m-2">
                        <li><Link href="/admin/settings">Basic</Link></li>
                        <li><Link href="/admin/settings/designer" className="active">Designer</Link></li>
                        <li><Link href="/admin/settings/realization">Realization</Link></li>
                        <li><Link href="/admin/settings/article">Article</Link></li>
                        <li><Link href="/admin/settings/design">Design</Link></li>
                        <li><Link href="/admin/settings/preview">Preview</Link></li>
                        <li><Link href="/admin/settings/tag">Tag</Link></li>
                        <li><Link href="/admin/settings/image">Image</Link></li>
                    </ul>
                    <div className="flex flex-wrap gap-2 m-2">
                        {designers.map((people) => {
                            return <Designer key={people.id} name={people.name} role={people.role} email={people.email} phone={people.mobil} image="/people.jpg"/>
                        })}
                        <AddDesigner modalId="addDesigner" />
                        <DesignerDialog dialogId="addDesigner" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DesignerSettings