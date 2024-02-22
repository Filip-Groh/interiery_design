import React from 'react'
import NavigationPath from '../../components/navigation/navigation'
import Welcome from '@/app/components/welcome'
import Block from '@/app/components/block'

const DecorationShielding = () => {
    return (
        <>
            <NavigationPath path={["Home", "Naše služby", "Zastínění, dekorace oken a stínící systémy"]} links={["/", "#", "/nase-sluzby/zastineni-dekorace-oken-stinici-systemy"]} />
            <Welcome heading="Stínící systémy" text="Mohou být venkovní a vnitřní a oba typy mají dvě základní funkce – tepelnou izolaci interiéru a ovlivnění průchodu světla." />
            <Block isRight={false} image="/static/zastineni/stinici-systemy.jpg" heading="Vnitřní stínící systémy" text="dekorace oken, mají i estetickou a dekorační funkci. Patří sem záclony, závěsy, klasické rolety, římské rolety, japonské stěny a žaluzie. V našem design studiu je možno si vybrat různé materiály pro dekoraci oken – záclony, závěsy i stínící systémy. Interiéry jsou různé co do dispozice, orientace ke světovým stranám a nároky uživatelů, což ovlivňuje výběr materiálů – rozličných barev, rozměrů, typů i vzorů."/>
            <Block isRight={true} image="/static/zastineni/vzorky.webp" heading="Výběr a vzorky" text="Výběr záclon a závěsů se provádí z katalogů firem – SAUM VIEBAHN, KAMERHOOG, GARDISETTE, A HOUSE OF HAPPINESS, ADWIN, které jsou k dispozici v našem studiu, po zapůjčení i přímo ve Vašem interiéru. Rakouská firma LEHA, se zabývá výrobou stínících systémů, v současné době velmi populárních – rolety klasické, rolety duete /tzv. noc a den/, rolety plizé, římské rolety, japonské stěny a žaluzie. Máme k dispozici velký výběr typů, vzorů i barev. Vyměříme, zajistíme propočet množství, nastříháme a ušijeme dle Vašeho požadavku a zavěsíme."/>
        </>
    )
}

export default DecorationShielding