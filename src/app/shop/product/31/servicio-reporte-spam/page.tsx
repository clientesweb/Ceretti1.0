"use client"

import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct"
import ProductListSec from "@/components/common/ProductListSec"
import { relatedProductData, reviewsData } from "@/app/page"
import { useState } from "react"
import { integralCF } from "@/styles/fonts"
import { cn } from "@/lib/utils"
import Rating from "@/components/ui/Rating"
import { Button } from "@/components/ui/button"
import { FaCheck, FaExclamationTriangle } from "react-icons/fa"
import { addToCart } from "@/lib/features/carts/cartsSlice"
import { useAppDispatch } from "@/lib/hooks/redux"
import Image from "next/image"
import InputGroup from "@/components/ui/input-group"
import { Textarea } from "@/components/ui/textarea"

// Definir las opciones de plataformas
const platformOptions = [
  { value: "instagram", label: "Instagram" },
  { value: "tiktok", label: "TikTok" },
  { value: "facebook", label: "Facebook" },
  { value: "youtube", label: "YouTube" },
  { value: "twitter", label: "X (Twitter)" },
  { value: "telegram", label: "Telegram" },
]

export default function ServicioReporteSpamPage() {
  const [platform, setPlatform] = useState<string>("instagram")
  const [targetLink, setTargetLink] = useState<string>("")
  const [details, setDetails] = useState<string>("")
  const dispatch = useAppDispatch()

  const handleAddToCart = () => {
    if (!targetLink) {
      alert("Por favor ingresa el link del contenido a reportar")
      return
    }

    if (!details) {
      alert("Por favor ingresa los detalles del reporte")
      return
    }

    dispatch(
      addToCart({
        id: 31,
        name: `Servicio de Reporte por Spam - ${platformOptions.find((p) => p.value === platform)?.label}`,
        srcUrl: `/images/${platform}-3d-logo.png`,
        price: 0, // Precio a consultar
        attributes: [platform, targetLink, "Consultar precio"],
        discount: {
          amount: 0,
          percentage: 0,
        },
        quantity: 1,
      }),
    )

    alert("¡Producto agregado al carrito! Nos pondremos en contacto para informarte el precio.")
  }

  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <BreadcrumbProduct title="Servicio de Reporte por Spam" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Imagen del producto */}
          <div className="bg-[#F0EEED] rounded-[20px] overflow-hidden flex items-center justify-center p-8">
            <div className="relative">
              <Image
                src={`/images/${platform}-3d-logo.png`}
                width={400}
                height={400}
                alt="Servicio de Reporte por Spam"
                className="object-contain max-w-full max-h-[400px] rounded-xl"
                priority
              />
              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-3 rounded-full">
                <FaExclamationTriangle className="text-red-500 text-3xl animate-pulse" />
              </div>
            </div>
          </div>

          {/* Detalles del producto */}
          <div>
            <h1 className={cn([integralCF.className, "text-3xl md:text-4xl mb-3"])}>Servicio de Reporte por Spam</h1>

            <div className="flex items-center mb-4">
              <Rating initialValue={4.9} SVGclassName="inline-block" emptyClassName="fill-gray-50" size={24} readonly />
              <span className="text-black text-sm ml-2">
                4.9 <span className="text-black/60">(28 reseñas)</span>
              </span>
            </div>

            <div className="mb-6">
              <div className="text-3xl md:text-4xl font-bold mb-2">Consultar precio</div>
              <div className="flex items-center text-green-500 font-medium">
                <FaCheck className="mr-2" /> Servicio funcionando.
              </div>
              <div className="mt-2 bg-yellow-100 text-yellow-800 px-3 py-1.5 rounded-full inline-block text-sm font-medium">
                Disponible para múltiples plataformas
              </div>
            </div>

            <div className="space-y-6 mb-8">
              {/* Selección de plataforma */}
              <div>
                <label className="block text-base font-medium mb-2">Plataforma</label>
                <select
                  className="w-full border border-black/10 rounded-full py-3 px-4 bg-[#F0F0F0]"
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                >
                  {platformOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Link del contenido a reportar */}
              <div>
                <label className="block text-base font-medium mb-2">
                  Link del contenido a reportar <span className="text-red-500">*</span>
                </label>
                <InputGroup className="bg-[#F0F0F0]">
                  <InputGroup.Input
                    type="text"
                    name="target-link"
                    placeholder="https://..."
                    value={targetLink}
                    onChange={(e) => setTargetLink(e.target.value)}
                    className="bg-transparent placeholder:text-black/40"
                  />
                </InputGroup>
                <p className="text-xs text-black/60 mt-1">
                  Ingresa el link directo al post, cuenta o contenido que deseas reportar
                </p>
              </div>

              {/* Detalles del reporte */}
              <div>
                <label className="block text-base font-medium mb-2">
                  Detalles del reporte <span className="text-red-500">*</span>
                </label>
                <Textarea
                  placeholder="Describe brevemente por qué deseas reportar este contenido y cualquier información adicional relevante."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="min-h-[150px] bg-[#F0F0F0] border-black/10 rounded-xl"
                />
                <p className="text-xs text-black/60 mt-1">
                  Proporciona todos los detalles posibles para ayudarnos a procesar tu solicitud
                </p>
              </div>
            </div>

            {/* Botón agregar al carrito */}
            <Button
              onClick={handleAddToCart}
              className="w-full py-6 text-lg font-medium bg-black hover:bg-black/80 rounded-full"
            >
              Solicitar cotización
            </Button>

            {/* Métodos de pago */}
            <div className="mt-6">
              <p className="text-sm text-black/60 mb-3">Métodos de pago aceptados:</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Image
                  src="/images/payment/mercadopago_1_color.svg"
                  alt="MercadoPago"
                  width={80}
                  height={40}
                  className="h-8 w-auto"
                />
                <Image
                  src="/images/payment/mastercard_color.svg"
                  alt="Mastercard"
                  width={80}
                  height={40}
                  className="h-8 w-auto"
                />
                <Image
                  src="/images/payment/visa_1_color.svg"
                  alt="Visa"
                  width={80}
                  height={40}
                  className="h-8 w-auto"
                />
                <Image
                  src="/images/payment/maestro_color.svg"
                  alt="Maestro"
                  width={80}
                  height={40}
                  className="h-8 w-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />

        {/* Descripción y detalles */}
        <div className="mb-16">
          <h2 className={cn([integralCF.className, "text-2xl mb-6"])}>DESCRIPCIÓN DEL SERVICIO</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Servicio de Reporte por Spam</h3>
              <p className="text-black/70 mb-4">
                Nuestro servicio de reporte por spam te permite reportar contenido o cuentas específicas en diversas
                plataformas sociales. Este servicio está diseñado para ayudarte a lidiar con contenido no deseado,
                cuentas falsas o spam que afectan tu experiencia online.
              </p>

              <ul className="space-y-2 text-black/70">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2" /> Disponible para múltiples plataformas
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2" /> Proceso confidencial
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2" /> Atención personalizada
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2" /> Soporte 24/7
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">¿Por qué usar este servicio?</h3>

              <div className="border border-red-500/20 rounded-xl p-5 bg-red-500/5">
                <ul className="space-y-3 text-black/70">
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Elimina contenido no deseado que afecta tu presencia online</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Reporta cuentas falsas o de suplantación de identidad</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Combate el spam y contenido inapropiado</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Protege tu reputación online</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Servicio profesional con alta tasa de éxito</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />

        {/* Testimonios */}
        <div className="mb-16">
          <h2 className={cn([integralCF.className, "text-2xl mb-6"])}>TESTIMONIOS DE CLIENTES</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviewsData.slice(0, 4).map((review) => (
              <div key={review.id} className="bg-white border border-black/10 rounded-xl p-5">
                <div className="flex items-center mb-3">
                  <Rating initialValue={review.rating} SVGclassName="inline-block" size={16} readonly />
                  <span className="ml-2 text-sm font-medium">{review.date}</span>
                </div>
                <p className="text-black/70 mb-3">{review.content}</p>
                <div className="font-bold">{review.user}</div>
              </div>
            ))}
          </div>
        </div>

        <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />

        {/* Productos relacionados */}
        <ProductListSec title="SERVICIOS RELACIONADOS" data={relatedProductData.slice(0, 4)} viewAllLink="/shop" />
      </div>
    </main>
  )
}
