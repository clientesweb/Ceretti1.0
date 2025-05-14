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
        />

        <div className="space-y-4 mt-6 border p-4 rounded-md">
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
            <select
              id="trafficSource"
              value={trafficSource}
              onChange={(e) => setTrafficSource(e.target.value)}
              className="w-full p-2 border rounded-md mt-1"
            >
              <option value="organico">Orgánico (Google, Bing)</option>
              <option value="social">Redes Sociales</option>
              <option value="directo">Tráfico Directo</option>
              <option value="referral">Referral</option>
              <option value="mixto">Mixto</option>
            </select>
          </div>

          <div>
            <Label htmlFor="deviceType">Tipo de dispositivo</Label>
            <select
              id="deviceType"
              value={deviceType}
              onChange={(e) => setDeviceType(e.target.value)}
              className="w-full p-2 border rounded-md mt-1"
            >
              <option value="todos">Todos</option>
              <option value="desktop">Desktop</option>
              <option value="mobile">Mobile</option>
              <option value="tablet">Tablet</option>
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
