import type React from "react"
import type { Metadata, Viewport } from "next"
import "@/styles/globals.css"
import { satoshi } from "@/styles/fonts"
import TopBanner from "@/components/layout/Banner/TopBanner"
import TopNavbar from "@/components/layout/Navbar/TopNavbar"
import Footer from "@/components/layout/Footer"
import Providers from "./providers"
import { Toaster } from "@/components/ui/toaster"
import WhatsAppButton from "@/components/layout/WhatsAppButton"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cerettimanagement.com"),
  title: "CERETTI MANAGEMENT | Aumenta Seguidores, Likes y Visitas en Instagram y YouTube",
  description:
    "Potencia tu presencia digital con CERETTI MANAGEMENT. Servicios premium para aumentar seguidores reales, likes, reproducciones y engagement en Instagram, YouTube, TikTok, Spotify y Facebook. Resultados garantizados y entregas rápidas.",
  keywords: [
    "comprar seguidores Instagram",
    "aumentar likes Instagram",
    "conseguir suscriptores YouTube",
    "marketing redes sociales",
    "más reproducciones Spotify",
    "seguidores TikTok",
    "engagement Instagram",
    "crecimiento YouTube",
    "visitas historias Instagram",
    "likes Facebook",
    "comentarios Instagram",
    "visitas YouTube",
    "oyentes mensuales Spotify",
    "impulsar redes sociales",
    "servicios marketing digital",
  ],
  authors: [{ name: "CERETTI MANAGEMENT" }],
  creator: "CERETTI MANAGEMENT",
  publisher: "CERETTI MANAGEMENT",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.cerettimanagement.com",
    title: "CERETTI MANAGEMENT | Aumenta Seguidores, Likes y Visitas en Instagram y YouTube",
    description:
      "Potencia tu presencia digital con servicios premium para aumentar seguidores reales, likes, reproducciones y engagement en Instagram, YouTube, TikTok, Spotify y Facebook. Resultados garantizados.",
    siteName: "CERETTI MANAGEMENT",
    images: [
      {
        url: "/og-image-ceretti.jpg",
        width: 1200,
        height: 630,
        alt: "CERETTI MANAGEMENT - Impulsa Tu Presencia Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CERETTI MANAGEMENT | Aumenta Seguidores, Likes y Visitas en Instagram y YouTube",
    description:
      "Potencia tu presencia digital con servicios premium para aumentar seguidores reales, likes, reproducciones y engagement en Instagram, YouTube, TikTok, Spotify y Facebook.",
    images: ["/og-image-ceretti.jpg"],
  },
  alternates: {
    canonical: "https://www.cerettimanagement.com",
  },
}

export const viewport: Viewport = {
  themeColor: "#0D4B8C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={satoshi.className}>
        <TopBanner />
        <Providers>
          <TopNavbar />
          {children}
        </Providers>
        <Footer />
        <Toaster />
        {/* <CHANGE> Removed Tawk.to live chat script and replaced with WhatsApp floating button */}
        <WhatsAppButton />
      </body>
    </html>
  )
}
