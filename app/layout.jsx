import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import { Providers } from './privider'
import { getSettings } from '@/utils/database'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata() {
    const description = await getSettings("description")
    const defaultDescription = JSON.parse(description?.value || '""')

    const keywords = await getSettings("keywords")
    const defaultKeywords = JSON.parse(keywords?.value || "[]")
    
    return {
        generator: "Next.js, React",
        authors: [
            { name: "Filip Groh"},
            { name: "Interiéry Design s.r.o."}
        ],
        category: "design",

        title: {
            template: "%s - Interiéry Design s.r.o.",
            default: 'Interiéry Design s.r.o.'
        },

        description: defaultDescription,
        keywords: defaultKeywords,
        icons: [{ rel: "icon", url: "/static/favicon.ico" }],
    }
}

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    // Also supported by less commonly used
    // interactiveWidget: 'resizes-visual',
}

export default function RootLayout({ children }) {
    return (
        <html lang="cs" suppressHydrationWarning className='h-full text-[22px]'>
            <body className={`${inter.className} bg-base-300 min-h-full flex flex-col`}>
                <Providers>
                    <Navbar />
                    <div className='flex-grow'>
                        {children}
                    </div>
                    <Footer />
                </Providers>
            </body>
        </html>
    )
}
