"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAppSelector } from "@/lib/hooks/redux"
import type { RootState } from "@/lib/store"
import { integralCF } from "@/styles/fonts"
import { cn } from "@/lib/utils"
import CheckoutForm from "@/components/checkout/CheckoutForm"
import CartSummary from "@/components/checkout/CartSummary"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TbBasketExclamation } from "react-icons/tb"

export default function CheckoutPage() {
  const { cart } = useAppSelector((state: RootState) => state.carts)
  const router = useRouter()
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
        <h1 className={cn([integralCF.className, "text-3xl md:text-4xl mb-8 text-center"])}>FINALIZAR COMPRA</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <CheckoutForm />
          </div>
          <div>
            <CartSummary />
          </div>
        </div>
      </div>
    </main>
  )
}

