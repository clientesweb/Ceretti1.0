"use client"

import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct"
import ProductListSec from "@/components/common/ProductListSec"
import { relatedProductData, reviewsData } from "@/app/page"
import { useState, useEffect } from "react"
import { integralCF } from "@/styles/fonts"
import { cn } from "@/lib/utils"
import Rating from "@/components/ui/Rating"
import { Button } from "@/components/ui/button"
import { FaCheck } from "react-icons/fa"
import { addToCart } from "@/lib/features/carts/cartsSlice"
import { useAppDispatch } from "@/lib/hooks/redux"
import Image from "next/image"
import InputGroup from "@/components/ui/input-group"

const quantityOptions = [
  {
    value: "20",
    label: "20 Comentarios",
    price: 3000,
    bonus: "",
  },
  {
    value: "50",
    label: "50 Comentarios",
    price: 12000,
    bonus: "Popular",
  },
  {
    value: "100",
    label: "100 Comentarios",
    price: 22000,
    bonus: "Mejor valor",
  },
]

export default function ComentariosRandomSoundcloudPage() {
  const [quantity, setQuantity] = useState<string>("20")
  const [price, setPrice] = useState<number>(3000)
  const [bonus, setBonus] = useState<string>("")
  const [trackLink, setTrackLink] = useState<string>("")
  const [isPublic, setIsPublic] = useState<boolean>(true)
  const [geoLocation, setGeoLocation] = useState<string>("mundial")
  const [language, setLanguage] = useState<string>("español")
  const dispatch = useAppDispatch()

  // Actualizar precio cuando cambia la cantidad
  useEffect(() => {
    const selectedOption = quantityOptions.find((opt) => opt.value === quantity)
    if (selectedOption) {
      setPrice(selectedOption.price)
      setBonus(selectedOption.bonus)
    }
  }, [quantity])

  const handleAddToCart = () => {
    if (!trackLink) {
      alert("Por favor ingresa el link de la canción de SoundCloud")
      return
    }
    alert("Por favor ingresa el link de la canción de SoundCloud")
    return

    dispatch(
      addToCart({
        id: 37,
        name: `Comentarios Random SoundCloud - ${quantity}`,
        srcUrl: "/images/soundcloud-logo.png",
        price: price,
        attributes: [
          quantity,
          trackLink,
          isPublic ? "Público" : "Privado",
          `Geo: ${geoLocation}`,
          `Idioma: ${language}`,
        ],
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
        <BreadcrumbProduct title="Comentarios Random SoundCloud" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Imagen del producto */}
          <div className="bg-[#F0EEED] rounded-[20px] overflow-hidden flex items-center justify-center p-8">
            <Image
              src="/images/soundcloud-logo.png"
              width={400}
              height={400}
              alt="Comentarios Random SoundCloud"
              className="object-contain max-w-full max-h-[400px] rounded-xl"
              priority
            />
          </div>

          {/* Detalles del producto */}
          <div>
            <h1 className={cn([integralCF.className, "text-3xl md:text-4xl mb-3"])}>Comentarios Random SoundCloud</h1>

            <div className="flex items-center mb-4">
              <Rating initialValue={5} SVGclassName="inline-block" emptyClassName="fill-gray-50" size={24} readonly />
              <span className="text-black text-sm ml-2">
                4.7 <span className="text-black/60">(42 reseñas)</span>
              </span>
            </div>

            <div className="mb-6">
              <div className="text-3xl md:text-4xl font-bold mb-2">${price} ARS</div>
              <div className="flex items-center text-green-500 font-medium">
                <FaCheck className="mr-2" /> Servicio funcionando.
              </div>
              {bonus && (
                <div className="mt-2 bg-ceretti-blue/10 text-ceretti-blue px-3 py-1.5 rounded-full inline-block text-sm font-medium">
                  {bonus}
                </div>
              )}
            </div>

            <div className="space-y-6 mb-8">
              {/* Selección de cantidad */}
              <div>
                <label className="block text-base font-medium mb-2">Cantidad</label>
                <select
                  className="w-full border border-black/10 rounded-full py-3 px-4 bg-[#F0F0F0]"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {quantityOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      👤 {option.label} = {option.price}💲 {option.bonus && `(${option.bonus})`}
                    </option>
                  ))}
                </select>
              </div>

              {/* Link de la canción */}
              <div>
                <label className="block text-base font-medium mb-2">
                  Link de la canción <span className="text-red-500">*</span>
                </label>
                <InputGroup className="bg-[#F0F0F0]">
                  <InputGroup.Input
                    type="text"
                    name="track-link"
                    placeholder="https://soundcloud.com/usuario/nombre-de-la-cancion"
                    value={trackLink}
                    onChange={(e) => setTrackLink(e.target.value)}
                    className="bg-transparent placeholder:text-black/40"
                  />
                </InputGroup>
              </div>

              {/* Idioma de los comentarios */}
              <div>
                <label className="block text-base font-medium mb-2">Idioma de los comentarios</label>
                <select
                  className="w-full border border-black/10 rounded-full py-3 px-4 bg-[#F0F0F0]"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option value="español">Español</option>
                  <option value="inglés">Inglés</option>
                  <option value="mixto">Mixto</option>
                </select>
                <p className="text-sm text-gray-500 mt-1">Comentarios en inglés o español</p>
              </div>

              {/* Geolocalización */}
              <div>
                <label className="block text-base font-medium mb-2">Geolocalización</label>
                <select
                  className="w-full border border-black/10 rounded-full py-3 px-4 bg-[#F0F0F0]"
                  value={geoLocation}
                  onChange={(e) => setGeoLocation(e.target.value)}
                >
                  <option value="mundial">Mundial</option>
                  <option value="calidad">Calidad</option>
                </select>
              </div>

              {/* Checkbox track público */}
              <div className="flex items-center space-x-2">
                <div
                  className={`w-5 h-5 border ${isPublic ? "bg-ceretti-blue border-ceretti-blue" : "border-black/20 bg-white"} rounded flex items-center justify-center cursor-pointer`}
                  onClick={() => setIsPublic(!isPublic)}
                >
                  {isPublic && <FaCheck className="text-white text-xs" />}
                </div>
                <label className="cursor-pointer" onClick={() => setIsPublic(!isPublic)}>
                  La canción está pública
                </label>
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
              <h3 className="text-xl font-bold mb-4">Comentarios Random SoundCloud</h3>
              <p className="text-black/70 mb-4">
                Aumenta la interacción en tus tracks de SoundCloud con comentarios aleatorios positivos. Este servicio
                mejora la visibilidad de tu música, genera mayor engagement y aumenta tu credibilidad como artista.
              </p>

              <ul className="space-y-2 text-black/70">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2" /> Entrega gradual y natural
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2" /> Sin riesgo de baneos
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
              <h3 className="text-xl font-bold mb-4">Beneficios del servicio</h3>

              <div className="border border-black/10 rounded-xl p-4 mb-4">
                <ul className="space-y-2 text-black/70">
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2" /> Mayor interacción en tus tracks
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2" /> Mejora en el posicionamiento en las listas
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2" /> Aumento de la credibilidad como artista
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2" /> Atracción de nuevos oyentes orgánicos
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2" /> Impulso a tu carrera musical
                  </li>
                </ul>
              </div>

              <p className="text-sm text-black/70">
                <strong>Nota:</strong> Para obtener los mejores resultados, asegúrate de que tu canción esté pública y
                que sea de buena calidad.
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
