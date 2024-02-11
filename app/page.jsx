import NavigationPath from './components/navigation/navigation'

export default function Home() {
    return (
        <>
            <NavigationPath path={["Home"]} links={["/"]} />
            <h1>TODO:</h1>
            <ul>
                <li>Home page</li>
                <li>Design - barvičky</li>
                <li>Google Analytics</li>
                <li>Basic nastavení</li>
                <li>Vyhledávání pomocí tagů</li>
                <li>Statické obrázky</li>
                <li>Footer obsah</li>
                <li>Propisování do sociálních sítí + sdílení</li>
            </ul>
        </>
    )
}
