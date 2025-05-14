"use client"

import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct"
import Header from "@/components/product-page/Header"
import Tabs from "@/components/product-page/Tabs"
import ProductListSec from "@/components/common/ProductListSec"
import { relatedProductData } from "@/app/page"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const quantityOptions = [
  {
    value: "50",
    label: "50 Compartidos",
    price: 2000,
    bonus: "",
  },
  {
    value: "100",
    label: "100 Compartidos",
    price: 3500,
    bonus: "Popular",
  },
  {
    value: "250",
    label: "250 Compartidos",
    price: 7500,
    bonus: "Mejor valor",
  },
  {
    value: "500",
    label: "500 Compartidos",
    price: 13000,
    bonus: "",
  },
]

export default function CompartidosPosteosInstagram() {
  const [postLink, setPostLink] = useState("")
  const [isPublic, setIsPublic] = useState(false)
  const [geoLocation, setGeoLocation] = useState("mundial")

  const product = {
    id: 30,
    title: "Compartidos Posteos Instagram",
    description:
      "Aumenta el alcance de tus publicaciones de Instagram con compartidos reales. Este servicio mejora la visibilidad de tu contenido, aumenta tu credibilidad y potencia tu presencia en la plataforma.",
    srcUrl: "/images/instagram-3d-logo.png",
    price: 2000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.8,
    platform: "Instagram",
  }

  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <BreadcrumbProduct title={product.title} />
        <Header
          data={product}
          quantityOptions={quantityOptions}
          customMessage="Para este servicio necesitamos que tu cuenta esté en público y nos proporciones el link de la publicación que deseas compartir."
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
