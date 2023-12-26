import React from 'react'
import NavigationPath from '../../components/navigation/navigation'
import Welcome from '@/app/components/welcome'
import Block from '@/app/components/block'

const CustomFurniture = () => {
    return (
        <>
            <NavigationPath path={["Home", "Naše služby", "Nábytek na míru"]} links={["/", "#", "/nase-sluzby/nabytek-na-miru"]} />
            <Welcome heading="Nábytek na míru" text="Vlastní výroba nábytku je součástí realizací našich návrhů interiérů, jak pro komerční tak soukromou klientelu. Jedná se o kuchyňské linky, vestavěné skříně, obývací sestavy, kancelářský nábytek." />
            <Block isRight={false} image="/spiderman.jpg" heading="Materiál" text="Používaný materiál je lamino nebo klasické dřevo, kde nejčastější je výroba postelí, nočních stolků, jídelních stolů, komod, TV sestav a knihoven, kde můžeme zvolit různé povrchové úpravy a moření. Nejvíce používané dřeviny jsou borovice, dub, jasan." />
            <Block isRight={true} image="/spiderman.jpg" heading="Povrch a odstín" text="Povrch může být hladký, nebo pro rustikální dojem povrch drásaný. Odstín moření je možné doladit k podlaze, dveřím a celkovému prostoru interiéru. Odstíny se nejdříve vyvzorkují a po odsouhlasení jde nábytek do výroby." />
        </>
    )
}

export default CustomFurniture