import BreadcrumbShop from "@/components/shop-page/BreadcrumbShop"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import MobileFilters from "@/components/shop-page/filters/MobileFilters"
import Filters from "@/components/shop-page/filters"
import { FiSliders } from "react-icons/fi"
import { allProductsData } from "../page"
import ProductCard from "@/components/common/ProductCard"
import TrustFeatures from "@/components/homepage/TrustFeatures"
import Faqs from "@/components/homepage/Faqs"
import ShopHeader from "@/components/shop-page/ShopHeader"

export default function ShopPage() {
  return (
    <>
      <ShopHeader />
      <main className="pb-20">
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
          <BreadcrumbShop />
          <div className="flex md:space-x-5 items-start">
            <div className="hidden md:block min-w-[295px] max-w-[295px] border border-black/10 rounded-[20px] px-5 md:px-6 py-5 space-y-5 md:space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-bold text-black text-xl">Filtros</span>
                <FiSliders className="text-2xl text-black/40" />
              </div>
              <Filters />
            </div>
            <div className="flex flex-col w-full space-y-5">
              <div className="flex flex-col lg:flex-row lg:justify-between">
                <div className="flex items-center justify-between">
                  <h1 className="font-bold text-2xl md:text-[32px]">Servicios</h1>
                  <MobileFilters />
                </div>
                <div className="flex flex-col sm:items-center sm:flex-row">
                  <span className="text-sm md:text-base text-black/60 mr-3">
                    Mostrando todos los {allProductsData.length} Servicios
                  </span>
                  <div className="flex items-center">
                    Ordenar por:{" "}
                    <Select defaultValue="most-popular">
                      <SelectTrigger className="font-medium text-sm px-1.5 sm:text-base w-fit text-black bg-transparent shadow-none border-none">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="most-popular">Más Populares</SelectItem>
                        <SelectItem value="low-price">Menor Precio</SelectItem>
                        <SelectItem value="high-price">Mayor Precio</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
                {allProductsData.map((product) => (
                  <ProductCard key={product.id} data={product} />
                ))}
              </div>
              <hr className="border-t-black/10 mt-8" />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <TrustFeatures />
        </div>

        <Faqs />
      </main>
    </>
  )
}

