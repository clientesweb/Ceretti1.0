"use client"

import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct"
import Header from "@/components/product-page/Header"
import Tabs from "@/components/product-page/Tabs"
import ProductListSec from "@/components/common/ProductListSec"
import { relatedProductData } from "@/app/page"
import { useState } from "react"
import type { QuantityOption } from "@/types/product.types"

export default function ReaccionQuizInstagramPage() {
  const [selectedQuantity, setSelectedQuantity] = useState<string>("100")

  const quantityOptions: QuantityOption[] = [
    {
      value: "100",
      label: "100 reacciones",
      price: 250,
      bonus: "",
    },
    {
      value: "250",
      label: "250 reacciones",
      price: 600,
      bonus: "",
    },
    {
      value: "500",
      label: "500 reacciones",
      price: 1000,
      bonus: "",
    },
    {
      value: "1000",
      label: "1.000 reacciones",
      price: 1800,
      bonus: "",
    },
    {
      value: "2500",
      label: "2.500 reacciones",
      price: 4000,
      bonus: "",
    },
    {
      value: "5000",
      label: "5.000 reacciones",
      price: 7000,
      bonus: "",
    },
  ]

  const product = {
    id: 24,
    title: "Reacción a Quiz Instagram",
    description: "Aumenta las reacciones a tus encuestas tipo Quiz en historias. Solo opción A/Cuentas Mundiales.",
    srcUrl: "/images/instagram-3d-logo.png",
    gallery: ["/images/instagram-3d-logo.png"],
    price: 250,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.8,
    platform: "instagram",
  }

  const customMessage =
    "Este servicio solo funciona con la opción A y utiliza cuentas mundiales para mayor alcance y credibilidad."

  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <BreadcrumbProduct title={product.title} />
        <Header
          data={product}
          quantityOptions={quantityOptions}
          selectedQuantity={selectedQuantity}
          setSelectedQuantity={setSelectedQuantity}
          geoType="mundial"
          customMessage={customMessage}
        />
        <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        <Tabs />
        <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        <ProductListSec title="PRODUCTOS RELACIONADOS" data={relatedProductData} viewAllLink="/shop" />
      </div>
    </main>
  )
}
