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
    label: "1000 Reproducciones",
    price: 1200,
    bonus: "",
  },
  {
    value: "2500",
    label: "2500 Reproducciones",
    price: 2500,
    bonus: "",
  },
  {
    value: "5000",
    label: "5000 Reproducciones",
    price: 4000,
    bonus: "Popular",
  },
  {
    value: "10000",
    label: "10000 Reproducciones",
    price: 7000,
    bonus: "Mejor valor",
  },
  {
    value: "25000",
    label: "25000 Reproducciones",
    price: 15000,
    bonus: "",
  },
  {
    value: "50000",
    label: "50000 Reproducciones",
    price: 25000,
    bonus: "",
  },
]

export default function ReproduccionesSoundcloud() {
  const [trackLink, setTrackLink] = useState("")
  const [isPublic, setIsPublic] = useState(false)
  const [geoLocation, setGeoLocation] = useState("mundial")

  const product = {
    id: 35,
    title: "Reproducciones SoundCloud",
    description:
      "Aumenta la popularidad de tus tracks en SoundCloud con reproducciones reales. Este servicio mejora la visibilidad de tu música, aumenta tus posibilidades de ser descubierto y potencia tu carrera musical.",
    srcUrl: "/images/soundcloud-logo.png",
    price: 1200,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.9,
    platform: "SoundCloud",
  }

  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <BreadcrumbProduct title={product.title} />
        <Header
          data={product}
          quantityOptions={quantityOptions}
          customMessage="Para este servicio necesitamos que tu track esté público y nos proporciones el link directo de la canción que deseas promocionar."
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

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={isPublic}
                onChange={(e) => setIsPublic(e.target.checked)}
                className="rounded"
              />
              <span>Mi track está en público</span>
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
