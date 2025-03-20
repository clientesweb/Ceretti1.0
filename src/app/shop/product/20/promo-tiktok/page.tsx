"use client"

import type React from "react"

import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct"
import ProductListSec from "@/components/common/ProductListSec"
import { relatedProductData, reviewsData } from "@/app/page"
import { useState } from "react"
import { integralCF } from "@/styles/fonts"
import { cn } from "@/lib/utils"
import Rating from "@/components/ui/Rating"
import { Button } from "@/components/ui/button"
import { FaCheck, FaGift } from "react-icons/fa"
import { addToCart } from "@/lib/features/carts/cartsSlice"
import { useAppDispatch } from "@/lib/hooks/redux"
import Image from "next/image"
import InputGroup from "@/components/ui/input-group"

// Definir las opciones de cantidad y precios
const promoOptions = [
  { value: "promo1", label: "2.500 visitas + 1.000 likes", price: 3500 },
  { value: "promo2", label: "5.000 visitas + 2.500 likes", price: 5000 },
  { value: "promo3", label: "20.000 visitas + 5.000 likes", price: 9000 },
]

export default function PromoTikTokPage() {
  const [promoType, setPromoType] = useState<string>("promo1")
  const [price, setPrice] = useState<number>(3500)
  const [videoLink, setVideoLink] = useState<string>("")
  const dispatch = useAppDispatch()

  // Actualizar precio cuando cambia la promoción
  const handlePromoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value
    setPromoType(selectedValue)

    const selectedOption = promoOptions.find((opt) => opt.value === selectedValue)
    if (selectedOption) {
      setPrice(selectedOption.price)
    }
  }

  const handleAddToCart = () => {
    if (!videoLink) {
      alert("Por favor ingresa el link del video de TikTok")
      return
    }

    const promoLabel = promoOptions.find((opt) => opt.value === promoType)?.label || ""

    dispatch(
      addToCart({
        id: 20,
        name: `Promo TikTok - ${promoLabel}`,
        srcUrl: "/images/tiktok-3d-logo.png",
        price: price,
        attributes: [promoType, videoLink],
        discount: {
          amount: 0,
          percentage: 0,
        },
        quantity: 1,
      }),
    )

    alert("¡Producto agregado al carrito!")
  }

  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <BreadcrumbProduct title="Promo TikTok" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Imagen del producto */}
          <div className="bg-[#F0EEED] rounded-[20px] overflow-hidden flex items-center justify-center p-8">
            <div className="relative">
              <Image
                src="/images/tiktok-3d-logo.png"
                width={400}
                height={400}
                alt="Promo TikTok"
                className="object-contain max-w-full max-h-[400px] rounded-xl"
                priority
              />
              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-3 rounded-full">
                <FaGift className="text-red-500 text-3xl animate-pulse" />
              </div>
            </div>
          </div>

          {/* Detalles del producto */}
          <div>
            <h1 className={cn([integralCF.className, "text-3xl md:text-4xl mb-3"])}>Promo TikTok</h1>

            <div className="flex items-center mb-4">
              <Rating initialValue={5.0} SVGclassName="inline-block" emptyClassName="fill-gray-50" size={24} readonly />
              <span className="text-black text-sm ml-2">
                5.0 <span className="text-black/60">(92 reseñas)</span>
              </span>
            </div>

            <div className="mb-6">
              <div className="text-3xl md:text-4xl font-bold mb-2">Desde ${price} ARS</div>
              <div className="flex items-center text-green-500 font-medium">
                <FaCheck className="mr-2" /> Servicio funcionando.
              </div>
              <div className="mt-2 bg-red-500/10 text-red-500 px-3 py-1.5 rounded-full inline-block text-sm font-medium">
                <FaGift className="inline-block mr-1" /> Promoción especial
              </div>
            </div>

            <div className="space-y-6 mb-8">
              {/* Selección de promoción */}
              <div>
                <label className="block text-base font-medium mb-2">Promoción</label>
                <select
                  className="w-full border border-black/10 rounded-full py-3 px-4 bg-[#F0F0F0]"
                  value={promoType}
                  onChange={handlePromoChange}
                >
                  {promoOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      🎁 {option.label} = {option.price}💲
                    </option>
                  ))}
                </select>
              </div>

              {/* Link del video */}
              <div>
                <label className="block text-base font-medium mb-2">
                  Link del video <span className="text-red-500">*</span>
                </label>
                <InputGroup className="bg-[#F0F0F0]">
                  <InputGroup.Input
                    type="text"
                    name="video-link"
                    placeholder="https://www.tiktok.com/@usuario/video/XXXXXXXX"
                    value={videoLink}
                    onChange={(e) => setVideoLink(e.target.value)}
                    className="bg-transparent placeholder:text-black/40"
                  />
                </InputGroup>
                <p className="text-xs text-black/60 mt-1">Asegúrate de que el video sea público</p>
              </div>
            </div>

            {/* Botón agregar al carrito */}
            <Button
              onClick={handleAddToCart}
              className="w-full py-6 text-lg font-medium bg-black hover:bg-black/80 rounded-full"
            >
              Agregar al carrito
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
              <h3 className="text-xl font-bold mb-4">Promo TikTok</h3>
              <p className="text-black/70 mb-4">
                Aprovecha nuestras promociones especiales para TikTok y obtén visitas y likes a un precio increíble.
                Mejora la visibilidad y el engagement de tus videos con nuestros paquetes promocionales.
              </p>

              <ul className="space-y-2 text-black/70">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2" /> Entrega rápida
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2" /> Sin riesgo para tu cuenta
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2" /> No requiere contraseña
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2" /> Soporte 24/7
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Detalles de las promociones</h3>

              <div className="space-y-4">
                <div className="border border-red-500/20 rounded-xl p-5 bg-red-500/5">
                  <h4 className="font-bold mb-2">Promo 1: 2.500 visitas + 1.000 likes</h4>
                  <p className="text-black/70 mb-2">Precio normal: $4.500 ARS</p>
                  <p className="text-black/70 mb-2">Precio promocional: $3.500 ARS</p>
                  <p className="text-green-500 font-medium">Ahorro: $1.000 ARS (22%)</p>
                </div>

                <div className="border border-red-500/20 rounded-xl p-5 bg-red-500/5">
                  <h4 className="font-bold mb-2">Promo 2: 5.000 visitas + 2.500 likes</h4>
                  <p className="text-black/70 mb-2">Precio normal: $7.000 ARS</p>
                  <p className="text-black/70 mb-2">Precio promocional: $5.000 ARS</p>
                  <p className="text-green-500 font-medium">Ahorro: $2.000 ARS (29%)</p>
                </div>

                <div className="border border-red-500/20 rounded-xl p-5 bg-red-500/5">
                  <h4 className="font-bold mb-2">Promo 3: 20.000 visitas + 5.000 likes</h4>
                  <p className="text-black/70 mb-2">Precio normal: $13.000 ARS</p>
                  <p className="text-black/70 mb-2">Precio promocional: $9.000 ARS</p>
                  <p className="text-green-500 font-medium">Ahorro: $4.000 ARS (31%)</p>
                </div>
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

