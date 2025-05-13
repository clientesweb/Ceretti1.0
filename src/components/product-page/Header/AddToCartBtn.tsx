"use client"

import { addToCart } from "@/lib/features/carts/cartsSlice"
import { useAppDispatch } from "@/lib/hooks/redux"
import type { Product } from "@/types/product.types"

interface AddToCartBtnProps {
  data: Product
  selectedQuantity?: string
  selectedGeo?: string
  price?: number
}

const AddToCartBtn = ({ data, selectedQuantity, selectedGeo, price }: AddToCartBtnProps) => {
  const dispatch = useAppDispatch()

  return (
    <button
      type="button"
      className="bg-black w-full rounded-full h-11 md:h-[52px] text-sm sm:text-base text-white hover:bg-black/80 transition-all"
      onClick={() =>
        dispatch(
          addToCart({
            id: data.id,
            name: data.title,
            srcUrl: data.srcUrl,
            price: price || data.price,
            attributes: [selectedQuantity, selectedGeo].filter((attr): attr is string => typeof attr === "string"),
            discount: data.discount,
            quantity: 1, // Default quantity to 1
          }),
        )
      }
    >
      Agregar al Carrito
    </button>
  )
}

export default AddToCartBtn
