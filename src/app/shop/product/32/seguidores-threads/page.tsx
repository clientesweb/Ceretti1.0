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

export default function SeguidoresThreads() {
  const [profileLink, setProfileLink] = useState("")
  const [isPublic, setIsPublic] = useState(false)
  const [geoLocation, setGeoLocation] = useState("mundial")

  const product = {
    id: 32,
    title: "Seguidores Threads",
    description:
      "Aumenta tu presencia en Threads con seguidores reales y activos. Nuestro servicio garantiza seguidores de calidad que mejoran tu credibilidad y visibilidad en esta nueva plataforma.",
    srcUrl: "/images/threads-logo.png",
    price: 1500,
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
          customMessage="Para este servicio necesitamos que tu cuenta esté en público y nos proporciones el link de tu perfil de Threads."
        >
          <div className="space-y-4 mt-6">
            <div>
              <Label htmlFor="profileLink">Link de tu perfil</Label>
              <Input
                id="profileLink"
                placeholder="https://www.threads.net/@username"
                value={profileLink}
                onChange={(e) => setProfileLink(e.target.value)}
                className="mt-1"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="isPublic" checked={isPublic} onCheckedChange={(checked) => setIsPublic(checked === true)} />
              <Label htmlFor="isPublic">Mi perfil está en público</Label>
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
