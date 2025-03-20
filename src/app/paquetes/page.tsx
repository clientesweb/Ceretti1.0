"use client"

import * as motion from "framer-motion/client"
import { cn } from "@/lib/utils"
import { integralCF } from "@/styles/fonts"
import { Button } from "@/components/ui/button"
import { FaArrowRight, FaCheck, FaWhatsapp } from "react-icons/fa"
import Link from "next/link"

// Datos de los paquetes
const paquetesData = [
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
    borderColor: "border-black/10",
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
    color: "bg-ceretti-blue/5",
    borderColor: "border-ceretti-blue/20",
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
    color: "bg-gradient-to-br from-ceretti-blue/10 to-ceretti-lightBlue/10",
    borderColor: "border-ceretti-blue/30",
  },
]

// Función para crear el mensaje de WhatsApp
const createWhatsAppMessage = (planTitle: string) => {
  return `Hola, estoy interesado en el ${planTitle} de CERETTI MGTM. Me gustaría obtener más información.`
}

export default function PaquetesPage() {
  return (
    <main className="pb-20">
      <div className="bg-[#F2F0F1] py-12 md:py-20 overflow-hidden relative">
        {/* Picas decorativas */}
        <div className="absolute top-12 left-8 w-4 h-4 bg-ceretti-blue/20 rounded-full" />
        <div className="absolute top-24 left-24 w-2 h-2 bg-ceretti-blue/20 rounded-full" />
        <div className="absolute bottom-8 right-16 w-3 h-3 bg-ceretti-blue/20 rounded-full" />
        <div className="absolute top-16 right-32 w-2 h-2 bg-ceretti-blue/20 rounded-full" />

        <div className="max-w-frame mx-auto px-4 xl:px-0 text-center">
          <motion.h1
            initial={{ y: "50px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={cn([integralCF.className, "text-4xl lg:text-[64px] lg:leading-[64px] mb-5 lg:mb-8"])}
          >
            NUESTROS PAQUETES
          </motion.h1>
          <motion.p
            initial={{ y: "50px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-black/60 text-sm lg:text-base mb-6 lg:mb-8 max-w-[700px] mx-auto"
          >
            Selecciona el plan que mejor se adapte a tus necesidades y objetivos. Todos nuestros paquetes están
            diseñados para impulsar tu presencia digital y maximizar tu impacto en redes sociales.
          </motion.p>
        </div>
      </div>

      <div className="max-w-frame mx-auto px-4 xl:px-0 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {paquetesData.map((paquete, index) => (
            <motion.div
              key={paquete.id}
              initial={{ y: "50px", opacity: 0 }}
              whileInView={{ y: "0", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={cn([
                "rounded-2xl border p-6 relative",
                paquete.color,
                paquete.borderColor,
                "hover:shadow-lg transition-all duration-300",
              ])}
            >
              {paquete.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-ceretti-blue text-white text-sm font-medium px-4 py-1 rounded-full">
                  Recomendado
                </div>
              )}
              <h2
                className={cn([
                  integralCF.className,
                  "text-2xl md:text-3xl mb-6 text-center",
                  paquete.recommended ? "text-ceretti-blue" : "text-black",
                ])}
              >
                {paquete.title}
              </h2>
              <ul className="space-y-3 mb-8">
                {paquete.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <FaCheck
                      className={cn([
                        "mt-1 mr-3 flex-shrink-0",
                        paquete.recommended ? "text-ceretti-blue" : "text-green-500",
                      ])}
                    />
                    <span className="text-black/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`https://wa.me/5492262325666?text=${encodeURIComponent(createWhatsAppMessage(paquete.title))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-auto"
              >
                <Button
                  className={cn([
                    "w-full py-4 rounded-full group transition-all",
                    paquete.recommended ? "bg-ceretti-blue hover:bg-ceretti-blue/80" : "bg-black hover:bg-black/80",
                  ])}
                >
                  <FaWhatsapp className="mr-2" /> Contactar{" "}
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: "50px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 bg-[#F8F8F8] rounded-2xl p-8 border border-black/10"
        >
          <h3 className={cn([integralCF.className, "text-2xl mb-4"])}>INFORMACIÓN ADICIONAL</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-black/70 mb-4">
                <span className="font-bold">Incremento del valor:</span> 10% cada 3 meses.
              </p>
              <p className="text-black/70">
                <span className="font-bold">Tiempo recomendado:</span> Para garantizar el cumplimiento de objetivos,
                recomendamos un servicio mínimo de 3 meses.
              </p>
            </div>
            <div>
              <p className="text-black/70 mb-4">
                Todos nuestros planes están diseñados para maximizar tu presencia en redes sociales y alcanzar tus
                objetivos de marketing digital.
              </p>
              <p className="text-black/70">
                Para obtener información detallada sobre precios y condiciones específicas, contáctanos a través del
                botón en cada paquete.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: "50px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <h3 className={cn([integralCF.className, "text-2xl mb-6"])}>¿NECESITAS UN PLAN PERSONALIZADO?</h3>
          <p className="text-black/70 mb-8 max-w-2xl mx-auto">
            Si ninguno de nuestros paquetes estándar se ajusta a tus necesidades específicas, podemos crear un plan
            personalizado adaptado a tus objetivos y presupuesto.
          </p>
          <Link
            href={`https://wa.me/5492262325666?text=${encodeURIComponent(
              "Hola, estoy interesado en un plan personalizado de CERETTI MGTM. Me gustaría discutir mis necesidades específicas.",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-ceretti-blue hover:bg-ceretti-blue/80 rounded-full px-8 py-4">
              <FaWhatsapp className="mr-2" /> Solicitar plan personalizado
            </Button>
          </Link>
        </motion.div>
      </div>
    </main>
  )
}

