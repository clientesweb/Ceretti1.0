"use client"

import { useState } from "react"
import PhotoSection from "./PhotoSection"
import AddToCardSection from "./AddToCardSection"
import type { Product } from "@/types/product.types"
import type { QuantityOption } from "@/types/product.types"

interface HeaderProps {
  data: Product
  quantityOptions?: QuantityOption[]
  geoType?: "calidad" | "mundial"
  customMessage?: string
}

const Header = ({ data, quantityOptions, geoType, customMessage }: HeaderProps) => {
  const [selectedQuantity, setSelectedQuantity] = useState<string>(
    quantityOptions && quantityOptions.length > 0 ? quantityOptions[0].value : "1",
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-20">
      <PhotoSection data={data} />
      <AddToCardSection
        data={data}
        quantityOptions={quantityOptions}
        selectedQuantity={selectedQuantity}
        setSelectedQuantity={setSelectedQuantity}
        geoType={geoType}
        customMessage={customMessage}
      />
    </div>
  )
}

export default Header
