"use client"

import BreadcrumbCart from "@/components/cart-page/BreadcrumbCart"
import ProductCard from "@/components/cart-page/ProductCard"
import { Button } from "@/components/ui/button"
import InputGroup from "@/components/ui/input-group"
import { cn } from "@/lib/utils"
import { integralCF } from "@/styles/fonts"
import { FaArrowRight } from "react-icons/fa6"
import { MdOutlineLocalOffer } from "react-icons/md"
import { TbBasketExclamation } from "react-icons/tb"
import React from "react"
import type { RootState } from "@/lib/store"
import { useAppSelector } from "@/lib/hooks/redux"
import Link from "next/link"
import Image from "next/image"

export default function CartPage() {
  const { cart, totalPrice, adjustedTotalPrice } = useAppSelector((state: RootState) => state.carts)

  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        {cart && cart.items.length > 0 ? (
          <>
            <BreadcrumbCart />
            <h2
              className={cn([
                integralCF.className,
                "font-bold text-[32px] md:text-[40px] text-black uppercase mb-5 md:mb-6",
              ])}
            >
              Tu Carrito
            </h2>
            <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 items-start">
              <div className="w-full p-3.5 md:px-6 flex-col space-y-4 md:space-y-6 rounded-[20px] border border-black/10">
                {cart?.items.map((product, idx, arr) => (
                  <React.Fragment key={idx}>
                    <ProductCard data={product} />
                    {arr.length - 1 !== idx && <hr className="border-t-black/10" />}
                  </React.Fragment>
                ))}
              </div>
              <div className="w-full lg:max-w-[505px] p-5 md:px-6 flex-col space-y-4 md:space-y-6 rounded-[20px] border border-black/10">
                <h6 className="text-xl md:text-2xl font-bold text-black">Resumen del Pedido</h6>
                <div className="flex flex-col space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="md:text-xl text-black/60">Subtotal</span>
                    <span className="md:text-xl font-bold">${totalPrice} ARS</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="md:text-xl text-black/60">
                      Descuento (-
                      {Math.round(((totalPrice - adjustedTotalPrice) / totalPrice) * 100)}
                      %)
                    </span>
                    <span className="md:text-xl font-bold text-red-600">
                      -${Math.round(totalPrice - adjustedTotalPrice)} ARS
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="md:text-xl text-black/60">Costo de Envío</span>
                    <span className="md:text-xl font-bold">Gratis</span>
                  </div>
                  <hr className="border-t-black/10" />
                  <div className="flex items-center justify-between">
                    <span className="md:text-xl text-black">Total</span>
                    <span className="text-xl md:text-2xl font-bold">${Math.round(adjustedTotalPrice)} ARS</span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <InputGroup className="bg-[#F0F0F0]">
                    <InputGroup.Text>
                      <MdOutlineLocalOffer className="text-black/40 text-2xl" />
                    </InputGroup.Text>
                    <InputGroup.Input
                      type="text"
                      name="code"
                      placeholder="Agregar código promocional"
                      className="bg-transparent placeholder:text-black/40"
                    />
                  </InputGroup>
                  <Button type="button" className="bg-black rounded-full w-full max-w-[119px] h-[48px]">
                    Aplicar
                  </Button>
                </div>
                <div className="space-y-4">
                  <Link href="/checkout" passHref>
                    <Button
                      type="button"
                      className="text-sm md:text-base font-medium bg-black rounded-full w-full py-4 h-[54px] md:h-[60px] group"
                    >
                      Ir a Pagar <FaArrowRight className="text-xl ml-2 group-hover:translate-x-1 transition-all" />
                    </Button>
                  </Link>

                  <div className="pt-2">
                    <p className="text-sm text-black/60 mb-3 text-center">Métodos de pago aceptados:</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                      <Image
                        src="/images/payment/mercadopago_1_color.svg"
                        alt="MercadoPago"
                        width={80}
                        height={40}
                        className="h-8 w-auto"
                      />
                      <Image
                        src="/images/payment/mastercard_color.svg"
                        alt="Mastercard"
                        width={80}
                        height={40}
                        className="h-8 w-auto"
                      />
                      <Image
                        src="/images/payment/visa_1_color.svg"
                        alt="Visa"
                        width={80}
                        height={40}
                        className="h-8 w-auto"
                      />
                      <Image
                        src="/images/payment/maestro_color.svg"
                        alt="Maestro"
                        width={80}
                        height={40}
                        className="h-8 w-auto"
                      />
                      <Image
                        src="/images/payment/itauunibanco_color.svg"
                        alt="Itaú"
                        width={80}
                        height={40}
                        className="h-8 w-auto"
                      />
                      <Image
                        src="/images/payment/pagofacil_color.svg"
                        alt="PagoFácil"
                        width={80}
                        height={40}
                        className="h-8 w-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center flex-col text-gray-300 mt-32">
            <TbBasketExclamation strokeWidth={1} className="text-6xl" />
            <span className="block mb-4">Tu carrito de compras está vacío.</span>
            <Button className="rounded-full w-24" asChild>
              <Link href="/shop">Comprar</Link>
            </Button>
          </div>
        )}
      </div>
    </main>
  )
}

