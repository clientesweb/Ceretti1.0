"use client"

import * as motion from "framer-motion/client"
import { cn } from "@/lib/utils"
import { integralCF } from "@/styles/fonts"
import { Button } from "@/components/ui/button"
import { FaArrowRight, FaCode, FaDesktop, FaMobileAlt, FaRocket, FaWhatsapp, FaCheck } from "react-icons/fa"
import Link from "next/link"
import Image from "next/image"

// Datos de los servicios
const serviciosData = [
  {
    id: "diseno",
    title: "Diseño Web",
    description:
      "Creamos diseños atractivos, modernos y funcionales que capturan la esencia de tu marca y conectan con tu audiencia.",
    icon: <FaDesktop className="text-4xl text-ceretti-blue" />,
    features: [
      "Diseño UI/UX personalizado",
      "Interfaces responsivas",
      "Optimización para conversión",
      "Identidad visual coherente",
    ],
  },
  {
    id: "desarrollo",
    title: "Desarrollo Web",
    description:
      "Transformamos diseños en sitios web funcionales con tecnologías modernas que garantizan rendimiento y escalabilidad.",
    icon: <FaCode className="text-4xl text-ceretti-blue" />,
    features: [
      "Desarrollo frontend y backend",
      "Sitios web responsivos",
      "Optimización de rendimiento",
      "Integración de APIs",
    ],
  },
  {
    id: "mobile",
    title: "Desarrollo Mobile",
    description:
      "Creamos aplicaciones móviles nativas y multiplataforma que ofrecen experiencias excepcionales en todos los dispositivos.",
    icon: <FaMobileAlt className="text-4xl text-ceretti-blue" />,
    features: ["Apps iOS y Android", "Desarrollo React Native", "Interfaces intuitivas", "Optimización de rendimiento"],
  },
  {
    id: "seo",
    title: "SEO y Marketing Digital",
    description:
      "Mejoramos la visibilidad de tu sitio web con estrategias de SEO y marketing digital que aumentan el tráfico y las conversiones.",
    icon: <FaRocket className="text-4xl text-ceretti-blue" />,
    features: [
      "Optimización para buscadores",
      "Estrategias de contenido",
      "Análisis de competencia",
      "Seguimiento de resultados",
    ],
  },
]

// Datos de proyectos
const proyectosData = [
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
    title: "Sitio Web Corporativo",
    category: "Diseño Web",
    image: "/images/portfolio/proyecto3.jpg",
    description: "Diseño y desarrollo de sitio web corporativo con múltiples secciones y formularios de contacto.",
  },
  {
    id: 4,
    title: "Plataforma Educativa",
    category: "Desarrollo Web",
    image: "/images/portfolio/proyecto4.jpg",
    description: "Sistema de gestión de cursos online con videoconferencias, evaluaciones y certificaciones.",
  },
]

// Función para crear el mensaje de WhatsApp
const createWhatsAppMessage = (service?: string) => {
  if (service) {
    return `Hola, estoy interesado en el servicio de ${service} de CERETTI MGTM. Me gustaría obtener más información.`
  }
  return "Hola, estoy interesado en los servicios de diseño y desarrollo web de CERETTI MGTM. Me gustaría obtener más información."
}

export default function PortfolioPage() {
  return (
    <main className="pb-20">
      {/* Hero Section */}
      <div className="bg-[#F2F0F1] py-12 md:py-20 overflow-hidden relative">
        {/* Picas decorativas */}
        <div className="absolute top-12 left-8 w-4 h-4 bg-ceretti-blue/20 rounded-full" />
        <div className="absolute top-24 left-24 w-2 h-2 bg-ceretti-blue/20 rounded-full" />
        <div className="absolute bottom-8 right-16 w-3 h-3 bg-ceretti-blue/20 rounded-full" />
        <div className="absolute top-16 right-32 w-2 h-2 bg-ceretti-blue/20 rounded-full" />

        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ x: "-50px", opacity: 0 }}
              whileInView={{ x: "0", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h1 className={cn([integralCF.className, "text-4xl lg:text-[64px] lg:leading-[64px] mb-5 lg:mb-8"])}>
                DISEÑO Y DESARROLLO WEB
              </h1>
              <p className="text-black/60 text-sm lg:text-base mb-6 lg:mb-8">
                Creamos experiencias digitales excepcionales que impulsan tu negocio. Desde sitios web corporativos
                hasta aplicaciones móviles complejas, transformamos tus ideas en soluciones digitales efectivas.
              </p>
              <Link
                href={`https://wa.me/5492262325666?text=${encodeURIComponent(createWhatsAppMessage())}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-ceretti-blue hover:bg-ceretti-blue/80 rounded-full px-8 py-4 group">
                  <FaWhatsapp className="mr-2" /> Solicitar presupuesto{" "}
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ x: "50px", opacity: 0 }}
              whileInView={{ x: "0", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center"
            >
              <Image
                src="/diseno-web.png"
                alt="Diseño y Desarrollo Web"
                width={400}
                height={400}
                className="rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Servicios Section */}
      <div className="max-w-frame mx-auto px-4 xl:px-0 mt-16">
        <motion.h2
          initial={{ y: "50px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={cn([integralCF.className, "text-3xl md:text-4xl mb-12 text-center"])}
        >
          NUESTROS SERVICIOS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviciosData.map((servicio, index) => (
            <motion.div
              key={servicio.id}
              initial={{ y: "50px", opacity: 0 }}
              whileInView={{ y: "0", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white rounded-2xl border border-black/10 p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="mr-4">{servicio.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{servicio.title}</h3>
                  <p className="text-black/70 mb-4">{servicio.description}</p>
                </div>
              </div>
              <ul className="space-y-2 mb-6">
                {servicio.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <FaCheck className="text-ceretti-blue mt-1 mr-2 flex-shrink-0" />
                    <span className="text-black/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`https://wa.me/5492262325666?text=${encodeURIComponent(createWhatsAppMessage(servicio.title))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-auto"
              >
                <Button className="w-full bg-black hover:bg-black/80 rounded-full py-3 group">
                  <FaWhatsapp className="mr-2" /> Consultar{" "}
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Proyectos Section */}
      <div className="max-w-frame mx-auto px-4 xl:px-0 mt-20">
        <motion.h2
          initial={{ y: "50px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={cn([integralCF.className, "text-3xl md:text-4xl mb-12 text-center"])}
        >
          PROYECTOS DESTACADOS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {proyectosData.map((proyecto, index) => (
            <motion.div
              key={proyecto.id}
              initial={{ y: "50px", opacity: 0 }}
              whileInView={{ y: "0", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white rounded-2xl border border-black/10 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <Image
                  src={proyecto.image || "/placeholder.svg?height=300&width=500"}
                  alt={proyecto.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-ceretti-blue/10 text-ceretti-blue text-sm font-medium px-3 py-1 rounded-full mb-2">
                  {proyecto.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{proyecto.title}</h3>
                <p className="text-black/70 mb-4">{proyecto.description}</p>
                <Link href="#" className="text-ceretti-blue hover:underline font-medium flex items-center">
                  Ver detalles <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: "50px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <Link href="#" className="inline-block">
            <Button
              variant="outline"
              className="rounded-full px-8 py-3 border-ceretti-blue text-ceretti-blue hover:bg-ceretti-blue hover:text-white"
            >
              Ver todos los proyectos
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ y: "50px", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="max-w-frame mx-auto px-4 xl:px-0 mt-20"
      >
        <div className="bg-gradient-to-r from-ceretti-blue to-ceretti-lightBlue rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className={cn([integralCF.className, "text-3xl md:text-4xl mb-4"])}>
                ¿LISTO PARA IMPULSAR TU PRESENCIA DIGITAL?
              </h2>
              <p className="mb-6 text-white/80">
                Contáctanos hoy mismo para discutir tu proyecto y cómo podemos ayudarte a alcanzar tus objetivos
                digitales.
              </p>
              <Link
                href={`https://wa.me/5492262325666?text=${encodeURIComponent(createWhatsAppMessage())}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-white text-ceretti-blue hover:bg-white/90 rounded-full px-8 py-4 group">
                  <FaWhatsapp className="mr-2" /> Contactar ahora{" "}
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="hidden md:block">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Contacto"
                width={300}
                height={300}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  )
}

