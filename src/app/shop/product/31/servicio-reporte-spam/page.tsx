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
  const product = products.find((product) => product.id === 31)
  const relatedProducts = products.filter((p) => p.category === product?.category && p.id !== product?.id)
  const dispatch = useDispatch()
  const { toast } = useToast()
  const router = useRouter()
  const [quantity, setQuantity] = useState(1)
  const [targetLink, setTargetLink] = useState("")
  const [message, setMessage] = useState("")

  const handleAddToCart = () => {
    if (!targetLink) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Por favor, ingresa el enlace del perfil o publicación objetivo",
      })
      return
    }

    dispatch(
      addToCart({
        ...product,
        quantity,
        targetLink,
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
          <Label htmlFor="targetLink" className="block mb-2">
            Enlace del perfil o publicación objetivo *
          </Label>
          <Input
            id="targetLink"
            placeholder="https://www.instagram.com/..."
            value={targetLink}
            onChange={(e) => setTargetLink(e.target.value)}
            required
          />
          <p className="text-sm text-gray-500 mt-1">
            Ingresa el enlace completo del perfil o publicación que deseas reportar
          </p>
        </div>

        <div className="mb-6">
          <Label htmlFor="quantity" className="block mb-2">
            Cantidad de reportes
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
            Detalles adicionales (opcional)
          </Label>
          <Textarea
            id="message"
            placeholder="Escribe aquí cualquier detalle adicional o motivo específico del reporte..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
          />
        </div>

        <div className="mb-8">
          <h3 className="font-bold mb-2">Requisitos del servicio:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>El enlace debe ser válido y accesible</li>
            <li>El contenido debe violar las políticas de la plataforma</li>
            <li>Proporcionar información clara sobre el motivo del reporte</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="font-bold mb-2">Beneficios:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Acción rápida contra contenido inapropiado</li>
            <li>Mayor probabilidad de revisión por parte de la plataforma</li>
            <li>Protección de tu marca o imagen personal</li>
            <li>Servicio discreto y profesional</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="font-bold mb-2">Métodos de pago aceptados:</h3>
          <p>Tarjetas de crédito/débito, PayPal, transferencia bancaria, criptomonedas</p>
        </div>

        <div className="mb-8">
          <h3 className="font-bold mb-2">Información importante:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Inicio del servicio: 0-12 horas después de la compra</li>
            <li>No garantizamos la eliminación del contenido, solo el reporte masivo</li>
            <li>Servicio confidencial y seguro</li>
            <li>Soporte técnico disponible 24/7</li>
            <li>Este servicio solo debe usarse contra contenido que viole las normas de la plataforma</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="font-bold mb-2">Plataformas disponibles:</h3>
          <p>Disponible para: TikTok, Instagram, Facebook, YouTube, X y Telegram.</p>
          <p className="mt-2 text-sm text-gray-600">Consultar por valor según plataforma y tipo de reporte.</p>
        </div>

        <Button onClick={handleAddToCart} className="w-full bg-black text-white hover:bg-gray-800">
          Consultar precio
        </Button>
      </div>

      <Separator className="my-8" />
      <Tabs product={product} />
      <Separator className="my-8" />
      <ProductListSec title="Productos relacionados" products={relatedProducts.slice(0, 4)} />
    </div>
  )
}
