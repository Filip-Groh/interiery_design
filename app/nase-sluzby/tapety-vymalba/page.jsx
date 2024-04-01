import React from 'react'
import NavigationPath from '../../components/navigation/navigation'
import Welcome from '@/app/components/welcome'
import Block from '@/app/components/block'

export const metadata = {
    title: 'Tapety a Výmalba',
}

const Wallpapers = () => {
    return (
        <>
            <NavigationPath path={["Home", "Naše služby", "Tapety, výmalba"]} links={["/", "#", "/nase-sluzby/tapety-vymalba"]} />
            <Welcome heading="Tapety a výmalba" text="Dekorativní prvek, který dává místnosti nový rozměr a specifický styl."/>
            <Block isRight={false} image="/static/tapety/atmosfera.jpg" heading="Atmosféra interiéru" text="Společně s vhodným použitím záclon, koberců, barev stěn a nábytkem dotváří osobitou atmosféru interiéru. V našem studiu jsou k nahlédnutí katalogy tapet od různých firem, s kterými spolupracujeme – KHROMA, GRANDECO, EIJFFINGER, LIMONTA, DESIGN ID. Provádíme odborné odstranění i nalepení tapet vč. sádrových stěrek a spec. nátěrů pod tapety." />
            <Block isRight={true} image="/static/tapety/luxus.webp" heading="Luxusní designové nebo dětské tapety" text="Na výběr jsou vzory abstraktní, ornamenty, geometrické, květinové a přírodní motivy. Luxusní designové tapety The Wall – Dietr Langer, Scala – Ulf Moritz – jsou vzorované zdobené kamínky. Do dětských interiérů jsou tapety s motivy zvířátek, motýlů, pohádkových bytostí, dále fototapety, bordury a nálepky. Výběr se provádí z našich katalogů po zapůjčení přímo ve Vašem interiéru." />
            <Block isRight={false} image="/static/tapety/tapety.webp" heading="Jak se zbavit starých tapet" text="Máte doma staré tapety a chcete je odstranit ? Stačí vám k tomu láhev s rozprašovačem. Ze dvou třetin naplňte teplou vodou a do zbytku láhve nalijte změkčovač na prádlo. Postříkejte tapety, aby byla tapeta řádně navlhčená a nechte 30 minut působit, poté můžeme začít strhávat nebo seškrabovat. Postup je možné opakovat. Láhev s vodou a změkčovačem udržujte stále teplou. Další způsob jak odstranit staré tapety – nanést na malířský váleček ve stejném poměru bílý ocet a teplou vodu a opět navlhčíme tapety. Dále zajistíme výmalby interiérů – bílé, barevné i za použití různých technik – dekorativní benátské štuky." />
        </>
    )
}

export default Wallpapers