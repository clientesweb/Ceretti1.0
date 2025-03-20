import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const proyectos = [
  {
    id: 1,
    title: "E-commerce de Moda",
    category: "Desarrollo Web",
    image: "/images/portfolio/proyecto1.jpg",
    description: "Tienda online completa con pasarela de pagos, gestión de inventario y panel de administración.",
  },
  {
    id: 2,
    title: "App de Delivery",
    category: "Desarrollo Mobile",
    image: "/images/portfolio/proyecto2.jpg",
    description:
      "Aplicación móvil para servicio de delivery con seguimiento en tiempo real y sistema de pagos integrado.",
  },
  {
    id: 3,
    title: "Dashboard de Analíticas",
    category: "Desarrollo Web",
    image: "/images/portfolio/proyecto3.jpg",
    description: "Panel de control para visualización de datos y métricas de rendimiento en tiempo real.",
  },
]

const PortfolioPreview = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Nuestro Portfolio</h2>
          <p className="text-gray-600 text-center max-w-2xl">
            Descubre algunos de nuestros proyectos más destacados en diseño y desarrollo web
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {proyectos.map((proyecto) => (
            <div
              key={proyecto.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={proyecto.image || "/placeholder.svg"}
                  alt={proyecto.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mb-2">
                  {proyecto.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{proyecto.title}</h3>
                <p className="text-gray-600 mb-4">{proyecto.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/portfolio">
            <Button className="rounded-full px-8 py-4 bg-blue-600 hover:bg-blue-700">
              Ver portfolio completo <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PortfolioPreview

