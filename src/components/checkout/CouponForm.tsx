"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux"
import { applyCoupon, availableCoupons } from "@/lib/features/carts/cartsSlice"
import { useToast } from "@/hooks/use-toast"
import type { RootState } from "@/lib/store"

export default function CouponForm() {
  const [couponCode, setCouponCode] = useState("")
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

    const normalizedCode = couponCode.trim().toUpperCase()
    const isValidCoupon = availableCoupons.some((c) => c.code === normalizedCode)

    if (!isValidCoupon) {
      toast({
        title: "Cupón inválido",
        description: "El código de cupón ingresado no es válido",
        variant: "destructive",
      })
      return
    }

    dispatch(applyCoupon(normalizedCode))
    toast({
      title: "Cupón aplicado",
      description: `El cupón ${normalizedCode} ha sido aplicado correctamente`,
    })
    setCouponCode("")
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
          disabled={!!appliedCoupon}
        />
        <Button onClick={handleApplyCoupon} variant="outline" disabled={!!appliedCoupon}>
          Aplicar
        </Button>
      </div>
      {appliedCoupon && (
        <p className="text-sm text-green-600 mt-2">
          Cupón {appliedCoupon.code} aplicado ({appliedCoupon.discountPercentage}% de descuento)
        </p>
      )}
    </div>
  )
}

