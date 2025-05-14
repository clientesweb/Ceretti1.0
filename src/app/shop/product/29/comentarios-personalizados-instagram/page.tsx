"use client"

import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct"
import Header from "@/components/product-page/Header"
import Tabs from "@/components/product-page/Tabs"
import ProductListSec from "@/components/common/ProductListSec"
import { relatedProductData } from "@/app/page"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

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
  const [postLink, setPostLink] = useState("")
  const [isPublic, setIsPublic] = useState(false)
  const [comments, setComments] = useState("")
  const [geoLocation, setGeoLocation] = useState("mundial")

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

        <div className="space-y-4 mt-6 border p-4 rounded-md">
          <div>
            <Label htmlFor="postLink">Link de la publicación</Label>
            <Input
              id="postLink"
              placeholder="https://www.instagram.com/p/..."
              value={postLink}
              onChange={(e) => setPostLink(e.target.value)}
              className="mt-1"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={isPublic}
              onChange={(e) => setIsPublic(e.target.checked)}
              className="rounded"
              id="isPublic"
            />
            <Label htmlFor="isPublic">Mi perfil está en público</Label>
          </div>

          <div>
            <Label htmlFor="comments">Comentarios personalizados</Label>
            <Textarea
              id="comments"
              placeholder="Escribe cada comentario en una línea separada. Ejemplo:
¡Me encanta tu contenido! 🔥
Increíble foto 😍
Siempre con el mejor estilo 👌"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className="mt-1"
              rows={5}
            />
            <p className="text-xs text-gray-500 mt-1">
              Asegúrate de incluir al menos tantos comentarios como la cantidad que estás comprando
            </p>
          </div>

          <div>
            <Label className="block mb-2">Geolocalización</Label>
            <select
              value={geoLocation}
              onChange={(e) => setGeoLocation(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="mundial">Mundial</option>
              <option value="calidad">Calidad</option>
            </select>
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
