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
import { FaCheck, FaComment } from "react-icons/fa"
import { addToCart } from "@/lib/features/carts/cartsSlice"
import { useAppDispatch } from "@/lib/hooks/redux"
import Image from "next/image"
import InputGroup from "@/components/ui/input-group"

// Definir las opciones de cantidad y precios
const comentariosOptions = [
  { value: "10", label: "10 Comentarios", price: 1000 },
  { value: "25", label: "25 Comentarios", price: 2500 },
  { value: "50", label: "50 Comentarios", price: 5000 },
  { value: "100", label: "100 Comentarios", price: 9000 },
]

export default function ComentariosYoutubeRandomPage() {
  const [quantity, setQuantity] = useState<string>("10")
  const [price, setPrice] = useState<number>(1000)
  const [videoLink, setVideoLink] = useState<string>("")
  const [language, setLanguage] = useState<string>("español")
  const dispatch = useAppDispatch()

  // Actualizar precio cuando cambia la cantidad
  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value
    setQuantity(selectedValue)

    const selectedOption = comentariosOptions.find((opt) => opt.value === selectedValue)
    if (selectedOption) {
      setPrice(selectedOption.price)
    }
  }

  const handleAddToCart = () => {
    if (!videoLink) {
      alert("Por favor ingresa el link del video de YouTube")
      return
    }

    dispatch(
      addToCart({
        id: 22,
        name: `Comentarios YouTube Random (${language}) - ${quantity}`,
        srcUrl: "/images/youtube-3d-logo.png",
        price: price,
        attributes: [quantity, videoLink, `Idioma: ${language}`],
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
        <BreadcrumbProduct title="Comentarios Random YouTube" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Imagen del producto */}
          <div className="bg-[#F0EEED] rounded-[20px] overflow-hidden flex items-center justify-center p-8">
            <div className="relative">
              <Image
                src="/images/youtube-3d-logo.png"
                width={400}
                height={400}
                alt="Comentarios Random YouTube"
                className="object-contain max-w-full max-h-[400px] rounded-xl"
                priority
              />
              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-3 rounded-full">
                <FaComment className="text-red-600 text-3xl animate-pulse" />
              </div>
            </div>
          </div>

          {/* Detalles del producto */}
          <div>
            <h1 className={cn([integralCF.className, "text-3xl md:text-4xl mb-3"])}>Comentarios Random YouTube</h1>

            <div className="flex items-center mb-4">
              <Rating initialValue={4.7} SVGclassName="inline-block" emptyClassName="fill-gray-50" size={24} readonly />
              <span className="text-black text-sm ml-2">
                4.7 <span className="text-black/60">(63 reseñas)</span>
              </span>
            </div>

            <div className="mb-6">
              <div className="text-3xl md:text-4xl font-bold mb-2">Desde ${price} ARS</div>
              <div className="flex items-center text-green-500 font-medium">
                <FaCheck className="mr-2" /> Servicio funcionando.
              </div>
            </div>

            <div className="space-y-6 mb-8">
              {/* Selección de cantidad */}
              <div>
                <label className="block text-base font-medium mb-2">Cantidad</label>
                <select
                  className="w-full border border-black/10 rounded-full py-3 px-4 bg-[#F0F0F0]"
                  value={quantity}
                  onChange={handleQuantityChange}
                >
                  {comentariosOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      💬 {option.label} = {option.price}💲
                    </option>
                  ))}
                </select>
              </div>

              {/* Selección de idioma */}
              <div>
                <label className="block text-base font-medium mb-2">Idioma</label>
                <div className="flex border border-black/10 rounded-full overflow-hidden">
                  <button
                    className={`flex-1 py-3 px-4 text-center ${language === "español" ? "bg-ceretti-blue text-white" : "bg-[#F0F0F0]"}`}
                    onClick={() => setLanguage("español")}
                  >
                    Español
                  </button>
                  <button
                    className={`flex-1 py-3 px-4 text-center ${language === "inglés" ? "bg-ceretti-blue text-white" : "bg-[#F0F0F0]"}`}
                    onClick={() => setLanguage("inglés")}
                  >
                    Inglés
                  </button>
                </div>
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
                    placeholder="https://www.youtube.com/watch?v=XXXXXXXX"
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
                <Image
                  src="/images/payment/itauunibanco_color.svg"
                  alt="Itaú"
                  width={80}
                  height={40}
                  className="h-8 w-auto"
                />
                <Image
                  src="/images/payment/pagofacil_color.svg"
                  alt="PagoFácil"
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
              <h3 className="text-xl font-bold mb-4">Comentarios Random YouTube</h3>
              <p className="text-black/70 mb-4">
                Aumenta el engagement de tus videos en YouTube con nuestro servicio de comentarios aleatorios. Mejora la
                interacción de tus videos y haz que tu contenido sea más atractivo para el algoritmo.
              </p>

              <ul className="space-y-2 text-black/70">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2" /> Entrega gradual
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2" /> Comentarios positivos
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
              <h3 className="text-xl font-bold mb-4">Ejemplos de comentarios</h3>

              <div className="border border-red-600/20 rounded-xl p-5 bg-red-600/5">
                <p className="text-black/70 mb-3">Ejemplos de comentarios en español:</p>
                <ul className="space-y-2 text-black/70">
                  <li>❤️ ¡Me encanta este video!</li>
                  <li>👏 Increíble contenido, sigue así</li>
                  <li>🔥 Este canal es fuego puro</li>
                  <li>✨ Contenido de calidad como siempre</li>
                  <li>👌 Excelente trabajo</li>
                  <li>😍 Simplemente perfecto</li>
                  <li>💯 100% recomendado</li>
                </ul>
                <p className="text-black/70 mt-3 mb-3">Ejemplos de comentarios en inglés:</p>
                <ul className="space-y-2 text-black/70">
                  <li>❤️ I love this video!</li>
                  <li>👏 Amazing content, keep it up</li>
                  <li>🔥 This channel is fire</li>
                  <li>✨ Quality content as always</li>
                  <li>👌 Excellent work</li>
                  <li>😍 Simply perfect</li>
                  <li>💯 100% recommended</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />

        {/* Beneficios */}
        <div className="mb-16">
          <h2 className={cn([integralCF.className, "text-2xl mb-6"])}>BENEFICIOS</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-black/10 rounded-xl p-5">
              <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center mb-4">
                <FaCheck className="text-red-600 text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Mayor interacción</h3>
              <p className="text-black/70">
                Los comentarios aumentan la interacción en tus videos, lo que mejora su posicionamiento en el algoritmo.
              </p>
            </div>

            <div className="bg-white border border-black/10 rounded-xl p-5">
              <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center mb-4">
                <FaCheck className="text-red-600 text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Credibilidad</h3>
              <p className="text-black/70">
                Un video con más comentarios genera mayor confianza y atrae a nuevos espectadores de forma orgánica.
              </p>
            </div>

            <div className="bg-white border border-black/10 rounded-xl p-5">
              <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center mb-4">
                <FaCheck className="text-red-600 text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Comunidad activa</h3>
              <p className="text-black/70">
                Los comentarios dan la impresión de una comunidad activa, lo que anima a otros usuarios a comentar.
              </p>
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

