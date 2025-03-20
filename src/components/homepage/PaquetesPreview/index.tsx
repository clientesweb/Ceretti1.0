import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const paquetes = [
  {
    id: "base",
    title: "PLAN BASE",
    features: [
      "Reestructuración de cuenta",
      "Calendario de contenidos",
      "8 Posteos",
      "30 Stories",
      "Seguimiento estadístico mensual",
      "Interacción con comunidades",
      "Estructuración de trabajo",
    ],
    recommended: false,
    color: "bg-white",
    borderColor: "border-gray-200",
  },
  {
    id: "clasico",
    title: "PLAN CLÁSICO",
    features: [
      "Reestructuración de cuenta",
      "Calendario de contenidos",
      "12 Posteos",
      "60 Stories",
      "Portadas reels y destacadas",
      "Armado de copys y # requeridos",
      "Seguimiento estadístico mensual",
      "Interacción con comunidades",
      "Estructuración de trabajo",
      "1 Segmentación publicitaria",
    ],
    recommended: true,
    color: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    id: "full",
    title: "PLAN FULL",
    features: [
      "Reestructuración de cuentas",
      "Calendario de contenidos",
      "16 Posteos",
      "80 Stories",
      "Portadas reels y destacadas",
      "Armado de copys y # requeridos",
      "Seguimiento estadístico semanal & mensual",
      "Interacción con comunidades",
      "Crecimiento acelerado",
      "Estructuración de trabajo",
      "Segmentación publicitaria (sin limites)",
    ],
    recommended: false,
    color: "bg-gradient-to-br from-blue-50 to-indigo-50",
    borderColor: "border-blue-300",
  },
]

const PaquetesPreview = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Nuestros Paquetes</h2>
          <p className="text-gray-600 text-center max-w-2xl">
            Selecciona el plan que mejor se adapte a tus necesidades y objetivos para impulsar tu presencia digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {paquetes.map((paquete) => (
            <div
              key={paquete.id}
              className={cn([
                "rounded-xl border p-6 relative",
                paquete.color,
                paquete.borderColor,
                "hover:shadow-lg transition-all duration-300",
              ])}
            >
              {paquete.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                  Recomendado
                </div>
              )}
              <h2
                className={cn([
                  "text-2xl md:text-3xl mb-6 text-center font-bold",
                  paquete.recommended ? "text-blue-600" : "text-gray-900",
                ])}
              >
                {paquete.title}
              </h2>
              <ul className="space-y-3 mb-8">
                {paquete.features.slice(0, 4).map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check
                      className={cn([
                        "mt-1 mr-3 flex-shrink-0",
                        paquete.recommended ? "text-blue-600" : "text-green-500",
                      ])}
                    />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
                {paquete.features.length > 4 && (
                  <li className="text-gray-500 text-sm text-center">Y más características...</li>
                )}
              </ul>
              <Link href={`/paquetes#${paquete.id}`} className="block mt-auto">
                <Button
                  className={cn([
                    "w-full py-4 rounded-full group transition-all",
                    paquete.recommended ? "bg-blue-600 hover:bg-blue-700" : "bg-black hover:bg-black/80",
                  ])}
                >
                  Ver detalles <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/paquetes">
            <Button className="rounded-full px-8 py-4 bg-black hover:bg-black/80">
              Ver todos los paquetes <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PaquetesPreview

