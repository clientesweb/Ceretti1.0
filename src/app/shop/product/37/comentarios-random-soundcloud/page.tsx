"use client"

import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct"
import Header from "@/components/product-page/Header"
import Tabs from "@/components/product-page/Tabs"
import ProductListSec from "@/components/common/ProductListSec"
import { relatedProductData } from "@/app/page"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

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
              <Label className="block mb-2">Idioma de los comentarios</Label>
              <RadioGroup value={language} onValueChange={setLanguage} className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="español" id="español" />
                  <Label htmlFor="español">Español</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="inglés" id="inglés" />
                  <Label htmlFor="inglés">Inglés</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="mixto" id="mixto" />
                  <Label htmlFor="mixto">Mixto</Label>
                </div>
              </RadioGroup>
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
