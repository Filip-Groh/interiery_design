import React from 'react'
import NavbarItem from './item/item'
import DropItem from './item/dropItem'

const ItemGroup = () => {
    return (
        <>
            <NavbarItem name="O nás" url="/o-nas"/>
            <NavbarItem name="Galerie" url="/galerie"/>
            <DropItem name="Naše služby">
                <NavbarItem name="Nábytek na míru" url="/nase-sluzby/nabytek-na-miru"/>
                <NavbarItem name="Tapety, výmalba" url="/nase-sluzby/tapety-vymalba"/>
                <NavbarItem name="Osvětlení, svítidla" url="/nase-sluzby/osvetleni-svitidla"/>
                <NavbarItem name="Zastínění, dekorace oken a stínící systémy" url="/nase-sluzby/zastineni-dekorace-oken-stinici-systemy"/>
            </DropItem>
            <NavbarItem name="Kontakty" url="/kontakty"/>
            <NavbarItem name="Blog" url="/blog"/>
            <NavbarItem name="Realizace" url="/realization"/>
            <NavbarItem name="Admin" url="/admin" authRequired/>
            <DropItem name="Test">
                <NavbarItem name="Public" url="/test/public"/>
                <NavbarItem name="Protected" url="/test/protected"/>
            </DropItem>
        </>
    )
}

export default ItemGroup

/*
            <DropItem name="Prototypes">
                <NavbarItem name="Images" url="/prototypes/images"/>
                <NavbarItem name="Comments" url="/prototypes/comments"/>
                <NavbarItem name="Realization" url="/prototypes/realization"/>
            </DropItem>
*/