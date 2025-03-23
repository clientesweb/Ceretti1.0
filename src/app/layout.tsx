import type React from "react"
import type { Metadata, Viewport } from "next"
import "@/styles/globals.css"
import { satoshi } from "@/styles/fonts"
import TopBanner from "@/components/layout/Banner/TopBanner"
import TopNavbar from "@/components/layout/Navbar/TopNavbar"
import Footer from "@/components/layout/Footer"
import Providers from "./providers"
import WhatsAppButton from "@/components/common/WhatsAppButton"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cerettimanagement.com"),
  title: "CERETTI MANAGEMENT - Impulsa Tu Presencia Digital",
  description:
    "Mejorá tus métricas en redes sociales ADQUIRIENDO seguidores, likes, visitas, comentarios y más con la mejor calidad y precio del mercado.",
  keywords: [
    "redes sociales",
    "marketing digital",
    "seguidores",
    "likes",
    "visitas",
    "comentarios",
    "Instagram",
    "TikTok",
    "YouTube",
    "Spotify",
    "Facebook",
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
    title: "CERETTI MANAGEMENT - Impulsa Tu Presencia Digital",
    description: "Mejorá tus métricas en redes sociales con la mejor calidad y precio del mercado.",
    siteName: "CERETTI MANAGEMENT",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "CERETTI MANAGEMENT Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CERETTI MANAGEMENT - Impulsa Tu Presencia Digital",
    description: "Mejorá tus métricas en redes sociales con la mejor calidad y precio del mercado.",
    images: ["/android-chrome-512x512.png"],
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
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  )
}

