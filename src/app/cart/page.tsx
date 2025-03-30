"use client"

import { useEffect, useState } from "react"
import { useAppSelector } from "@/lib/hooks/redux"
import type { RootState } from "@/lib/store"
import { integralCF } from "@/styles/fonts"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TbBasketExclamation } from "react-icons/tb"
import CartSummary from "@/components/checkout/CartSummary"
import CouponForm from "@/components/checkout/CouponForm"

export default function CartPage() {
  const { cart } = useAppSelector((state: RootState) => state.carts)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  if (!cart || cart.items.length === 0) {
    return (
      <main className="pb-20 pt-10">
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <div className="flex items-center flex-col text-gray-300 mt-32">
            <TbBasketExclamation strokeWidth={1} className="text-6xl" />
            <span className="block mb-4">Tu carrito de compras está vacío.</span>
            <Button className="rounded-full w-24" asChild>
              <Link href="/shop">Comprar</Link>
            </Button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="pb-20 pt-10">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <h1 className={cn([integralCF.className, "text-3xl md:text-4xl mb-8 text-center"])}>CARRITO DE COMPRAS</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="bg-white p-6 rounded-xl border border-black/10 mb-6">
              <h2 className="text-xl font-bold mb-4">Cupón de descuento</h2>
              <CouponForm />
            </div>
          </div>
          <div>
            <CartSummary />
            <div className="mt-6 flex justify-end">
              <Button
                className="py-6 px-8 text-lg font-medium bg-ceretti-blue hover:bg-ceretti-blue/80 rounded-full"
                asChild
              >
                <Link href="/checkout">Proceder al checkout</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

