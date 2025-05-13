"use client"

import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct"
import Header from "@/components/product-page/Header"
import Tabs from "@/components/product-page/Tabs"
import ProductListSec from "@/components/common/ProductListSec"
import { relatedProductData } from "@/app/page"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const quantityOptions = [
  {
    value: "1000",
    label: "1000 Visitas",
    price: 2000,
    bonus: "",
  },
  {
    value: "2500",
    label: "2500 Visitas",
    price: 4000,
    bonus: "",
  },
  {
    value: "5000",
    label: "5000 Visitas",
    price: 7000,
    bonus: "Popular",
  },
  {
    value: "10000",
    label: "10000 Visitas",
    price: 12000,
    bonus: "Mejor valor",
  },
  {
    value: "25000",
    label: "25000 Visitas",
    price: 25000,
    bonus: "",
  },
  {
    value: "50000",
    label: "50000 Visitas",
    price: 45000,
    bonus: "",
  },
]

export default function TraficoSeoWeb() {
  const [websiteUrl, setWebsiteUrl] = useState("")
  const [specificPages, setSpecificPages] = useState("")
  const [geoLocation, setGeoLocation] = useState("mundial")
  const [trafficSource, setTrafficSource] = useState("organico")
  const [deviceType, setDeviceType] = useState("todos")

  const product = {
    id: 40,
    title: "Tráfico SEO Web",
    description:
      "Aumenta el tráfico de tu sitio web con visitas reales que mejoran tu SEO. Este servicio optimiza tus métricas de tráfico, mejora tu posicionamiento en buscadores y aumenta la credibilidad de tu sitio.",
    srcUrl: "/images/SEO-Call-to-Action-scaled.jpg",
    price: 2000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.8,
    platform: "Web",
  }

  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <BreadcrumbProduct title={product.title} />
        <Header
          data={product}
          quantityOptions={quantityOptions}
          customMessage="Para este servicio necesitamos que nos proporciones la URL de tu sitio web y las páginas específicas que deseas promocionar."
        >
          <div className="space-y-4 mt-6">
            <div>
              <Label htmlFor="websiteUrl">URL de tu sitio web</Label>
              <Input
                id="websiteUrl"
                placeholder="https://www.tusitio.com"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="specificPages">Páginas específicas (opcionales)</Label>
              <Textarea
                id="specificPages"
                placeholder="Ingresa las URLs de páginas específicas que deseas promocionar, una por línea"
                value={specificPages}
                onChange={(e) => setSpecificPages(e.target.value)}
                className="mt-1"
                rows={3}
              />
              <p className="text-xs text-gray-500 mt-1">
                Si dejas este campo vacío, el tráfico se distribuirá por todo el sitio
              </p>
            </div>

            <div>
              <Label htmlFor="trafficSource">Fuente de tráfico</Label>
              <Select value={trafficSource} onValueChange={setTrafficSource}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Selecciona la fuente de tráfico" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="organico">Orgánico (Google, Bing)</SelectItem>
                  <SelectItem value="social">Redes Sociales</SelectItem>
                  <SelectItem value="directo">Tráfico Directo</SelectItem>
                  <SelectItem value="referral">Referral</SelectItem>
                  <SelectItem value="mixto">Mixto</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="deviceType">Tipo de dispositivo</Label>
              <Select value={deviceType} onValueChange={setDeviceType}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Selecciona el tipo de dispositivo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos</SelectItem>
                  <SelectItem value="desktop">Desktop</SelectItem>
                  <SelectItem value="mobile">Mobile</SelectItem>
                  <SelectItem value="tablet">Tablet</SelectItem>
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
