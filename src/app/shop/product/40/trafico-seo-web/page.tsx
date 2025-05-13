import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct"
import Header from "@/components/product-page/Header"
import Tabs from "@/components/product-page/Tabs"
import ProductListSec from "@/components/common/ProductListSec"
import { relatedProductData, seoServicesData } from "@/app/page"
import type { QuantityOption } from "@/types/product.types"

const quantityOptions: QuantityOption[] = [
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
    bonus: "Mejor valor",
  },
  {
    value: "500",
    label: "500 Visitas",
    price: 3500,
    bonus: "Popular",
  },
  {
    value: "1000",
    label: "1.000 Visitas",
    price: 6000,
    bonus: "Más vendido",
  },
  {
    value: "2500",
    label: "2.500 Visitas",
    price: 12000,
    bonus: "Máximo impacto",
  },
]

export default function TraficoSeoWebPage() {
  const product = seoServicesData.find((p) => p.id === 40)

  if (!product) {
    return (
      <div className="max-w-frame mx-auto px-4 xl:px-0 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Producto no encontrado</h2>
        <p className="mb-6">Lo sentimos, el producto que estás buscando no existe o ha sido eliminado.</p>
        <a
          href="/shop"
          className="bg-ceretti-blue text-white px-6 py-3 rounded-full hover:bg-ceretti-blue/80 transition-all"
        >
          Volver a la tienda
        </a>
      </div>
    )
  }

  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <BreadcrumbProduct title={product.title} />
        <Header
          data={product}
          quantityOptions={quantityOptions}
          customMessage="🌐 Tráfico real mundial: Visitas directas. 🏁 Fuentes de tráfico: Plataformas de intercambio privadas y redes publicitarias. 💻 Tráfico de escritorio: 45-55%. 📱 Tráfico móvil: 45-55%. Sesiones de duración media-alta de 20 a 50 segundos por visita."
        />
        <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        <Tabs />
        <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        <ProductListSec title="PRODUCTOS RELACIONADOS" data={relatedProductData} viewAllLink="/shop" />
      </div>
    </main>
  )
}
