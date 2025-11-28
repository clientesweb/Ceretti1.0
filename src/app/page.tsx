import ProductListSec from "@/components/common/ProductListSec"
import Brands from "@/components/homepage/Brands"
import DressStyle from "@/components/homepage/DressStyle"
import Faqs from "@/components/homepage/Faqs"
import Header from "@/components/homepage/Header"
import Reviews from "@/components/homepage/Reviews"
import TrustFeatures from "@/components/homepage/TrustFeatures"
import type { Product } from "@/types/product.types"
import type { Review } from "@/types/review.types"
import Script from "next/script"

export const newArrivalsData: Product[] = [
  {
    id: 1,
    title: "Seguidores Instagram",
    description: "Impulsa tu cuenta con seguidores reales y activos. Entrega gradual y natural.",
    srcUrl: "/images/instagram-3d-logo.png",
    gallery: ["/images/instagram-3d-logo.png"],
    price: 1800,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.8,
    platform: "instagram",
  },
  {
    id: 2,
    title: "Likes Instagram",
    description: "Aumenta el engagement de tus publicaciones con likes de calidad.",
    srcUrl: "/images/instagram-3d-logo.png",
    gallery: ["/images/instagram-3d-logo.png"],
    price: 800,
    discount: {
      amount: 0,
      percentage: 40,
    },
    rating: 4.7,
    platform: "instagram",
  },
  {
    id: 3,
    title: "Visitas Instagram",
    description: "Mejora la visibilidad de tus publicaciones y alcanza más usuarios.",
    srcUrl: "/images/instagram-3d-logo.png",
    gallery: ["/images/instagram-3d-logo.png"],
    price: 500,
    discount: {
      amount: 0,
      percentage: 50,
    },
    rating: 4.9,
    platform: "instagram",
  },
  {
    id: 4,
    title: "Visitas para Historias Instagram",
    description: "Aumenta las visualizaciones de tus historias de forma orgánica.",
    srcUrl: "/images/instagram-3d-logo.png",
    gallery: ["/images/instagram-3d-logo.png"],
    price: 400,
    discount: {
      amount: 0,
      percentage: 62.5,
    },
    rating: 4.6,
    platform: "instagram",
  },
]

export const topSellingData: Product[] = [
  {
    id: 5,
    title: "Guardados Instagram",
    description: "Aumenta los guardados de tus publicaciones para mejorar el alcance.",
    srcUrl: "/images/instagram-3d-logo.png",
    gallery: ["/images/instagram-3d-logo.png"],
    price: 800,
    discount: {
      amount: 0,
      percentage: 50,
    },
    rating: 5.0,
    platform: "instagram",
  },
  {
    id: 6,
    title: "Comentarios Instagram",
    description: "Aumenta el engagement con comentarios positivos en tus publicaciones.",
    srcUrl: "/images/instagram-3d-logo.png",
    gallery: ["/images/instagram-3d-logo.png"],
    price: 2000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.8,
    platform: "instagram",
  },
  {
    id: 9,
    title: "Suscriptores YouTube",
    description: "Aumenta tus suscriptores y haz crecer tu canal de forma orgánica.",
    srcUrl: "/images/youtube-3d-logo.png",
    gallery: ["/images/youtube-3d-logo.png"],
    price: 1000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.9,
    platform: "youtube",
  },
  {
    id: 10,
    title: "Visitas YouTube",
    description: "Aumenta las visualizaciones de tus videos con retención de calidad.",
    srcUrl: "/images/youtube-3d-logo.png",
    gallery: ["/images/youtube-3d-logo.png"],
    price: 600,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.8,
    platform: "youtube",
  },
]

export const relatedProductData: Product[] = [
  {
    id: 11,
    title: "Reproducciones Spotify",
    description: "Aumenta las reproducciones de tus canciones y mejora tu visibilidad.",
    srcUrl: "/images/spotify-3d-logo.png",
    gallery: ["/images/spotify-3d-logo.png"],
    price: 1500,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.7,
    platform: "spotify",
  },
  {
    id: 12,
    title: "Seguidores Spotify",
    description: "Incrementa tus seguidores y mejora tu credibilidad como artista.",
    srcUrl: "/images/spotify-3d-logo.png",
    gallery: ["/images/spotify-3d-logo.png"],
    price: 1500,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.8,
    platform: "spotify",
  },
  {
    id: 13,
    title: "Oyentes Mensuales Spotify",
    description: "Aumenta tus oyentes mensuales y mejora tu posicionamiento.",
    srcUrl: "/images/spotify-3d-logo.png",
    gallery: ["/images/spotify-3d-logo.png"],
    price: 5000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.9,
    platform: "spotify",
  },
  {
    id: 14,
    title: "Combo Redes Sociales",
    description: "Paquete completo para todas tus plataformas sociales.",
    srcUrl: "/images/instagram-3d-logo.png",
    gallery: ["/images/instagram-3d-logo.png"],
    price: 3999,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 4.9,
    platform: "instagram",
  },
]

// Nuevos productos TikTok
export const tiktokProductsData: Product[] = [
  {
    id: 15,
    title: "Visitas TikTok",
    description: "Aumenta las visualizaciones de tus videos en TikTok y mejora tu alcance.",
    srcUrl: "/images/tiktok-3d-logo.png",
    gallery: ["/images/tiktok-3d-logo.png"],
    price: 500,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.8,
    platform: "tiktok",
  },
  {
    id: 16,
    title: "Seguidores TikTok",
    description: "Incrementa tus seguidores en TikTok y mejora tu credibilidad.",
    srcUrl: "/images/tiktok-3d-logo.png",
    gallery: ["/images/tiktok-3d-logo.png"],
    price: 850,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.9,
    platform: "tiktok",
  },
  {
    id: 17,
    title: "Likes TikTok",
    description: "Aumenta los likes de tus videos en TikTok y mejora tu engagement.",
    srcUrl: "/images/tiktok-3d-logo.png",
    gallery: ["/images/tiktok-3d-logo.png"],
    price: 600,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.7,
    platform: "tiktok",
  },
]

// Nuevos productos Facebook
export const facebookProductsData: Product[] = [
  {
    id: 18,
    title: "Seguidores Facebook",
    description: "Incrementa tus seguidores en Facebook y mejora tu presencia social.",
    srcUrl: "/images/facebook-3d-logo.png",
    gallery: ["/images/facebook-3d-logo.png"],
    price: 5000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.8,
    platform: "facebook",
  },
  {
    id: 19,
    title: "Likes Facebook",
    description: "Aumenta los likes de tus publicaciones en Facebook y mejora tu engagement.",
    srcUrl: "/images/facebook-3d-logo.png",
    gallery: ["/images/facebook-3d-logo.png"],
    price: 900,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.7,
    platform: "facebook",
  },
  {
    id: 20,
    title: "Promo TikTok",
    description: "2.500 visitas + 1.000 likes a un precio especial.",
    srcUrl: "/images/tiktok-3d-logo.png",
    gallery: ["/images/tiktok-3d-logo.png"],
    price: 3500,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 5.0,
    platform: "tiktok",
  },
]

// Nuevos productos YouTube
export const youtubeProductsData: Product[] = [
  {
    id: 21,
    title: "Likes YouTube",
    description: "Aumenta los likes de tus videos en YouTube y mejora tu engagement.",
    srcUrl: "/images/youtube-3d-logo.png",
    gallery: ["/images/youtube-3d-logo.png"],
    price: 500,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.8,
    platform: "youtube",
  },
  {
    id: 22,
    title: "Comentarios Random YouTube",
    description: "Aumenta el engagement con comentarios aleatorios en inglés o español para tus videos.",
    srcUrl: "/images/youtube-3d-logo.png",
    gallery: ["/images/youtube-3d-logo.png"],
    price: 1000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.7,
    platform: "youtube",
  },
  {
    id: 23,
    title: "Comentarios Personalizados YouTube",
    description: "Aumenta el engagement con comentarios personalizados para tus videos.",
    srcUrl: "/images/youtube-3d-logo.png",
    gallery: ["/images/youtube-3d-logo.png"],
    price: 2000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.9,
    platform: "youtube",
  },
]

// Nuevos servicios Instagram
export const instagramNewServicesData: Product[] = [
  {
    id: 24,
    title: "Reacción a Quiz Instagram",
    description: "Aumenta las reacciones a tus encuestas tipo Quiz en historias. Solo opción A/Cuentas Mundiales.",
    srcUrl: "/images/instagram-3d-logo.png",
    gallery: ["/images/instagram-3d-logo.png"],
    price: 250,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.8,
    platform: "instagram",
  },
  {
    id: 25,
    title: "Barra de Reacción Instagram",
    description: "Aumenta las reacciones en barras deslizantes de tus historias. 0-100 Random/Cuentas Mundiales.",
    srcUrl: "/images/instagram-3d-logo.png",
    gallery: ["/images/instagram-3d-logo.png"],
    price: 400,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.7,
    platform: "instagram",
  },
  {
    id: 26,
    title: "Visitas a Historias Premium",
    description: "Visitas a todas tus historias activas con cuentas mundiales de alta calidad.",
    srcUrl: "/images/instagram-3d-logo.png",
    gallery: ["/images/instagram-3d-logo.png"],
    price: 550,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.9,
    platform: "instagram",
  },
  {
    id: 27,
    title: "Impresiones para Posteos",
    description: "Aumenta las impresiones de tus publicaciones y mejora su alcance en el algoritmo.",
    srcUrl: "/images/instagram-3d-logo.png",
    gallery: ["/images/instagram-3d-logo.png"],
    price: 400,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.8,
    platform: "instagram",
  },
  {
    id: 28,
    title: "Comentarios Random Instagram",
    description: "Comentarios aleatorios (emojis o texto) con cuentas mundiales para tus publicaciones.",
    srcUrl: "/images/instagram-3d-logo.png",
    gallery: ["/images/instagram-3d-logo.png"],
    price: 2000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.7,
    platform: "instagram",
  },
  {
    id: 29,
    title: "Comentarios Personalizados Instagram",
    description: "Comentarios personalizados con cuentas mundiales. Tú eliges el texto (1 por línea).",
    srcUrl: "/images/instagram-3d-logo.png",
    gallery: ["/images/instagram-3d-logo.png"],
    price: 4500,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.9,
    platform: "instagram",
  },
  {
    id: 30,
    title: "Compartidos de Posteos",
    description: "Aumenta los compartidos de tus publicaciones para mayor alcance y viralidad.",
    srcUrl: "/images/instagram-3d-logo.png",
    gallery: ["/images/instagram-3d-logo.png"],
    price: 350,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.8,
    platform: "instagram",
  },
]

// Servicio de reporte por Spam
export const reportServiceData: Product[] = [
  {
    id: 31,
    title: "Servicio de Reporte por Spam",
    description:
      "Reportes a posteos específicos o cuentas. Disponible para TikTok, Instagram, Facebook, YouTube, X y Telegram.",
    srcUrl: "/images/instagram-3d-logo.png",
    gallery: [
      "/images/instagram-3d-logo.png",
      "/images/tiktok-3d-logo.png",
      "/images/facebook-3d-logo.png",
      "/images/youtube-3d-logo.png",
    ],
    price: 0,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.9,
    platform: "multiple",
  },
]

// Servicios Threads
export const threadsServicesData: Product[] = [
  {
    id: 32,
    title: "Seguidores Threads",
    description: "Incrementa tus seguidores en Threads con cuentas de calidad mundial.",
    srcUrl: "/images/threads-logo.png",
    gallery: ["/images/threads-logo.png"],
    price: 800,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.8,
    platform: "threads",
  },
  {
    id: 33,
    title: "Likes Threads",
    description: "Aumenta los likes de tus publicaciones en Threads y mejora tu engagement.",
    srcUrl: "/images/threads-logo.png",
    gallery: ["/images/threads-logo.png"],
    price: 900,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.7,
    platform: "threads",
  },
]

// Servicios SoundCloud
export const soundcloudServicesData: Product[] = [
  {
    id: 34,
    title: "Seguidores SoundCloud",
    description: "Incrementa tus seguidores en SoundCloud y mejora tu presencia como artista.",
    srcUrl: "/images/soundcloud-logo.png",
    gallery: ["/images/soundcloud-logo.png"],
    price: 1000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.8,
    platform: "soundcloud",
  },
  {
    id: 35,
    title: "Reproducciones SoundCloud",
    description: "Aumenta las reproducciones de tus pistas en SoundCloud y mejora tu visibilidad.",
    srcUrl: "/images/soundcloud-logo.png",
    gallery: ["/images/soundcloud-logo.png"],
    price: 600,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.9,
    platform: "soundcloud",
  },
  {
    id: 36,
    title: "Likes SoundCloud",
    description: "Aumenta los likes de tus pistas en SoundCloud y mejora tu engagement.",
    srcUrl: "/images/soundcloud-logo.png",
    gallery: ["/images/soundcloud-logo.png"],
    price: 900,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.7,
    platform: "soundcloud",
  },
  {
    id: 37,
    title: "Comentarios Random SoundCloud",
    description: "Comentarios aleatorios en inglés o español para tus pistas en SoundCloud.",
    srcUrl: "/images/soundcloud-logo.png",
    gallery: ["/images/soundcloud-logo.png"],
    price: 3000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.8,
    platform: "soundcloud",
  },
]

// Servicios SEO
export const seoServicesData: Product[] = [
  {
    id: 38,
    title: "Retención Directa de Google 20s",
    description: "Servicio SEO con 20 segundos de retención directa desde Google para mejorar tu posicionamiento.",
    srcUrl: "/images/google-logo.png",
    gallery: ["/images/google-logo.png", "/images/youtube-3d-logo.png"],
    price: 4000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.9,
    platform: "seo",
  },
  {
    id: 39,
    title: "Retención Directa de Google 140s",
    description: "Servicio SEO con 140 segundos de retención directa desde Google para un posicionamiento óptimo.",
    srcUrl: "/images/google-logo.png",
    gallery: ["/images/google-logo.png", "/images/youtube-3d-logo.png"],
    price: 7000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 5.0,
    platform: "seo",
  },
  {
    id: 40,
    title: "Tráfico SEO directo a Web",
    description:
      "Tráfico real mundial con visitas directas desde plataformas de intercambio privadas y redes publicitarias.",
    srcUrl: "/images/seo-analytics.png",
    gallery: ["/images/seo-analytics.png"],
    price: 1000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.8,
    platform: "seo",
  },
]

// Combinamos todos los productos para exportarlos juntos
export const allProductsData: Product[] = [
  ...newArrivalsData,
  ...topSellingData,
  ...relatedProductData,
  ...tiktokProductsData,
  ...facebookProductsData,
  ...youtubeProductsData,
  ...instagramNewServicesData,
  ...reportServiceData,
  ...threadsServicesData,
  ...soundcloudServicesData,
  ...seoServicesData,
]

export const reviewsData: Review[] = [
  {
    id: 1,
    user: "Alejandro K.",
    content:
      '"Encontrar servicios que realmente funcionen para mis redes sociales era un desafío hasta que descubrí CERETTI MGMT. La variedad de opciones que ofrecen es realmente notable, adaptándose a diferentes necesidades y plataformas."',
    rating: 5,
    date: "14 de agosto, 2023",
  },
  {
    id: 2,
    user: "Sara M.",
    content: `"Estoy impresionada con la calidad y eficiencia de los servicios que recibí de CERETTI MGMT. Desde seguidores hasta likes, cada servicio que he comprado ha superado mis expectativas."`,
    rating: 5,
    date: "15 de agosto, 2023",
  },
  {
    id: 3,
    user: "Eduardo R.",
    content: `"El paquete de seguidores es imprescindible para cualquiera que quiera crecer en redes. El crecimiento fue natural y constante, y la calidad de los seguidores es excelente. Puedo ver el toque profesional en cada aspecto del servicio."`,
    rating: 5,
    date: "16 de agosto, 2023",
  },
  {
    id: 4,
    user: "Olivia P.",
    content: `"Como entusiasta del marketing digital, valoro la simplicidad y funcionalidad. Este servicio no solo representa esos principios, sino que también ofrece resultados reales. Es evidente que el equipo puso su creatividad en hacer que este servicio destaque."`,
    rating: 5,
    date: "17 de agosto, 2023",
  },
  {
    id: 5,
    user: "Lucas K.",
    content: `"Este servicio es una fusión de eficiencia y creatividad. Los resultados son rápidos, y la estrategia detrás habla del conocimiento del equipo. Es como tener un equipo de marketing que refleja mi pasión por el crecimiento en redes sociales."`,
    rating: 5,
    date: "18 de agosto, 2023",
  },
  {
    id: 6,
    user: "Samantha D.",
    content: `"¡Me encanta este servicio! Los resultados son únicos y el soporte es muy atento. Como profesional de marketing, aprecio la atención al detalle. Se ha convertido en mi proveedor favorito para impulsar mis redes sociales."`,
    rating: 5,
    date: "19 de agosto, 2023",
  },
]

export default function Home() {
  return (
    <>
      <Script src="/register-sw.js" strategy="afterInteractive" />
      <Header />
      <Brands />
      <TrustFeatures />
      <main className="my-[50px] sm:my-[72px]">
        <ProductListSec title="NOVEDADES" data={newArrivalsData} viewAllLink="/shop#novedades" />
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <ProductListSec title="MÁS VENDIDOS" data={topSellingData} viewAllLink="/shop#mas-vendidos" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <DressStyle />
        </div>
        <Faqs />
        <Reviews data={reviewsData} />
      </main>
    </>
  )
}