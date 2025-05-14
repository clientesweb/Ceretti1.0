"use client"

import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct"
import Header from "@/components/product-page/Header"
import Tabs from "@/components/product-page/Tabs"
import ProductListSec from "@/components/common/ProductListSec"
import { relatedProductData } from "@/app/page"

const quantityOptions = [
  {
    value: "5",
    label: "5 Comentarios",
    price: 2500,
    bonus: "",
  },
  {
    value: "10",
    label: "10 Comentarios",
    price: 4500,
    bonus: "Popular",
  },
  {
    value: "20",
    label: "20 Comentarios",
    price: 8000,
    bonus: "Mejor valor",
  },
  {
    value: "50",
    label: "50 Comentarios",
    price: 18000,
    bonus: "",
  },
]

export default function ComentariosPersonalizadosInstagram() {
  const product = {
    id: 29,
    title: "Comentarios Personalizados Instagram",
    description:
      "Aumenta la interacción en tus publicaciones de Instagram con comentarios personalizados. Este servicio te permite elegir exactamente qué comentarios quieres recibir, mejorando la relevancia y calidad de las interacciones.",
    srcUrl: "/images/instagram-3d-logo.png",
    price: 2500,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.9,
    platform: "Instagram",
  }

  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <BreadcrumbProduct title={product.title} />
        <Header
          data={product}
          quantityOptions={quantityOptions}
          customMessage="Para este servicio necesitamos que tu cuenta esté en público, nos proporciones el link de la publicación y los comentarios específicos que deseas recibir."
        />
        <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        <Tabs />
        <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        <ProductListSec title="PRODUCTOS RELACIONADOS" data={relatedProductData} viewAllLink="/shop" />
      </div>
    </main>
  )
}
