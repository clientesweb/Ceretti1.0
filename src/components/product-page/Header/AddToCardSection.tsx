"use client"

import { useState } from "react"
import { FaCheck } from "react-icons/fa"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Rating from "@/components/ui/Rating"
import AddToCartBtn from "./AddToCartBtn"
import type { Product } from "@/types/product.types"
import type { QuantityOption } from "@/types/product.types"
import type { GeoType } from "@/types/product.types"

interface AddToCardSectionProps {
  data: Product
  quantityOptions?: QuantityOption[]
  selectedQuantity: string
  setSelectedQuantity: (value: string) => void
  geoType?: GeoType
  customMessage?: string
}

const AddToCardSection = ({
  data,
  quantityOptions,
  selectedQuantity,
  setSelectedQuantity,
  geoType,
  customMessage,
}: AddToCardSectionProps) => {
  const [selectedGeo, setSelectedGeo] = useState<GeoType>(geoType || "calidad")

  const selectedOption = quantityOptions?.find((option) => option.value === selectedQuantity)
  const price = selectedOption ? selectedOption.price : data.price

  return (
    <div className="flex flex-col">
      <div className="flex items-center space-x-2 mb-2">
        <span className="text-sm font-medium px-2 py-1 rounded-full bg-ceretti-blue/10 text-ceretti-blue">
          {data.platform}
        </span>
        <span className="text-sm font-medium px-2 py-1 rounded-full bg-green-500/10 text-green-600">En stock</span>
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold mb-3">{data.title}</h1>
      <div className="flex items-center mb-4">
        <Rating
          initialValue={data.rating}
          allowFraction
          SVGclassName="inline-block"
          emptyClassName="fill-gray-50"
          size={16}
          readonly
        />
        <span className="text-black text-xs ml-2">
          {data.rating.toFixed(1)}
          <span className="text-black/60">/5</span>
        </span>
      </div>
      <p className="text-black/70 mb-6">{data.description}</p>

      {customMessage && (
        <div className="bg-ceretti-blue/5 p-4 rounded-lg mb-6">
          <p className="text-sm text-black/80">{customMessage}</p>
        </div>
      )}

      {quantityOptions && (
        <div className="mb-6">
          <span className="font-medium mb-2 block">Cantidad</span>
          <Select value={selectedQuantity} onValueChange={setSelectedQuantity}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {quantityOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  <div className="flex items-center justify-between w-full">
                    <span>{option.label}</span>
                    {option.bonus && (
                      <span className="ml-2 text-xs font-medium px-2 py-0.5 rounded-full bg-ceretti-blue/10 text-ceretti-blue">
                        {option.bonus}
                      </span>
                    )}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {geoType && (
        <div className="mb-6">
          <span className="font-medium mb-2 block">Calidad de cuentas</span>
          <div className="flex space-x-3">
            <button
              onClick={() => setSelectedGeo("calidad")}
              className={`flex-1 py-2 px-4 rounded-lg border ${
                selectedGeo === "calidad"
                  ? "border-ceretti-blue bg-ceretti-blue/5 text-ceretti-blue"
                  : "border-black/10 text-black/60"
              }`}
            >
              Calidad
            </button>
            <button
              onClick={() => setSelectedGeo("mundial")}
              className={`flex-1 py-2 px-4 rounded-lg border ${
                selectedGeo === "mundial"
                  ? "border-ceretti-blue bg-ceretti-blue/5 text-ceretti-blue"
                  : "border-black/10 text-black/60"
              }`}
            >
              Mundial
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col space-y-1 mb-6">
        <span className="text-sm text-black/60">Precio</span>
        <div className="flex items-center space-x-2">
          {data.discount.percentage > 0 ? (
            <>
              <span className="font-bold text-2xl text-black line-through text-black/40">${data.price} ARS</span>
              <span className="font-bold text-2xl text-black">
                ${Math.round(data.price - (data.price * data.discount.percentage) / 100)} ARS
              </span>
            </>
          ) : (
            <span className="font-bold text-2xl text-black">${price} ARS</span>
          )}
        </div>
        {data.discount.percentage > 0 && <span className="text-sm text-red-600 font-medium">Precio de oferta</span>}
      </div>

      <div className="flex flex-col space-y-4">
        <AddToCartBtn data={data} selectedQuantity={selectedQuantity} selectedGeo={selectedGeo} price={price} />

        <div className="flex flex-col space-y-3 mt-4">
          <div className="flex items-center space-x-2">
            <FaCheck className="text-green-500 text-sm" />
            <span className="text-sm text-black/70">Entrega inmediata</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheck className="text-green-500 text-sm" />
            <span className="text-sm text-black/70">Soporte 24/7</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheck className="text-green-500 text-sm" />
            <span className="text-sm text-black/70">Garantía de satisfacción</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddToCardSection
