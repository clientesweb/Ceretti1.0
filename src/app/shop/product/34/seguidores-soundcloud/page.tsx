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
    value: "100",
    label: "100 Seguidores",
    price: 1500,
    bonus: "",
  },
  {
    value: "250",
    label: "250 Seguidores",
    price: 2500,
    bonus: "",
  },
  {
    value: "500",
    label: "500 Seguidores",
    price: 4000,
    bonus: "Popular",
  },
  {
    value: "1000",
    label: "1000 Seguidores",
    price: 6000,
    bonus: "Mejor valor",
  },
  {
    value: "2500",
    label: "2500 Seguidores",
    price: 12000,
    bonus: "",
  },
  {
    value: "5000",
    label: "5000 Seguidores",
    price: 20000,
    bonus: "",
  },
]

export default function SeguidoresSoundcloud() {
  const [profileLink, setProfileLink] = useState("")
  const [isPublic, setIsPublic] = useState(false)
  const [geoLocation, setGeoLocation] = useState("mundial")

  const product = {
    id: 34,
    title: "Seguidores SoundCloud",
    description:
      "Aumenta tu presencia en SoundCloud con seguidores reales. Nuestro servicio te ayuda a construir una audiencia sólida, mejorando tu credibilidad como artista y aumentando la visibilidad de tu música.",
    srcUrl: "/images/soundcloud-logo.png",
    price: 1500,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.8,
    platform: "SoundCloud",
  }

  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <BreadcrumbProduct title={product.title} />
        <Header
          data={product}
          quantityOptions={quantityOptions}
          customMessage="Para este servicio necesitamos que tu perfil esté público y nos proporciones el link de tu cuenta de SoundCloud."
        >
          <div className="space-y-4 mt-6">
            <div>
              <Label htmlFor="profileLink">Link de tu perfil</Label>
              <Input
                id="profileLink"
                placeholder="https://soundcloud.com/username"
                value={profileLink}
                onChange={(e) => setProfileLink(e.target.value)}
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
                <span>Mi perfil está en público</span>
              </label>
            </div>
          </div>
        </Header>
        <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        <Tabs />
        <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        <ProductListSec title="PRODUCTOS RELACIONADOS" data={relatedProductData} viewAllLink="/shop" />
      </div>
    </main>
  )
}
