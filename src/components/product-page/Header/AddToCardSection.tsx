"use client"

import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import AddToCartBtn from "./AddToCartBtn"
import { Check, ShieldCheck, Clock, Zap } from "lucide-react"
import type { Product, QuantityOption, GeoType } from "@/types/product.types"

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
  const [selectedGeo, setSelectedGeo] = useState<string>(geoType === "mundial" ? "mundial" : "calidad")

  // Find the selected quantity option to get its price
  const selectedOption = quantityOptions?.find((option) => option.value === selectedQuantity)
  const price = selectedOption?.price || data.price

  return (
    <div>
      <div className="mb-5">
        <h1 className="text-2xl sm:text-3xl font-bold text-black mb-2">{data.title}</h1>
        <div className="flex items-center gap-2">
          <span className="text-xl sm:text-2xl font-bold text-ceretti-blue">${price.toLocaleString("es-AR")}</span>
          {data.discount && data.discount.amount > 0 && (
            <span className="text-base sm:text-lg line-through text-black/60">
              ${(price + data.discount.amount).toLocaleString("es-AR")}
            </span>
          )}
        </div>
      </div>

      <div className="mb-6">
        <p className="text-black/80">
          {data.description ||
            "Mejora tu presencia en redes sociales con nuestro servicio premium de alta calidad. Entrega gradual y natural para máxima seguridad."}
        </p>
      </div>

      {quantityOptions && quantityOptions.length > 0 ? (
        <div className="mb-6">
          <h3 className="text-base font-medium mb-3">Selecciona la cantidad:</h3>
          <RadioGroup
            value={selectedQuantity}
            onValueChange={setSelectedQuantity}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {quantityOptions.map((option) => (
              <div key={option.value} className="relative">
                <RadioGroupItem value={option.value} id={`quantity-${option.value}`} className="peer sr-only" />
                <Label
                  htmlFor={`quantity-${option.value}`}
                  className="flex flex-col p-4 border border-black/10 rounded-lg cursor-pointer hover:border-ceretti-blue peer-checked:border-ceretti-blue peer-checked:bg-ceretti-blue/5 transition-all"
                >
                  <span className="font-medium">{option.label}</span>
                  <span className="text-ceretti-blue font-bold mt-1">${option.price.toLocaleString("es-AR")}</span>
                  {option.bonus && (
                    <span className="absolute -top-2 -right-2 bg-ceretti-blue text-white text-xs px-2 py-1 rounded-full">
                      {option.bonus}
                    </span>
                  )}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      ) : null}

      {geoType && (
        <div className="mb-6">
          <h3 className="text-base font-medium mb-3">Selecciona el tipo:</h3>
          <RadioGroup
            value={selectedGeo}
            onValueChange={setSelectedGeo}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            <div className="relative">
              <RadioGroupItem value="calidad" id="geo-calidad" className="peer sr-only" />
              <Label
                htmlFor="geo-calidad"
                className="flex flex-col p-4 border border-black/10 rounded-lg cursor-pointer hover:border-ceretti-blue peer-checked:border-ceretti-blue peer-checked:bg-ceretti-blue/5 transition-all"
              >
                <span className="font-medium">Calidad</span>
                <span className="text-sm text-black/60 mt-1">Perfiles de alta calidad con interacción</span>
              </Label>
            </div>
            <div className="relative">
              <RadioGroupItem value="mundial" id="geo-mundial" className="peer sr-only" />
              <Label
                htmlFor="geo-mundial"
                className="flex flex-col p-4 border border-black/10 rounded-lg cursor-pointer hover:border-ceretti-blue peer-checked:border-ceretti-blue peer-checked:bg-ceretti-blue/5 transition-all"
              >
                <span className="font-medium">Mundial</span>
                <span className="text-sm text-black/60 mt-1">Perfiles de todo el mundo</span>
              </Label>
            </div>
          </RadioGroup>
        </div>
      )}

      {customMessage && (
        <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-black/80">{customMessage}</p>
        </div>
      )}

      <div className="mb-6">
        <AddToCartBtn
          data={data}
          selectedQuantity={selectedQuantity}
          selectedGeo={geoType ? selectedGeo : undefined}
          price={price}
        />
      </div>

      <div className="space-y-3">
        <div className="flex items-start gap-2">
          <ShieldCheck className="h-5 w-5 text-ceretti-blue mt-0.5" />
          <span className="text-sm">100% Seguro para tu cuenta</span>
        </div>
        <div className="flex items-start gap-2">
          <Clock className="h-5 w-5 text-ceretti-blue mt-0.5" />
          <span className="text-sm">Entrega en 1-3 días hábiles</span>
        </div>
        <div className="flex items-start gap-2">
          <Check className="h-5 w-5 text-ceretti-blue mt-0.5" />
          <span className="text-sm">Garantía de reposición por 30 días</span>
        </div>
        <div className="flex items-start gap-2">
          <Zap className="h-5 w-5 text-ceretti-blue mt-0.5" />
          <span className="text-sm">Soporte personalizado 24/7</span>
        </div>
      </div>
    </div>
  )
}

export default AddToCardSection
