import ProductListSec from "@/components/common/ProductListSec"
import Brands from "@/components/homepage/Brands"
import DressStyle from "@/components/homepage/DressStyle"
import Faqs from "@/components/homepage/Faqs"
import Header from "@/components/homepage/Header"
import Reviews from "@/components/homepage/Reviews"
import TrustFeatures from "@/components/homepage/TrustFeatures"
import type { Product } from "@/types/product.types"
import type { Review } from "@/types/review.types"

export const newArrivalsData: Product[] = [
  {
    id: 1,
    title: "Seguidores Instagram",
    description: "Impulsa tu cuenta con seguidores reales y activos. Entrega gradual y natural.",
    srcUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL_E2024-05-2405.21.06-Asquareaspectratioimagefeaturinga3DInstagramlogoinspiredbytheprovidedreference.ThelogohastheclassicInstagramgradientwiththewhi-GGFMEpsfFM6U4tiP1Bge0shInCOSgy.jpeg",
    gallery: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL_E2024-05-2405.21.06-Asquareaspectratioimagefeaturinga3DInstagramlogoinspiredbytheprovidedreference.ThelogohastheclassicInstagramgradientwiththewhi-GGFMEpsfFM6U4tiP1Bge0shInCOSgy.jpeg",
    ],
    price: 455,
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
    srcUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL_E2024-05-2405.21.06-Asquareaspectratioimagefeaturinga3DInstagramlogoinspiredbytheprovidedreference.ThelogohastheclassicInstagramgradientwiththewhi-GGFMEpsfFM6U4tiP1Bge0shInCOSgy.jpeg",
    gallery: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL_E2024-05-2405.21.06-Asquareaspectratioimagefeaturinga3DInstagramlogoinspiredbytheprovidedreference.ThelogohastheclassicInstagramgradientwiththewhi-GGFMEpsfFM6U4tiP1Bge0shInCOSgy.jpeg",
    ],
    price: 1500,
    discount: {
      amount: 0,
      percentage: 90,
    },
    rating: 4.7,
    platform: "instagram",
  },
  {
    id: 3,
    title: "Visitas Instagram",
    description: "Mejora la visibilidad de tus publicaciones y alcanza más usuarios.",
    srcUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL_E2024-05-2405.21.06-Asquareaspectratioimagefeaturinga3DInstagramlogoinspiredbytheprovidedreference.ThelogohastheclassicInstagramgradientwiththewhi-GGFMEpsfFM6U4tiP1Bge0shInCOSgy.jpeg",
    gallery: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL_E2024-05-2405.21.06-Asquareaspectratioimagefeaturinga3DInstagramlogoinspiredbytheprovidedreference.ThelogohastheclassicInstagramgradientwiththewhi-GGFMEpsfFM6U4tiP1Bge0shInCOSgy.jpeg",
    ],
    price: 2500,
    discount: {
      amount: 0,
      percentage: 90,
    },
    rating: 4.9,
    platform: "instagram",
  },
  {
    id: 4,
    title: "Visitas para Historias Instagram",
    description: "Aumenta las visualizaciones de tus historias de forma orgánica.",
    srcUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL_E2024-05-2405.21.06-Asquareaspectratioimagefeaturinga3DInstagramlogoinspiredbytheprovidedreference.ThelogohastheclassicInstagramgradientwiththewhi-GGFMEpsfFM6U4tiP1Bge0shInCOSgy.jpeg",
    gallery: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL_E2024-05-2405.21.06-Asquareaspectratioimagefeaturinga3DInstagramlogoinspiredbytheprovidedreference.ThelogohastheclassicInstagramgradientwiththewhi-GGFMEpsfFM6U4tiP1Bge0shInCOSgy.jpeg",
    ],
    price: 9000,
    discount: {
      amount: 0,
      percentage: 98,
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
    srcUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL_E2024-05-2405.21.06-Asquareaspectratioimagefeaturinga3DInstagramlogoinspiredbytheprovidedreference.ThelogohastheclassicInstagramgradientwiththewhi-GGFMEpsfFM6U4tiP1Bge0shInCOSgy.jpeg",
    gallery: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL_E2024-05-2405.21.06-Asquareaspectratioimagefeaturinga3DInstagramlogoinspiredbytheprovidedreference.ThelogohastheclassicInstagramgradientwiththewhi-GGFMEpsfFM6U4tiP1Bge0shInCOSgy.jpeg",
    ],
    price: 4000,
    discount: {
      amount: 0,
      percentage: 90,
    },
    rating: 5.0,
    platform: "instagram",
  },
  {
    id: 6,
    title: "Seguidores Spotify",
    description: "Aumenta tus seguidores y reproducciones en Spotify.",
    srcUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL_E2024-05-2405.57.22-Asquareaspectratioimagefeaturinga3DSpotifylogoinspiredbytheprovidedreference.Thelogoisgreenwithblacksoundwaves.Thebackgroundi-g0fuePytiZoF9vwnglG7pJNRkktUvk.jpeg",
    gallery: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL_E2024-05-2405.57.22-Asquareaspectratioimagefeaturinga3DSpotifylogoinspiredbytheprovidedreference.Thelogoisgreenwithblacksoundwaves.Thebackgroundi-g0fuePytiZoF9vwnglG7pJNRkktUvk.jpeg",
    ],
    price: 145,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
    platform: "spotify",
  },
  {
    id: 7,
    title: "Pack Viral TikTok",
    description: "Impulsa tus videos con likes, comentarios y shares.",
    srcUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL_E2024-05-2406.23.54-Asquareaspectratioimagefeaturinga3DTikToklogoinspiredbytheprovidedreference.ThelogohastheclassicTikTokcolorswiththeblack_red-lVbG3FnkduI1QeOB9ycTx1EfWyyDDI.jpeg",
    gallery: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL_E2024-05-2406.23.54-Asquareaspectratioimagefeaturinga3DTikToklogoinspiredbytheprovidedreference.ThelogohastheclassicTikTokcolorswiththeblack_red-lVbG3FnkduI1QeOB9ycTx1EfWyyDDI.jpeg",
    ],
    price: 250,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 4.8,
    platform: "tiktok",
  },
  {
    id: 8,
    title: "Suscriptores YouTube",
    description: "Incrementa tu comunidad con suscriptores reales.",
    srcUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL_E2024-05-2403.06.32-Asquareaspectratioimagefeaturinga3DYouTubelogoinspiredbytheprovidedreference.Thelogoisredwithawhiteplayicon_elongatedhorizont_7b5b1c01-8f04-4df1-bfb0-f6aa66a2f82f-IiIWl3fNupocEDlOutgzWnWwSsfFj4.jpeg",
    gallery: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL_E2024-05-2403.06.32-Asquareaspectratioimagefeaturinga3DYouTubelogoinspiredbytheprovidedreference.Thelogoisredwithawhiteplayicon_elongatedhorizont_7b5b1c01-8f04-4df1-bfb0-f6aa66a2f82f-IiIWl3fNupocEDlOutgzWnWwSsfFj4.jpeg",
    ],
    price: 299,
    discount: {
      amount: 0,
      percentage: 15,
    },
    rating: 4.7,
    platform: "youtube",
  },
]

export const relatedProductData: Product[] = [
  {
    id: 12,
    title: "Combo Redes Sociales",
    description: "Paquete completo para todas tus plataformas sociales.",
    srcUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL_E2024-05-2405.21.06-Asquareaspectratioimagefeaturinga3DInstagramlogoinspiredbytheprovidedreference.ThelogohastheclassicInstagramgradientwiththewhi-GGFMEpsfFM6U4tiP1Bge0shInCOSgy.jpeg",
    gallery: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL_E2024-05-2405.21.06-Asquareaspectratioimagefeaturinga3DInstagramlogoinspiredbytheprovidedreference.ThelogohastheclassicInstagramgradientwiththewhi-GGFMEpsfFM6U4tiP1Bge0shInCOSgy.jpeg",
    ],
    price: 399,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 4.9,
    platform: "instagram",
  },
  {
    id: 13,
    title: "Paquete Influencer",
    description: "Todo lo que necesitas para convertirte en influencer.",
    srcUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL_E2024-05-2406.23.54-Asquareaspectratioimagefeaturinga3DTikToklogoinspiredbytheprovidedreference.ThelogohastheclassicTikTokcolorswiththeblack_red-lVbG3FnkduI1QeOB9ycTx1EfWyyDDI.jpeg",
    gallery: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL_E2024-05-2406.23.54-Asquareaspectratioimagefeaturinga3DTikToklogoinspiredbytheprovidedreference.ThelogohastheclassicTikTokcolorswiththeblack_red-lVbG3FnkduI1QeOB9ycTx1EfWyyDDI.jpeg",
    ],
    price: 499,
    discount: {
      amount: 0,
      percentage: 10,
    },
    rating: 4.8,
    platform: "tiktok",
  },
  {
    id: 14,
    title: "Servicio de Comentarios",
    description: "Comentarios personalizados para aumentar tu engagement.",
    srcUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL_E_2024-05-24_06.38.59_-_A_square_aspect_ratio_image_featuring_a_3D_Facebook_logo_inspired_by_the_provided_reference._The_logo_has_the_classic_blue_circle_with_a_white_f_ico-drLETDolr8fsOLQdc5WELqRLFe0vM5.jpeg",
    gallery: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL_E_2024-05-24_06.38.59_-_A_square_aspect_ratio_image_featuring_a_3D_Facebook_logo_inspired_by_the_provided_reference._The_logo_has_the_classic_blue_circle_with_a_white_f_ico-drLETDolr8fsOLQdc5WELqRLFe0vM5.jpeg",
    ],
    price: 180,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
    platform: "facebook",
  },
  {
    id: 15,
    title: "Paquete Empresarial",
    description: "Soluciones completas para empresas y marcas.",
    srcUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL_E2024-05-2403.06.32-Asquareaspectratioimagefeaturinga3DYouTubelogoinspiredbytheprovidedreference.Thelogoisredwithawhiteplayicon_elongatedhorizont_7b5b1c01-8f04-4df1-bfb0-f6aa66a2f82f-IiIWl3fNupocEDlOutgzWnWwSsfFj4.jpeg",
    gallery: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL_E2024-05-2403.06.32-Asquareaspectratioimagefeaturinga3DYouTubelogoinspiredbytheprovidedreference.Thelogoisredwithawhiteplayicon_elongatedhorizont_7b5b1c01-8f04-4df1-bfb0-f6aa66a2f82f-IiIWl3fNupocEDlOutgzWnWwSsfFj4.jpeg",
    ],
    price: 599,
    discount: {
      amount: 0,
      percentage: 15,
    },
    rating: 5.0,
    platform: "youtube",
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

