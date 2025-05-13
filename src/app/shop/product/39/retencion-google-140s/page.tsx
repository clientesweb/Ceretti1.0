import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct"
import Header from "@/components/product-page/Header"
import Tabs from "@/components/product-page/Tabs"
import ProductListSec from "@/components/common/ProductListSec"
import { relatedProductData, seoServicesData } from "@/app/page"
import type { QuantityOption } from "@/types/product.types"

export const quantityOptions: QuantityOption[] = [
  {
    value: "1000",
    label: "1.000 Visitas",
    price: 7000,
    bonus: "Básico",
  },
  {
    value: "2000",
    label: "2.000 Visitas",
    price: 13000,
    bonus: "Popular",
  },
  {
    value: "5000",
    label: "5.000 Visitas",
    price: 22000,
    bonus: "Máximo impacto",
  },
]

export default function RetencionGoogle140sPage() {
  const product = seoServicesData.find((p) => p.id === 39)

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
        <Header data={product} quantityOptions={quantityOptions} />
        <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        <Tabs />
        <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        <ProductListSec title="PRODUCTOS RELACIONADOS" data={relatedProductData} viewAllLink="/shop" />
      </div>
    </main>
  )
}
