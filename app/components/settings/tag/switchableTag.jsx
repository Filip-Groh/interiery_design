import React from 'react'
import Tag from '../../tag'

const SwitchableTag = ({tag}) => {
    return (
        <label key={tag.id} className="swap swap-flip">
            <input type="checkbox" id={tag.id} name={tag.id} className="min-h-full min-w-full tag-reset"/>
            <div className="swap-on text-cyan-400">
                <Tag name={tag.name} isHighlighted={true} />
            </div>
            <div className="swap-off">
                <Tag name={tag.name} isHighlighted={false} />
            </div>
        </label>
    )
}

export default SwitchableTag