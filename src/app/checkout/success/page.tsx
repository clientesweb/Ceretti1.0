"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FaCheckCircle } from "react-icons/fa"
import { integralCF } from "@/styles/fonts"
import { cn } from "@/lib/utils"

export default function CheckoutSuccessPage() {
  const router = useRouter()

  useEffect(() => {
    // Si el usuario llega a esta página directamente sin pasar por el checkout,
    // redirigirlo a la página principal
    const hasCompletedCheckout = sessionStorage.getItem("checkoutCompleted")
    if (!hasCompletedCheckout) {
      router.push("/")
    } else {
      // Limpiar la bandera después de usarla
      sessionStorage.removeItem("checkoutCompleted")
    }
  }, [router])

  return (
    <main className="pb-20 pt-10">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <div className="flex flex-col items-center justify-center text-center py-16">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
            <FaCheckCircle className="text-green-500 text-5xl" />
          </div>

          <h1 className={cn([integralCF.className, "text-3xl md:text-4xl mb-4"])}>¡PEDIDO COMPLETADO!</h1>

          <p className="text-lg mb-8 max-w-2xl">
            Gracias por tu compra. Hemos recibido tu pedido y te hemos enviado un correo electrónico con los detalles.
            Nuestro equipo se pondrá en contacto contigo a la brevedad para coordinar los siguientes pasos.
          </p>

          <div className="bg-white p-6 rounded-xl border border-black/10 mb-8 max-w-2xl w-full">
            <h2 className="font-bold text-xl mb-4">¿Qué sigue?</h2>
            <ol className="text-left space-y-4">
              <li className="flex">
                <span className="bg-ceretti-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                  1
                </span>
                <span>Recibirás un correo electrónico con la confirmación de tu pedido.</span>
              </li>
              <li className="flex">
                <span className="bg-ceretti-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                  2
                </span>
                <span>Nuestro equipo verificará tu pago y procesará tu pedido.</span>
              </li>
              <li className="flex">
                <span className="bg-ceretti-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                  3
                </span>
                <span>Comenzaremos a entregar tu servicio según los detalles proporcionados.</span>
              </li>
              <li className="flex">
                <span className="bg-ceretti-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                  4
                </span>
                <span>Te notificaremos cuando el servicio esté completado.</span>
              </li>
            </ol>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="rounded-full px-8 bg-ceretti-blue hover:bg-ceretti-blue/80">
              <Link href="/">Volver al Inicio</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-8">
              <Link href="/shop">Seguir Comprando</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

