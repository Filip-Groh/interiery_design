"use client"

import { ThemeProvider } from "next-themes"

const Providers = ({children}) => {
    return (
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>{children}</ThemeProvider>
    )
}

export {Providers}