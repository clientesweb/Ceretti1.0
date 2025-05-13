import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct"
import Header from "@/components/product-page/Header"
import Tabs from "@/components/product-page/Tabs"
import ProductListSec from "@/components/common/ProductListSec"
import { relatedProductData } from "@/app/page"
import type { QuantityOption } from "@/types/product.types"

export default function ReaccionQuizInstagramPage() {
  const productData = {
    id: 24,
    title: "Reacción a Quiz Instagram",
    description: "Aumenta las reacciones a tus encuestas tipo Quiz en historias. Solo opción A/Cuentas Mundiales.",
    srcUrl: "/images/instagram-3d-logo.png",
    gallery: ["/images/instagram-3d-logo.png"],
    price: 250,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.8,
    platform: "instagram",
  }

  const quantityOptions: QuantityOption[] = [
    { value: "100", label: "100 Reacciones", price: 250, bonus: "" },
    { value: "250", label: "250 Reacciones", price: 600, bonus: "" },
    { value: "500", label: "500 Reacciones", price: 1000, bonus: "" },
    { value: "1000", label: "1.000 Reacciones", price: 1800, bonus: "" },
    { value: "2500", label: "2.500 Reacciones", price: 4000, bonus: "" },
    { value: "5000", label: "5.000 Reacciones", price: 7000, bonus: "" },
  ]

  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <BreadcrumbProduct title={productData.title} />
        <Header
          data={productData}
          quantityOptions={quantityOptions}
          geoType="mundial"
          customMessage="Reacciones a encuestas tipo Quiz en historias de Instagram. Solo disponible para la opción A. Servicio con cuentas de calidad mundial."
        />
        <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        <Tabs />
        <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        <ProductListSec title="PRODUCTOS RELACIONADOS" data={relatedProductData} viewAllLink="/shop" />
      </div>
    </main>
  )
}
