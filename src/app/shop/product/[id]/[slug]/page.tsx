"use client"

import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct"
import Header from "@/components/product-page/Header"
import Tabs from "@/components/product-page/Tabs"
import ProductListSec from "@/components/common/ProductListSec"
import { relatedProductData } from "@/app/page"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import type { Product } from "@/types/product.types"
import { newArrivalsData, topSellingData } from "@/app/page"

export default function ProductPage() {
  const params = useParams()
  const router = useRouter()
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    const id = Number(params.id)

    // Redirigir a páginas específicas para ciertos productos
    if (id === 1) {
      router.push("/shop/product/1/seguidores-instagram-premium")
      return
    } else if (id === 2) {
      router.push("/shop/product/2/likes-instagram")
      return
    } else if (id === 3) {
      router.push("/shop/product/3/visitas-instagram")
      return
    } else if (id === 4) {
      router.push("/shop/product/4/visitas-historias-instagram")
      return
    } else if (id === 5) {
      router.push("/shop/product/5/guardados-instagram")
      return
    } else if (id === 6) {
      router.push("/shop/product/6/comentarios-instagram")
      return
    }

    // Para otros productos, mostrar la página genérica
    const allProducts = [...newArrivalsData, ...topSellingData, ...relatedProductData]
    const foundProduct = allProducts.find((p) => p.id === id)

    if (foundProduct) {
      setProduct(foundProduct)
    }
  }, [params.id, router])

  if (!product) {
    return <div className="max-w-frame mx-auto px-4 xl:px-0 py-20">Cargando producto...</div>
  }

  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <BreadcrumbProduct title={product.title} />
        <Header data={product} />
        <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        <Tabs />
        <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        <ProductListSec title="PRODUCTOS RELACIONADOS" data={relatedProductData} viewAllLink="/shop" />
      </div>
    </main>
  )
}

