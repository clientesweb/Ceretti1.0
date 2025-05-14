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
    value: "25",
    label: "25 Comentarios",
    price: 10000,
    bonus: "Mejor valor",
  },
  {
    value: "50",
    label: "50 Comentarios",
    price: 18000,
    bonus: "",
  },
  {
    value: "100",
    label: "100 Comentarios",
    price: 30000,
    bonus: "",
  },
]

export default function ComentariosPersonalizadosInstagram() {
  const product = {
    id: 29,
    title: "Comentarios Personalizados Instagram",
    description:
      "Recibe comentarios personalizados en tus publicaciones de Instagram. Este servicio premium te permite especificar el contenido exacto de los comentarios para maximizar la relevancia y el impacto en tu audiencia.",
    srcUrl: "/images/pic6.png",
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

        {/* Información adicional del formulario */}
        <div className="mt-6 space-y-4 border p-4 rounded-md">
          <h3 className="font-medium text-lg">Información adicional requerida:</h3>

          <div>
            <label className="block mb-1">Link de la publicación</label>
            <input type="text" placeholder="https://www.instagram.com/p/..." className="w-full p-2 border rounded-md" />
          </div>

          <div>
            <label className="block mb-1">Texto de los comentarios</label>
            <input
              type="text"
              placeholder="Escribe los comentarios que deseas recibir"
              className="w-full p-2 border rounded-md"
            />
            <p className="text-xs text-gray-500 mt-1">Separa cada comentario con un punto y coma (;)</p>
          </div>

          <div>
            <label className="block mb-1">Geolocalización</label>
            <select className="w-full p-2 border rounded-md" defaultValue="mundial">
              <option value="mundial">Mundial</option>
              <option value="calidad">Calidad</option>
            </select>
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span>Mi perfil está en público</span>
            </label>
          </div>
        </div>

        <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        <Tabs />
        <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        <ProductListSec title="PRODUCTOS RELACIONADOS" data={relatedProductData} viewAllLink="/shop" />
      </div>
    </main>
  )
}
