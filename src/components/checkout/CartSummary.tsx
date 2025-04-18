"use client"

import { useAppSelector } from "@/lib/hooks/redux"
import type { RootState } from "@/lib/store"
import Image from "next/image"
import Link from "next/link"
import { FaTrash } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { useAppDispatch } from "@/lib/hooks/redux"
import { remove, removeCoupon } from "@/lib/features/carts/cartsSlice"
import { X } from "lucide-react"

export default function CartSummary() {
  const { cart, totalPrice, adjustedTotalPrice, appliedCoupon, couponDiscount } = useAppSelector(
    (state: RootState) => state.carts,
  )
  const dispatch = useAppDispatch()

  if (!cart) {
    return null
  }

  // Calcular el precio con descuento de productos (sin el cupón)
  const productDiscountedPrice = cart.items.reduce((total, item) => {
    const itemPrice =
      item.discount.percentage > 0
        ? Math.round(item.price - (item.price * item.discount.percentage) / 100)
        : item.discount.amount > 0
          ? Math.round(item.price - item.discount.amount)
          : item.price
    return total + itemPrice * item.quantity
  }, 0)

  // Calcular el descuento de productos (diferencia entre precio total y precio con descuento de productos)
  const productDiscount = totalPrice - productDiscountedPrice

  return (
    <div className="bg-white p-6 rounded-xl border border-black/10">
      <h2 className="text-xl font-bold mb-4">Resumen del Pedido</h2>

      <div className="space-y-4 mb-6">
        {cart.items.map((item, index) => (
          <div key={index} className="flex border-b border-black/10 pb-4">
            <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden mr-3 flex-shrink-0">
              <Image
                src={item.srcUrl || "/placeholder.svg"}
                width={64}
                height={64}
                alt={item.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between">
                <h3 className="font-medium text-sm">{item.name}</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 text-red-500"
                  onClick={() =>
                    dispatch(
                      remove({
                        id: item.id,
                        attributes: item.attributes,
                        quantity: item.quantity,
                      }),
                    )
                  }
                >
                  <FaTrash size={14} />
                </Button>
              </div>
              <div className="text-xs text-black/60 mt-1">
                {item.attributes.map((attr, i) => (
                  <span key={i} className="block">
                    {attr}
                  </span>
                ))}
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-sm">
                  {item.quantity} x $
                  {item.discount.percentage > 0
                    ? Math.round(item.price - (item.price * item.discount.percentage) / 100)
                    : item.price}
                </span>
                <span className="font-medium">
                  $
                  {item.discount.percentage > 0
                    ? Math.round(item.price - (item.price * item.discount.percentage) / 100) * item.quantity
                    : item.price * item.quantity}{" "}
                  ARS
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-2 border-b border-black/10 pb-4 mb-4">
        <div className="flex justify-between">
          <span className="text-black/60">Subtotal</span>
          <span className="font-medium">${totalPrice} ARS</span>
        </div>
        {productDiscount > 0 && (
          <div className="flex justify-between">
            <span className="text-black/60">
              Descuento productos (-{Math.round((productDiscount / totalPrice) * 100)}%)
            </span>
            <span className="font-medium text-red-600">-${productDiscount} ARS</span>
          </div>
        )}
        {appliedCoupon && (
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-black/60">
                Cupón {appliedCoupon.code} (-{appliedCoupon.discountPercentage}%)
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="h-5 w-5 ml-1 text-red-500"
                onClick={() => dispatch(removeCoupon())}
              >
                <X size={14} />
              </Button>
            </div>
            <span className="font-medium text-red-600">-${couponDiscount} ARS</span>
          </div>
        )}
        <div className="flex justify-between">
          <span className="text-black/60">Costo de Envío</span>
          <span className="font-medium">Gratis</span>
        </div>
      </div>

      <div className="flex justify-between">
        <span className="font-bold">Total</span>
        <span className="font-bold text-xl">${Math.round(adjustedTotalPrice)} ARS</span>
      </div>

      <div className="mt-6 text-center">
        <Link href="/cart" className="text-ceretti-blue hover:underline text-sm">
          Volver al carrito
        </Link>
      </div>
    </div>
  )
}

