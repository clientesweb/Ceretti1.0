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
    value: "50",
    label: "50 Reportes",
    price: 5000,
    bonus: "",
  },
  {
    value: "100",
    label: "100 Reportes",
    price: 9000,
    bonus: "Popular",
  },
  {
    value: "250",
    label: "250 Reportes",
    price: 20000,
    bonus: "Mejor valor",
  },
  {
    value: "500",
    label: "500 Reportes",
    price: 35000,
    bonus: "",
  },
]

export default function ServicioReporteSpam() {
  const [profileLink, setProfileLink] = useState("")
  const [reportReason, setReportReason] = useState("")
  const [platform, setPlatform] = useState("instagram")
  const [additionalInfo, setAdditionalInfo] = useState("")

  const product = {
    id: 31,
    title: "Servicio Reporte Spam",
    description:
      "Servicio especializado para reportar cuentas o contenido que violan las normas de la plataforma. Este servicio ayuda a mantener un entorno digital más seguro y libre de spam.",
    srcUrl: "/images/pic15.png",
    price: 5000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.7,
    platform: "Todas las plataformas",
  }

  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <BreadcrumbProduct title={product.title} />
        <Header
          data={product}
          quantityOptions={quantityOptions}
          customMessage="Para este servicio necesitamos que nos proporciones el link del perfil o contenido que deseas reportar y el motivo específico."
        />

        <div className="space-y-4 mt-6 border p-4 rounded-md">
          <div>
            <Label htmlFor="platform">Plataforma</Label>
            <select
              id="platform"
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="w-full p-2 border rounded-md mt-1"
            >
              <option value="instagram">Instagram</option>
              <option value="facebook">Facebook</option>
              <option value="tiktok">TikTok</option>
              <option value="youtube">YouTube</option>
              <option value="twitter">Twitter</option>
              <option value="threads">Threads</option>
              <option value="otra">Otra</option>
            </select>
          </div>

          <div>
            <Label htmlFor="profileLink">Link del perfil o contenido</Label>
            <Input
              id="profileLink"
              placeholder="https://..."
              value={profileLink}
              onChange={(e) => setProfileLink(e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="reportReason">Motivo del reporte</Label>
            <select
              id="reportReason"
              value={reportReason}
              onChange={(e) => setReportReason(e.target.value)}
              className="w-full p-2 border rounded-md mt-1"
            >
              <option value="">Selecciona el motivo</option>
              <option value="spam">Spam</option>
              <option value="contenido_inapropiado">Contenido inapropiado</option>
              <option value="acoso">Acoso</option>
              <option value="suplantacion">Suplantación de identidad</option>
              <option value="derechos_autor">Violación de derechos de autor</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div>
            <Label htmlFor="additionalInfo">Información adicional</Label>
            <Textarea
              id="additionalInfo"
              placeholder="Proporciona detalles adicionales sobre el reporte"
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              className="mt-1"
              rows={4}
            />
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
