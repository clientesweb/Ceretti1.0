"use client"

import * as motion from "framer-motion/client"
import { cn } from "@/lib/utils"
import { integralCF } from "@/styles/fonts"
import { Button } from "@/components/ui/button"
import { FaArrowRight, FaClock, FaSearch } from "react-icons/fa"
import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { useState } from "react"

// Datos de categorías
const categoriasData = [
  { id: "todos", name: "Todos" },
  { id: "redes-sociales", name: "Redes Sociales" },
  { id: "marketing", name: "Marketing Digital" },
  { id: "diseno", name: "Diseño Web" },
  { id: "desarrollo", name: "Desarrollo" },
  { id: "seo", name: "SEO" },
]

// Update the article data with more current dates and refreshed titles

// Change the articulosData array to have updated dates and some refreshed titles
const articulosData = [
  {
    id: 1,
    title: "10 estrategias para aumentar tus seguidores en Instagram en 2025",
    excerpt: "Descubre las mejores tácticas actualizadas para crecer orgánicamente en Instagram y aumentar tu engagement.",
    image: "/images/blog/articulo1.jpg",
    category: "redes-sociales",
    date: "15 Mar 2025",
    readTime: "5 min",
    featured: true,
  },
  {
    id: 2,
    title: "Guía completa de SEO para 2025: Nuevas tendencias y algoritmos",
    excerpt:
      "Todo lo que necesitas saber para optimizar tu sitio web y mejorar tu posicionamiento en buscadores este año.",
    image: "/images/blog/articulo2.jpg",
    category: "seo",
    date: "28 Feb 2025",
    readTime: "8 min",
    featured: true,
  },
  {
    id: 3,
    title: "Estrategias de contenido efectivas con IA para 2025",
    excerpt: "Aprende a desarrollar una estrategia de contenido potenciada por inteligencia artificial que conecte con tu audiencia.",
    image: "/images/blog/articulo3.jpg",
    category: "marketing",
    date: "10 Feb 2025",
    readTime: "6 min",
    featured: false,
  },
  {
    id: 4,
    title: "Tendencias de diseño web para 2025",
    excerpt: "Las últimas innovaciones en diseño web que debes conocer para mantener tu sitio actualizado y atractivo.",
    image: "/images/blog/articulo4.jpg",
    category: "diseno",
    date: "5 Feb 2025",
    readTime: "4 min",
    featured: false,
  },
  {
    id: 5,
    title: "Herramientas esenciales para gestionar redes sociales en 2025",
    excerpt: "Una selección de las mejores herramientas actualizadas para optimizar la gestión de tus redes sociales.",
    image: "/images/blog/articulo5.jpg",
    category: "redes-sociales",
    date: "20 Ene 2025",
    readTime: "7 min",
    featured: false,
  },
  {
    id: 6,
    title: "React en 2025: Novedades y mejores prácticas",
    excerpt: "Guía actualizada para desarrollar aplicaciones web modernas con React y las últimas tecnologías.",
    image: "/images/blog/articulo6.jpg",
    category: "desarrollo",
    date: "12 Ene 2025",
    readTime: "10 min",
    featured: false,
  },
]

export default function BlogPage() {
  const [categoriaActiva, setCategoriaActiva] = useState("todos")
  const [busqueda, setBusqueda] = useState("")

  // Filtrar artículos por categoría y búsqueda
  const articulosFiltrados = articulosData.filter((articulo) => {
    const coincideCategoria = categoriaActiva === "todos" || articulo.category === categoriaActiva
    const coincideBusqueda =
      articulo.title.toLowerCase().includes(busqueda.toLowerCase()) ||
      articulo.excerpt.toLowerCase().includes(busqueda.toLowerCase())
    return coincideCategoria && coincideBusqueda
  })

  // Separar artículos destacados
  const articulosDestacados = articulosFiltrados.filter((articulo) => articulo.featured)
  const articulosRegulares = articulosFiltrados.filter((articulo) => !articulo.featured)

  return (
    <main className="pb-20">
      {/* Hero Section */}
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
            BLOG
          </motion.h1>
          <motion.p
            initial={{ y: "50px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-black/60 text-sm lg:text-base mb-6 lg:mb-8 max-w-[700px] mx-auto"
          >
            Descubre las últimas tendencias, consejos y estrategias para impulsar tu presencia digital y maximizar el
            potencial de tus redes sociales.
          </motion.p>

          {/* Buscador */}
          <motion.div
            initial={{ y: "50px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="max-w-md mx-auto relative"
          >
            <Input
              type="text"
              placeholder="Buscar artículos..."
              className="pl-10 py-6 rounded-full"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black/40" />
          </motion.div>
        </div>
      </div>

      {/* Categorías */}
      <div className="max-w-frame mx-auto px-4 xl:px-0 mt-10">
        <motion.div
          initial={{ y: "30px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {categoriasData.map((categoria) => (
            <Button
              key={categoria.id}
              variant={categoriaActiva === categoria.id ? "default" : "outline"}
              className={cn([
                "rounded-full",
                categoriaActiva === categoria.id
                  ? "bg-ceretti-blue hover:bg-ceretti-blue/80"
                  : "border-black/10 hover:bg-black/5",
              ])}
              onClick={() => setCategoriaActiva(categoria.id)}
            >
              {categoria.name}
            </Button>
          ))}
        </motion.div>
      </div>

      {/* Artículos Destacados */}
      {articulosDestacados.length > 0 && (
        <div className="max-w-frame mx-auto px-4 xl:px-0 mt-16">
          <motion.h2
            initial={{ y: "30px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={cn([integralCF.className, "text-3xl md:text-4xl mb-8 text-center"])}
          >
            ARTÍCULOS DESTACADOS
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articulosDestacados.map((articulo, index) => (
              <motion.div
                key={articulo.id}
                initial={{ y: "50px", opacity: 0 }}
                whileInView={{ y: "0", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white rounded-2xl border border-black/10 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <Image
                    src={articulo.image || "/placeholder.svg?height=300&width=500"}
                    alt={articulo.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="inline-block bg-ceretti-blue/10 text-ceretti-blue text-sm font-medium px-3 py-1 rounded-full">
                      {categoriasData.find((cat) => cat.id === articulo.category)?.name}
                    </span>
                    <div className="flex items-center ml-auto text-black/60 text-sm">
                      <FaClock className="mr-1" /> {articulo.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{articulo.title}</h3>
                  <p className="text-black/70 mb-4">{articulo.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-black/60 text-sm">{articulo.date}</span>
                    <Link
                      href={`/blog/${articulo.id}`}
                      className="text-ceretti-blue hover:underline font-medium flex items-center"
                    >
                      Leer más <FaArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Todos los Artículos */}
      <div className="max-w-frame mx-auto px-4 xl:px-0 mt-16">
        <motion.h2
          initial={{ y: "30px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={cn([integralCF.className, "text-3xl md:text-4xl mb-8 text-center"])}
        >
          {categoriaActiva === "todos"
            ? "TODOS LOS ARTÍCULOS"
            : `ARTÍCULOS DE ${categoriasData.find((cat) => cat.id === categoriaActiva)?.name.toUpperCase()}`}
        </motion.h2>

        {articulosRegulares.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articulosRegulares.map((articulo, index) => (
              <motion.div
                key={articulo.id}
                initial={{ y: "50px", opacity: 0 }}
                whileInView={{ y: "0", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl border border-black/10 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    src={articulo.image || "/placeholder.svg?height=200&width=400"}
                    alt={articulo.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center mb-2">
                    <span className="inline-block bg-ceretti-blue/10 text-ceretti-blue text-xs font-medium px-2 py-0.5 rounded-full">
                      {categoriasData.find((cat) => cat.id === articulo.category)?.name}
                    </span>
                    <div className="flex items-center ml-auto text-black/60 text-xs">
                      <FaClock className="mr-1" /> {articulo.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{articulo.title}</h3>
                  <p className="text-black/70 text-sm mb-3 line-clamp-2">{articulo.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-black/60 text-xs">{articulo.date}</span>
                    <Link
                      href={`/blog/${articulo.id}`}
                      className="text-ceretti-blue hover:underline text-sm font-medium flex items-center"
                    >
                      Leer más <FaArrowRight className="ml-1 text-xs" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-black/60">No se encontraron artículos que coincidan con tu búsqueda.</p>
          </div>
        )}

        {/* Paginación */}
        {articulosRegulares.length > 0 && (
          <motion.div
            initial={{ y: "30px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex justify-center mt-12"
          >
            <div className="flex space-x-2">
              <Button variant="outline" className="rounded-full w-10 h-10 p-0">
                1
              </Button>
              <Button variant="outline" className="rounded-full w-10 h-10 p-0">
                2
              </Button>
              <Button variant="outline" className="rounded-full w-10 h-10 p-0">
                3
              </Button>
              <Button variant="outline" className="rounded-full w-10 h-10 p-0">
                <FaArrowRight className="text-xs" />
              </Button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Newsletter */}
      <motion.div
        initial={{ y: "50px", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="max-w-frame mx-auto px-4 xl:px-0 mt-20"
      >
        <div className="bg-gradient-to-r from-ceretti-blue to-ceretti-lightBlue rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className={cn([integralCF.className, "text-3xl md:text-4xl mb-4"])}>SUSCRÍBETE A NUESTRO NEWSLETTER</h2>
            <p className="mb-6 text-white/80">
              Recibe las últimas novedades, consejos y estrategias para impulsar tu presencia digital directamente en tu
              bandeja de entrada.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Tu email"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60 rounded-full"
              />
              <Button className="bg-white text-ceretti-blue hover:bg-white/90 rounded-full px-6">Suscribirse</Button>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  )
}
