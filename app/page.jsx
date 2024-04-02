"use client"

import Image from 'next/image'
import NavigationPath from './components/navigation/navigation'
import React from 'react';
import Link from 'next/link';
import DisplayImage from './components/images/image';

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

            <div className='flex justify-center relative overflow-hidden mb-4 bg-base-300'>
                <div className="flex justify-center w-7/12 aspect-video">
                    <p className='outline-1 z-20 absolute top-10 right-[50%] text-white rounded-xl px-4 py-2 text-4xl font-bold drop-shadow-2xl [text-shadow:_2px_2px_2px_var(--tw-shadow-color)] shadow-black bg-slate-600 animate-fade-right'>{motto[counter]}</p>
                    <Image className="rounded-2xl w-max absolute h-[80%] z-10 animate-fade-up" width={1000} height={1000} src="/static/homepage/foto1.webp" alt="Home foto" />
                    <Image className="rounded-2xl w-1/3 absolute left-[10%] bottom-0 animate-fade-up" width={1000} height={1000} src="/static/homepage/foto2.webp" alt="Home foto" />
                    <Image className="rounded-2xl w-1/3 absolute right-[10%] bottom-0 animate-fade-up" width={1000} height={1000} src="/static/homepage/foto3.webp" alt="Home foto" />
                </div>
            </div>
            
            <div className="flex justify-center bg-base-300">
                <div className='w-8/12'>
                    <h1 className="text-4xl my-2 pl-4 text-neutral animate-fade-right">Interiérový designér | navrhování Interiérů</h1>
                    <h2 className="text-neutral animate-fade-left">Navrhujeme a realizujeme interiéry privátní i komerční od roku 2004.</h2>
                    <p className="text-neutral animate-fade-left">Jsme Liberecká firma působící v oblasti interiérového designu. Pomůžeme vám navrhnout jedinečný design a najít nejvhodnější materiály, vybavení, doplňky a barevné variace. Výsledný návrh - vizualizace by měla odpovídat Vašim představám, požadavkům i rozpočtu. Navštívíme Vás ve Vašem domově nebo se sejdeme v naší kanceláři. V našich realizacích využíváme speciální systém kování renomované švýcarské značky HAWA – oblíbený systém pro posuvné dveře, které zajíždí do speciálního postranního pouzdra rámu konstrukce a tím nepřekáží v prostoru. Ukázka je ve videu. Službu HOME STAGING provádíme soukromým osobám – majitelům nemovitosti, ale i realitním kancelářím, makléřům a developerům.</p>
                    <Link href="/o-nas" className="btn my-2 btn-primary animate-fade-right">Více o Nás</Link>
                </div>
            </div>

            <div className="flex justify-center py-32 bg-base-200">
                <div className='w-10/12'>
                    <h2 className='text-2xl text-neutral animate-fade-right'>Co už umíme</h2>
                    <div className="grid grid-cols-3 gap-4">
                        <div className='m-4 w-full animate-fade-up'>
                            <DisplayImage classes="rounded-2xl aspect-video object-cover" width={1000} height={1000} src="/static/homepage/umime/privatni.webp" alt="Privátní Design" />
                            <h3 className='text-lg my-1 pl-4 text-neutral'>Privátní Design</h3>
                            <p className='text-sm pl-4 text-neutral'>Rekonstrukce, redesign, nové vybavení interiérů.</p>
                        </div>
                        <div className='m-4 w-full animate-fade-up'>
                            <DisplayImage classes="rounded-2xl aspect-video object-cover" width={1000} height={1000} src="/static/homepage/umime/navrhy.webp" alt="Návrhy Interierů" />
                            <h3 className='text-lg my-1 pl-4 text-neutral'>Návrhy Interiérů</h3>
                            <p className='text-sm pl-4 text-neutral'>Návrhy, studie a vizualizace interiérů.</p>
                        </div>
                        <div className='m-4 w-full animate-fade-up'>
                            <DisplayImage classes="rounded-2xl aspect-video object-cover" width={1000} height={1000} src="/static/homepage/umime/komercni.webp" alt="Komerční Design" />
                            <h3 className='text-lg my-1 pl-4 text-neutral'>Komerční Design</h3>
                            <p className='text-sm pl-4 text-neutral'>Realizace interiérů pro firemní klientelu.</p>
                        </div>
                        <div className='m-4 w-full animate-fade-up'>
                            <DisplayImage classes="rounded-2xl aspect-video object-cover" width={1000} height={1000} src="/static/homepage/umime/dekorace.webp" alt="Dekorace Oken" />
                            <h3 className='text-lg my-1 pl-4 text-neutral'>Dekorace Oken</h3>
                            <p className='text-sm pl-4 text-neutral'>Záclony, závěsy, japonské stěny, rolety žaluzie.</p>
                        </div>
                        <div className='m-4 w-full animate-fade-up'>
                            <DisplayImage classes="rounded-2xl aspect-video object-cover" width={1000} height={1000} src="/static/homepage/umime/vzorove.webp" alt="Vzorové byty" />
                            <h3 className='text-lg my-1 pl-4 text-neutral'>Vzorové Byty</h3>
                            <p className='text-sm pl-4 text-neutral'>Vybavení vzorových bytů nové výstavby.</p>
                        </div>
                        <div className='m-4 w-full animate-fade-up'>
                            <DisplayImage classes="rounded-2xl aspect-video object-cover" width={1000} height={1000} src="/static/homepage/umime/nabytek.webp" alt="Nábytek na Míru" />
                            <h3 className='text-lg my-1 pl-4 text-neutral'>Nábytek Na Míru</h3>
                            <p className='text-sm pl-4 text-neutral'>Vlastní výroba nábytku dle prostor a ...</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center py-16 bg-base-300">
                <h2 className='text-xl my-2 mt-4 text-neutral animate-fade-right'>Kontaktujte nás, přijedeme za vámi</h2>
                <p className='text-xl my-4 text-neutral animate-fade-left'>tel. +420 736 763 715 nebo tel. +420 605 953 718</p>
            </div>

            <div className='flex flex-col items-center py-32 bg-base-200'>
                <h2 className="text-2xl mb-4 text-neutral animate-fade-up">Jak probíhá spolupráce</h2>
                <p className='text-sm text-neutral animate-fade-up'>Snažíme se naše klienty zbytečně nezatěžovat. Spolupráce se soustředí na 4 základní kroky. Používáme stejný pracovní postup již 19 roků.</p>
                <div className="grid grid-cols-4 gap-4 w-10/12">
                    <div className='m-4 animate-fade-up'>
                        <svg className="fill-neutral aspect-square m-12" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 118.875 122.877" xmlSpace="preserve">
                            <g><path fillRule="evenodd" clipRule="evenodd" d="M1.432,20.714c9.427,6.476,18.779,12.989,26.673,21.375 C23.58,62.076,41.64,78.045,58.111,87.453c6.448,3.683,9.298,6.265,16.476,5.024l28.268,27.696 C49.657,138.039-10.045,63.084,1.432,20.714L1.432,20.714z M81.874,85.356l6.201-6.298c1.788-1.819,4.74-1.842,6.559-0.053 l22.862,22.509c1.818,1.789,1.841,4.741,0.053,6.559l-6.203,6.299c-1.789,1.818-4.741,1.841-6.56,0.052L81.924,91.915 C80.105,90.127,80.083,87.175,81.874,85.356L81.874,85.356z M7.004,7.467l4.5-5.464c1.929-2.342,5.425-2.68,7.767-0.751 l23.405,19.281c2.342,1.931,2.677,5.425,0.75,7.77l-4.502,5.461c-1.93,2.345-5.425,2.68-7.768,0.751L7.755,15.234 C5.413,13.305,5.073,9.809,7.004,7.467L7.004,7.467z"/></g>
                        </svg>
                        <h3 className='text-lg text-neutral'>Kontakt</h3>
                        <p className='text-sm text-neutral'>Náš návrhář se setká s klientem a získá základní informace.</p>
                    </div>
                    <div className='m-4 animate-fade-up'>
                        <svg className="fill-neutral aspect-square m-12" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 90.63 122.88" xmlSpace="preserve">
                            <g><path d="M1.62,0.79h44.7h1.62v1.62v118.85v1.62h-1.62H1.62H0v-1.62V2.41V0.79H1.62L1.62,0.79z M90.2,31.25v90.01H59.58V31.25h-0.37 l0.91-1.86L73.3,2.31L74.43,0l1.19,2.29l14.03,27.07l0.98,1.89H90.2L90.2,31.25z M77.42,11.39h-5.66l-8.41,17.27h23.02L77.42,11.39 L77.42,11.39z M5.68,112.8h6.97v3.24H5.68V112.8L5.68,112.8z M5.68,106.57h6.97v3.24H5.68V106.57L5.68,106.57z M5.68,100.34h6.97 v3.24H5.68V100.34L5.68,100.34z M5.68,94.11h6.97v3.24H5.68V94.11L5.68,94.11z M5.68,87.88h6.97v3.24H5.68V87.88L5.68,87.88z M5.68,81.65h11.59v3.24H5.68V81.65L5.68,81.65z M5.68,75.42h6.97v3.24H5.68V75.42L5.68,75.42z M5.68,69.19h6.97v3.24H5.68V69.19 L5.68,69.19z M5.68,62.97h6.97v3.24H5.68V62.97L5.68,62.97z M5.68,56.74h6.97v3.24H5.68V56.74L5.68,56.74z M5.68,50.51h6.97v3.24 H5.68V50.51L5.68,50.51z M5.68,44.28h11.59v3.24H5.68V44.28L5.68,44.28z M5.68,38.05h6.97v3.24H5.68V38.05L5.68,38.05z M5.68,31.82 h6.97v3.24H5.68V31.82L5.68,31.82z M5.68,25.59h6.97v3.24H5.68V25.59L5.68,25.59z M5.68,19.36h6.97v3.24H5.68V19.36L5.68,19.36z M5.68,13.14h6.97v3.24H5.68V13.14L5.68,13.14z M5.68,6.91h11.59v3.24H5.68V6.91L5.68,6.91z M44.7,4.03H3.24v115.61H44.7V4.03 L44.7,4.03z"/></g>
                        </svg>
                        <h3 className='text-lg text-neutral'>Návrh</h3>
                        <p className='text-sm text-neutral'>Připravíme návrh řešení, který s vámi upřesňujeme a doplňujeme.</p>
                    </div>
                    <div className='m-4 animate-fade-up'>
                        <svg className="fill-neutral aspect-square m-12" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 101.878" xmlSpace="preserve">
                            <g><path fillRule="evenodd" clipRule="evenodd" d="M64.406,12.143c-2.672-1.042-5.431-1.586-8.276-1.586 c-4.279,0-7.798,1.369-10.557,4.084L21.765,38.427l2.477,2.499l-9.037,9.101L0,34.799l9.036-9.037l2.802,2.737L35.515,4.844 C38.773,1.608,42.271,0,46.007,0C52.285,0,58.411,4.041,64.406,12.143L64.406,12.143z M100.535,5.408 c2.588,0,5.072,0.441,7.384,1.25l-5.874,6.358c-13.345,14.437,1.715,22.79,14.986,12.879l5.119-3.822 c0.475,1.813,0.729,3.717,0.729,5.679c0,12.341-10.003,22.345-22.345,22.345c-4.026,0-7.804-1.065-11.066-2.929L78.616,58.689 c10.214,9.778,20.431,19.554,30.646,29.33l-13.858,13.858C85.74,91.8,76.08,81.718,66.422,71.635L47.394,91.833 c-1.445,2.471-4.126,4.132-7.194,4.132c-4.599,0-8.329-3.729-8.329-8.329c0-1.988,0.699-3.815,1.862-5.247l-0.012-0.012 l0.073-0.063c0.601-0.723,1.322-1.342,2.132-1.828L57.327,62.14L30.941,34.504L41.89,23.556 c10.157,9.756,18.402,17.582,28.572,27.324l11.864-10.172c-2.604-3.654-4.136-8.125-4.136-12.955 C78.19,15.411,88.193,5.408,100.535,5.408L100.535,5.408z M28.63,10.362L17.747,21.245l-2.086-2.085L26.544,8.276L28.63,10.362 L28.63,10.362z"/></g>
                        </svg>
                        <h3 className='text-lg text-neutral'>Realizace</h3>
                        <p className='text-sm text-neutral'>Realizaci provádějí naši zaměstnanci, kvalitní a prověření řemeslníci.</p>
                    </div>
                    <div className='m-4 animate-fade-up'>
                        <svg className="fill-neutral aspect-square m-12" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 85.07 122.88" xmlSpace="preserve">
                            <g><path d="M60.78,43.44c-1.49,0.81-3.35,0.26-4.15-1.22c-0.81-1.49-0.26-3.35,1.23-4.15c7.04-3.82,10.32-8.76,10.98-13.59 c0.35-2.58-0.05-5.17-1.02-7.57c-0.99-2.43-2.56-4.64-4.55-6.42c-3.87-3.46-9.3-5.28-14.97-3.87c-2.3,0.57-4.29,1.72-6.03,3.34 c-1.85,1.72-3.45,3.97-4.85,6.63c-0.79,1.5-2.64,2.07-4.13,1.29c-1.5-0.79-2.07-2.64-1.29-4.13c1.72-3.26,3.73-6.06,6.11-8.28 c2.49-2.31,5.38-3.97,8.74-4.8c7.8-1.93,15.23,0.53,20.51,5.25c2.68,2.4,4.81,5.39,6.15,8.69c1.35,3.33,1.9,6.99,1.39,10.7 C73.99,31.93,69.75,38.57,60.78,43.44L60.78,43.44z M37.32,67.61c-11.6-15.58-11.88-30.34,2.2-44.06l-10.14-5.6 C21.26,14.79,6.36,38.08,12.12,44.3l7.9,11.72l-1.63,3.4c-0.45,1.01-0.01,1.72,1.09,2.21l1.07,0.29L0,102.59l4.16,8.87l8.32-2.45 l2.14-4.16l-2.05-3.84l4.52-0.97L18.14,98l-2.36-3.6l1.55-3.01l4.51-0.57l1.47-2.85l-2.52-3.29l1.61-3.12l4.6-0.75l6.26-11.95 l1.06,0.58C36.16,70.56,37.11,69.84,37.32,67.61L37.32,67.61z M59.15,77.38l-3.06,11.42l-4.25,1.68l-0.89,3.33l3.1,2.63l-0.81,3.03 l-4.2,1.48l-0.86,3.2l3.01,2.95l-0.58,2.17l-4.13,1.87l2.76,3.25l-1.19,4.43l-7.45,4.07l-5.82-7.63l11.1-41.43l-2.69-0.72 c-0.55-0.15-0.89-0.72-0.74-1.28l1.13-4.21c-8.14-6.17-12.17-16.85-9.37-27.32c3.6-13.45,17.18-21.57,30.64-18.55 c0.06,0.72,0.05,1.45-0.05,2.18c-0.25,1.82-1.04,3.69-2.5,5.5c-0.2,0.24-0.41,0.49-0.63,0.73c-4.3-0.28-8.33,2.5-9.49,6.82 c-0.5,1.86-0.39,3.74,0.2,5.43c0.14,0.6,0.37,1.18,0.67,1.75c0.71,1.3,1.75,2.29,2.97,2.92c0.8,0.53,1.7,0.93,2.67,1.2 c4.83,1.29,9.78-1.49,11.22-6.24c1.46-1.29,2.73-2.65,3.82-4.05c2.12-2.73,3.57-5.63,4.43-8.58c5.84,6.3,8.41,15.37,6.02,24.29 c-2.8,10.47-11.65,17.71-21.77,18.98l-1.13,4.21c-0.15,0.55-0.72,0.89-1.28,0.74L59.15,77.38L59.15,77.38z"/></g>
                        </svg>
                        <h3 className='text-lg text-neutral'>Předání</h3>
                        <p className='text-sm text-neutral'>S hrdostí vám předáme kvalitně odvedenou hotovou zakázku.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

// TODO:
// Animation
// Google Analytics

// Pager design + Limited pages
// Better login

// Sociální sítě
// Homepage rebuild

// TS / TSX
// Bug fix

// Submit auto refresh
// Settings + Comment Hydratation