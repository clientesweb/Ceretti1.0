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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

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
        >
          <div className="space-y-4 mt-6">
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
              <Checkbox id="isPublic" checked={isPublic} onCheckedChange={(checked) => setIsPublic(checked === true)} />
              <Label htmlFor="isPublic">Mi video está en público</Label>
            </div>

            <div>
              <Label htmlFor="targetAudience">Audiencia objetivo</Label>
              <Select value={targetAudience} onValueChange={setTargetAudience}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Selecciona la audiencia objetivo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General</SelectItem>
                  <SelectItem value="musica">Música</SelectItem>
                  <SelectItem value="gaming">Gaming</SelectItem>
                  <SelectItem value="tecnologia">Tecnología</SelectItem>
                  <SelectItem value="belleza">Belleza y Moda</SelectItem>
                  <SelectItem value="deportes">Deportes</SelectItem>
                  <SelectItem value="educacion">Educación</SelectItem>
                </SelectContent>
              </Select>
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
