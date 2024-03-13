import React from 'react'
import NavigationPath from '../components/navigation/navigation'

const Page = () => {
    return (
        <>
            <NavigationPath path={["Home", "Osobní údaje"]} links={["/", "/osobni-udaje"]} />
            <div className='w-full flex justify-center my-4'>
                <div className='w-8/12 items-center flex flex-col text-neutral'>
                    <h1 className='text-4xl my-8 pl-4'>Osobní údaje</h1>
                    <p className='text-sm'>
                        Tyto zásady ochrany osobních údajů jsou platné pro Interiéry design s.r.o. se sídlem Barvířská 31/8, 460 07 Liberec, Česká republika IČO: 22773525, DIČ: CZ22773525 (dále jen ,,společnost”).
                    </p>
                    <h2 className="test-xl mt-6 my-2 pl-4">Informace ke zpracování osobních dat</h2>
                    <p className='text-sm'>
                        Společnost  dbá na ochranu osobních údajů, které nám předáváte. Je důležité, abyste věděli, že osobní údaje, které nám poskytujete zpracováváme zodpovědně, transparentně a v souladu s Nařízením Evropského parlamentu a Rady (EU) 2016/679. Máte nárok požádat o informace o evidovaných osobních údajích, jejich opravu či výmaz, pokud jsou uděleny na základě Vámi uděleného souhlasu. Pokud dochází k automatizovanému zpracování, máte právo na přenositelnost údajů a nebýt předmětem rozhodnutí založeného výhradně na tomto rozhodování. V případě jakýchkoli dotazů a žádostí týkajících se zpracování Vašich osobních údajů se na nás můžete obrátit písemně na adrese sídla společnosti.
                    </p>
                    <h2 className="test-xl mt-6 my-2 pl-4">Zabezpečení Vašich osobních dat</h2>
                    <p className='text-sm'>
                        Společnost dbá na bezpečnost osobních dat, které nám předáváte. K Vašim osobním údajům, které jsme od Vás získali, nemá přístup žádná neoprávněná osoba a nepředáváme jej bez Vašeho souhlasu dalším subjektům pro další zpracování, pokud to nevyžaduje zákon nebo v případě ochrany našich právních zájmů.
                    </p>
                    <h2 className="test-xl mt-6 my-2 pl-4">Právo na informace</h2>
                    <p className='text-sm'>
                        Vaším právem je požádat Společnost o informace, jaké osobní údaje a v jakém rozsahu a pro jaký účel o Vás zpracováváme. Tyto informace Vám poskytneme zdarma ve lhůtě nejpozději 30 dnů, v mimořádných situacích pak nejpozději ve lhůtě 90 dnů. O prodloužení lhůty v mimořádných případech Vás budeme včas informovat. Pokud budete požadovat sdělení informací, které o Vás evidujeme, budeme nejprve potřebovat ověřit, že jste skutečně osoba, které náleží tato informace. Ve Vaší žádosti tedy uveďte dostatečnou identifikaci Vaší osoby. V případě potřeby máme právo vyžádat si doplňující informace k Vaší identifikaci, než Vám poskytneme osobní údaje, které zpracováváme k Vaší osobě. Naším právem pak je odůvodněně zamítnout požadavky na informace, které jsou bezdůvodné, či se nepřiměřeně opakují, případně jejich získání vyžaduje nepřiměřené úsilí nebo by byly obtížně získatelné (typicky ze záloh, archivů apod.).
                    </p>
                    <h2 className="test-xl mt-6 my-2 pl-4">Právo na přenositelnost údajů</h2>
                    <p className='text-sm'>
                        Máte právo získat osobní údaje, které o Vás evidujeme, ve strukturovaném, běžně používaném a strojově čitelném formátu. Na základě Vaší žádosti mohou být tato data předána jinému správci.
                    </p>
                    <h2 className="test-xl mt-6 my-2 pl-4">Aktualizace údajů, právo na opravu</h2>
                    <p className='text-sm'>
                        Jelikož se mohou osobní údaje v průběhu času měnit (například změna Příjmení), budeme rádi, pokud nás informujete, že u Vás nastala nějaká změna, tak abychom Vaše osobní údaje měli aktuální a nedocházelo k případným omylům. Podání informace o změně údajů je nezbytně nutné pro to, abychom mohli řádně vykonávat svoji činnost Správce. S tím souvisí i Vaše právo na opravu osobních údajů, které o Vás evidujeme. Pokud zjistíte, že naše údaje již nejsou aktuální, máte právo požadovat jejich opravu. Svá data můžete zkontrolovat a nebo změnit po přihlášení na tomto webu. Pokud si nejste jisti, neváhejte nás kontaktovat pomocí kontaktního formuláře.
                    </p>
                    <h2 className="test-xl mt-6 my-2 pl-4">Námitky</h2>
                    <p className='text-sm'>
                        Pokud se domníváte že Vaše osobní údaje nezpracováváme v souladu s platnou legislativou ČR a Unie, máte právo vznést námitku a my následně prověříme oprávněnost Vašeho požadavku. V okamžiku podání námitky bude zpracování Vašich osobních údajů omezeno, dokud nebude ověřeno, zda je námitka oprávněná. Informujeme Vás, že Vaším právem je obrátit se také s námitkou proti zpracovávaným osobním údajům, které o Vás zpracováváme na příslušný dozorový úřad na ochranu osobních údajů na adrese: Úřad pro ochranu osobních údajů, Pplk. Sochora 27 170 00 Praha 7.
                    </p>
                    <h2 className="test-xl mt-6 my-2 pl-4">Právo na omezení zpracování</h2>
                    <p className='text-sm'>
                        Máte právo na omezení zpracování Vašich osobních údajů v případě, že se domníváte, že takto evidované nejsou přesné, případně je zpracováváme protiprávně a dále pokud se domníváte, že tyto údaje již nepotřebujeme pro účely jejich zpracování.
                    </p>
                    <h2 className="test-xl mt-6 my-2 pl-4">Právo na výmaz</h2>
                    <p className='text-sm'>
                        Pokud jste nám někdy udělili souhlas se zpracováním svých osobních údajů, máte právo jej kdykoli odvolat a my údaje, které zpracováváme výhradně na základě Vašeho souhlasu, máme povinnost vymazat. Právo na výmaz se nevztahuje na zpracovávané údaje v rámci povinnosti plnění smlouvy, zákonných důvodů, či oprávněných zájmů.
                    </p>
                    <h2 className="test-xl mt-6 my-2 pl-4">Kam se můžete obrátit</h2>
                    <p className='text-sm'>
                        Se svými dotazy na ochranu osobních údajů se můžete také obracet na kontaktní formulář případně na kontaktní adresu uvedenou v kontaktech společnosti.
                    </p>
                    <h2 className="test-xl mt-6 my-2 pl-4">Kontaktní formulář</h2>
                    <p className='text-sm'>
                        Pokud nás kontaktujete prostřednictvím webového formuláře, ukládáme si několik základních informací. Jedná se o:<br />
                        * Jméno<br />
                        * E-mailovou adresu<br />
                        * Čas odeslání<br />
                        * IP adresu<br />
                        Uvedené údaje potřebujeme pro zpětný kontakt s vámi, a pro doložení vzniku komunikace ve smyslu Nařízení Evropského parlamentu a Rady (EU) 2016/679.
                    </p>
                    <h2 className="test-xl mt-6 my-2 pl-4">Webové stránky</h2>
                    <p className='text-sm'>
                        Pokud přistoupíte na naše webové stránky a prohlížíte si je, zpracováváme následující protokolové soubory a ukládáme je na našich serverech. Mezi informace, které ukládáme patří:<br />
                        Vaše IP Adresa<br />
                        Čas vaší návštěvy<br />
                        Otevírané stránky našeho webu<br />
                        Kód odpovědi http<br />
                        Identifikace Vašeho prohlížeče<br />
                        Informace o konverzích (vyplnění formuláře, objednávka, kliknutí na email, volání)<br />

                        Tyto informace zpracováváme pouze pro účely naší právní ochrany a měření výkonnosti webu po dobu maximálně 10 let.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Page