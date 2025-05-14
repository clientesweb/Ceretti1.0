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
import { Textarea } from "@/components/ui/textarea"

const quantityOptions = [
  {
    value: "100",
    label: "100 Visitas",
    price: 1000,
    bonus: "",
  },
  {
    value: "250",
    label: "250 Visitas",
    price: 2000,
    bonus: "",
  },
  {
    value: "500",
    label: "500 Visitas",
    price: 3500,
    bonus: "Popular",
  },
  {
    value: "1000",
    label: "1000 Visitas",
    price: 6000,
    bonus: "Mejor valor",
  },
  {
    value: "2500",
    label: "2500 Visitas",
    price: 12000,
    bonus: "",
  },
]

export default function TraficoSeoWebPage() {
  const [quantity, setQuantity] = useState<string>("100")
  const [price, setPrice] = useState<number>(1000)
  const [bonus, setBonus] = useState<string>("")
  const [websiteUrl, setWebsiteUrl] = useState<string>("")
  const [specificPages, setSpecificPages] = useState<string>("")
  const [targetCountries, setTargetCountries] = useState<string>("all")
  const [deliverySpeed, setDeliverySpeed] = useState<string>("normal")
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
    if (!websiteUrl) {
      alert("Por favor ingresa la URL de tu sitio web")
      return
    }

    dispatch(
      addToCart({
        id: 40,
        name: `Tráfico SEO Web - ${quantity}`,
        srcUrl: "/images/seo-analytics.png",
        price: price,
        attributes: [
          quantity,
          websiteUrl,
          specificPages ? `Páginas específicas: ${specificPages}` : "Todas las páginas",
          `Países: ${targetCountries === "all" ? "Todos" : targetCountries}`,
          `Entrega: ${deliverySpeed === "normal" ? "Normal" : deliverySpeed === "fast" ? "Rápida" : "Gradual"}`,
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
        <BreadcrumbProduct title="Tráfico SEO directo a Web" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Imagen del producto */}
          <div className="bg-[#F0EEED] rounded-[20px] overflow-hidden flex items-center justify-center p-8">
            <Image
              src="/images/seo-analytics.png"
              width={400}
              height={400}
              alt="Tráfico SEO directo a Web"
              className="object-contain max-w-full max-h-[400px] rounded-xl"
              priority
            />
          </div>

          {/* Detalles del producto */}
          <div>
            <h1 className={cn([integralCF.className, "text-3xl md:text-4xl mb-3"])}>Tráfico SEO directo a Web</h1>

            <div className="flex items-center mb-4">
              <Rating initialValue={5} SVGclassName="inline-block" emptyClassName="fill-gray-50" size={24} readonly />
              <span className="text-black text-sm ml-2">
                4.8 <span className="text-black/60">(32 reseñas)</span>
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
                      👁️ {option.label} = {option.price}💲 {option.bonus && `(${option.bonus})`}
                    </option>
                  ))}
                </select>
              </div>

              {/* URL del sitio web */}
              <div>
                <label className="block text-base font-medium mb-2">
                  URL del sitio web <span className="text-red-500">*</span>
                </label>
                <InputGroup className="bg-[#F0F0F0]">
                  <InputGroup.Input
                    type="text"
                    name="website-url"
                    placeholder="https://www.tusitio.com"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    className="bg-transparent placeholder:text-black/40"
                  />
                </InputGroup>
              </div>

              {/* Páginas específicas */}
              <div>
                <label className="block text-base font-medium mb-2">Páginas específicas (opcional)</label>
                <Textarea
                  placeholder="Ingresa las URLs de páginas específicas (una por línea)"
                  value={specificPages}
                  onChange={(e) => setSpecificPages(e.target.value)}
                  className="bg-[#F0F0F0] min-h-[100px]"
                />
                <p className="text-xs text-black/60 mt-1">Deja en blanco para dirigir el tráfico a todo el sitio</p>
              </div>

              {/* Países objetivo */}
              <div>
                <label className="block text-base font-medium mb-2">Países objetivo</label>
                <select
                  className="w-full border border-black/10 rounded-full py-3 px-4 bg-[#F0F0F0]"
                  value={targetCountries}
                  onChange={(e) => setTargetCountries(e.target.value)}
                >
                  <option value="all">Todos los países</option>
                  <option value="latam">Latinoamérica</option>
                  <option value="usa">Estados Unidos</option>
                  <option value="europe">Europa</option>
                  <option value="asia">Asia</option>
                </select>
              </div>

              {/* Velocidad de entrega */}
              <div>
                <label className="block text-base font-medium mb-2">Velocidad de entrega</label>
                <select
                  className="w-full border border-black/10 rounded-full py-3 px-4 bg-[#F0F0F0]"
                  value={deliverySpeed}
                  onChange={(e) => setDeliverySpeed(e.target.value)}
                >
                  <option value="slow">Gradual (10-14 días)</option>
                  <option value="normal">Normal (5-9 días)</option>
                  <option value="fast">Rápida (3-4 días) +15%</option>
                </select>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-bold mb-2">Características del tráfico:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>🌐 Tráfico real mundial: Visitas directas</li>
                <li>🏁 Fuentes de tráfico: Plataformas de intercambio privadas y redes publicitarias</li>
                <li>💻 Tráfico de escritorio: 45-55%</li>
                <li>📱 Tráfico móvil: 45-55%</li>
                <li>⏱️ Sesiones de duración media-alta de 20 a 50 segundos por visita</li>
              </ul>
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
              <h3 className="text-xl font-bold mb-4">Tráfico SEO directo a Web</h3>
              <p className="text-black/70 mb-4">
                Tráfico real mundial con visitas directas desde plataformas de intercambio privadas y redes
                publicitarias. Este servicio mejora tus métricas de tráfico, aumenta tu posicionamiento en buscadores y
                mejora la credibilidad de tu sitio web.
              </p>

              <ul className="space-y-2 text-black/70">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2" /> Tráfico 100% real y orgánico
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2" /> Compatible con Google Analytics
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2" /> Distribución geográfica personalizable
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
                    <FaCheck className="text-green-500 mt-1 mr-2" /> Mejora en el posicionamiento SEO
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2" /> Aumento de métricas de tráfico
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2" /> Mayor credibilidad para tu sitio web
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2" /> Mejora en la tasa de rebote
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2" /> Potencial aumento de conversiones orgánicas
                  </li>
                </ul>
              </div>

              <p className="text-sm text-black/70">
                <strong>Nota:</strong> Para obtener los mejores resultados, asegúrate de que tu sitio web esté
                optimizado para SEO y tenga un tiempo de carga rápido.
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
