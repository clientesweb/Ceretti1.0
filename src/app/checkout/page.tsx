"use client"

import { useAppSelector } from "@/lib/hooks/redux"
import type { RootState } from "@/lib/store"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import BreadcrumbCart from "@/components/cart-page/BreadcrumbCart"
import ProductCard from "@/components/cart-page/ProductCard"
import ProductListSec from "@/components/common/ProductListSec"
import { useAppDispatch } from "@/lib/hooks/redux"
import { clearCart, removeCoupon } from "@/lib/features/carts/cartsSlice"
import { useToast } from "@/hooks/use-toast"
import CouponForm from "@/components/checkout/CouponForm"

export default function CartPage() {
  const { cart, totalPrice, adjustedTotalPrice, appliedCoupon, couponDiscount } = useAppSelector(
    (state: RootState) => state.carts,
  )
  const dispatch = useAppDispatch()
  const { toast } = useToast()

  const handleClearCart = () => {
    dispatch(clearCart())
    toast({
      title: "Carrito vaciado",
      description: "Se han eliminado todos los productos del carrito",
    })
  }

  // Calcular el precio con descuento de productos (sin el cupón)
  const productDiscountedPrice =
    cart?.items.reduce((total, item) => {
      const itemPrice =
        item.discount.percentage > 0
          ? Math.round(item.price - (item.price * item.discount.percentage) / 100)
          : item.discount.amount > 0
            ? Math.round(item.price - item.discount.amount)
            : item.price
      return total + itemPrice * item.quantity
    }, 0) || 0

  // Calcular el descuento de productos (diferencia entre precio total y precio con descuento de productos)
  const productDiscount = totalPrice - productDiscountedPrice

  return (
    <div className="container mx-auto px-4 py-8">
      <BreadcrumbCart />

      <h1 className="text-3xl font-bold mb-8 text-center">Tu Carrito</h1>

      {!cart || cart.items.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-4">Tu carrito está vacío</h2>
          <p className="text-gray-600 mb-8">Agrega productos para comenzar tu compra</p>
          <Link href="/shop">
            <Button className="bg-ceretti-blue hover:bg-ceretti-blue/80">Ver productos</Button>
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl border border-black/10 p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Productos</h2>
                <Button variant="outline" size="sm" onClick={handleClearCart}>
                  Vaciar carrito
                </Button>
              </div>

              <div className="space-y-4">
                {cart.items.map((item, index) => (
                  <ProductCard key={index} item={item} />
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-black/10 p-6 mt-6">
              <CouponForm />
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="bg-white rounded-xl border border-black/10 p-6 sticky top-4">
              <h2 className="text-xl font-bold mb-4">Resumen</h2>

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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
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

              <div className="flex justify-between mb-6">
                <span className="font-bold">Total</span>
                <span className="font-bold text-xl">${Math.round(adjustedTotalPrice)} ARS</span>
              </div>

              <Link href="/checkout">
                <Button className="w-full py-6 text-lg font-medium bg-ceretti-blue hover:bg-ceretti-blue/80 rounded-full">
                  Proceder al pago
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="mt-16">
        <ProductListSec title="También te puede interesar" />
      </div>
    </div>
  )
}

