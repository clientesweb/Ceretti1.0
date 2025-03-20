import ProductListSec from "@/components/common/ProductListSec"
import Brands from "@/components/homepage/Brands"
import DressStyle from "@/components/homepage/DressStyle"
import Faqs from "@/components/homepage/Faqs"
import Header from "@/components/homepage/Header"
import Reviews from "@/components/homepage/Reviews"
import TrustFeatures from "@/components/homepage/TrustFeatures"
import type { Product } from "@/types/product.types"
import type { Review } from "@/types/review.types"
import * as motion from "framer-motion/client"
import { Button } from "@/components/ui/button"
import { FaArrowRight, FaClock, FaCheck } from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { integralCF } from "@/utils/fonts"

import BlogPreview from "@/components/homepage/BlogPreview"
import PortfolioPreview from "@/components/homepage/PortfolioPreview"
import PaquetesPreview from "@/components/homepage/PaquetesPreview"

// Datos para las previsualizaciones
const categoriasData = [
  { id: "todos", name: "Todos" },
  { id: "redes-sociales", name: "Redes Sociales" },
  { id: "marketing", name: "Marketing Digital" },
  { id: "diseno", name: "Diseño Web" },
  { id: "desarrollo", name: "Desarrollo" },
  { id: "seo", name: "SEO" },
]

const articulosData = [
  {
    id: 1,
    title: "10 estrategias para aumentar tus seguidores en Instagram",
    excerpt: "Descubre las mejores tácticas para crecer orgánicamente en Instagram y aumentar tu engagement.",
    image: "/images/blog/articulo1.jpg",
    category: "redes-sociales",
    date: "15 Mar 2025",
    readTime: "5 min",
    featured: true,
  },
  {
    id: 2,
    title: "Guía completa de SEO para principiantes",
    excerpt:
      "Todo lo que necesitas saber para empezar a optimizar tu sitio web y mejorar tu posicionamiento en buscadores.",
    image: "/images/blog/articulo2.jpg",
    category: "seo",
    date: "28 Feb 2025",
    readTime: "8 min",
    featured: true,
  },
  {
    id: 3,
    title: "Cómo crear una estrategia de contenido efectiva",
    excerpt: "Aprende a desarrollar una estrategia de contenido que conecte con tu audiencia y genere resultados.",
    image: "/images/blog/articulo3.jpg",
    category: "marketing",
    date: "15 Ene 2025",
    readTime: "6 min",
    featured: false,
  },
]

const proyectosData = [
  {
    id: 1,
    title: "E-commerce de Moda",
    category: "Desarrollo Web",
    image: "/images/portfolio/proyecto1.jpg",
    description: "Tienda online completa con pasarela de pagos, gestión de inventario y panel de administración.",
  },
  {
    id: 2,
    title: "App de Delivery",
    category: "Desarrollo Mobile",
    image: "/images/portfolio/proyecto2.jpg",
    description:
      "Aplicación móvil para servicio de delivery con seguimiento en tiempo real y sistema de pagos integrado.",
  },
]

const paquetesData = [
  {
    id: "base",
    title: "PLAN BASE",
    features: [
      "Reestructuración de cuenta",
      "Calendario de contenidos",
      "8 Posteos",
      "30 Stories",
      "Seguimiento estadístico mensual",
      "Interacción con comunidades",
      "Estructuración de trabajo",
    ],
    recommended: false,
    color: "bg-white",
    borderColor: "border-black/10",
  },
  {
    id: "clasico",
    title: "PLAN CLÁSICO",
    features: [
      "Reestructuración de cuenta",
      "Calendario de contenidos",
      "12 Posteos",
      "60 Stories",
      "Portadas reels y destacadas",
      "Armado de copys y # requeridos",
      "Seguimiento estadístico mensual",
      "Interacción con comunidades",
      "Estructuración de trabajo",
      "1 Segmentación publicitaria",
    ],
    recommended: true,
    color: "bg-ceretti-blue/5",
    borderColor: "border-ceretti-blue/20",
  },
  {
    id: "full",
    title: "PLAN FULL",
    features: [
      "Reestructuración de cuentas",
      "Calendario de contenidos",
      "16 Posteos",
      "80 Stories",
      "Portadas reels y destacadas",
      "Armado de copys y # requeridos",
      "Seguimiento estadístico semanal & mensual",
      "Interacción con comunidades",
      "Crecimiento acelerado",
      "Estructuración de trabajo",
      "Segmentación publicitaria (sin limites)",
    ],
    recommended: false,
    color: "bg-gradient-to-br from-ceretti-blue/10 to-ceretti-lightBlue/10",
    borderColor: "border-ceretti-blue/30",
  },
]

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

// Combinamos todos los productos para exportarlos juntos
export const allProductsData: Product[] = [
  ...newArrivalsData,
  ...topSellingData,
  ...relatedProductData,
  ...tiktokProductsData,
  ...facebookProductsData,
  ...youtubeProductsData,
]

export const reviewsData: Review[] = [
  {
    id: 1,
    user: "Alejandro K.",
    content:
      '"Encontrar servicios que realmente funcionen para mis redes sociales era un desafío hasta que descubrí CERETTI MGTM. La variedad de opciones que ofrecen es realmente notable, adaptándose a diferentes necesidades y plataformas."',
    rating: 5,
    date: "14 de agosto, 2023",
  },
  {
    id: 2,
    user: "Sara M.",
    content: `"Estoy impresionada con la calidad y eficiencia de los servicios que recibí de CERETTI MGTM. Desde seguidores hasta likes, cada servicio que he comprado ha superado mis expectativas."`,
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

        {/* Blog Preview Section */}
        <div className="max-w-frame mx-auto px-4 xl:px-0 mt-16 mb-20">
          <div className="text-center mb-10">
            <h2 className={cn([integralCF.className, "text-[32px] md:text-5xl mb-4 capitalize"])}>NUESTRO BLOG</h2>
            <p className="text-black/60 max-w-2xl mx-auto">
              Descubre las últimas tendencias, consejos y estrategias para impulsar tu presencia digital y maximizar el
              potencial de tus redes sociales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {articulosData.slice(0, 3).map((articulo, index) => (
              <motion.div
                key={articulo.id}
                initial={{ y: "50px", opacity: 0 }}
                whileInView={{ y: "0", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl border border-black/10 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    src={articulo.image || "/placeholder.svg?height=200&width=400"}
                    alt={articulo.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center mb-2">
                    <span className="inline-block bg-ceretti-blue/10 text-ceretti-blue text-xs font-medium px-2 py-0.5 rounded-full">
                      {categoriasData.find((cat) => cat.id === articulo.category)?.name}
                    </span>
                    <div className="flex items-center ml-auto text-black/60 text-xs">
                      <FaClock className="mr-1" /> {articulo.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{articulo.title}</h3>
                  <p className="text-black/70 text-sm mb-3 line-clamp-2">{articulo.excerpt}</p>
                  <Link
                    href={`/blog/${articulo.id}`}
                    className="text-ceretti-blue hover:underline text-sm font-medium flex items-center"
                  >
                    Leer más <FaArrowRight className="ml-1 text-xs" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/blog">
              <Button className="rounded-full px-8 py-4 bg-black hover:bg-black/80">
                Ver todos los artículos <FaArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Portfolio Preview Section */}
        <div className="bg-[#F8F8F8] py-16">
          <div className="max-w-frame mx-auto px-4 xl:px-0">
            <div className="text-center mb-10">
              <h2 className={cn([integralCF.className, "text-[32px] md:text-5xl mb-4 capitalize"])}>
                NUESTRO PORTFOLIO
              </h2>
              <p className="text-black/60 max-w-2xl mx-auto">
                Descubre algunos de nuestros proyectos más destacados en diseño y desarrollo web.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {proyectosData.slice(0, 2).map((proyecto, index) => (
                <motion.div
                  key={proyecto.id}
                  initial={{ y: "50px", opacity: 0 }}
                  whileInView={{ y: "0", opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="bg-white rounded-2xl border border-black/10 overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="h-64 overflow-hidden">
                    <Image
                      src={proyecto.image || "/placeholder.svg?height=300&width=500"}
                      alt={proyecto.title}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-ceretti-blue/10 text-ceretti-blue text-sm font-medium px-3 py-1 rounded-full mb-2">
                      {proyecto.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{proyecto.title}</h3>
                    <p className="text-black/70 mb-4">{proyecto.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/portfolio">
                <Button className="rounded-full px-8 py-4 bg-ceretti-blue hover:bg-ceretti-blue/80">
                  Ver portfolio completo <FaArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Paquetes Preview Section */}
        <div className="max-w-frame mx-auto px-4 xl:px-0 mt-16 mb-20">
          <div className="text-center mb-10">
            <h2 className={cn([integralCF.className, "text-[32px] md:text-5xl mb-4 capitalize"])}>NUESTROS PAQUETES</h2>
            <p className="text-black/60 max-w-2xl mx-auto">
              Selecciona el plan que mejor se adapte a tus necesidades y objetivos para impulsar tu presencia digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {paquetesData.map((paquete, index) => (
              <motion.div
                key={paquete.id}
                initial={{ y: "50px", opacity: 0 }}
                whileInView={{ y: "0", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={cn([
                  "rounded-2xl border p-6 relative",
                  paquete.color,
                  paquete.borderColor,
                  "hover:shadow-lg transition-all duration-300",
                ])}
              >
                {paquete.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-ceretti-blue text-white text-sm font-medium px-4 py-1 rounded-full">
                    Recomendado
                  </div>
                )}
                <h2
                  className={cn([
                    integralCF.className,
                    "text-2xl md:text-3xl mb-6 text-center",
                    paquete.recommended ? "text-ceretti-blue" : "text-black",
                  ])}
                >
                  {paquete.title}
                </h2>
                <ul className="space-y-3 mb-8">
                  {paquete.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaCheck
                        className={cn([
                          "mt-1 mr-3 flex-shrink-0",
                          paquete.recommended ? "text-ceretti-blue" : "text-green-500",
                        ])}
                      />
                      <span className="text-black/80">{feature}</span>
                    </li>
                  ))}
                  {paquete.features.length > 4 && (
                    <li className="text-black/60 text-sm text-center">Y más características...</li>
                  )}
                </ul>
                <Link href={`/paquetes#${paquete.id}`} className="block mt-auto">
                  <Button
                    className={cn([
                      "w-full py-4 rounded-full group transition-all",
                      paquete.recommended ? "bg-ceretti-blue hover:bg-ceretti-blue/80" : "bg-black hover:bg-black/80",
                    ])}
                  >
                    Ver detalles <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/paquetes">
              <Button className="rounded-full px-8 py-4 bg-black hover:bg-black/80">
                Ver todos los paquetes <FaArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
        <BlogPreview />
        <PortfolioPreview />
        <PaquetesPreview />
      </main>
    </>
  )
}

