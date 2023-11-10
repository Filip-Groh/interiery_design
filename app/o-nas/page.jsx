import React from 'react'
import NavigationPath from '../components/navigation/navigation'
import Welcome from '../components/welcome'
import Block from '../components/block'

const AboutPage = () => {
    return (
        <>
            <NavigationPath path={["Home", "O nás"]}/>
            <Welcome heading="INTERIERY  DESIGN  s.r.o. – designové  studio v Liberci" text="Konzultace, poradenství, studie, návrhy a konečná realizace. Tradice 19 ti let kvalitních služeb – je vytvoření designového interiéru se specifickou atmosférou v souladu s představami a nároky klienta."/>
            <Block isRight={false} heading="Co je cílem?" text="Interiérové studio v Liberci nabízí návrh, sladění a vybavení bytů a komerčních prostor. Vytvoříme nábytek na míru, textil a doplňky. Ušijeme textil na zakázku, včetně čalounických prací. Zajišťujeme přestavby, montáže, instalace a HOME STAGING. Nabízíme katalogy vzorníků materiálů." image="/spiderman.jpg"/>
            <Block isRight={true} heading="Náplň interiérového designéra" text="Vytvořit příjemné a vkusné interiéry domova a sladit v dokonalý celek. Interiérový designér vytváří vnitřní strukturu interiéru (vč. technických věcí), jeho vybavení až po bytové doplňky. Tím dodá interiéru osobitou a jedinečnou atmosféru s respektováním životního stylu klienta." image="/spiderman.jpg"/>
            <Block isRight={false} heading="Co je HOME STAGING?" text="Home staging je profesionální příprava nemovitosti k prodeji nebo pronájmu. Zahrnuje barevnou koordinaci, nábytek a osvětlení. Nabízíme tuto službu soukromým osobám i realitním kancelářím, makléřům a developerům." image="/spiderman.jpg"/>
        </>
    )
}

export default AboutPage