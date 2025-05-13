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
    value: "5",
    label: "5 Comentarios",
    price: 2500,
    bonus: "",
  },
  {
    value: "10",
    label: "10 Comentarios",
    price: 4500,
    bonus: "Popular",
  },
  {
    value: "25",
    label: "25 Comentarios",
    price: 10000,
    bonus: "Mejor valor",
  },
  {
    value: "50",
    label: "50 Comentarios",
    price: 18000,
    bonus: "",
  },
  {
    value: "100",
    label: "100 Comentarios",
    price: 30000,
    bonus: "",
  },
]

export default function ComentariosPersonalizadosInstagram() {
  const [profileLink, setProfileLink] = useState("")
  const [isPublic, setIsPublic] = useState(false)
  const [geoLocation, setGeoLocation] = useState("mundial")
  const [commentText, setCommentText] = useState("")

  const product = {
    id: 29,
    title: "Comentarios Personalizados Instagram",
    description:
      "Recibe comentarios personalizados en tus publicaciones de Instagram. Este servicio premium te permite especificar el contenido exacto de los comentarios para maximizar la relevancia y el impacto en tu audiencia.",
    srcUrl: "/images/pic6.png",
    price: 2500,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.9,
    platform: "Instagram",
  }

  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <BreadcrumbProduct title={product.title} />
        <Header
          data={product}
          quantityOptions={quantityOptions}
          customMessage="Para este servicio necesitamos que tu cuenta esté en público, nos proporciones el link de la publicación y los comentarios específicos que deseas recibir."
        >
          <div className="space-y-4 mt-6">
            <div>
              <Label htmlFor="profileLink">Link de la publicación</Label>
              <Input
                id="profileLink"
                placeholder="https://www.instagram.com/p/..."
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
              <Label htmlFor="commentText">Texto de los comentarios</Label>
              <Input
                id="commentText"
                placeholder="Escribe los comentarios que deseas recibir"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="mt-1"
              />
              <p className="text-xs text-gray-500 mt-1">Separa cada comentario con un punto y coma (;)</p>
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
