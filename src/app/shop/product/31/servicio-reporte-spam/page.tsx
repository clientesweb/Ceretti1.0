"use client"

import { useState } from "react"
import Image from "next/image"
import { useAppDispatch } from "@/lib/hooks/redux"
import { addToCart } from "@/lib/features/carts/cartsSlice"
import { useToast } from "@/hooks/use-toast"
import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct"
import Tabs from "@/components/product-page/Tabs"
import ProductListSec from "@/components/common/ProductListSec"
import { relatedProductData } from "@/app/page"

export default function ServicioReporteSpamPage() {
  const dispatch = useAppDispatch()
  const { toast } = useToast()
  const [selectedPlatform, setSelectedPlatform] = useState<string>("instagram")
  const [loading, setLoading] = useState(false)

  const platforms = [
    { value: "instagram", label: "Instagram" },
    { value: "tiktok", label: "TikTok" },
    { value: "facebook", label: "Facebook" },
    { value: "youtube", label: "YouTube" },
    { value: "twitter", label: "X (Twitter)" },
    { value: "telegram", label: "Telegram" },
  ]

  const handleAddToCart = () => {
    setLoading(true)
    setTimeout(() => {
      dispatch(
        addToCart({
          id: 31,
          name: "Servicio de Reporte por Spam",
          srcUrl: "/images/instagram-3d-logo.png",
          price: 0,
          attributes: [platforms.find((p) => p.value === selectedPlatform)?.label || "Instagram", "Consultar precio"],
          discount: {
            amount: 0,
            percentage: 0,
          },
          quantity: 1,
        }),
      )
      toast({
        title: "Producto añadido al carrito",
        description: "Servicio de Reporte por Spam ha sido añadido al carrito",
      })
      setLoading(false)
    }, 1000)
  }

  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <BreadcrumbProduct title="Servicio de Reporte por Spam" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-[#F8F9FB] rounded-2xl p-6 flex items-center justify-center">
            <div className="relative w-full max-w-[300px] aspect-square">
              <Image
                src="/images/instagram-3d-logo.png"
                alt="Servicio de Reporte por Spam"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold mb-4">Servicio de Reporte por Spam</h1>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-1 bg-ceretti-blue/10 text-ceretti-blue rounded-full text-xs font-medium">
                  multiplatform
                </span>
              </div>
              <p className="text-black/70">
                Reporta cuentas o publicaciones específicas en diversas plataformas. Servicio disponible para TikTok,
                Instagram, Facebook, YouTube, X y Telegram.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-bold mb-3">Plataforma</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {platforms.map((platform) => (
                  <button
                    key={platform.value}
                    className={`border rounded-lg py-2 px-3 text-sm font-medium transition-all ${
                      selectedPlatform === platform.value
                        ? "border-ceretti-blue bg-ceretti-blue/5 text-ceretti-blue"
                        : "border-gray-200 hover:border-ceretti-blue/50"
                    }`}
                    onClick={() => setSelectedPlatform(platform.value)}
                  >
                    {platform.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-bold mb-3">Tipo de reporte</h3>
              <div className="grid grid-cols-2 gap-2">
                <button className="border border-ceretti-blue bg-ceretti-blue/5 text-ceretti-blue rounded-lg py-2 px-3 text-sm font-medium">
                  Cuenta
                </button>
                <button className="border border-ceretti-blue bg-ceretti-blue/5 text-ceretti-blue rounded-lg py-2 px-3 text-sm font-medium">
                  Publicación
                </button>
              </div>
            </div>

            <div className="mt-auto">
              <div className="flex flex-col mb-6">
                <span className="text-sm text-black/60">Precio</span>
                <span className="font-bold text-2xl text-black">Consultar</span>
                <span className="text-sm text-black/60 mt-1">
                  El precio varía según la plataforma y el tipo de reporte
                </span>
              </div>

              <button
                className={`w-full bg-ceretti-blue text-white py-3 px-6 rounded-full font-medium hover:bg-ceretti-blue/90 transition-all ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
                onClick={handleAddToCart}
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Agregando...
                  </span>
                ) : (
                  "Consultar precio"
                )}
              </button>
            </div>
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
