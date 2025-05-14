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
    value: "1000",
    label: "1000 Visualizaciones",
    price: 3000,
    bonus: "",
  },
  {
    value: "2500",
    label: "2500 Visualizaciones",
    price: 6000,
    bonus: "",
  },
  {
    value: "5000",
    label: "5000 Visualizaciones",
    price: 10000,
    bonus: "Popular",
  },
  {
    value: "10000",
    label: "10000 Visualizaciones",
    price: 18000,
    bonus: "Mejor valor",
  },
  {
    value: "25000",
    label: "25000 Visualizaciones",
    price: 40000,
    bonus: "",
  },
]

export default function RetencionGoogle20s() {
  const [videoLink, setVideoLink] = useState("")
  const [isPublic, setIsPublic] = useState(false)
  const [geoLocation, setGeoLocation] = useState("mundial")
  const [targetAudience, setTargetAudience] = useState("general")

  const product = {
    id: 38,
    title: "Retención Google 20s",
    description:
      "Mejora el rendimiento de tus videos con visualizaciones de alta retención (20 segundos). Este servicio optimiza tus métricas en YouTube, mejorando el posicionamiento de tu contenido en el algoritmo de búsqueda.",
    srcUrl: "/images/1204.jpg",
    price: 3000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.9,
    platform: "YouTube",
  }

  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <BreadcrumbProduct title={product.title} />
        <Header
          data={product}
          quantityOptions={quantityOptions}
          customMessage="Para este servicio necesitamos que tu video esté público y nos proporciones el link directo del video que deseas promocionar."
        />

        <div className="space-y-4 mt-6 border p-4 rounded-md">
          <div>
            <Label htmlFor="videoLink">Link del video</Label>
            <Input
              id="videoLink"
              placeholder="https://www.youtube.com/watch?v=..."
              value={videoLink}
              onChange={(e) => setVideoLink(e.target.value)}
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
            <Label htmlFor="isPublic">Mi video está en público</Label>
          </div>

          <div>
            <Label htmlFor="targetAudience">Audiencia objetivo</Label>
            <select
              id="targetAudience"
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
              className="w-full p-2 border rounded-md mt-1"
            >
              <option value="general">General</option>
              <option value="musica">Música</option>
              <option value="gaming">Gaming</option>
              <option value="tecnologia">Tecnología</option>
              <option value="belleza">Belleza y Moda</option>
              <option value="deportes">Deportes</option>
              <option value="educacion">Educación</option>
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
