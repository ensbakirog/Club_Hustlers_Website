import type React from "react"
import "@/app/globals.css"
import { Inter, Orbitron } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

// Better suited fonts for Venom theme
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' })
const orbitron = Orbitron({ 
  subsets: ["latin"], 
  variable: '--font-orbitron',
})

export const metadata = {
  title: "Venom Portfolio | Club Hustlers",
  description: "A Venom-themed portfolio for two creative collaborators",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.variable} ${orbitron.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <div className="venom-background">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
