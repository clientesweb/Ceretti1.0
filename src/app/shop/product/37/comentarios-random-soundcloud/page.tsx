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
    value: "10",
    label: "10 Comentarios",
    price: 2000,
    bonus: "",
  },
  {
    value: "25",
    label: "25 Comentarios",
    price: 4000,
    bonus: "Popular",
  },
  {
    value: "50",
    label: "50 Comentarios",
    price: 7000,
    bonus: "Mejor valor",
  },
  {
    value: "100",
    label: "100 Comentarios",
    price: 12000,
    bonus: "",
  },
]

export default function ComentariosRandomSoundcloud() {
  const [trackLink, setTrackLink] = useState("")
  const [isPublic, setIsPublic] = useState(false)
  const [geoLocation, setGeoLocation] = useState("mundial")
  const [language, setLanguage] = useState("español")

  const product = {
    id: 37,
    title: "Comentarios Random SoundCloud",
    description:
      "Aumenta la interacción en tus tracks de SoundCloud con comentarios aleatorios positivos. Este servicio mejora la visibilidad de tu música, genera mayor engagement y aumenta tu credibilidad como artista.",
    srcUrl: "/images/soundcloud-logo.png",
    price: 2000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.7,
    platform: "SoundCloud",
  }

  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <BreadcrumbProduct title={product.title} />
        <Header
          data={product}
          quantityOptions={quantityOptions}
          customMessage="Para este servicio necesitamos que tu track esté público y nos proporciones el link directo de la canción donde deseas los comentarios."
        />

        <div className="space-y-4 mt-6 border p-4 rounded-md">
          <div>
            <Label htmlFor="trackLink">Link de la canción</Label>
            <Input
              id="trackLink"
              placeholder="https://soundcloud.com/username/track-name"
              value={trackLink}
              onChange={(e) => setTrackLink(e.target.value)}
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
            <Label htmlFor="isPublic">Mi track está en público</Label>
          </div>

          <div>
            <Label className="block mb-2">Idioma de los comentarios</Label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="español">Español</option>
              <option value="inglés">Inglés</option>
              <option value="mixto">Mixto</option>
            </select>
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
