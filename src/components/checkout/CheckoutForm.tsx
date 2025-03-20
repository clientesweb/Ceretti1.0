"use client"

import type React from "react"

import { useState, useRef } from "react"
import { useAppSelector } from "@/lib/hooks/redux"
import type { RootState } from "@/lib/store"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { FaSpinner } from "react-icons/fa"
import emailjs from "@emailjs/browser"
import PaymentDetails from "./PaymentDetails"
import { useRouter } from "next/navigation"
import { useAppDispatch } from "@/lib/hooks/redux"
import { clearCart } from "@/lib/features/carts/cartsSlice"

// Configuración de EmailJS
const EMAILJS_SERVICE_ID = "service_id" // Reemplazar con tu Service ID
const EMAILJS_TEMPLATE_ID = "template_id" // Reemplazar con tu Template ID
const EMAILJS_PUBLIC_KEY = "public_key" // Reemplazar con tu Public Key

export default function CheckoutForm() {
  const { cart, totalPrice, adjustedTotalPrice } = useAppSelector((state: RootState) => state.carts)
  const [paymentMethod, setPaymentMethod] = useState("transferencia")
  const [loading, setLoading] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const { toast } = useToast()
  const router = useRouter()
  const dispatch = useAppDispatch()

  // Estados para los campos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    notas: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const generateCartItemsText = () => {
    if (!cart) return ""

    return cart.items
      .map((item) => {
        return `- ${item.name} x${item.quantity} - $${
          item.discount.percentage > 0
            ? Math.round(item.price - (item.price * item.discount.percentage) / 100) * item.quantity
            : item.price * item.quantity
        } ARS
        Detalles: ${item.attributes.join(", ")}`
      })
      .join("\n")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    if (!cart) {
      toast({
        title: "Error",
        description: "No hay productos en el carrito",
        variant: "destructive",
      })
      setLoading(false)
      return
    }

    // Validar campos del formulario
    if (!formData.nombre.trim() || !formData.email.trim() || !formData.telefono.trim()) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos obligatorios",
        variant: "destructive",
      })
      setLoading(false)
      return
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Por favor ingresa un email válido",
        variant: "destructive",
      })
      setLoading(false)
      return
    }

    try {
      // Si el método de pago es WhatsApp, redirigir al usuario
      if (paymentMethod === "whatsapp") {
        const phoneNumber = "5492262325666"
        const cartItemsText = generateCartItemsText()
        const message = `Hola, quiero realizar la siguiente compra:\n\n${cartItemsText}\n\nTotal: $${Math.round(
          adjustedTotalPrice,
        )} ARS\n\nMis datos:\nNombre: ${formData.nombre}\nEmail: ${formData.email}\nTeléfono: ${
          formData.telefono
        }\nNotas: ${formData.notas}`

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

        // Guardar estado de checkout completado
        sessionStorage.setItem("checkoutCompleted", "true")

        // Limpiar carrito y redirigir a página de confirmación
        dispatch(clearCart())
        window.open(whatsappUrl, "_blank")
        router.push("/checkout/success")
        return
      }

      // Para otros métodos de pago, enviar email
      if (formRef.current) {
        // Preparar datos para EmailJS
        const templateParams = {
          to_name: "CERETTI MGTM",
          from_name: formData.nombre,
          from_email: formData.email,
          from_phone: formData.telefono,
          message: formData.notas,
          payment_method: paymentMethod,
          cart_items: generateCartItemsText(),
          total_price: `$${Math.round(adjustedTotalPrice)} ARS`,
        }

        try {
          // Enviar email
          await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)

          // Guardar estado de checkout completado
          sessionStorage.setItem("checkoutCompleted", "true")

          // Limpiar carrito y redirigir a página de confirmación
          dispatch(clearCart())
          router.push("/checkout/success")
        } catch (error) {
          console.error("Error al enviar el email:", error)
          toast({
            title: "Error",
            description:
              "Hubo un problema al enviar el email. Por favor, intenta nuevamente o elige otro método de pago.",
            variant: "destructive",
          })
        }
      }
    } catch (error) {
      console.error("Error al procesar el pedido:", error)
      toast({
        title: "Error",
        description: "Hubo un problema al procesar tu pedido. Por favor, intenta nuevamente.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white p-6 rounded-xl border border-black/10">
        <h2 className="text-xl font-bold mb-4">Datos Personales</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="nombre">Nombre completo *</Label>
            <Input
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              placeholder="Tu nombre completo"
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="tu@email.com"
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="telefono">Teléfono *</Label>
            <Input
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleInputChange}
              placeholder="+54 9 XXX XXX-XXXX"
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="notas">Notas adicionales (opcional)</Label>
            <Textarea
              id="notas"
              name="notas"
              value={formData.notas}
              onChange={handleInputChange}
              placeholder="Información adicional sobre tu pedido"
              className="mt-1"
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-black/10">
        <h2 className="text-xl font-bold mb-4">Método de Pago</h2>
        <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="transferencia" id="transferencia" />
            <Label htmlFor="transferencia" className="cursor-pointer">
              Transferencia Bancaria
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="cripto" id="cripto" />
            <Label htmlFor="cripto" className="cursor-pointer">
              Criptomonedas (Binance)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="whatsapp" id="whatsapp" />
            <Label htmlFor="whatsapp" className="cursor-pointer">
              Contactar por WhatsApp
            </Label>
          </div>
        </RadioGroup>

        {/* Mostrar detalles según el método de pago seleccionado */}
        <div className="mt-4">
          <PaymentDetails method={paymentMethod} />
        </div>
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full py-6 text-lg font-medium bg-ceretti-blue hover:bg-ceretti-blue/80 rounded-full"
      >
        {loading ? (
          <>
            <FaSpinner className="mr-2 animate-spin" /> Procesando...
          </>
        ) : (
          "Finalizar Compra"
        )}
      </Button>
    </form>
  )
}

