"use client"

import { Button } from "@/components/ui/button"
import { useAppDispatch } from "@/lib/hooks/redux"
import { addToCart } from "@/lib/features/carts/cartsSlice"
import type { Product } from "@/types/product.types"
import { useCustomToast } from "@/components/ui/custom-toast"

interface AddToCartBtnProps {
  product: Product
  selectedColor: string
  selectedSize: string
  quantity: number
}

const AddToCartBtn = ({ product, selectedColor, selectedSize, quantity }: AddToCartBtnProps) => {
  const dispatch = useAppDispatch()
  const { showSuccessToast } = useCustomToast()

  const handleAddToCart = () => {
    const attributes = []
    if (selectedColor) attributes.push(`Color: ${selectedColor}`)
    if (selectedSize) attributes.push(`Tamaño: ${selectedSize}`)

    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        quantity,
        attributes,
        discount: product.discount,
      }),
    )

    showSuccessToast(
      "¡Producto agregado al carrito!",
      `${product.name} ha sido agregado a tu carrito. ¡Impulsa tu presencia digital ahora!`,
    )
  }

  return (
    <Button
      onClick={handleAddToCart}
      className="w-full py-6 text-lg font-medium bg-ceretti-blue hover:bg-ceretti-blue/80 rounded-full"
    >
      Agregar al carrito
    </Button>
  )
}

export default AddToCartBtn

