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
import { FaCheck, FaCommentDots } from "react-icons/fa"
import { addToCart } from "@/lib/features/carts/cartsSlice"
import { useAppDispatch } from "@/lib/hooks/redux"
import Image from "next/image"
import InputGroup from "@/components/ui/input-group"
import { Textarea } from "@/components/ui/textarea"

// Definir las opciones de cantidad y precios para comentarios personalizados
const comentariosPersonalizadosOptions = [
  { value: "10", label: "10 Comentarios", price: 4500 },
  { value: "50", label: "50 Comentarios", price: 20000 },
  { value: "100", label: "100 Comentarios", price: 35000 },
  { value: "500", label: "500 Comentarios", price: 150000 },
  { value: "1000", label: "1.000 Comentarios", price: 700000 },
]

export default function ComentariosPersonalizadosInstagramPage() {
  const [quantity, setQuantity] = useState<string>("10")
  const [price, setPrice] = useState<number>(4500)
  const [username, setUsername] = useState<string>("")
  const [postLink, setPostLink] = useState<string>("")
  const [comments, setComments] = useState<string>("")
  const dispatch = useAppDispatch()

  // Actualizar precio cuando cambia la cantidad
  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value
    setQuantity(selectedValue)

    const selectedOption = comentariosPersonalizadosOptions.find((opt) => opt.value === selectedValue)
    if (selectedOption) {
      setPrice(selectedOption.price)
    }
  }

  const handleAddToCart = () => {
    if (!username && !postLink) {
      alert("Por favor ingresa tu nombre de usuario o el link del post")
      return
    }

    if (!comments) {
      alert("Por favor ingresa los comentarios personalizados")
      return
    }

    dispatch(
      addToCart({
        id: 29,
        name: `Comentarios Personalizados Instagram - ${quantity}`,
        srcUrl: "/images/instagram-3d-logo.png",
        price: price,
        attributes: [quantity, username || postLink, "Personalizados"],
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
        <BreadcrumbProduct title="Comentarios Personalizados Instagram" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Imagen del producto */}
          <div className="bg-[#F0EEED] rounded-[20px] overflow-hidden flex items-center justify-center p-8">
            <div className="relative">
              <Image
                src="/images/instagram-3d-logo.png"
                width={400}
                height={400}
                alt="Comentarios Personalizados Instagram"
                className="object-contain max-w-full max-h-[400px] rounded-xl"
                priority
              />
              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-3 rounded-full">
                <FaCommentDots className="text-pink-500 text-3xl animate-pulse" />
              </div>
            </div>
          </div>

          {/* Detalles del producto */}
          <div>
            <h1 className={cn([integralCF.className, "text-3xl md:text-4xl mb-3"])}>
              Comentarios Personalizados Instagram
            </h1>

            <div className="flex items-center mb-4">
              <Rating initialValue={4.9} SVGclassName="inline-block" emptyClassName="fill-gray-50" size={24} readonly />
              <span className="text-black text-sm ml-2">
                4.9 <span className="text-black/60">(42 reseñas)</span>
              </span>
            </div>

            <div className="mb-6">
              <div className="text-3xl md:text-4xl font-bold mb-2">Desde ${price} ARS</div>
              <div className="flex items-center text-green-500 font-medium">
                <FaCheck className="mr-2" /> Servicio funcionando.
              </div>
              <div className="mt-2 bg-yellow-100 text-yellow-800 px-3 py-1.5 rounded-full inline-block text-sm font-medium">
                Cuentas Mundiales / Comentarios Personalizados
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
                  {comentariosPersonalizadosOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      💬 {option.label} = {option.price}💲
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

              {/* O link del post */}
              <div>
                <div className="flex items-center justify-center my-2">
                  <div className="h-px bg-black/10 flex-grow"></div>
                  <span className="px-4 text-black/60 text-sm">O</span>
                  <div className="h-px bg-black/10 flex-grow"></div>
                </div>

                <label className="block text-base font-medium mb-2">
                  Link del post <span className="text-black/60">(opcional)</span>
                </label>
                <InputGroup className="bg-[#F0F0F0]">
                  <InputGroup.Input
                    type="text"
                    name="post-link"
                    placeholder="https://instagram.com/p/..."
                    value={postLink}
                    onChange={(e) => setPostLink(e.target.value)}
                    className="bg-transparent placeholder:text-black/40"
                  />
                </InputGroup>
                <p className="text-xs text-black/60 mt-1">Si tienes el link directo del post, puedes ingresarlo aquí</p>
              </div>

              {/* Comentarios personalizados */}
              <div>
                <label className="block text-base font-medium mb-2">
                  Comentarios personalizados <span className="text-red-500">*</span>
                </label>
                <Textarea
                  placeholder="Ingresa un comentario por línea. Ejemplo:
¡Me encanta este contenido! 😍
Increíble foto, sigue así 👏
Esto es genial 🔥"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  className="min-h-[150px] bg-[#F0F0F0] border-black/10 rounded-xl"
                />
                <p className="text-xs text-black/60 mt-1">
                  Ingresa un comentario por línea. Debes ingresar al menos la misma cantidad de comentarios que has
                  seleccionado.
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
              <h3 className="text-xl font-bold mb-4">Comentarios Personalizados Instagram</h3>
              <p className="text-black/70 mb-4">
                Aumenta la interacción en tus publicaciones de Instagram con nuestro servicio de comentarios
                personalizados. Este servicio te permite elegir exactamente qué comentarios quieres que aparezcan en tus
                posts, mejorando el engagement y la visibilidad de tu contenido.
              </p>

              <ul className="space-y-2 text-black/70">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2" /> Entrega rápida
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2" /> Cuentas mundiales reales
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
              <h3 className="text-xl font-bold mb-4">¿Por qué usar este servicio?</h3>

              <div className="border border-pink-500/20 rounded-xl p-5 bg-pink-500/5">
                <ul className="space-y-3 text-black/70">
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Control total sobre el contenido de los comentarios</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Comentarios personalizados que se adaptan a tu contenido</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Mejora la percepción de tu perfil</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Incrementa el engagement general de tu cuenta</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Comentarios de cuentas reales de todo el mundo</span>
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
