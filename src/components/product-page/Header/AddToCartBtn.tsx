"use client"

import { addToCart } from "@/lib/features/carts/cartsSlice"
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux"
import type { RootState } from "@/lib/store"
import type { Product } from "@/types/product.types"

interface AddToCartBtnProps {
  data: Product
  selectedQuantity?: string
  selectedGeo?: string
  price?: number
}

const AddToCartBtn = ({ data, selectedQuantity, selectedGeo }: AddToCartBtnProps) => {
  const dispatch = useAppDispatch()
  const { sizeSelection, colorSelection } = useAppSelector((state: RootState) => state.products)

  return (
    <button
      type="button"
      className="bg-black w-full ml-3 sm:ml-5 rounded-full h-11 md:h-[52px] text-sm sm:text-base text-white hover:bg-black/80 transition-all"
      onClick={() =>
        dispatch(
          addToCart({
            id: data.id,
            name: data.title,
            srcUrl: data.srcUrl,
            price: data.price,
            attributes: [sizeSelection, colorSelection?.name, selectedQuantity, selectedGeo].filter(Boolean),
            discount: data.discount,
            quantity: 1, // Default quantity to 1 if not provided
          }),
        )
      }
    >
      Add to Cart
    </button>
  )
}

export default AddToCartBtn
