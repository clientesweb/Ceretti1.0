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
    price: 5000,
    bonus: "",
  },
  {
    value: "2500",
    label: "2500 Visualizaciones",
    price: 10000,
    bonus: "",
  },
  {
    value: "5000",
    label: "5000 Visualizaciones",
    price: 18000,
    bonus: "Popular",
  },
  {
    value: "10000",
    label: "10000 Visualizaciones",
    price: 30000,
    bonus: "Mejor valor",
  },
  {
    value: "25000",
    label: "25000 Visualizaciones",
    price: 65000,
    bonus: "",
  },
]

export default function RetencionGoogle140s() {
  const [videoLink, setVideoLink] = useState("")
  const [isPublic, setIsPublic] = useState(false)
  const [geoLocation, setGeoLocation] = useState("mundial")
  const [targetAudience, setTargetAudience] = useState("general")
  const [videoDuration, setVideoDuration] = useState("")

  const product = {
    id: 39,
    title: "Retención Google 140s",
    description:
      "Maximiza el rendimiento de tus videos con visualizaciones de alta retención (140 segundos). Este servicio premium optimiza significativamente tus métricas en YouTube, mejorando drásticamente el posicionamiento de tu contenido en el algoritmo.",
    srcUrl: "/images/1204.jpg",
    price: 5000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 5.0,
    platform: "YouTube",
  }

  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <BreadcrumbProduct title={product.title} />
        <Header
          data={product}
          quantityOptions={quantityOptions}
          customMessage="Para este servicio necesitamos que tu video esté público y nos proporciones el link directo del video que deseas promocionar. El video debe tener una duración mínima de 2:30 minutos."
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
            <Label htmlFor="videoDuration">Duración del video</Label>
            <Input
              id="videoDuration"
              placeholder="Ejemplo: 3:45"
              value={videoDuration}
              onChange={(e) => setVideoDuration(e.target.value)}
              className="mt-1"
            />
            <p className="text-xs text-gray-500 mt-1">Formato: minutos:segundos (mínimo 2:30)</p>
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
