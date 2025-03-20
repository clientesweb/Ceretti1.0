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

// Definir las opciones de cantidad y precios para Comentarios
const comentariosOptions = [
  { value: "10", label: "10 Comentarios", price: 2000 },
  { value: "50", label: "50 Comentarios", price: 4500 },
  { value: "100", label: "100 Comentarios", price: 7500 },
  { value: "500", label: "500 Comentarios", price: 15000 },
  { value: "1000", label: "1.000 Comentarios", price: 25000 },
]

export default function ComentariosInstagramPage() {
  const [quantity, setQuantity] = useState<string>("10")
  const [price, setPrice] = useState<number>(2000)
  const [postLink, setPostLink] = useState<string>("")
  const [customComments, setCustomComments] = useState<string>("")
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
    if (!postLink) {
      alert("Por favor ingresa el link de la publicación de Instagram")
      return
    }

    dispatch(
      addToCart({
        id: 6,
        name: `Comentarios Instagram - ${quantity}`,
        srcUrl: "/images/instagram-3d-logo.png",
        price: price,
        attributes: [quantity, postLink, customComments ? "Comentarios personalizados" : "Comentarios aleatorios"],
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
        <BreadcrumbProduct title="Comentarios Instagram" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Imagen del producto */}
          <div className="bg-[#F0EEED] rounded-[20px] overflow-hidden flex items-center justify-center p-8">
            <div className="relative">
              <Image
                src="/images/instagram-3d-logo.png"
                width={400}
                height={400}
                alt="Comentarios Instagram"
                className="object-contain max-w-full max-h-[400px] rounded-xl"
                priority
              />
              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-3 rounded-full">
                <FaComment className="text-purple-500 text-3xl animate-pulse" />
              </div>
            </div>
          </div>

          {/* Detalles del producto */}
          <div>
            <h1 className={cn([integralCF.className, "text-3xl md:text-4xl mb-3"])}>Comentarios Random Instagram</h1>

            <div className="flex items-center mb-4">
              <Rating
                initialValue={4.8}
                allowFraction
                SVGclassName="inline-block"
                emptyClassName="fill-gray-50"
                size={24}
                readonly
              />
              <span className="text-black text-sm ml-2">
                4.8 <span className="text-black/60">(37 reseñas)</span>
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

              {/* Link de la publicación */}
              <div>
                <label className="block text-base font-medium mb-2">
                  Link de la publicación <span className="text-red-500">*</span>
                </label>
                <InputGroup className="bg-[#F0F0F0]">
                  <InputGroup.Input
                    type="text"
                    name="post-link"
                    placeholder="https://www.instagram.com/p/XXXXXXX"
                    value={postLink}
                    onChange={(e) => setPostLink(e.target.value)}
                    className="bg-transparent placeholder:text-black/40"
                  />
                </InputGroup>
                <p className="text-xs text-black/60 mt-1">Asegúrate de que la publicación sea pública</p>
              </div>

              {/* Comentarios personalizados */}
              <div>
                <label className="block text-base font-medium mb-2">
                  Comentarios personalizados <span className="text-black/60">(opcional)</span>
                </label>
                <textarea
                  className="w-full border border-black/10 rounded-xl py-3 px-4 bg-[#F0F0F0] min-h-[100px]"
                  placeholder="Escribe los comentarios que deseas recibir, separados por saltos de línea. Si dejas este campo vacío, se utilizarán comentarios aleatorios positivos."
                  value={customComments}
                  onChange={(e) => setCustomComments(e.target.value)}
                />
                <p className="text-xs text-black/60 mt-1">Máximo 1 comentario por línea</p>
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
              <h3 className="text-xl font-bold mb-4">Comentarios Instagram</h3>
              <p className="text-black/70 mb-4">
                Aumenta el engagement de tus publicaciones con comentarios de calidad. Los comentarios son una de las
                interacciones más valiosas en Instagram y ayudan a mejorar la visibilidad de tu contenido.
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

              <div className="border border-ceretti-blue/20 rounded-xl p-5 bg-ceretti-blue/5">
                <p className="text-black/70 mb-3">
                  Si no especificas comentarios personalizados, utilizaremos comentarios positivos como estos:
                </p>
                <ul className="space-y-2 text-black/70">
                  <li>❤️ ¡Me encanta este contenido!</li>
                  <li>👏 Increíble publicación, sigue así</li>
                  <li>🔥 Esto es fuego puro</li>
                  <li>✨ Contenido de calidad como siempre</li>
                  <li>👌 Excelente trabajo</li>
                  <li>😍 Simplemente perfecto</li>
                  <li>💯 100% recomendado</li>
                </ul>
                <p className="text-black/70 mt-3">
                  También puedes personalizar tus comentarios para que se adapten mejor a tu contenido.
                </p>
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

