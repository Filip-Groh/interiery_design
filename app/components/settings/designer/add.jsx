"use client"

import React from 'react'

const AddDesigner = ({modalId}) => {
    return (
        <div className="card card-compact w-72 bg-base-100 shadow-xl overflow-visible">
            <div className="card-body">
                <button className="bg-base-100 rounded-lg" onClick={()=>document.getElementById(modalId).showModal()}>
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="75px" height="75px" viewBox="0 0 122.88 119.72" xmlSpace="preserve" className="inline p-2">
                        <g>
                            <path fill="#2F383F" d="M22.72,0h77.45c6.25,0,11.93,2.56,16.05,6.67c4.11,4.11,6.67,9.79,6.67,16.05v74.29c0,6.25-2.56,11.93-6.67,16.05 l-0.32,0.29c-4.09,3.94-9.64,6.38-15.73,6.38H22.72c-6.25,0-11.93-2.56-16.05-6.67l-0.3-0.32C2.43,108.64,0,103.09,0,97.01V22.71 c0-6.25,2.55-11.93,6.67-16.05C10.78,2.55,16.46,0,22.72,0L22.72,0z M55.47,38.34c0-3.3,2.67-5.97,5.97-5.97 c3.3,0,5.97,2.67,5.97,5.97v15.55h15.55c3.3,0,5.97,2.67,5.97,5.97c0,3.3-2.67,5.97-5.97,5.97H67.41v15.55 c0,3.3-2.67,5.97-5.97,5.97c-3.3,0-5.97-2.67-5.97-5.97V65.83H39.91c-3.3,0-5.97-2.67-5.97-5.97c0-3.3,2.67-5.97,5.97-5.97h15.55 V38.34L55.47,38.34z M100.16,10.24H22.72c-3.43,0-6.54,1.41-8.81,3.67c-2.26,2.26-3.67,5.38-3.67,8.81v74.29 c0,3.33,1.31,6.35,3.43,8.59l0.24,0.22c2.26,2.26,5.38,3.67,8.81,3.67h77.45c3.32,0,6.35-1.31,8.59-3.44l0.21-0.23 c2.26-2.26,3.67-5.38,3.67-8.81V22.71c0-3.42-1.41-6.54-3.67-8.81C106.71,11.65,103.59,10.24,100.16,10.24L100.16,10.24z"/>
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default AddDesigner