"use client"

import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct"
import Header from "@/components/product-page/Header"
import Tabs from "@/components/product-page/Tabs"
import ProductListSec from "@/components/common/ProductListSec"
import { relatedProductData, allProductsData } from "@/app/page"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import type { Product } from "@/types/product.types"

export default function ProductPage() {
  const params = useParams()
  const router = useRouter()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)

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
    } else if (id === 9) {
      router.push("/shop/product/9/suscriptores-youtube")
      return
    } else if (id === 10) {
      router.push("/shop/product/10/visitas-youtube")
      return
    } else if (id === 11) {
      router.push("/shop/product/11/reproducciones-spotify")
      return
    } else if (id === 12) {
      router.push("/shop/product/12/seguidores-spotify")
      return
    } else if (id === 13) {
      router.push("/shop/product/13/oyentes-mensuales-spotify")
      return
    } else if (id === 15) {
      router.push("/shop/product/15/visitas-tiktok")
      return
    } else if (id === 16) {
      router.push("/shop/product/16/seguidores-tiktok")
      return
    } else if (id === 17) {
      router.push("/shop/product/17/likes-tiktok")
      return
    } else if (id === 18) {
      router.push("/shop/product/18/seguidores-facebook")
      return
    } else if (id === 19) {
      router.push("/shop/product/19/likes-facebook")
      return
    } else if (id === 20) {
      router.push("/shop/product/20/promo-tiktok")
      return
    }

    // Para otros productos, mostrar la página genérica
    const foundProduct = allProductsData.find((p) => p.id === id)

    if (foundProduct) {
      setProduct(foundProduct)
    }

    setLoading(false)
  }, [params.id, router])

  if (loading) {
    return (
      <div className="max-w-frame mx-auto px-4 xl:px-0 py-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-ceretti-blue"></div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="max-w-frame mx-auto px-4 xl:px-0 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Producto no encontrado</h2>
        <p className="mb-6">Lo sentimos, el producto que estás buscando no existe o ha sido eliminado.</p>
        <a
          href="/shop"
          className="bg-ceretti-blue text-white px-6 py-3 rounded-full hover:bg-ceretti-blue/80 transition-all"
        >
          Volver a la tienda
        </a>
      </div>
    )
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

