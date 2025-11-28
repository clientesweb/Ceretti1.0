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

// Actualizar las opciones de precios para suscriptores YouTube de calidad
const calidadOptions = [
  { value: "50", label: "50 Suscriptores", price: 3500, bonus: "" },
  { value: "100", label: "100 Suscriptores", price: 6000, bonus: "" },
  { value: "250", label: "250 Suscriptores", price: 10500, bonus: "" },
  { value: "500", label: "500 Suscriptores", price: 17500, bonus: "" },
  { value: "1000", label: "1.000 Suscriptores", price: 32000, bonus: "" },
]

// Actualizar las opciones de precios para suscriptores YouTube mundiales
const mundialOptions = [
  { value: "50", label: "50 Suscriptores", price: 1850, bonus: "" },
  { value: "100", label: "100 Suscriptores", price: 2500, bonus: "" },
  { value: "250", label: "250 Suscriptores", price: 4500, bonus: "" },
  { value: "500", label: "500 Suscriptores", price: 8000, bonus: "" },
  { value: "1000", label: "1.000 Suscriptores", price: 15000, bonus: "" },
]

export default function SuscriptoresYoutubePage() {
  const [geoType, setGeoType] = useState<string>("mundial")
  const [quantity, setQuantity] = useState<string>("50")
  const [price, setPrice] = useState<number>(1800)
  const [bonus, setBonus] = useState<string>("")
  const [channelLink, setChannelLink] = useState<string>("")
  const dispatch = useAppDispatch()

  // Actualizar precio cuando cambian las opciones
  useEffect(() => {
    const options = geoType === "calidad" ? calidadOptions : mundialOptions
    const selectedOption = options.find((opt) => opt.value === quantity)

    if (selectedOption) {
      setPrice(selectedOption.price)
      setBonus(selectedOption.bonus)
    }
  }, [geoType, quantity])

  const handleAddToCart = () => {
    if (!channelLink) {
      alert("Por favor ingresa el link de tu canal de YouTube")
      return
    }

    dispatch(
      addToCart({
        id: 9,
        name: `Suscriptores YouTube ${geoType === "calidad" ? "Calidad" : "Mundial"} - ${quantity}`,
        srcUrl: "/images/youtube-3d-logo.png",
        price: price,
        attributes: [geoType, quantity, channelLink],
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
        <BreadcrumbProduct title="Suscriptores YouTube" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Imagen del producto */}
          <div className="bg-[#F0EEED] rounded-[20px] overflow-hidden flex items-center justify-center p-8">
            <Image
              src="/images/youtube-3d-logo.png"
              width={400}
              height={400}
              alt="Suscriptores YouTube"
              className="object-contain max-w-full max-h-[400px] rounded-xl"
              priority
            />
          </div>

          {/* Detalles del producto */}
          <div>
            <h1 className={cn([integralCF.className, "text-3xl md:text-4xl mb-3"])}>Suscriptores YouTube</h1>

            <div className="flex items-center mb-4">
              <Rating initialValue={4.9} SVGclassName="inline-block" emptyClassName="fill-gray-50" size={24} readonly />
              <span className="text-black text-sm ml-2">
                4.9 <span className="text-black/60">(124 reseñas)</span>
              </span>
            </div>

            <div className="mb-6">
              <div className="text-3xl md:text-4xl font-bold mb-2">Desde ${price} ARS</div>
              <div className="flex items-center text-green-500 font-medium">
                <FaCheck className="mr-2" /> Servicio funcionando.
              </div>
              {bonus && (
                <div className="mt-2 bg-ceretti-blue/10 text-ceretti-blue px-3 py-1.5 rounded-full inline-block text-sm font-medium">
                  Bonificación: {bonus}
                </div>
              )}
            </div>

            <div className="space-y-6 mb-8">
              {/* Selección de geolocalización */}
              <div>
                <label className="block text-base font-medium mb-2">Geo-localización</label>
                <div className="flex border border-black/10 rounded-full overflow-hidden">
                  <button
                    className={`flex-1 py-3 px-4 text-center ${geoType === "mundial" ? "bg-ceretti-blue text-white" : "bg-[#F0F0F0]"}`}
                    onClick={() => setGeoType("mundial")}
                  >
                    Mundial
                  </button>
                  <button
                    className={`flex-1 py-3 px-4 text-center ${geoType === "calidad" ? "bg-ceretti-blue text-white" : "bg-[#F0F0F0]"}`}
                    onClick={() => setGeoType("calidad")}
                  >
                    Calidad
                  </button>
                </div>
                <p className="text-sm text-black/60 mt-2">
                  {geoType === "mundial"
                    ? "Suscriptores de todo el mundo. Entrega más rápida y económica."
                    : "Suscriptores de mayor calidad con perfiles completos. Mayor retención y engagement."}
                </p>
              </div>

              {/* Selección de cantidad */}
              <div>
                <label className="block text-base font-medium mb-2">Cantidad</label>
                <select
                  className="w-full border border-black/10 rounded-full py-3 px-4 bg-[#F0F0F0]"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {(geoType === "calidad" ? calidadOptions : mundialOptions).map((option) => (
                    <option key={option.value} value={option.value}>
                      👥 {option.label} = {option.price}💲 {option.bonus && `(${option.bonus})`}
                    </option>
                  ))}
                </select>
              </div>

              {/* Link del canal */}
              <div>
                <label className="block text-base font-medium mb-2">
                  Link del canal <span className="text-red-500">*</span>
                </label>
                <InputGroup className="bg-[#F0F0F0]">
                  <InputGroup.Input
                    type="text"
                    name="channel-link"
                    placeholder="https://www.youtube.com/c/tu_canal"
                    value={channelLink}
                    onChange={(e) => setChannelLink(e.target.value)}
                    className="bg-transparent placeholder:text-black/40"
                  />
                </InputGroup>
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
              <h3 className="text-xl font-bold mb-4">Suscriptores YouTube Premium</h3>
              <p className="text-black/70 mb-4">
                Impulsa tu canal de YouTube con nuestro servicio de suscriptores premium. Aumenta tu credibilidad y
                alcance con suscriptores de calidad que potenciarán tu canal y te ayudarán a alcanzar los requisitos
                para la monetización.
              </p>

              <ul className="space-y-2 text-black/70">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2" /> Entrega gradual y natural
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2" /> Sin riesgo de penalizaciones
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
              <h3 className="text-xl font-bold mb-4">Diferencias entre opciones</h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="border border-black/10 rounded-xl p-4">
                  <h4 className="font-bold mb-2">Mundial</h4>
                  <ul className="space-y-2 text-sm text-black/70">
                    <li>✓ Suscriptores internacionales</li>
                    <li>✓ Entrega más rápida</li>
                    <li>✓ Precio más económico</li>
                    <li>✓ Ideal para aumentar números</li>
                  </ul>
                </div>

                <div className="border border-ceretti-blue/20 rounded-xl p-4 bg-ceretti-blue/5">
                  <h4 className="font-bold mb-2">Calidad</h4>
                  <ul className="space-y-2 text-sm text-black/70">
                    <li>✓ Perfiles más completos</li>
                    <li>✓ Mayor retención</li>
                    <li>✓ Aspecto más natural</li>
                    <li>✓ Ideal para monetización</li>
                  </ul>
                </div>
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
              <h3 className="text-xl font-bold mb-2">Credibilidad</h3>
              <p className="text-black/70">
                Un canal con más suscriptores genera mayor confianza y atrae a nuevos espectadores de forma orgánica.
              </p>
            </div>

            <div className="bg-white border border-black/10 rounded-xl p-5">
              <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center mb-4">
                <FaCheck className="text-red-600 text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Monetización</h3>
              <p className="text-black/70">
                Alcanza más rápido los requisitos para monetizar tu canal (1.000 suscriptores y 4.000 horas de
                visualización).
              </p>
            </div>

            <div className="bg-white border border-black/10 rounded-xl p-5">
              <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center mb-4">
                <FaCheck className="text-red-600 text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Visibilidad</h3>
              <p className="text-black/70">
                YouTube favorece a los canales con más suscriptores en sus algoritmos de recomendación.
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
