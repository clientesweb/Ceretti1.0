"use client"

import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct"
import Header from "@/components/product-page/Header"
import Tabs from "@/components/product-page/Tabs"
import ProductListSec from "@/components/common/ProductListSec"
import { relatedProductData } from "@/app/page"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

const quantityOptions = [
  {
    value: "1000",
    label: "1000 Visitas",
    price: 2000,
    bonus: "",
  },
  {
    value: "2500",
    label: "2500 Visitas",
    price: 4000,
    bonus: "",
  },
  {
    value: "5000",
    label: "5000 Visitas",
    price: 7000,
    bonus: "Popular",
  },
  {
    value: "10000",
    label: "10000 Visitas",
    price: 12000,
    bonus: "Mejor valor",
  },
  {
    value: "25000",
    label: "25000 Visitas",
    price: 25000,
    bonus: "",
  },
  {
    value: "50000",
    label: "50000 Visitas",
    price: 45000,
    bonus: "",
  },
]

export default function TraficoSeoWeb() {
  const product = {
    id: 40,
    title: "Tráfico SEO Web",
    description:
      "Aumenta el tráfico de tu sitio web con visitas reales que mejoran tu SEO. Este servicio optimiza tus métricas de tráfico, mejora tu posicionamiento en buscadores y aumenta la credibilidad de tu sitio.",
    srcUrl: "/images/SEO-Call-to-Action-scaled.jpg",
    price: 2000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.8,
    platform: "Web",
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
              <Label htmlFor="websiteUrl" className="block mb-2 font-medium">
                URL de tu sitio web*
              </Label>
              <Input id="websiteUrl" placeholder="https://www.tusitio.com" className="w-full" />
              <p className="text-xs text-black/60 mt-1">Asegúrate de que el sitio esté activo y accesible</p>
            </div>

            <div>
              <Label htmlFor="targetPages" className="block mb-2 font-medium">
                Páginas específicas a promocionar
              </Label>
              <Textarea
                id="targetPages"
                placeholder="Introduce las URLs de las páginas específicas que deseas promocionar (una por línea)"
                className="w-full min-h-[100px]"
              />
              <p className="text-xs text-black/60 mt-1">
                Deja en blanco si deseas distribuir el tráfico en todo el sitio
              </p>
            </div>

            <div>
              <Label htmlFor="targetCountries" className="block mb-2 font-medium">
                Países objetivo (opcional)
              </Label>
              <Input id="targetCountries" placeholder="Ej: España, México, Colombia" className="w-full" />
              <p className="text-xs text-black/60 mt-1">Deja en blanco para tráfico global</p>
            </div>

            <div className="pt-4 space-y-6">
              <div>
                <h4 className="font-bold text-lg mb-2">Requisitos del servicio:</h4>
                <ul className="list-disc pl-5 space-y-1 text-black/80">
                  <li>El sitio web debe estar activo y accesible</li>
                  <li>El contenido debe cumplir con las políticas de Google</li>
                  <li>No debe contener material ilegal o restringido</li>
                  <li>El sitio debe cargar correctamente en dispositivos móviles y de escritorio</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">Beneficios:</h4>
                <ul className="list-disc pl-5 space-y-1 text-black/80">
                  <li>Mejora en las métricas de tráfico web</li>
                  <li>Aumento en el posicionamiento SEO</li>
                  <li>Mayor visibilidad en motores de búsqueda</li>
                  <li>Reducción de la tasa de rebote</li>
                  <li>Incremento en la credibilidad del sitio</li>
                  <li>Potencial aumento de conversiones</li>
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
                  <li>La entrega completa puede tomar entre 7-14 días dependiendo de la cantidad</li>
                  <li>El tráfico se distribuye gradualmente para mayor naturalidad</li>
                  <li>Proporcionamos informes de analítica bajo solicitud</li>
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
