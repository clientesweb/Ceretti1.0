"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux"
import { applyCoupon, availableCoupons } from "@/lib/features/carts/cartsSlice"
import { useToast } from "@/hooks/use-toast"
import type { RootState } from "@/lib/store"
import { CheckCircle2 } from "lucide-react"

export default function CouponForm() {
  const [couponCode, setCouponCode] = useState("")
  const [isApplying, setIsApplying] = useState(false)
  const dispatch = useAppDispatch()
  const { toast } = useToast()
  const { appliedCoupon } = useAppSelector((state: RootState) => state.carts)

  const handleApplyCoupon = () => {
    if (!couponCode.trim()) {
      toast({
        title: "Error",
        description: "Por favor ingresa un código de cupón",
        variant: "destructive",
      })
      return
    }

    setIsApplying(true)

    try {
      const normalizedCode = couponCode.trim().toUpperCase()
      const isValidCoupon = availableCoupons.some((c) => c.code === normalizedCode)

      if (!isValidCoupon) {
        toast({
          title: "Cupón inválido",
          description: "El código de cupón ingresado no es válido",
          variant: "destructive",
        })
        setIsApplying(false)
        return
      }

      // Aplicar el cupón
      dispatch(applyCoupon(normalizedCode))

      // Mostrar mensaje de éxito
      const coupon = availableCoupons.find((c) => c.code === normalizedCode)
      toast({
        title: "Cupón aplicado",
        description: `El cupón ${normalizedCode} ha sido aplicado con un ${coupon?.discountPercentage}% de descuento`,
      })

      setCouponCode("")
    } catch (error) {
      console.error("Error al aplicar el cupón:", error)
      toast({
        title: "Error",
        description: "Hubo un problema al aplicar el cupón. Por favor, intenta nuevamente.",
        variant: "destructive",
      })
    } finally {
      setIsApplying(false)
    }
  }

  return (
    <div className="mt-4 border-t border-black/10 pt-4">
      <Label htmlFor="coupon" className="text-sm font-medium">
        ¿Tienes un cupón de descuento?
      </Label>
      <div className="flex mt-2 gap-2">
        <Input
          id="coupon"
          placeholder="Ingresa tu código"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          className="flex-grow"
          disabled={!!appliedCoupon || isApplying}
        />
        <Button
          onClick={handleApplyCoupon}
          variant="outline"
          disabled={!!appliedCoupon || isApplying}
          className="min-w-[80px]"
        >
          {isApplying ? "..." : "Aplicar"}
        </Button>
      </div>
      {appliedCoupon ? (
        <div className="flex items-center gap-1 text-sm text-green-600 mt-2">
          <CheckCircle2 className="h-4 w-4" />
          <span>
            Cupón {appliedCoupon.code} aplicado ({appliedCoupon.discountPercentage}% de descuento)
          </span>
        </div>
      ) : (
        <div className="text-xs text-muted-foreground mt-1">Ejemplos: POTENCIADO, FAMILIATT, REVENDEDOR5, etc.</div>
      )}
    </div>
  )
}

