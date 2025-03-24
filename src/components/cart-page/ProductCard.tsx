"use client"

import Image from "next/image"
import { Trash2 } from "lucide-react"
import { useAppDispatch } from "@/lib/hooks/redux"
import { removeFromCart, updateQuantity } from "@/lib/features/carts/cartsSlice"
import CartCounter from "@/components/ui/CartCounter"
import { useCustomToast } from "@/components/ui/custom-toast"

interface ProductCardProps {
  id: number
  name: string
  price: number
  image: string
  quantity: number
  attributes?: string[]
  discount: {
    percentage: number
    endDate: string
  }
}

const ProductCard = ({ id, name, price, image, quantity, attributes, discount }: ProductCardProps) => {
  const dispatch = useAppDispatch()
  const { showSuccessToast, showErrorToast } = useCustomToast()

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id))
    showSuccessToast("Producto eliminado", `${name} ha sido eliminado de tu carrito`)
  }

  const handleUpdateQuantity = (newQuantity: number) => {
    if (newQuantity <= 0) {
      dispatch(removeFromCart(id))
      showSuccessToast("Producto eliminado", `${name} ha sido eliminado de tu carrito`)
      return
    }

    dispatch(updateQuantity({ id, quantity: newQuantity }))
    showSuccessToast("Cantidad actualizada", `La cantidad de ${name} ha sido actualizada a ${newQuantity}`)
  }

  const discountedPrice = discount.percentage > 0 ? price - (price * discount.percentage) / 100 : price
  const totalPrice = discountedPrice * quantity

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 border border-gray-200 rounded-lg">
      <div className="relative w-full sm:w-24 h-24 bg-gray-100 rounded-md overflow-hidden">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between">
          <h3 className="font-medium text-lg">{name}</h3>
          <button onClick={handleRemoveFromCart} className="text-red-500 hover:text-red-700">
            <Trash2 size={18} />
          </button>
        </div>
        {attributes && attributes.length > 0 && <p className="text-sm text-gray-500 mt-1">{attributes.join(", ")}</p>}
        <div className="mt-auto flex flex-col sm:flex-row justify-between items-start sm:items-center pt-2">
          <div className="flex items-center gap-2 mb-2 sm:mb-0">
            <CartCounter value={quantity} onValueChange={handleUpdateQuantity} />
          </div>
          <div className="text-right">
            {discount.percentage > 0 ? (
              <>
                <p className="text-sm line-through text-gray-500">${price.toLocaleString()}</p>
                <p className="font-semibold">${discountedPrice.toLocaleString()}</p>
              </>
            ) : (
              <p className="font-semibold">${price.toLocaleString()}</p>
            )}
            <p className="text-sm text-gray-700">Total: ${totalPrice.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

