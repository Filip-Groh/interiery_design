import React from 'react'

const Tag = ({name, isHighlighted=false, children=null, isAnimated=false}) => {
    return (
        <div className={"badge badge-outline badge-neutral m-0.5" + (isHighlighted ? " badge-primary" : "") + (isAnimated ? " animate-fade-up" : "")}>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={15} height={15} x="0px" y="0px" viewBox="0 0 103.41 122.88" style={{enableBackground: "new 0 0 103.41 122.88"}} xmlSpace="preserve">
                <g>
                    <path className={isHighlighted ? "fill-primary" : 'fill-neutral'} d="M23.12,51.51L18.3,74.86H0v18.31h14.87L8.7,122.88H27.5l6.08-29.71h23.48l-5.91,29.71h18.98l5.99-29.71h27.28V74.86H79.76 l5.3-26.34h18.35V30.23H88.79L94.7,0H75.79l-6.08,30.23H46.15L52.32,0H33.36l-5.99,30.23H0v18.29h23.74L23.12,51.51L23.12,51.51z M58.74,74.86H37.17l5.55-26.34h23.46l-5.4,26.34H58.74L58.74,74.86z"/>
                </g>
            </svg>
            <p className='ml-[2px] truncate'>
                {name}
            </p>
            {children}
        </div> 
    )
}

export default Tag