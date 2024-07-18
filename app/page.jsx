import Image from 'next/image'
import NavigationPath from './components/navigation/navigation'
import React from 'react';
import Link from 'next/link';
import DisplayImage from './components/images/image';
import { getRealizationBySet, getSettings, getDesigner, getQandA } from '@/utils/database';
import HomepageRealizationPreview from './components/realization/homepagePreview';
import Question from './components/question';
import ContactForm from './components/contactForm';

export default async function Home() {
    let realizations = await getRealizationBySet(4, 1)
    let query = await getSettings("address")
    query = JSON.parse(query?.value || '""')
    const address = query.address
    const city = query.city
    const psc = query.psc
    const peoples = await getDesigner()
    let QandAs = await getQandA()

    return (
        <main>
            <article className='flex flex-col items-center px-4'>
                <NavigationPath path={["Home"]} links={["/"]} />
                <section className='text-neutral flex flex-row sm:h-[40rem] max-w-7xl max-sm:flex-col-reverse'>
                    <div className="basis-1/3">
                        <h1 className='2xl:text-8xl text-4xl p-8 max-sm:text-center animate-fade-right'>INTERIÉRY DESIGN</h1>
                        <p className='text-xl p-8 pt-0 animate-fade-right'>Navrhujeme a realizujeme interiéry privátní i komerční od roku 2004.</p>
                        <div className='flex flex-row w-full justify-between 2xl:mt-24 animate-fade-right'>
                            <Link href="/o-nas" className='btn btn-lg ml-10 mr-10 max-sm:w-[calc(100%-5rem)]'>O nás</Link>
                            <Link href="#showcase" className='2xl:mr-32 mr-8 animate-bounce flex flex-col h-24 max-sm:hidden'>
                                <p className='p-1 text-xl'>Více info</p>
                                <span className='fill-neutral relative'>
                                    <svg className='absolute top-0' xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 299.283">
                                        <path d="M75.334 12.591C10.57-24.337-20.852 28.186 15.131 64.566l200.866 209.613c33.472 33.471 46.534 33.471 80.006 0L496.869 64.566c35.983-36.38 4.561-88.903-60.203-51.975L256 109.944 75.334 12.591z"/>
                                    </svg>
                                    <svg className='absolute top-6' xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 299.283">
                                        <path d="M75.334 12.591C10.57-24.337-20.852 28.186 15.131 64.566l200.866 209.613c33.472 33.471 46.534 33.471 80.006 0L496.869 64.566c35.983-36.38 4.561-88.903-60.203-51.975L256 109.944 75.334 12.591z"/>
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="basis-2/3 h-full object-none">
                        <Image width={5000} height={5000} src="/static/homepage/foto3.webp" alt="Home foto" className='rounded-lg animate-fade-left' />
                    </div>
                </section>
                <section className='text-neutral flex sm:flex-row flex-col max-w-7xl max-sm:mt-8 gap-4' id="showcase">
                    <div className='basis-1/2'>
                        <DisplayImage width={5000} height={5000} src="/static/homepage/foto1.webp" alt="Home foto" classes='rounded-lg animate-fade-right' />
                    </div>
                    <div className='basis-1/2 flex flex-col items-center'>
                        <DisplayImage width={300} height={300} src="/static/logo.jpg" alt="Logo" classes='rounded-lg max-sm:w-full animate-fade-left' />
                        <h2 className='w-full text-center text-4xl mt-4 animate-fade-left'><strong>Interiérový designér</strong><br />
                            navrhování interiérů
                        </h2>
                        <p className='p-8 max-sm:p-2 2xl:ml-32 sm:ml-4 animate-fade-left'>
                            Jsme Liberecká firma působící v oblasti interiérového designu. Pomůžeme vám navrhnout jedinečný design, která bude odpovídat Vašim představám.
                        </p>
                        <p className='p-8 max-sm:p-2 pt-4 2xl:ml-32 sm:ml-4 animate-fade-left'>
                            Službu HOME STAGING provádíme soukromým osobám - majitelům nemovitosti, ale i realitním kancelářím, makléřům a developerům.
                        </p>
                    </div>
                </section>
                <section className='text-neutral sm:mt-24 mt-8 max-w-7xl sm:mx-8'>
                    <h3 className='sm:text-4xl text-2xl text-center animate-fade-up'>Služby</h3>
                    <h2 className='sm:text-6xl text-4xl text-center sm:mt-4 animate-fade-up'>Co nabízíme</h2>
                    <div className='sm:mt-16 mt-2 flex flex-col sm:gap-16 gap-4'>
                        <div className='flex sm:flex-row flex-col'>
                            <div className='basis-1/2 flex flex-col justify-center items-center'>
                                <h4 className='text-center sm:text-5xl text-2xl animate-fade-right'><strong>Privátní design</strong></h4>
                                <p className='text-center sm:w-1/3 sm:mt-8 animate-fade-right'>Rekonstrukce, redesign, nové vybavení interiérů.</p>
                            </div>
                            <div className='basis-1/2'>
                                <DisplayImage width={1000} height={1000} src="/static/homepage/sluzby/privatni.webp" alt="Home foto" classes='rounded-lg animate-fade-left' />
                            </div>
                        </div>
                        <div className='flex sm:flex-row flex-col-reverse'>
                            <div className='basis-1/2'>
                                <DisplayImage width={1000} height={1000} src="/static/homepage/sluzby/komercni.webp" alt="Home foto" classes='rounded-lg aspect-video animate-fade-right' />
                            </div>
                            <div className='basis-1/2 flex flex-col justify-center items-center'>
                                <h4 className='text-center sm:text-5xl text-2xl animate-fade-left'><strong>Komerční design</strong></h4>
                                <p className='text-center sm:w-1/2 sm:mt-8 animate-fade-left'>Realizace interiérů pro firemní klientelu.</p>
                            </div>
                        </div>
                        <div className='sm:mt-16 flex flex-col items-center'>
                            <h4 className='text-center sm:text-5xl text-2xl animate-fade-up'><strong>Dekorace oken</strong></h4>
                            <p className='text-center sm:my-4 animate-fade-up'>Záclony, závěsy, japonské stěny, rolety žaluzie.</p>
                            <span className='sm:w-10/12 block'>
                                <DisplayImage width={10000} height={10000} src="/static/homepage/sluzby/dekorace.webp" alt="Home foto" classes='rounded-lg animate-fade-up' />
                            </span>
                        </div>
                        <div className='sm:mt-16 flex flex-col items-center'>
                            <h4 className='text-center sm:text-5xl text-2xl animate-fade-up'><strong>Nábytek na míru</strong></h4>
                            <p className='text-center sm:my-4 animate-fade-up'>Vlastní výroba nábytku dle prostor.</p>
                            <span className='sm:w-10/12 block'>
                                <DisplayImage width={10000} height={10000} src="/static/homepage/sluzby/nabytek.webp" alt="Home foto" classes='rounded-lg animate-fade-up' />
                            </span>
                        </div>
                        <div className='flex sm:flex-row flex-col'>
                            <div className='basis-1/2 flex flex-col items-center'>
                                <h4 className='text-center sm:text-5xl text-2xl animate-fade-right'><strong>Návrhy interiérů</strong></h4>
                                <p className='text-center sm:my-4 animate-fade-right'>Návrhy, studie a vizualizace interiérů.</p>
                                <span className='sm:w-10/12 block'>
                                    <DisplayImage width={1000} height={1000} src="/static/homepage/sluzby/navrhy.webp" alt="Home foto" classes='rounded-lg aspect-video animate-fade-right'/>
                                </span>
                            </div>
                            <div className='basis-1/2 flex flex-col items-center'>
                                <h4 className='text-center sm:text-5xl text-2xl animate-fade-left'><strong>Vzorové byty</strong></h4>
                                <p className='text-center sm:my-4 animate-fade-left'>Vybavení vzorových bytů nové výstavby.</p>
                                <span className='sm:w-10/12 block'>
                                    <DisplayImage width={1000} height={1000} src="/static/homepage/sluzby/vzorove.webp" alt="Home foto" classes='rounded-lg aspect-video animate-fade-left'/>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='text-neutral sm:mt-24 mt-8 max-w-7xl'>
                    <h3 className='sm:text-4xl text-2xl text-center animate-fade-up'>Realizace</h3>
                    <h2 className='sm:text-6xl text-4xl text-center sm:mt-4 animate-fade-up'>Naše nejlepší realizace</h2>
                    <div className='flex sm:flex-row flex-col max-sm:gap-16 sm:mt-16 mt-4'>
                        <div className='basis-1/2 flex flex-col gap-16 items-center animate-fade-right'>
                            {realizations.map((realization, index) => {
                                if (index % 2 == 0) {
                                    return (<HomepageRealizationPreview key={index} id={realization.id} title={realization.title} description={realization.task} tags={realization.tags} path={realization.image[0].path} alt={realization.image[0].path} />)
                                }
                            })}
                        </div>
                        <div className='basis-1/2 flex flex-col gap-16 items-center animate-fade-left'>
                            {realizations.map((realization, index) => {
                                if (index % 2 == 1) {
                                    return (<HomepageRealizationPreview key={index} id={realization.id} title={realization.title} description={realization.task} tags={realization.tags} path={realization.image[0].path} alt={realization.image[0].path} />)
                                }
                            })}
                        </div>
                    </div>
                    <div className='w-full flex justify-center p-8'>
                        <div className='btn btn-lg animate-fade-up'>
                            <Link href="realization">Více realizací zde</Link>
                        </div>
                    </div>
                </section>
                <section className='text-neutral sm:mt-24 mt-8 max-w-7xl'>
                    <h3 className='sm:text-4xl text-2xl text-center animate-fade-up'>Q&A</h3>
                    <h2 className='sm:text-6xl text-4xl text-center sm:mt-4 mb-2 animate-fade-up'>Otázky a Odpovědi</h2>
                    <div className='flex flex-col items-center animate-fade-up'>
                        {QandAs.map((QandA) => {
                            return (<Question key={QandA.id} question={QandA.question} answer={QandA.answer}/>)
                        })}
                    </div>
                    <div className='flex flex-col items-center sm:gap-4 gap-2 sm:m-8 m-2'>
                        <p className='sm:text-4xl text-xl animate-fade-up'>Stále nějaké otázky?</p>
                        <p className='sm:text-4xl text-xl animate-fade-up'>Neváhejte nás kontaktovat</p>
                        <div className='btn btn-wide animate-fade-up'>
                            <Link href="/kontakty">Kontakty</Link>
                        </div>
                    </div>
                </section>
                <section className='text-neutral sm:mt-24 mt-8 max-w-7xl w-full'>
                    <h3 className='sm:text-4xl text-2xl text-center animate-fade-up'>Kontaktování</h3>
                    <h2 className='sm:text-6xl text-4xl text-center sm:mt-4 animate-fade-up'>Kde nás kontaktovat</h2>
                    <div className='flex sm:flex-row flex-col justify-evenly sm:m-8 m-2 gap-8'>
                        <div className='basis-1/3 flex flex-col items-center animate-fade-right'>
                            <svg id="Layer_1" dataname="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 50.12" className='fill-neutral' width="min(27vw,450px)" height="min(20vw,300px)">
                                <path d="M54.86,0h63.69a4.29,4.29,0,0,1,4.32,4.67l-3.09,40.78a5,5,0,0,1-3.45,4.4,4.89,4.89,0,0,1-1.57.27H51.07a4.29,4.29,0,0,1-4.32-4.67L49.84,4.67a5.13,5.13,0,0,1,5-4.67ZM39.2,6v5.24H2.62A2.62,2.62,0,1,1,2.62,6Zm-3,32.88v5.23H21.91a2.62,2.62,0,1,1,0-5.23Zm1.5-16.44v5.23H11.47a2.62,2.62,0,1,1,0-5.23Zm13.52,20L73.65,22.88,53.89,7.21,51.23,42.46ZM76.77,25.55,53.57,45.87h59.19L93.6,25.57l-7.33,5.87a2.26,2.26,0,0,1-1.38.49,2,2,0,0,1-1.32-.47l-6.8-5.91Zm20.29-2.72L115.75,42.6,118.44,7,97.06,22.83ZM57.2,4.25l28,22.82L115.39,4.25Z"/>
                            </svg>
                            <h4 className='sm:text-4xl text-2xl sm:m-4'><strong>Email</strong></h4>
                            <p className='sm:text-2xl mb-2'>Neváhejte nám napsat</p>
                            <p className='text-sm'>{peoples[0].email}</p>
                        </div>
                        <div className='basis-1/3 flex flex-col items-center animate-fade-up'>
                            <svg version="1.1" className='fill-current' id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="min(20vw,300px)" height="min(20vw,300px)" viewBox="0 0 122.879 122.785" enableBackground="new 0 0 122.879 122.785" xmlSpace="preserve">
                                <g>
                                    <path d="M29.789,59.399c3.635,6.556,7.821,12.852,13.274,18.597c5.452,5.777,12.236,11.035,21.031,15.515 c0.649,0.324,1.266,0.324,1.817,0.097c0.844-0.324,1.688-1.006,2.532-1.85c0.649-0.649,1.46-1.688,2.305-2.824 c3.375-4.447,7.563-9.964,13.469-7.205c0.13,0.064,0.228,0.13,0.357,0.194l19.7,11.327c0.065,0.032,0.131,0.098,0.195,0.13 c2.597,1.785,3.667,4.544,3.699,7.66c0,3.181-1.168,6.75-2.888,9.769c-2.272,3.992-5.615,6.621-9.478,8.374 c-3.667,1.688-7.757,2.597-11.685,3.181c-6.166,0.908-11.943,0.324-17.851-1.493c-5.777-1.784-11.587-4.738-17.948-8.665 l-0.454-0.293c-2.921-1.817-6.069-3.765-9.152-6.068c-11.328-8.537-22.849-20.87-30.347-34.437 c-6.297-11.392-9.737-23.693-7.854-35.41c1.039-6.426,3.797-12.268,8.601-16.13c4.187-3.375,9.834-5.226,17.136-4.576 c0.844,0.064,1.59,0.552,1.98,1.265l12.625,21.356c1.851,2.402,2.077,4.771,1.071,7.14c-0.844,1.948-2.531,3.733-4.836,5.42 c-0.681,0.584-1.492,1.168-2.336,1.785c-2.824,2.045-6.037,4.414-4.934,7.206L29.789,59.399L29.789,59.399L29.789,59.399z M107.916,18c2.594,0,4.696,2.103,4.696,4.696s-2.103,4.696-4.696,4.696s-4.696-2.103-4.696-4.696S105.322,18,107.916,18 L107.916,18z M75.697,17.983c2.6,0,4.707,2.107,4.707,4.706s-2.107,4.705-4.707,4.705s-4.704-2.106-4.704-4.705 S73.098,17.983,75.697,17.983L75.697,17.983z M92.384,17.983c2.6,0,4.707,2.107,4.707,4.706s-2.107,4.705-4.707,4.705 s-4.705-2.106-4.705-4.705S89.784,17.983,92.384,17.983L92.384,17.983z M73.012,0c-3.518,0-6.527,1.238-9.031,3.714 s-3.714,5.486-3.714,9.032v22.368c0,3.545,1.237,6.555,3.714,9.032c2.476,2.476,5.486,3.713,9.031,3.713h10.472 c-0.731,2.813-1.632,5.486-2.757,7.99c-1.098,2.533-2.982,4.952-5.571,7.259c4.98-1.294,9.397-3.235,13.308-5.796 c3.884-2.532,7.26-5.711,10.045-9.454h11.626c3.518,0,6.528-1.266,9.032-3.713c2.504-2.477,3.713-5.487,3.713-9.032V12.746 c0-3.518-1.237-6.528-3.713-9.032C116.689,1.21,113.68,0,110.134,0C98.822,0,84.324,0,73.012,0L73.012,0L73.012,0z"/>
                                </g>
                            </svg>
                            <h4 className='sm:text-4xl text-2xl sm:m-4'><strong>Mobil</strong></h4>
                            <p className='sm:text-2xl mb-2'>Neváhejte nám zavolat</p>
                            <p className='text-sm'>(+420) {peoples[0].mobil}</p>
                        </div>
                        <div className='basis-1/3 flex flex-col items-center animate-fade-left'>
                            <svg id="Layer_1" dataname="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104.44 122.88" className='fill-neutral' width="min(20vw,300px)" height="min(20vw,300px)">
                                <path d="M3.55,119.32H0v3.56H92.49v-3.56h-2v-17a1.22,1.22,0,0,0-1.22-1.22H75.54a1.22,1.22,0,0,0-1.22,1.22v17H48.47V95.23a1.63,1.63,0,0,0-1.63-1.62H19.94a1.63,1.63,0,0,0-1.63,1.62v24.09H0V2.6A2.79,2.79,0,0,1,.82.85h0a2.84,2.84,0,0,1,2-.84H63.93a2.82,2.82,0,0,1,2,.84l.13.13a2.83,2.83,0,0,1,.72,1.89V34.57H102a2.39,2.39,0,0,1,1.69.7h0a2.36,2.36,0,0,1,.7,1.68v84.29a1.63,1.63,0,0,1-1.63,1.63H92.49v-3.56H101V38H66.79v81.34H63.23V3.56H3.55V119.32Zm84.54,0H76.76V103.5H88.09v15.82ZM85.45,45h8.81c.07,0,.13.1.13.22v5.71c0,.1-.06.21-.13.21H85.45c-.07,0-.13-.09-.13-.21V45.22c0-.12.06-.22.13-.22Zm0,39.6h8.81c.07,0,.13.1.13.21v5.71c0,.11-.06.22-.13.22H85.45c-.07,0-.13-.1-.13-.22V84.81c0-.11.06-.21.13-.21Zm-14.85,0h8.8c.08,0,.14.1.14.21v5.71c0,.11-.06.22-.14.22H70.6c-.08,0-.14-.1-.14-.22V84.81c0-.11.06-.21.14-.21ZM85.45,71.4h8.81c.07,0,.13.1.13.22v5.71c0,.11-.06.22-.13.22H85.45c-.07,0-.13-.1-.13-.22V71.62c0-.13.06-.22.13-.22Zm0-13.2h8.81c.07,0,.13.1.13.22v5.71c0,.11-.06.22-.13.22H85.45c-.07,0-.13-.1-.13-.22V58.42c0-.12.06-.22.13-.22ZM70.6,45h8.8c.08,0,.14.1.14.22v5.71c0,.1-.06.21-.14.21H70.6c-.08,0-.14-.09-.14-.21V45.22c0-.12.06-.22.14-.22Zm0,26.4h8.8c.08,0,.14.1.14.22v5.71c0,.11-.06.22-.14.22H70.6c-.08,0-.14-.1-.14-.22V71.62c0-.13.06-.22.14-.22Zm0-13.2h8.8c.08,0,.14.1.14.22v5.71c0,.11-.06.22-.14.22H70.6c-.08,0-.14-.1-.14-.22V58.42c0-.12.06-.22.14-.22ZM45.21,119.32H21.57V96.86H45.21v22.46ZM12.13,12.52h9.58a.28.28,0,0,1,.27.27v9.59a.28.28,0,0,1-.27.27H12.13a.28.28,0,0,1-.27-.27V12.79a.28.28,0,0,1,.27-.27Zm32.94,0h9.58a.28.28,0,0,1,.27.27v9.59a.28.28,0,0,1-.27.27H45.07a.28.28,0,0,1-.27-.27V12.79a.28.28,0,0,1,.27-.27Zm-16.47,0h9.58a.28.28,0,0,1,.27.27v9.59a.28.28,0,0,1-.27.27H28.6a.28.28,0,0,1-.27-.27V12.79a.28.28,0,0,1,.27-.27ZM12.13,33.28h9.58a.28.28,0,0,1,.27.27v9.59a.28.28,0,0,1-.27.27H12.13a.28.28,0,0,1-.27-.27V33.55a.28.28,0,0,1,.27-.27Zm32.94,0h9.58a.28.28,0,0,1,.27.27v9.59a.28.28,0,0,1-.27.27H45.07a.28.28,0,0,1-.27-.27V33.55a.28.28,0,0,1,.27-.27Zm-16.47,0h9.58a.28.28,0,0,1,.27.27v9.59a.28.28,0,0,1-.27.27H28.6a.28.28,0,0,1-.27-.27V33.55a.28.28,0,0,1,.27-.27ZM12.13,74.8h9.58a.27.27,0,0,1,.27.27v9.58a.27.27,0,0,1-.27.27H12.13a.27.27,0,0,1-.27-.27V75.07a.27.27,0,0,1,.27-.27Zm32.94,0h9.58a.27.27,0,0,1,.27.27v9.58a.27.27,0,0,1-.27.27H45.07a.27.27,0,0,1-.27-.27V75.07a.27.27,0,0,1,.27-.27Zm-16.47,0h9.58a.27.27,0,0,1,.27.27v9.58a.27.27,0,0,1-.27.27H28.6a.27.27,0,0,1-.27-.27V75.07a.27.27,0,0,1,.27-.27ZM12.13,54h9.58a.27.27,0,0,1,.27.27V63.9a.28.28,0,0,1-.27.27H12.13a.28.28,0,0,1-.27-.27V54.31a.27.27,0,0,1,.27-.27Zm32.94,0h9.58a.27.27,0,0,1,.27.27V63.9a.28.28,0,0,1-.27.27H45.07a.28.28,0,0,1-.27-.27V54.31a.27.27,0,0,1,.27-.27ZM28.6,54h9.58a.27.27,0,0,1,.27.27V63.9a.28.28,0,0,1-.27.27H28.6a.28.28,0,0,1-.27-.27V54.31A.27.27,0,0,1,28.6,54Z"/>
                            </svg>
                            <h4 className='sm:text-4xl text-2xl sm:m-4'><strong>Kancelář</strong></h4>
                            <p className='sm:text-2xl mb-2'>Navštivte nás osobně</p>
                            <p className='text-sm text-center'>{address}<br/>{city} {psc}</p>
                        </div>
                    </div>
                </section>
                <section className='text-neutral sm:mt-24 mt-8 flex sm:flex-row flex-col max-w-7xl sm:mx-8'>
                    <div className='basis-1/2 flex flex-col items-center animate-fade-right'>
                        <h2 className='sm:text-6xl text-4xl max-sm:text-center'>Kontaktujte<br />nás hned teď</h2> 
                        <h3 className='text-xl text-center mt-4'>Jeden z našich designerů se s váma spojí.</h3>
                        <ContactForm />
                    </div>
                    <div className='basis-1/2 max-sm:mb-4'>
                        <DisplayImage width={1000} height={1000} src="/static/homepage/foto2.webp" alt="Home foto" classes='rounded-lg max-sm:w-full animate-fade-left'/>
                    </div>
                </section>
            </article>
        </main>
    )
}

// TODO:



// Pager design + Limited pages - 2 hod
// Progress animations - 4 hod



// Realization and article activity tracking - 4 hod
// Not mandatory parts of admin dialogs - idk hodin



// Google Analytics - 4 hod

// Bugs: