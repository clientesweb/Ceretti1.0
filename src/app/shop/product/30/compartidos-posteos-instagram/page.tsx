"use client"

import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct"
import Header from "@/components/product-page/Header"
import Tabs from "@/components/product-page/Tabs"
import ProductListSec from "@/components/common/ProductListSec"
import { useAppSelector } from "@/lib/hooks/redux"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useDispatch } from "react-redux"
import { addToCart } from "@/lib/features/carts/cartsSlice"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

export default function Page() {
  const products = useAppSelector((state) => state.products.products)
  const product = products.find((product) => product.id === 30)
  const relatedProducts = products.filter((p) => p.category === product?.category && p.id !== product?.id)
  const dispatch = useDispatch()
  const { toast } = useToast()
  const router = useRouter()
  const [quantity, setQuantity] = useState(1)
  const [link, setLink] = useState("")
  const [message, setMessage] = useState("")

  const quantityOptions = [
    {
      value: "100",
      label: "100 Compartidos",
      price: 350,
      bonus: "",
    },
    {
      value: "250",
      label: "250 Compartidos",
      price: 800,
      bonus: "",
    },
    {
      value: "500",
      label: "500 Compartidos",
      price: 1500,
      bonus: "Popular",
    },
    {
      value: "1000",
      label: "1000 Compartidos",
      price: 2500,
      bonus: "Mejor valor",
    },
    {
      value: "2500",
      label: "2500 Compartidos",
      price: 4500,
      bonus: "",
    },
    {
      value: "5000",
      label: "5000 Compartidos",
      price: 8000,
      bonus: "",
    },
  ]

  const handleAddToCart = () => {
    if (!link) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Por favor, ingresa el enlace de tu publicación",
      })
      return
    }

    dispatch(
      addToCart({
        ...product,
        quantity,
        link,
        message,
      }),
    )

    toast({
      title: "Producto añadido al carrito",
      description: `${product?.name} x ${quantity}`,
    })

    router.push("/cart")
  }

  if (!product) {
    return <div>Producto no encontrado</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <BreadcrumbProduct productName={product.name} />
      <Header product={product} />

      <div className="border border-gray-200 rounded-lg p-6 mt-8">
        <h2 className="text-2xl font-bold mb-4">Detalles del Servicio</h2>

        <div className="mb-6">
          <Label htmlFor="link" className="block mb-2">
            Enlace de tu publicación *
          </Label>
          <Input
            id="link"
            placeholder="https://www.instagram.com/p/..."
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
          <p className="text-sm text-gray-500 mt-1">Ingresa el enlace completo de tu publicación de Instagram</p>
        </div>

        <div className="mb-6">
          <Label htmlFor="quantity" className="block mb-2">
            Cantidad de compartidos
          </Label>
          <div className="flex items-center">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
            >
              -
            </Button>
            <Input
              id="quantity"
              type="number"
              min="1"
              className="w-20 mx-2 text-center"
              value={quantity}
              onChange={(e) => setQuantity(Number.parseInt(e.target.value) || 1)}
            />
            <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
              +
            </Button>
          </div>
        </div>

        <div className="mb-6">
          <Label htmlFor="message" className="block mb-2">
            Mensaje personalizado (opcional)
          </Label>
          <Textarea
            id="message"
            placeholder="Escribe aquí cualquier instrucción especial..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
          />
        </div>

        <div className="mb-8">
          <h3 className="font-bold mb-2">Requisitos del servicio:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Tu cuenta debe ser pública durante el proceso</li>
            <li>No cambies el nombre de usuario durante el servicio</li>
            <li>No elimines la publicación durante el proceso</li>
            <li>La publicación debe cumplir con las políticas de Instagram</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="font-bold mb-2">Beneficios:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Aumenta el alcance de tu contenido</li>
            <li>Mejora la visibilidad en el algoritmo</li>
            <li>Genera mayor interacción orgánica</li>
            <li>Potencia la viralización de tu contenido</li>
            <li>Aumenta la credibilidad de tu perfil</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="font-bold mb-2">Métodos de pago aceptados:</h3>
          <p>Tarjetas de crédito/débito, PayPal, transferencia bancaria, criptomonedas</p>
        </div>

        <div className="mb-8">
          <h3 className="font-bold mb-2">Información importante:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Inicio del servicio: 0-24 horas después de la compra</li>
            <li>Velocidad de entrega: Gradual y natural</li>
            <li>Garantía de reposición: 30 días</li>
            <li>Soporte técnico disponible 24/7</li>
            <li>Los compartidos se realizarán desde cuentas reales</li>
          </ul>
        </div>

        <Button onClick={handleAddToCart} className="w-full bg-black text-white hover:bg-gray-800">
          Añadir al carrito - ${product.price}
        </Button>
      </div>

      <Separator className="my-8" />
      <Tabs product={product} />
      <Separator className="my-8" />
      <ProductListSec title="Productos relacionados" products={relatedProducts.slice(0, 4)} />
    </div>
  )
}
