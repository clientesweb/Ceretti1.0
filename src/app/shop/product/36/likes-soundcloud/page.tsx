"use client"

import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct"
import Header from "@/components/product-page/Header"
import Tabs from "@/components/product-page/Tabs"
import ProductListSec from "@/components/common/ProductListSec"
import { relatedProductData } from "@/app/page"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

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

export default function LikesSoundcloud() {
  const [trackLink, setTrackLink] = useState("")
  const [isPublic, setIsPublic] = useState(false)
  const [geoLocation, setGeoLocation] = useState("mundial")

  const product = {
    id: 36,
    title: "Likes SoundCloud",
    description:
      "Aumenta la interacción en tus tracks de SoundCloud con likes reales. Este servicio mejora la popularidad de tu música, aumenta tu credibilidad como artista y potencia la visibilidad de tus creaciones.",
    srcUrl: "/images/soundcloud-logo.png",
    price: 1000,
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
          customMessage="Para este servicio necesitamos que tu track esté público y nos proporciones el link directo de la canción donde deseas los likes."
        >
          <div className="space-y-4 mt-6">
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
              <Checkbox id="isPublic" checked={isPublic} onCheckedChange={(checked) => setIsPublic(checked === true)} />
              <Label htmlFor="isPublic">Mi track está en público</Label>
            </div>

            <div>
              <Label className="block mb-2">Geolocalización</Label>
              <RadioGroup value={geoLocation} onValueChange={setGeoLocation} className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="mundial" id="mundial" />
                  <Label htmlFor="mundial">Mundial</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="calidad" id="calidad" />
                  <Label htmlFor="calidad">Calidad</Label>
                </div>
              </RadioGroup>
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
