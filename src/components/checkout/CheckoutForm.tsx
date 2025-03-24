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
const EMAILJS_SERVICE_ID = "service_frt57yd"
const EMAILJS_TEMPLATE_ID_ADMIN = "template_4k3l65s" // Plantilla para el administrador
const EMAILJS_TEMPLATE_ID_CUSTOMER = "template_qw09d2a" // REEMPLAZA ESTO con el ID de tu nueva plantilla para clientes
const EMAILJS_PUBLIC_KEY = "iDDoKDBMIvsNQY7mk"
const ADMIN_EMAIL = "cerettimgtm@gmail.com"

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

  // Función para formatear los productos del carrito según la estructura de la plantilla
  const formatCartItems = () => {
    if (!cart || !cart.items || cart.items.length === 0) {
      return [
        {
          name: "No hay productos en el carrito",
          units: 0,
          price: 0,
        },
      ]
    }

    return cart.items.map((item) => {
      const itemPrice =
        item.discount.percentage > 0
          ? Math.round(item.price - (item.price * item.discount.percentage) / 100)
          : item.price

      return {
        name: `${item.name} ${item.attributes ? "(" + item.attributes.join(", ") + ")" : ""}`,
        units: item.quantity,
        price: (itemPrice * item.quantity).toFixed(2),
      }
    })
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
        const cartItemsText = cart.items
          .map((item) => {
            const itemPrice =
              item.discount.percentage > 0
                ? Math.round(item.price - (item.price * item.discount.percentage) / 100) * item.quantity
                : item.price * item.quantity
            return `Producto: ${item.name}\nCantidad: ${item.quantity}\nPrecio: $${itemPrice} ARS\nDetalles: ${item.attributes ? item.attributes.join(", ") : "Sin detalles"}`
          })
          .join("\n\n")

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
        try {
          // Crear variables para las condiciones if_eq
          const isTransferencia = paymentMethod === "transferencia" ? "true" : "false"
          const isCripto = paymentMethod === "cripto" ? "true" : "false"
          const isWhatsapp = paymentMethod === "whatsapp" ? "true" : "false"

          // Traducir el método de pago a un texto más descriptivo
          let metodoPagoTexto = "Transferencia Bancaria"
          if (paymentMethod === "cripto") metodoPagoTexto = "Criptomonedas (Binance)"
          if (paymentMethod === "whatsapp") metodoPagoTexto = "Contacto por WhatsApp"

          // Generar ID de pedido único
          const orderId = Date.now().toString().slice(-6)

          // Formatear productos del carrito
          const formattedCartItems = formatCartItems()

          // Preparar datos comunes para ambos emails
          const commonParams = {
            order_id: orderId,
            email: formData.email,
            customer_name: formData.nombre,
            customer_phone: formData.telefono,
            customer_notes: formData.notas || "Sin notas adicionales",
            payment_method: metodoPagoTexto,
            is_transferencia: isTransferencia,
            is_cripto: isCripto,
            is_whatsapp: isWhatsapp,
            orders: formattedCartItems,
            cost: {
              shipping: "0.00",
              tax: "0.00",
              total: Math.round(adjustedTotalPrice).toFixed(2),
            },
          }

          // 1. Enviar email al administrador
          const adminTemplateParams = {
            ...commonParams,
            to_email: ADMIN_EMAIL,
            to_name: "CERETTI MGMT",
          }

          console.log("Enviando email al administrador:", JSON.stringify(adminTemplateParams, null, 2))

          await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID_ADMIN, adminTemplateParams, EMAILJS_PUBLIC_KEY)

          // 2. Enviar email al cliente
          const customerTemplateParams = {
            ...commonParams,
            to_email: formData.email,
            to_name: formData.nombre,
          }

          console.log("Enviando email al cliente:", JSON.stringify(customerTemplateParams, null, 2))

          await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID_CUSTOMER,
            customerTemplateParams,
            EMAILJS_PUBLIC_KEY,
          )

          console.log("Emails enviados con éxito")

          // Guardar estado de checkout completado
          sessionStorage.setItem("checkoutCompleted", "true")

          // Limpiar carrito y redirigir a página de confirmación
          dispatch(clearCart())
          router.push("/checkout/success")
        } catch (error: any) {
          console.error("Error detallado al enviar el email:", error)

          let errorMessage = "Hubo un problema al enviar el email. Por favor, intenta nuevamente."

          if (error.text) {
            errorMessage += ` Error: ${error.text}`
          }

          if (error.status) {
            errorMessage += ` (Status: ${error.status})`
          }

          toast({
            title: "Error al enviar el email",
            description: errorMessage,
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
