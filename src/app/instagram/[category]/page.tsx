"use client"

import { useEffect, useState } from "react"
import { instagramCategories, getProductsByCategory } from "@/app/instagram-services"
import { cn } from "@/lib/utils"
import { integralCF } from "@/styles/fonts"
import ProductCard from "@/components/common/ProductCard"
import Link from "next/link"
import * as motion from "framer-motion/client"
import { useRouter } from "next/navigation"
import type { Product } from "@/types/product.types"

export default function CategoryPage({ params }: { params: { category: string } }) {
  const [products, setProducts] = useState<Product[]>([])
  const [categoryName, setCategoryName] = useState("")
  const router = useRouter()

  useEffect(() => {
    const category = params.category
    const categoryData = instagramCategories.find((cat) => cat.id === category)

    if (!categoryData) {
      router.push("/instagram")
      return
    }

    setCategoryName(categoryData.name)
    setProducts(getProductsByCategory(category))
  }, [params.category, router])

  if (products.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-ceretti-blue"></div>
      </div>
    )
  }

  return (
    <main className="pb-20">
      <div className="bg-[#F2F0F1] py-12 md:py-20 overflow-hidden relative mb-10">
        <div className="absolute top-12 left-8 w-4 h-4 bg-ceretti-blue/20 rounded-full" />
        <div className="absolute top-24 left-24 w-2 h-2 bg-ceretti-blue/20 rounded-full" />
        <div className="absolute bottom-8 right-16 w-3 h-3 bg-ceretti-blue/20 rounded-full" />
        <div className="absolute top-16 right-32 w-2 h-2 bg-ceretti-blue/20 rounded-full" />

        <div className="max-w-frame mx-auto px-4 xl:px-0 text-center">
          <motion.h1
            initial={{ y: "50px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={cn([integralCF.className, "text-4xl lg:text-[64px] lg:leading-[64px] mb-5 lg:mb-8"])}
          >
            {categoryName}
          </motion.h1>
          <motion.p
            initial={{ y: "50px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-black/60 text-sm lg:text-base mb-6 lg:mb-8 max-w-[700px] mx-auto"
          >
            {params.category.includes("calidad")
              ? "Servicios de calidad premium con garantía de 30 días ante caídas (1% ~ 5%)."
              : "Servicios mundiales a precios accesibles. No cuentan con garantía por caídas (10% ~ 30%)."}
          </motion.p>
        </div>
      </div>

      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <div className="mb-8">
          <Link href="/instagram" className="text-ceretti-blue hover:underline">
            ← Volver a todos los servicios
          </Link>
        </div>

        <motion.div
          initial={{ y: "50px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </motion.div>

        {params.category.includes("mundiales") && (
          <div className="mt-16 p-8 bg-yellow-50 rounded-2xl text-center">
            <h2 className={cn([integralCF.className, "text-2xl md:text-3xl mb-4"])}>IMPORTANTE</h2>
            <p className="text-lg mb-6">
              Estos servicios no cuentan con garantía por caídas. Puede haber una caída de seguidores del 10% ~ 30%.
            </p>
            <Link
              href="/contacto"
              className="inline-block px-8 py-3 bg-ceretti-blue text-white rounded-full hover:bg-ceretti-blue/80 transition-all"
            >
              ¿Tienes dudas? Contáctanos
            </Link>
          </div>
        )}

        {params.category.includes("calidad") && (
          <div className="mt-16 p-8 bg-ceretti-blue/10 rounded-2xl text-center">
            <h2 className={cn([integralCF.className, "text-2xl md:text-3xl mb-4"])}>GARANTÍA DE CALIDAD</h2>
            <p className="text-lg mb-6">
              Todos nuestros servicios de calidad incluyen 30 días de garantía ante caídas (1% ~ 5%).
            </p>
            <Link
              href="/contacto"
              className="inline-block px-8 py-3 bg-ceretti-blue text-white rounded-full hover:bg-ceretti-blue/80 transition-all"
            >
              ¿Tienes dudas? Contáctanos
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}

