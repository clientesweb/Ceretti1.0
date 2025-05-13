"use client"

import { useState } from "react"
import { IoMdHeartEmpty } from "react-icons/io"
import { FiMinus, FiPlus } from "react-icons/fi"
import { addToCart } from "@/lib/features/carts/cartsSlice"
import { useAppDispatch } from "@/lib/hooks/redux"
import { useToast } from "@/hooks/use-toast"
import type { Product } from "@/types/product.types"
import AddToCartBtn from "./AddToCartBtn"

const AddToCardSection = ({ data }: { data: Product }) => {
  const [quantity, setQuantity] = useState(1)
  const dispatch = useAppDispatch()
  const { toast } = useToast()

  // Determinar si es un producto de servicio digital basado en la plataforma
  const isDigitalService = data.platform !== undefined

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: data.id,
        title: data.title,
        price: data.price,
        discount: data.discount,
        quantity,
        srcUrl: data.srcUrl,
      }),
    )
    toast({
      title: "Producto agregado al carrito",
      description: `${data.title} x ${quantity}`,
    })
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center space-x-4 mb-5">
        <div className="flex items-center space-x-3 border border-black/10 rounded-full p-1 h-[46px]">
          <button
            type="button"
            className="w-[30px] h-[30px] rounded-full bg-[#F0F0F0] flex items-center justify-center"
            onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
          >
            <FiMinus className="text-sm" />
          </button>
          <span className="text-sm font-medium">{quantity}</span>
          <button
            type="button"
            className="w-[30px] h-[30px] rounded-full bg-[#F0F0F0] flex items-center justify-center"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            <FiPlus className="text-sm" />
          </button>
        </div>
        <div className="flex-1">
          <AddToCartBtn onClick={handleAddToCart} />
        </div>
        {!isDigitalService && (
          <button
            type="button"
            className="w-[46px] h-[46px] rounded-full border border-black/10 flex items-center justify-center"
          >
            <IoMdHeartEmpty className="text-xl" />
          </button>
        )}
      </div>

      {isDigitalService && (
        <div className="bg-ceretti-blue/5 p-4 rounded-lg mb-5">
          <h3 className="font-medium mb-2">Información del servicio</h3>
          <ul className="list-disc pl-5 text-sm text-black/70 space-y-1">
            <li>Entrega rápida y segura</li>
            <li>Soporte 24/7</li>
            <li>Garantía de satisfacción</li>
            <li>Resultados visibles</li>
          </ul>
        </div>
      )}

      <div className="flex items-center space-x-2.5">
        <span className="text-sm text-black/60">Categoría:</span>
        <span className="text-sm font-medium">{data.platform || "Producto"}</span>
      </div>
    </div>
  )
}

export default AddToCardSection
