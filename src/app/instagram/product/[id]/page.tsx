"use client"

import { useEffect, useState } from "react"
import { getProductById } from "@/app/instagram-services"
import { cn } from "@/lib/utils"
import { integralCF } from "@/styles/fonts"
import Image from "next/image"
import Rating from "@/components/ui/Rating"
import { useRouter } from "next/navigation"
import CartCounter from "@/components/ui/CartCounter"
import { addToCart } from "@/lib/features/carts/cartsSlice"
import { useAppDispatch } from "@/lib/hooks/redux"
import Link from "next/link"
import type { Product } from "@/types/product.types"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null)
  const [quantity, setQuantity] = useState(1)
  const router = useRouter()
  const dispatch = useAppDispatch()

  useEffect(() => {
    const productId = Number.parseInt(params.id)
    const foundProduct = getProductById(productId)

    if (foundProduct) {
      setProduct(foundProduct)
    } else {
      router.push("/instagram")
    }
  }, [params.id, router])

  const handleAddToCart = () => {
    if (!product) return

    dispatch(
      addToCart({
        id: product.id,
        name: product.title,
        srcUrl: product.srcUrl,
        price: product.price,
        attributes: [product.category || "instagram", product.platform || "instagram"],
        discount: product.discount,
        quantity: quantity,
      }),
    )

    // Opcional: redirigir al carrito o mostrar un mensaje de éxito
    router.push("/cart")
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-ceretti-blue"></div>
      </div>
    )
  }

  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Imagen del producto */}
          <div className="md:w-1/2">
            <div className="bg-[#F8F9FB] rounded-xl p-8 flex items-center justify-center">
              <Image
                src={product.srcUrl || "/placeholder.svg"}
                width={400}
                height={400}
                alt={product.title}
                className="object-contain max-h-[400px]"
                priority
              />
            </div>
          </div>

          {/* Información del producto */}
          <div className="md:w-1/2">
            <div className="mb-2">
              <span className="inline-block px-3 py-1 bg-ceretti-blue/10 text-ceretti-blue rounded-full text-sm">
                {product.platform}
              </span>
              {product.category && (
                <span className="inline-block ml-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {product.category.replace("-", " ")}
                </span>
              )}
            </div>

            <h1 className={cn([integralCF.className, "text-3xl md:text-4xl mb-4"])}>{product.title}</h1>

            <div className="flex items-center mb-4">
              <Rating
                initialValue={product.rating}
                allowFraction
                SVGclassName="inline-block"
                emptyClassName="fill-gray-50"
                size={20}
                readonly
              />
              <span className="text-black text-sm ml-2">
                {product.rating.toFixed(1)}
                <span className="text-black/60">/5</span>
              </span>
            </div>

            <div className="flex items-center space-x-3 mb-6">
              {product.discount.percentage > 0 ? (
                <>
                  <span className="font-bold text-3xl text-black">
                    ${Math.round(product.price - (product.price * product.discount.percentage) / 100)}
                  </span>
                  <span className="font-bold text-black/40 line-through text-xl">${product.price}</span>
                  <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                    -{product.discount.percentage}%
                  </span>
                </>
              ) : (
                <span className="font-bold text-3xl text-black">${product.price}</span>
              )}
            </div>

            <p className="text-black/70 mb-6">{product.longDescription || product.description}</p>

            {product.features && (
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-3">Características:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-ceretti-blue mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Advertencia */}
            {product.category?.includes("mundiales") && (
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      Este servicio no cuenta con garantía por caídas. Puede haber una caída de seguidores del 10% ~
                      30%.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Contador y botón de agregar al carrito */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <CartCounter
                onAdd={(value) => setQuantity(value)}
                onRemove={(value) => setQuantity(value)}
                className="w-full sm:w-auto"
              />
              <button
                onClick={handleAddToCart}
                className="w-full sm:flex-1 bg-ceretti-blue hover:bg-ceretti-blue/80 text-white py-3 px-6 rounded-full transition-all"
              >
                Agregar al Carrito
              </button>
            </div>

            {/* Enlaces de navegación */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/instagram" className="text-ceretti-blue hover:underline">
                ← Volver a servicios de Instagram
              </Link>
              <Link href={`/instagram/${product.category}`} className="text-ceretti-blue hover:underline">
                Ver más {product.category?.replace("-", " ")} →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

