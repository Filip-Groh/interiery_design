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

export default function RootLayout({ children }) {
    return (
        <html lang="cs" suppressHydrationWarning>
            <body className={`${inter.className} bg-base-300`}>
                <Providers>
                    <Navbar />
                    {children}
                    <Footer />
                </Providers>
            </body>
        </html>
    )
}
