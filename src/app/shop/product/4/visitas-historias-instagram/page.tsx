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
import { FaCheck, FaEye } from "react-icons/fa"
import { addToCart } from "@/lib/features/carts/cartsSlice"
import { useAppDispatch } from "@/lib/hooks/redux"
import Image from "next/image"
import InputGroup from "@/components/ui/input-group"

// Definir las opciones de cantidad y precios para Visitas a Historias
const visitasHistoriasOptions = [
  { value: "100", label: "100 Visitas", price: 150 },
  { value: "250", label: "250 Visitas", price: 400 },
  { value: "500", label: "500 Visitas", price: 800 },
  { value: "1000", label: "1.000 Visitas", price: 1500 },
  { value: "2500", label: "2.500 Visitas", price: 3500 },
  { value: "5000", label: "5.000 Visitas", price: 6000 },
  { value: "10000", label: "10.000 Visitas", price: 10000 },
]

export default function VisitasHistoriasInstagramPage() {
  const [quantity, setQuantity] = useState<string>("100")
  const [price, setPrice] = useState<number>(150)
  const [storyLink, setStoryLink] = useState<string>("")
  const [username, setUsername] = useState<string>("")
  const dispatch = useAppDispatch()

  // Actualizar precio cuando cambia la cantidad
  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value
    setQuantity(selectedValue)

    const selectedOption = visitasHistoriasOptions.find((opt) => opt.value === selectedValue)
    if (selectedOption) {
      setPrice(selectedOption.price)
    }
  }

  const handleAddToCart = () => {
    if (!username && !storyLink) {
      alert("Por favor ingresa tu nombre de usuario o el link de la historia")
      return
    }

    dispatch(
      addToCart({
        id: 4,
        name: `Visitas Historias Instagram - ${quantity}`,
        srcUrl: "/images/instagram-3d-logo.png",
        price: price,
        attributes: [quantity, username || storyLink],
        discount: {
          amount: 0,
          percentage: 0,
        },
        quantity: 1,
      }),
    )

    alert("¡Producto agregado al carrito!")
  }

  // Update the image source to use the new Instagram logo
  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <BreadcrumbProduct title="Visitas para Historias Instagram" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Imagen del producto */}
          <div className="bg-[#F0EEED] rounded-[20px] overflow-hidden flex items-center justify-center p-8">
            <div className="relative">
              <Image
                src="/images/instagram-3d-logo.png"
                width={400}
                height={400}
                alt="Visitas para Historias Instagram"
                className="object-contain max-w-full max-h-[400px] rounded-xl"
                priority
              />
              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-3 rounded-full">
                <div className="relative">
                  <FaEye className="text-ceretti-blue text-3xl" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-ceretti-blue rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Detalles del producto */}
          <div>
            <h1 className={cn([integralCF.className, "text-3xl md:text-4xl mb-3"])}>
              Visitas para Historias Instagram
            </h1>

            <div className="flex items-center mb-4">
              <Rating
                initialValue={4.6}
                allowFraction
                SVGclassName="inline-block"
                emptyClassName="fill-gray-50"
                size={24}
                readonly
              />
              <span className="text-black text-sm ml-2">
                4.6 <span className="text-black/60">(52 reseñas)</span>
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
                  {visitasHistoriasOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      👁 {option.label} = {option.price}💲
                    </option>
                  ))}
                </select>
              </div>

              {/* Nombre de usuario */}
              <div>
                <label className="block text-base font-medium mb-2">
                  Nombre de usuario <span className="text-black/60">(sin @)</span>
                </label>
                <InputGroup className="bg-[#F0F0F0]">
                  <InputGroup.Input
                    type="text"
                    name="username"
                    placeholder="tu_usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="bg-transparent placeholder:text-black/40"
                  />
                </InputGroup>
                <p className="text-xs text-black/60 mt-1">Ingresa tu nombre de usuario de Instagram</p>
              </div>

              {/* O link de la historia */}
              <div>
                <div className="flex items-center justify-center my-2">
                  <div className="h-px bg-black/10 flex-grow"></div>
                  <span className="px-4 text-black/60 text-sm">O</span>
                  <div className="h-px bg-black/10 flex-grow"></div>
                </div>

                <label className="block text-base font-medium mb-2">
                  Link de la historia <span className="text-black/60">(opcional)</span>
                </label>
                <InputGroup className="bg-[#F0F0F0]">
                  <InputGroup.Input
                    type="text"
                    name="story-link"
                    placeholder="https://instagram.com/stories/..."
                    value={storyLink}
                    onChange={(e) => setStoryLink(e.target.value)}
                    className="bg-transparent placeholder:text-black/40"
                  />
                </InputGroup>
                <p className="text-xs text-black/60 mt-1">
                  Si tienes el link directo de la historia, puedes ingresarlo aquí
                </p>
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
                <img src="/icons/mercadopago.svg" alt="MercadoPago" className="h-8" />
                <img src="/icons/mastercard.svg" alt="Mastercard" className="h-8" />
                <img src="/icons/visa.svg" alt="Visa" className="h-8" />
                <img src="/icons/maestro.svg" alt="Maestro" className="h-8" />
                <img src="/icons/itau.svg" alt="Itaú" className="h-8" />
                <img src="/icons/pagofacil.svg" alt="PagoFácil" className="h-8" />
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
              <h3 className="text-xl font-bold mb-4">Visitas para Historias Instagram</h3>
              <p className="text-black/70 mb-4">
                Aumenta las visualizaciones de tus historias de Instagram de forma orgánica. Nuestro servicio te ayuda a
                incrementar la visibilidad de tus historias y mejorar tu presencia en la plataforma.
              </p>

              <ul className="space-y-2 text-black/70">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2" /> Entrega inmediata
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2" /> Visitas de calidad
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
              <h3 className="text-xl font-bold mb-4">¿Por qué aumentar las visitas a tus historias?</h3>

              <div className="border border-ceretti-blue/20 rounded-xl p-5 bg-ceretti-blue/5">
                <ul className="space-y-3 text-black/70">
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Mayor visibilidad: Tus historias aparecerán en los primeros lugares</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Credibilidad: Las historias con más visitas generan mayor interés</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Engagement: Aumenta la interacción con tus seguidores</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Alcance: Mejora el alcance de tus historias destacadas</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Análisis: Obtén mejores métricas para tus campañas</span>
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

