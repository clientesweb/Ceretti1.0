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
    label: "100 Likes",
    price: 1000,
    bonus: "",
  },
  {
    value: "250",
    label: "250 Likes",
    price: 2000,
    bonus: "",
  },
  {
    value: "500",
    label: "500 Likes",
    price: 3500,
    bonus: "Popular",
  },
  {
    value: "1000",
    label: "1000 Likes",
    price: 5000,
    bonus: "Mejor valor",
  },
  {
    value: "2500",
    label: "2500 Likes",
    price: 10000,
    bonus: "",
  },
  {
    value: "5000",
    label: "5000 Likes",
    price: 18000,
    bonus: "",
  },
]

export default function LikesThreads() {
  const [postLink, setPostLink] = useState("")
  const [isPublic, setIsPublic] = useState(false)
  const [geoLocation, setGeoLocation] = useState("mundial")

  const product = {
    id: 33,
    title: "Likes Threads",
    description:
      "Aumenta la interacción en tus publicaciones de Threads con likes reales. Este servicio mejora la visibilidad de tu contenido y aumenta tu credibilidad en la plataforma.",
    srcUrl: "/images/threads-logo.png",
    price: 1000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.8,
    platform: "Threads",
  }

  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <BreadcrumbProduct title={product.title} />
        <Header
          data={product}
          quantityOptions={quantityOptions}
          customMessage="Para este servicio necesitamos que tu cuenta esté en público y nos proporciones el link de la publicación donde deseas los likes."
        >
          <div className="space-y-4 mt-6">
            <div>
              <Label htmlFor="postLink">Link de la publicación</Label>
              <Input
                id="postLink"
                placeholder="https://www.threads.net/t/..."
                value={postLink}
                onChange={(e) => setPostLink(e.target.value)}
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
