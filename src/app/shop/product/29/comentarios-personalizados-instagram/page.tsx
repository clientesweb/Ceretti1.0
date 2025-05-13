import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct"
import Header from "@/components/product-page/Header"
import Tabs from "@/components/product-page/Tabs"
import ProductListSec from "@/components/common/ProductListSec"
import { relatedProductData, instagramNewServicesData } from "@/app/page"
import type { QuantityOption } from "@/types/product.types"

const quantityOptions: QuantityOption[] = [
  {
    value: "10",
    label: "10 Comentarios",
    price: 4500,
    bonus: "",
  },
  {
    value: "50",
    label: "50 Comentarios",
    price: 20000,
    bonus: "Mejor valor",
  },
  {
    value: "100",
    label: "100 Comentarios",
    price: 35000,
    bonus: "Popular",
  },
  {
    value: "500",
    label: "500 Comentarios",
    price: 150000,
    bonus: "Más vendido",
  },
  {
    value: "1000",
    label: "1.000 Comentarios",
    price: 700000,
    bonus: "Máximo impacto",
  },
]

export default function ComentariosPersonalizadosInstagramPage() {
  const product = instagramNewServicesData.find((p) => p.id === 29)

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
        <Header data={product} quantityOptions={quantityOptions} geoType="mundial" />
        <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        <Tabs />
        <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        <ProductListSec title="PRODUCTOS RELACIONADOS" data={relatedProductData} viewAllLink="/shop" />
      </div>
    </main>
  )
}
