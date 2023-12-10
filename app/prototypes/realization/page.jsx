import React from 'react'
import Image1 from '@/app/components/images/1'
import Comment from '@/app/components/comment/comment'
import Image2 from '@/app/components/images/2'
import Image3 from '@/app/components/images/3'

const RealizationPrototype = () => {
    return (
        <div className="flex flex-row justify-center">
            <div className="w-3/4">
                <div className="w-min">
                    <div className="flex flex-row justify-between">
                        <h1>Částečná rekonstrukce bytu – Hejnice</h1>
                        <p>09 září, 2022</p>
                    </div>

                    <Image1 />
                </div>

                <ul className="flex flex-row gap-2">
                    <li className="rounded-md bg-slate-500 px-2">Obývák</li>
                    <li className="rounded-md bg-slate-500 px-2">Kuchyň</li>
                    <li className="rounded-md bg-slate-500 px-2">Rekonstrukce</li>
                </ul>

                <p className="m-4">
                    Some task description.
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adip iscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipisc ing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adip iscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit.
                </p>

                <Image2 />

                <Image3 />

                <h2>Komentáře</h2>
                <ul className="flex flex-col gap-2">
                    <li>
                        <Comment />
                    </li>
                    <li>
                        <Comment />
                    </li>
                    <li>
                        <Comment />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default RealizationPrototype