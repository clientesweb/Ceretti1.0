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
    value: "50",
    label: "50 Reportes",
    price: 5000,
    bonus: "",
  },
  {
    value: "100",
    label: "100 Reportes",
    price: 9000,
    bonus: "Popular",
  },
  {
    value: "250",
    label: "250 Reportes",
    price: 20000,
    bonus: "Mejor valor",
  },
  {
    value: "500",
    label: "500 Reportes",
    price: 35000,
    bonus: "",
  },
]

export default function ServicioReporteSpam() {
  const [quantity, setQuantity] = useState<string>("50")
  const [price, setPrice] = useState<number>(5000)
  const [bonus, setBonus] = useState<string>("")
  const [profileLink, setProfileLink] = useState<string>("")
  const [reportReason, setReportReason] = useState<string>("")
  const [platform, setPlatform] = useState<string>("instagram")
  const [additionalInfo, setAdditionalInfo] = useState<string>("")
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
    if (!profileLink) {
      alert("Por favor ingresa el link del perfil o contenido")
      return
    }

    if (!reportReason) {
      alert("Por favor selecciona un motivo para el reporte")
      return
    }

    dispatch(
      addToCart({
        id: 31,
        name: `Servicio Reporte Spam - ${quantity}`,
        srcUrl: "/images/pic15.png",
        price: price,
        attributes: [quantity, profileLink, platform, reportReason, additionalInfo],
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
        <BreadcrumbProduct title="Servicio Reporte Spam" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Imagen del producto */}
          <div className="bg-[#F0EEED] rounded-[20px] overflow-hidden flex items-center justify-center p-8">
            <Image
              src="/images/pic15.png"
              width={400}
              height={400}
              alt="Servicio Reporte Spam"
              className="object-contain max-w-full max-h-[400px] rounded-xl"
              priority
            />
          </div>

          {/* Detalles del producto */}
          <div>
            <h1 className={cn([integralCF.className, "text-3xl md:text-4xl mb-3"])}>Servicio Reporte Spam</h1>

            <div className="flex items-center mb-4">
              <Rating initialValue={4.7} SVGclassName="inline-block" emptyClassName="fill-gray-50" size={24} readonly />
              <span className="text-black text-sm ml-2">
                4.7 <span className="text-black/60">(53 reseñas)</span>
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
                      🚫 {option.label} = {option.price}💲 {option.bonus && `(${option.bonus})`}
                    </option>
                  ))}
                </select>
              </div>

              {/* Plataforma */}
              <div>
                <label className="block text-base font-medium mb-2">Plataforma</label>
                <select
                  className="w-full border border-black/10 rounded-full py-3 px-4 bg-[#F0F0F0]"
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                >
                  <option value="instagram">Instagram</option>
                  <option value="facebook">Facebook</option>
                  <option value="tiktok">TikTok</option>
                  <option value="youtube">YouTube</option>
                  <option value="twitter">Twitter</option>
                  <option value="threads">Threads</option>
                  <option value="otra">Otra</option>
                </select>
              </div>

              {/* Link del perfil o contenido */}
              <div>
                <label className="block text-base font-medium mb-2">
                  Link del perfil o contenido <span className="text-red-500">*</span>
                </label>
                <InputGroup className="bg-[#F0F0F0]">
                  <InputGroup.Input
                    type="text"
                    name="profile-link"
                    placeholder="https://..."
                    value={profileLink}
                    onChange={(e) => setProfileLink(e.target.value)}
                    className="bg-transparent placeholder:text-black/40"
                  />
                </InputGroup>
              </div>

              {/* Motivo del reporte */}
              <div>
                <label className="block text-base font-medium mb-2">
                  Motivo del reporte <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full border border-black/10 rounded-full py-3 px-4 bg-[#F0F0F0]"
                  value={reportReason}
                  onChange={(e) => setReportReason(e.target.value)}
                >
                  <option value="">Selecciona el motivo</option>
                  <option value="spam">Spam</option>
                  <option value="contenido_inapropiado">Contenido inapropiado</option>
                  <option value="acoso">Acoso</option>
                  <option value="suplantacion">Suplantación de identidad</option>
                  <option value="derechos_autor">Violación de derechos de autor</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              {/* Información adicional */}
              <div>
                <label className="block text-base font-medium mb-2">Información adicional</label>
                <Textarea
                  placeholder="Proporciona detalles adicionales sobre el reporte"
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                  className="bg-[#F0F0F0] border border-black/10 rounded-xl"
                  rows={4}
                />
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
              <h3 className="text-xl font-bold mb-4">Servicio Reporte Spam</h3>
              <p className="text-black/70 mb-4">
                Servicio especializado para reportar cuentas o contenido que violan las normas de la plataforma. Este
                servicio ayuda a mantener un entorno digital más seguro y libre de spam, acoso o contenido inapropiado.
              </p>

              <ul className="space-y-2 text-black/70">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2" /> Reportes masivos efectivos
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2" /> Servicio discreto y seguro
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2" /> Compatible con todas las plataformas
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
                    <FaCheck className="text-green-500 mt-1 mr-2" /> Acción rápida contra contenido problemático
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2" /> Mayor probabilidad de revisión por parte de la
                    plataforma
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2" /> Protección contra suplantación de identidad
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2" /> Defensa contra competencia desleal
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2" /> Eliminación de contenido que infringe derechos
                  </li>
                </ul>
              </div>

              <p className="text-sm text-black/70">
                <strong>Nota:</strong> Este servicio solo debe utilizarse contra contenido que realmente viole las
                normas de la plataforma. El uso indebido puede resultar en la cancelación del servicio sin reembolso.
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