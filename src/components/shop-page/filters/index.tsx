import CategoriesSection from "@/components/shop-page/filters/CategoriesSection"
import PriceSection from "@/components/shop-page/filters/PriceSection"
import { Button } from "@/components/ui/button"

const Filters = () => {
  return (
    <>
      <hr className="border-t-black/10" />
      <CategoriesSection />
      <hr className="border-t-black/10" />
      <PriceSection />
      <hr className="border-t-black/10" />
      <Button type="button" className="bg-ceretti-blue w-full rounded-full text-sm font-medium py-4 h-12">
        Aplicar Filtros
      </Button>
    </>
  )
}

export default Filters

