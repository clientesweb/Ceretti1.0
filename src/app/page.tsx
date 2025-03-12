import ProductListSec from "@/components/common/ProductListSec"
import Brands from "@/components/homepage/Brands"
import DressStyle from "@/components/homepage/DressStyle"
import Header from "@/components/homepage/Header"
import Reviews from "@/components/homepage/Reviews"
import FollowersSection from "@/components/homepage/FollowersSection"
import type { Product } from "@/types/product.types"
import type { Review } from "@/types/review.types"

export const newArrivalsData: Product[] = [
  {
    id: 1,
    title: "Paquete de Seguidores Instagram",
    srcUrl: "/images/pic1.png",
    gallery: ["/images/pic1.png", "/images/pic10.png", "/images/pic11.png"],
    price: 120,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 2,
    title: "Likes para Facebook",
    srcUrl: "/images/pic2.png",
    gallery: ["/images/pic2.png"],
    price: 260,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 3.5,
  },
  {
    id: 3,
    title: "Comentarios para TikTok",
    srcUrl: "/images/pic3.png",
    gallery: ["/images/pic3.png"],
    price: 180,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 4,
    title: "Visualizaciones para YouTube",
    srcUrl: "/images/pic4.png",
    gallery: ["/images/pic4.png", "/images/pic10.png", "/images/pic11.png"],
    price: 160,
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 4.5,
  },
]

export const topSellingData = [
  {
    id: 5,
    title: "Seguidores Instagram",
    srcUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL_E2024-05-2405.21.06-Asquareaspectratioimagefeaturinga3DInstagramlogoinspiredbytheprovidedreference.ThelogohastheclassicInstagramgradientwiththewhi-4Af8AiOp6ugrokyImESdpfoNsRJ1UW.jpeg",
    rating: 5.0,
    qualityOptions: [
      {
        id: "calidad",
        name: "Calidad",
        followers: [
          { amount: 100, price: 1800 },
          { amount: 250, price: 3500 },
          { amount: 500, price: 6500 },
          { amount: 1000, price: 12000, bonuses: "250 Likes" },
          { amount: 2500, price: 30000, bonuses: "500 Likes" },
          { amount: 5000, price: 60000, bonuses: "1K Likes + 1K Visitas" },
          { amount: 10000, price: 120000, bonuses: "2K Likes + 2K Visitas" },
        ],
      },
      {
        id: "mundial",
        name: "Mundial",
        followers: [
          { amount: 100, price: 900 },
          { amount: 250, price: 1500 },
          { amount: 500, price: 2500 },
          { amount: 1000, price: 4500 },
          { amount: 2500, price: 9500, bonuses: "250 Likes" },
          { amount: 5000, price: 18000, bonuses: "500 Likes" },
          { amount: 8000, price: 23000, bonuses: "1K Likes + 1K Visitas" },
          { amount: 10000, price: 25000, bonuses: "2K Likes + 2K Visitas" },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Seguidores Twitter/X",
    srcUrl: "/images/pic6.png",
    rating: 4.0,
    qualityOptions: [
      {
        id: "calidad",
        name: "Calidad",
        followers: [
          { amount: 100, price: 1500 },
          { amount: 250, price: 3000 },
          { amount: 500, price: 5500 },
          { amount: 1000, price: 10000, bonuses: "250 Likes" },
        ],
      },
      {
        id: "mundial",
        name: "Mundial",
        followers: [
          { amount: 100, price: 800 },
          { amount: 250, price: 1300 },
          { amount: 500, price: 2200 },
          { amount: 1000, price: 4000 },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Seguidores TikTok",
    srcUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL_E2024-05-2406.23.54-Asquareaspectratioimagefeaturinga3DTikToklogoinspiredbytheprovidedreference.ThelogohastheclassicTikTokcolorswiththeblack_red-JGNGrEBEfo0cdBP1gAHkOBk9c1uwAL.jpeg",
    rating: 4.5,
    qualityOptions: [
      {
        id: "calidad",
        name: "Calidad",
        followers: [
          { amount: 100, price: 1900 },
          { amount: 250, price: 3700 },
          { amount: 500, price: 6800 },
          { amount: 1000, price: 13000, bonuses: "250 Likes" },
        ],
      },
      {
        id: "mundial",
        name: "Mundial",
        followers: [
          { amount: 100, price: 950 },
          { amount: 250, price: 1600 },
          { amount: 500, price: 2700 },
          { amount: 1000, price: 4800 },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Seguidores YouTube",
    srcUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL_E2024-05-2403.06.32-Asquareaspectratioimagefeaturinga3DYouTubelogoinspiredbytheprovidedreference.Thelogoisredwithawhiteplayicon_elongatedhorizont_7b5b1c01-8f04-4df1-bfb0-f6aa66a2f82f-XWNWNh4DxwyZRIqrY7RyPHExLZ5L5s.jpeg",
    rating: 4.5,
    qualityOptions: [
      {
        id: "calidad",
        name: "Calidad",
        followers: [
          { amount: 100, price: 2000 },
          { amount: 250, price: 4000 },
          { amount: 500, price: 7500 },
          { amount: 1000, price: 14000, bonuses: "250 Likes" },
        ],
      },
      {
        id: "mundial",
        name: "Mundial",
        followers: [
          { amount: 100, price: 1000 },
          { amount: 250, price: 1800 },
          { amount: 500, price: 3000 },
          { amount: 1000, price: 5500 },
        ],
      },
    ],
  },
]

export const relatedProductData: Product[] = [
  {
    id: 12,
    title: "Combo Redes Sociales",
    srcUrl: "/images/pic12.png",
    gallery: ["/images/pic12.png", "/images/pic10.png", "/images/pic11.png"],
    price: 242,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 4.0,
  },
  {
    id: 13,
    title: "Paquete Influencer",
    srcUrl: "/images/pic13.png",
    gallery: ["/images/pic13.png", "/images/pic10.png", "/images/pic11.png"],
    price: 145,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 3.5,
  },
  {
    id: 14,
    title: "Servicio de Comentarios",
    srcUrl: "/images/pic14.png",
    gallery: ["/images/pic14.png"],
    price: 180,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 15,
    title: "Paquete Empresarial",
    srcUrl: "/images/pic15.png",
    gallery: ["/images/pic15.png"],
    price: 150,
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 5.0,
  },
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
      <main className="my-[50px] sm:my-[72px]">
        <ProductListSec title="NOVEDADES" data={newArrivalsData} viewAllLink="/shop#novedades" />
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <FollowersSection title="MÁS VENDIDOS" data={topSellingData} viewAllLink="/shop#mas-vendidos" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <DressStyle />
        </div>
        <Reviews data={reviewsData} />
      </main>
    </>
  )
}

