import type React from "react"
import type { Metadata, Viewport } from "next"
import "@/styles/globals.css"
import { satoshi } from "@/styles/fonts"
import TopBanner from "@/components/layout/Banner/TopBanner"
import TopNavbar from "@/components/layout/Navbar/TopNavbar"
import Footer from "@/components/layout/Footer"
import HolyLoader from "holy-loader"
import Providers from "./providers"
import WhatsAppButton from "@/components/common/WhatsAppButton"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "CERETTI MGTM - Impulsa Tu Presencia",
  description:
    "Mejorá tus métricas ADQUIRIENDO seguidores, likes, visitas, comentarios y más con la mejor calidad y precio del mercado.",
}

export const viewport: Viewport = {
  themeColor: "#0D4B8C",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={satoshi.className}>
        <HolyLoader color="#00C2FF" />
        <TopBanner />
        <Providers>
          <TopNavbar />
          {children}
        </Providers>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  )
}

