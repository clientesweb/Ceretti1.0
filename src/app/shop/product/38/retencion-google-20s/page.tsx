"use client"

import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct"
import Header from "@/components/product-page/Header"
import Tabs from "@/components/product-page/Tabs"
import ProductListSec from "@/components/common/ProductListSec"
import { relatedProductData } from "@/app/page"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const quantityOptions = [
  {
    value: "1000",
    label: "1000 Visualizaciones",
    price: 3000,
    bonus: "",
  },
  {
    value: "2500",
    label: "2500 Visualizaciones",
    price: 6000,
    bonus: "",
  },
  {
    value: "5000",
    label: "5000 Visualizaciones",
    price: 10000,
    bonus: "Popular",
  },
  {
    value: "10000",
    label: "10000 Visualizaciones",
    price: 18000,
    bonus: "Mejor valor",
  },
  {
    value: "25000",
    label: "25000 Visualizaciones",
    price: 40000,
    bonus: "",
  },
]

export default function RetencionGoogle20s() {
  const product = {
    id: 38,
    title: "Retención Google 20s",
    description:
      "Mejora el rendimiento de tus videos con visualizaciones de alta retención (20 segundos). Este servicio optimiza tus métricas en YouTube, mejorando el posicionamiento de tu contenido en el algoritmo de búsqueda.",
    srcUrl: "/images/youtube-3d-logo.png",
    price: 3000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.9,
    platform: "YouTube",
  }

  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <BreadcrumbProduct title={product.title} />
        <Header data={product} quantityOptions={quantityOptions} />

        <div className="mt-8 border border-black/10 rounded-[20px] p-6 md:p-8">
          <h3 className="font-bold text-xl mb-6">Información del servicio</h3>

          <div className="space-y-6">
            <div>
              <Label htmlFor="videoUrl" className="block mb-2 font-medium">
                URL del video de YouTube*
              </Label>
              <Input id="videoUrl" placeholder="https://www.youtube.com/watch?v=..." className="w-full" />
              <p className="text-xs text-black/60 mt-1">Asegúrate de que el video esté público y sea accesible</p>
            </div>

            <div>
              <Label htmlFor="additionalInfo" className="block mb-2 font-medium">
                Información adicional (opcional)
              </Label>
              <Input
                id="additionalInfo"
                placeholder="Cualquier detalle relevante sobre tu solicitud"
                className="w-full"
              />
            </div>

            <div className="pt-4 space-y-6">
              <div>
                <h4 className="font-bold text-lg mb-2">Requisitos del servicio:</h4>
                <ul className="list-disc pl-5 space-y-1 text-black/80">
                  <li>El video debe estar público en YouTube</li>
                  <li>El contenido debe cumplir con las políticas de YouTube</li>
                  <li>No debe tener restricciones de edad o geográficas</li>
                  <li>El video debe tener una duración mínima de 30 segundos</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">Beneficios:</h4>
                <ul className="list-disc pl-5 space-y-1 text-black/80">
                  <li>Mejora en el algoritmo de YouTube</li>
                  <li>Aumento de la tasa de retención (20 segundos)</li>
                  <li>Mayor visibilidad en resultados de búsqueda</li>
                  <li>Incremento en la credibilidad del canal</li>
                  <li>Potencial aumento de suscriptores orgánicos</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">Métodos de pago aceptados:</h4>
                <ul className="list-disc pl-5 space-y-1 text-black/80">
                  <li>Tarjetas de crédito/débito</li>
                  <li>PayPal</li>
                  <li>Transferencia bancaria</li>
                  <li>Criptomonedas (Bitcoin, Ethereum)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">Información importante:</h4>
                <ul className="list-disc pl-5 space-y-1 text-black/80">
                  <li>El servicio comenzará dentro de las 24-48 horas después de la compra</li>
                  <li>La entrega completa puede tomar entre 3-7 días dependiendo de la cantidad</li>
                  <li>Ofrecemos garantía de reposición de 30 días</li>
                  <li>Soporte técnico disponible 24/7</li>
                </ul>
              </div>
            </div>

            <Button className="w-full py-6 text-base">Añadir al carrito</Button>
          </div>
        </div>

        <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        <Tabs />
        <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        <ProductListSec title="PRODUCTOS RELACIONADOS" data={relatedProductData} viewAllLink="/shop" />
      </div>
    </main>
  )
}
