"use client"

import Image from 'next/image'
import NavigationPath from './components/navigation/navigation'
import React from 'react';
import Link from 'next/link';

export default function Home() {
    const [counter, setCouter] = React.useState(0)
    const [timer, setTimer] = React.useState()
    const motto = [
        "Splňte si přání, domov vašich snů",
        "Zkušenost zavazuje",
        "Design děláme především srdcem"
    ]

    React.useEffect(() => {
        if (!timer) {
            setTimer(setInterval(() => {
                setCouter((counter) => {
                    let newCount = counter + 1
                    if (newCount == motto.length) {
                        return 0
                    }
                    return counter + 1
                })
            }, 10000))
        }
    }, [timer, motto.length])

    return (
        <>
            <NavigationPath path={["Home"]} links={["/"]} />

            <div className='flex justify-center relative overflow-hidden mb-4'>
                <div className="flex justify-center w-7/12 aspect-video">
                    <p className='outline-1 z-20 absolute top-10 right-[50%] text-white rounded-xl px-4 py-2 text-4xl font-bold drop-shadow-2xl [text-shadow:_2px_2px_2px_var(--tw-shadow-color)] shadow-black bg-slate-600'>{motto[counter]}</p>
                    <Image className="rounded-2xl w-max absolute h-[80%] z-10" width={1000} height={1000} src="/homepage/foto1.webp" alt="Home foto" />
                    <Image className="rounded-2xl w-1/3 absolute left-[10%] bottom-0" width={1000} height={1000} src="/homepage/foto2.webp" alt="Home foto" />
                    <Image className="rounded-2xl w-1/3 absolute right-[10%] bottom-0" width={1000} height={1000} src="/homepage/foto3.webp" alt="Home foto" />
                </div>
            </div>
            
            <div className="flex justify-center">
                <div className='w-8/12'>
                    <h1 className="text-4xl my-2 pl-4">Interiérový designér | navrhování Interiérů</h1>
                    <h2>Navrhujeme a realizujeme interiéry privátní i komerční od roku 2004.</h2>
                    <p>Jsme Liberecká firma působící v oblasti interiérového designu. Pomůžeme vám navrhnout jedinečný design a najít nejvhodnější materiály, vybavení, doplňky a barevné variace. Výsledný návrh - vizualizace by měla odpovídat Vašim představám, požadavkům i rozpočtu. Navštívíme Vás ve Vašem domově nebo se sejdeme v naší kanceláři. V našich realizacích využíváme speciální systém kování renomované švýcarské značky HAWA – oblíbený systém pro posuvné dveře, které zajíždí do speciálního postranního pouzdra rámu konstrukce a tím nepřekáží v prostoru. Ukázka je ve videu. Službu HOME STAGING provádíme soukromým osobám – majitelům nemovitosti, ale i realitním kancelářím, makléřům a developerům.</p>
                    <Link href="/o-nas" className="btn my-2">Více o Nás</Link>
                </div>
            </div>

            <div className="flex justify-center py-32 bg-base-300">
                <div className='w-10/12'>
                    <h2 className='text-2xl'>Co už umíme</h2>
                    <div className="flex flex-row justify-evenly gap-2">
                        <div className="flex flex-col gap-2">
                            <div className='m-4'>
                                <h3 className='text-lg my-1'>Privátní Design</h3>
                                <p className='text-sm'>Rekonstrukce, redesign, nové vybavení interiérů.</p>
                            </div>
                            <div className='m-4'>
                                <h3 className='text-lg my-1'>Návrhy Interiérů</h3>
                                <p className='text-sm'>Návrhy, studie a vizualizace interiérů.</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className='m-4'>
                                <h3 className='text-lg my-1'>Komerční Design</h3>
                                <p className='text-sm'>Realizace interiérů pro firemní klientelu.</p>
                            </div>
                            <div className='m-4'>
                                <h3 className='text-lg my-1'>Dekorace Oken</h3>
                                <p className='text-sm'>Záclony, závěsy, japonské stěny, rolety žaluzie.</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className='m-4'>
                                <h3 className='text-lg my-1'>Vzorové Byty</h3>
                                <p className='text-sm'>Vybavení vzorových bytů nové výstavby.</p>
                            </div>
                            <div className='m-4'>
                                <h3 className='text-lg my-1'>Nábytek Na Míru</h3>
                                <p className='text-sm'>Vlastní výroba nábytku dle prostor a ...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center py-16">
                <h2 className='text-xl my-2 mt-4'>Kontaktujte nás, přijedeme za vámi</h2>
                <p className='text-xl my-4'>tel. +420 736 763 715 nebo tel. +420 605 953 718</p>
            </div>

            <div className='flex flex-col items-center py-32 bg-base-300'>
                <h2 className="text-2xl mb-4">Jak probíhá spolupráce</h2>
                <p className='text-sm'>Snažíme se naše klienty zbytečně nezatěžovat. Spolupráce se soustředí na 4 základní kroky. Používáme stejný pracovní postup již 19 roků.</p>
                <div className="flex flex-row justify-evenly gap-2 mt-8">
                    <div className='w-1/5'>
                        <h3 className='text-lg'>Kontakt</h3>
                        <p className='text-sm'>Náš návrhář se setká s klientem a získá základní informace.</p>
                    </div>
                    <div className='w-1/5'>
                        <h3 className='text-lg'>Návrh</h3>
                        <p className='text-sm'>Připravíme návrh řešení, který s vámi upřesňujeme a doplňujeme.</p>
                    </div>
                    <div className='w-1/5'>
                        <h3 className='text-lg'>Realizace</h3>
                        <p className='text-sm'>Realizaci provádějí naši zaměstnanci, kvalitní a prověření řemeslníci.</p>
                    </div>
                    <div className='w-1/5'>
                        <h3 className='text-lg'>Předání</h3>
                        <p className='text-sm'>S hrdostí vám předáme kvalitně odvedenou hotovou zakázku.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

// TODO:
// Design - barvičky
// Google Analytics
// Basic nastavení
// Statické obrázky
// Propisování do sociálních sítí + sdílení