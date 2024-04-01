import React from 'react'
import SettingsMenu from '@/app/components/settings/menu'
import BasicSettings from '@/app/components/settings/basic/basicSettings'
import Description from '@/app/components/settings/metadata/description'
import Keyword from '@/app/components/settings/metadata/keyword'
import { getSettings } from '@/utils/database'

const Metadata = async () => {
    const description = await getSettings("description")
    const defaultDescription = JSON.parse(description?.value || '""')

    const keywords = await getSettings("keywords")
    const defaultKeywords = JSON.parse(keywords?.value || "[]")

    return (
        <SettingsMenu activeTabName="Metadata">
            <div className="flex flex-row w-full">
                <div className="basis-1/2">
                    <BasicSettings title="Popis webu pro vyhledávače">
                        <Description defaultDescription={defaultDescription} />
                    </BasicSettings>
                </div>
                <div className="basis-1/2">
                    <BasicSettings title="Klíčová slova">
                        <Keyword defaultKeywords={defaultKeywords} />
                    </BasicSettings>
                </div>
            </div>
        </SettingsMenu>
    )
}

export default Metadata