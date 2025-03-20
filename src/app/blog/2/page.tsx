"use client"

import * as motion from "framer-motion/client"
import { cn } from "@/lib/utils"
import { integralCF } from "@/styles/fonts"
import { Button } from "@/components/ui/button"
import { FaArrowLeft, FaClock, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaArrowRight } from "react-icons/fa"
import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"

export default function ArticuloSEO() {
  const article = {
    id: 2,
    title: "Guía completa de SEO para principiantes",
    excerpt:
      "Todo lo que necesitas saber para empezar a optimizar tu sitio web y mejorar tu posicionamiento en buscadores.",
    image: "/images/blog/articulo2.jpg",
    category: "seo",
    date: "28 Feb 2023",
    readTime: "8 min",
    featured: true,
    author: {
      name: "Carlos Ceretti",
      role: "Especialista en SEO y Marketing Digital",
      image: "/images/blog/author.jpg",
      bio: "Experto en estrategias de posicionamiento web con más de 8 años de experiencia optimizando sitios para los principales motores de búsqueda.",
    },
    relatedPosts: [4, 3, 6],
  }

  const relatedArticles = [
    {
      id: 4,
      title: "Tendencias de diseño web para 2023",
      excerpt: "Las últimas tendencias en diseño web que debes conocer para mantener tu sitio actualizado y atractivo.",
      image: "/images/blog/articulo4.jpg",
      category: "diseno",
      date: "5 Feb 2023",
      readTime: "4 min",
    },
    {
      id: 3,
      title: "Cómo crear una estrategia de contenido efectiva",
      excerpt: "Aprende a desarrollar una estrategia de contenido que conecte con tu audiencia y genere resultados.",
      image: "/images/blog/articulo3.jpg",
      category: "marketing",
      date: "10 Feb 2023",
      readTime: "6 min",
    },
    {
      id: 6,
      title: "Introducción a React para desarrolladores web",
      excerpt: "Guía básica para empezar a desarrollar aplicaciones web con React desde cero.",
      image: "/images/blog/articulo6.jpg",
      category: "desarrollo",
      date: "12 Ene 2023",
      readTime: "10 min",
    },
  ]

  const categoriasData = [
    { id: "todos", name: "Todos" },
    { id: "redes-sociales", name: "Redes Sociales" },
    { id: "marketing", name: "Marketing Digital" },
    { id: "diseno", name: "Diseño Web" },
    { id: "desarrollo", name: "Desarrollo" },
    { id: "seo", name: "SEO" },
  ]

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
          <Link href="/blog" className="inline-flex items-center text-ceretti-blue hover:underline mb-6">
            <FaArrowLeft className="mr-2" /> Volver al blog
          </Link>

          <div className="flex items-center mb-4">
            <span className="inline-block bg-ceretti-blue/10 text-ceretti-blue text-sm font-medium px-3 py-1 rounded-full">
              {categoriasData.find((cat) => cat.id === "seo")?.name}
            </span>
            <div className="flex items-center ml-4 text-black/60 text-sm">
              <FaClock className="mr-1" /> {article.readTime} de lectura
            </div>
          </div>

          <motion.h1
            initial={{ y: "30px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={cn([integralCF.className, "text-3xl md:text-5xl lg:leading-tight mb-5 max-w-4xl"])}
          >
            {article.title}
          </motion.h1>

          <motion.div
            initial={{ y: "30px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center mb-6"
          >
            <Image
              src={article.author.image || "/placeholder.svg"}
              alt={article.author.name}
              width={50}
              height={50}
              className="rounded-full mr-4"
            />
            <div>
              <p className="font-medium">{article.author.name}</p>
              <p className="text-sm text-black/60">{article.date}</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Imagen destacada */}
      <div className="max-w-4xl mx-auto px-4 xl:px-0 -mt-10 relative z-10">
        <motion.div
          initial={{ y: "30px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>

      {/* Contenido del artículo */}
      <div className="max-w-4xl mx-auto px-4 xl:px-0 mt-12">
        <motion.div
          initial={{ y: "30px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="article-content"
        >
          <p>
            El SEO (Search Engine Optimization) o Optimización para Motores de Búsqueda es fundamental para cualquier
            estrategia de marketing digital. Si tienes un sitio web y quieres que sea encontrado por tu audiencia
            objetivo, necesitas entender y aplicar los principios básicos del SEO.
          </p>

          <p>
            Esta guía completa te proporcionará los conocimientos fundamentales que necesitas para comenzar a optimizar
            tu sitio web y mejorar tu posicionamiento en los resultados de búsqueda.
          </p>

          <h2>¿Qué es el SEO y por qué es importante?</h2>

          <p>
            El SEO es el conjunto de técnicas y estrategias que se utilizan para optimizar un sitio web con el objetivo
            de mejorar su posición en los resultados orgánicos (no pagados) de los motores de búsqueda como Google, Bing
            o Yahoo.
          </p>

          <p>La importancia del SEO radica en varios factores clave:</p>

          <ul>
            <li>
              <strong>Visibilidad:</strong> Más del 90% de las experiencias online comienzan con una búsqueda en un
              motor de búsqueda.
            </li>
            <li>
              <strong>Tráfico de calidad:</strong> El SEO atrae visitantes que están activamente buscando lo que
              ofreces.
            </li>
            <li>
              <strong>Credibilidad:</strong> Los sitios que aparecen en las primeras posiciones son percibidos como más
              confiables y autoritativos.
            </li>
            <li>
              <strong>Rentabilidad:</strong> A diferencia de la publicidad pagada, el tráfico orgánico no tiene un costo
              por clic.
            </li>
            <li>
              <strong>Ventaja competitiva:</strong> Un buen SEO puede darte una ventaja significativa sobre tus
              competidores.
            </li>
          </ul>

          <h2>Los tres pilares fundamentales del SEO</h2>

          <p>Para comprender mejor el SEO, es útil dividirlo en tres categorías principales:</p>

          <h3>1. SEO Técnico</h3>

          <p>
            El SEO técnico se refiere a la optimización de la infraestructura de tu sitio web para facilitar el rastreo
            e indexación por parte de los motores de búsqueda:
          </p>

          <figure>
            <Image
              src="/images/blog/articulo2-content1.jpg"
              alt="SEO Técnico"
              width={800}
              height={500}
              className="rounded-lg w-full h-auto"
            />
            <figcaption className="text-center text-sm text-gray-500 mt-2">
              El SEO técnico es la base de una estrategia de posicionamiento efectiva
            </figcaption>
          </figure>

          <ul>
            <li>
              <strong>Velocidad de carga:</strong> Los sitios rápidos son favorecidos tanto por los usuarios como por
              los motores de búsqueda.
            </li>
            <li>
              <strong>Optimización para móviles:</strong> Tu sitio debe funcionar perfectamente en dispositivos móviles
              (responsive design).
            </li>
            <li>
              <strong>Estructura del sitio:</strong> Una arquitectura clara facilita la navegación y el rastreo.
            </li>
            <li>
              <strong>URLs amigables:</strong> Utiliza URLs descriptivas y fáciles de entender.
            </li>
            <li>
              <strong>HTTPS:</strong> La seguridad es un factor de ranking, así que asegúrate de tener un certificado
              SSL.
            </li>
            <li>
              <strong>Sitemap XML:</strong> Ayuda a los motores de búsqueda a encontrar todas tus páginas.
            </li>
            <li>
              <strong>Archivo robots.txt:</strong> Indica a los buscadores qué páginas pueden o no rastrear.
            </li>
          </ul>

          <h3>2. SEO On-Page</h3>

          <p>El SEO On-Page se refiere a la optimización de los elementos dentro de tu sitio web:</p>

          <ul>
            <li>
              <strong>Investigación de palabras clave:</strong> Identifica los términos que tu audiencia utiliza para
              buscar tus productos o servicios.
            </li>
            <li>
              <strong>Optimización de contenido:</strong> Crea contenido valioso que incorpore tus palabras clave de
              manera natural.
            </li>
            <li>
              <strong>Etiquetas de título (Title Tags):</strong> Incluye tu palabra clave principal en el título de cada
              página.
            </li>
            <li>
              <strong>Meta descripciones:</strong> Escribe descripciones atractivas que inciten al clic.
            </li>
            <li>
              <strong>Encabezados (H1, H2, H3...):</strong> Estructura tu contenido con encabezados jerárquicos que
              incluyan palabras clave relevantes.
            </li>
            <li>
              <strong>Optimización de imágenes:</strong> Utiliza nombres de archivo descriptivos y etiquetas alt para
              tus imágenes.
            </li>
            <li>
              <strong>Enlaces internos:</strong> Conecta tus páginas entre sí de manera lógica y estratégica.
            </li>
          </ul>

          <h3>3. SEO Off-Page</h3>

          <p>
            El SEO Off-Page se refiere a las acciones que se realizan fuera de tu sitio web para mejorar su autoridad y
            reputación:
          </p>

          <ul>
            <li>
              <strong>Construcción de enlaces (link building):</strong> Consigue que otros sitios de calidad enlacen al
              tuyo.
            </li>
            <li>
              <strong>Marketing de contenidos:</strong> Crea y promociona contenido valioso que naturalmente atraiga
              enlaces.
            </li>
            <li>
              <strong>Redes sociales:</strong> Aunque no son un factor directo de ranking, ayudan a amplificar tu
              contenido.
            </li>
            <li>
              <strong>Menciones de marca:</strong> Las menciones de tu marca, incluso sin enlaces, pueden beneficiar tu
              SEO.
            </li>
            <li>
              <strong>Reseñas y testimonios:</strong> Las opiniones positivas mejoran la confianza y pueden influir
              indirectamente en el SEO.
            </li>
          </ul>

          <h2>Cómo realizar una investigación de palabras clave efectiva</h2>

          <p>
            La investigación de palabras clave es el proceso de identificar los términos y frases que tu audiencia
            utiliza para buscar información relacionada con tu negocio. Es el primer paso fundamental para cualquier
            estrategia de SEO:
          </p>

          <ul>
            <li>
              <strong>Identifica tus temas principales:</strong> Comienza listando los temas generales relacionados con
              tu negocio.
            </li>
            <li>
              <strong>Amplía con palabras clave específicas:</strong> Para cada tema, piensa en palabras clave
              específicas que tus clientes potenciales podrían usar.
            </li>
            <li>
              <strong>Utiliza herramientas de investigación:</strong> Google Keyword Planner, Ubersuggest, SEMrush o
              Ahrefs pueden ayudarte a encontrar palabras clave relevantes y su volumen de búsqueda.
            </li>
            <li>
              <strong>Analiza la intención de búsqueda:</strong> Entiende por qué alguien buscaría esa palabra clave
              (informativa, navegacional, transaccional o comercial).
            </li>
            <li>
              <strong>Evalúa la competencia:</strong> Analiza qué tan difícil será posicionarte para cada palabra clave.
            </li>
            <li>
              <strong>Considera palabras clave de cola larga:</strong> Estas frases más específicas suelen tener menos
              competencia y mayor intención de conversión.
            </li>
          </ul>

          <figure>
            <Image
              src="/images/blog/articulo2-content2.jpg"
              alt="Investigación de palabras clave"
              width={800}
              height={500}
              className="rounded-lg w-full h-auto"
            />
            <figcaption className="text-center text-sm text-gray-500 mt-2">
              Una investigación de palabras clave detallada es la base de una estrategia de SEO exitosa
            </figcaption>
          </figure>

          <h2>Creación de contenido optimizado para SEO</h2>

          <p>
            El contenido es uno de los factores más importantes para el SEO. Aquí hay algunas pautas para crear
            contenido optimizado:
          </p>

          <ul>
            <li>
              <strong>Enfócate en la calidad:</strong> Crea contenido útil, relevante y completo que responda a las
              preguntas de tu audiencia.
            </li>
            <li>
              <strong>Estructura tu contenido:</strong> Utiliza encabezados (H1, H2, H3) para organizar tu contenido de
              manera lógica.
            </li>
            <li>
              <strong>Optimiza para palabras clave:</strong> Incluye tu palabra clave principal en el título, la URL, el
              primer párrafo y a lo largo del contenido de manera natural.
            </li>
            <li>
              <strong>Utiliza contenido multimedia:</strong> Incluye imágenes, videos, infografías o gráficos para
              mejorar la experiencia del usuario.
            </li>
            <li>
              <strong>Escribe meta descripciones atractivas:</strong> Aunque no son un factor directo de ranking, pueden
              mejorar la tasa de clics.
            </li>
            <li>
              <strong>Mantén el contenido actualizado:</strong> Revisa y actualiza regularmente tu contenido para
              mantenerlo relevante.
            </li>
            <li>
              <strong>Crea contenido extenso:</strong> Los artículos más largos (1500+ palabras) tienden a posicionarse
              mejor, siempre que mantengan la calidad y relevancia.
            </li>
          </ul>

          <h2>Optimización técnica básica para principiantes</h2>

          <p>
            Aunque algunos aspectos técnicos del SEO pueden parecer intimidantes, hay varias optimizaciones básicas que
            cualquier principiante puede implementar:
          </p>

          <ul>
            <li>
              <strong>Mejora la velocidad de carga:</strong> Comprime imágenes, utiliza caché del navegador y considera
              un buen hosting.
            </li>
            <li>
              <strong>Asegura que tu sitio sea responsive:</strong> Utiliza un diseño que se adapte a todos los
              dispositivos.
            </li>
            <li>
              <strong>Implementa HTTPS:</strong> Adquiere e instala un certificado SSL para tu dominio.
            </li>
            <li>
              <strong>Crea URLs amigables:</strong> Utiliza URLs cortas, descriptivas y que incluyan palabras clave
              cuando sea relevante.
            </li>
            <li>
              <strong>Optimiza imágenes:</strong> Comprime tus imágenes y añade texto alternativo (alt text)
              descriptivo.
            </li>
            <li>
              <strong>Crea un sitemap XML:</strong> Puedes usar plugins como Yoast SEO (WordPress) o herramientas online
              para generarlo.
            </li>
            <li>
              <strong>Configura Google Search Console y Google Analytics:</strong> Estas herramientas gratuitas te
              ayudarán a monitorear y mejorar tu SEO.
            </li>
          </ul>

          <h2>Estrategias de link building para principiantes</h2>

          <p>
            La construcción de enlaces es una parte crucial del SEO off-page. Aquí hay algunas estrategias accesibles
            para principiantes:
          </p>

          <ul>
            <li>
              <strong>Crea contenido enlazable:</strong> Desarrolla recursos valiosos que otros sitios quieran enlazar
              naturalmente.
            </li>
            <li>
              <strong>Guest blogging:</strong> Escribe artículos para otros blogs relevantes en tu industria.
            </li>
            <li>
              <strong>Recupera menciones sin enlace:</strong> Busca menciones de tu marca en la web y solicita que las
              conviertan en enlaces.
            </li>
            <li>
              <strong>Directorios de calidad:</strong> Regístrate en directorios relevantes y de buena reputación en tu
              nicho.
            </li>
            <li>
              <strong>Testimonios y reseñas:</strong> Proporciona testimonios a productos o servicios que utilizas, que
              suelen incluir un enlace a tu sitio.
            </li>
            <li>
              <strong>Redes sociales:</strong> Aunque no son enlaces directos para SEO, ayudan a amplificar tu contenido
              y generar enlaces naturales.
            </li>
          </ul>

          <h2>Herramientas esenciales de SEO para principiantes</h2>

          <p>Estas herramientas te ayudarán a implementar y monitorear tu estrategia de SEO:</p>

          <ul>
            <li>
              <strong>Google Search Console:</strong> Herramienta gratuita de Google para monitorear la presencia de tu
              sitio en los resultados de búsqueda.
            </li>
            <li>
              <strong>Google Analytics:</strong> Para analizar el tráfico de tu sitio web y el comportamiento de los
              usuarios.
            </li>
            <li>
              <strong>Yoast SEO (para WordPress):</strong> Plugin que facilita la optimización on-page.
            </li>
            <li>
              <strong>Ubersuggest:</strong> Herramienta gratuita para investigación de palabras clave y análisis de
              competencia.
            </li>
            <li>
              <strong>PageSpeed Insights:</strong> Para analizar y mejorar la velocidad de carga de tu sitio.
            </li>
            <li>
              <strong>Mobile-Friendly Test:</strong> Herramienta de Google para verificar si tu sitio está optimizado
              para dispositivos móviles.
            </li>
            <li>
              <strong>Moz Link Explorer:</strong> Para analizar tu perfil de enlaces y encontrar oportunidades de link
              building.
            </li>
            <li>
              <strong>Answer The Public:</strong> Excelente para encontrar preguntas que tu audiencia está haciendo
              sobre tus temas clave.
            </li>
          </ul>

          <h2>Errores comunes de SEO que debes evitar</h2>

          <p>Como principiante, es fácil cometer algunos errores. Aquí están los más comunes que debes evitar:</p>

          <ul>
            <li>
              <strong>Keyword stuffing:</strong> Sobrecargar tu contenido con palabras clave de manera no natural.
            </li>
            <li>
              <strong>Ignorar la optimización para móviles:</strong> Un sitio no responsive puede perjudicar seriamente
              tu SEO.
            </li>
            <li>
              <strong>Contenido duplicado:</strong> Publicar el mismo contenido en múltiples páginas puede confundir a
              los motores de búsqueda.
            </li>
            <li>
              <strong>Enlaces de baja calidad:</strong> Buscar atajos en la construcción de enlaces puede resultar en
              penalizaciones.
            </li>
            <li>
              <strong>Descuidar las meta descripciones:</strong> No escribir meta descripciones atractivas reduce tu
              tasa de clics.
            </li>
            <li>
              <strong>No monitorear los resultados:</strong> El SEO requiere análisis constante y ajustes basados en los
              resultados.
            </li>
            <li>
              <strong>Expectativas irreales:</strong> El SEO es una estrategia a largo plazo, no esperes resultados
              inmediatos.
            </li>
          </ul>

          <h2>Conclusión</h2>

          <p>
            El SEO puede parecer abrumador al principio, pero con los conocimientos básicos y las herramientas
            adecuadas, puedes comenzar a implementar estrategias efectivas que mejorarán gradualmente la visibilidad de
            tu sitio web en los motores de búsqueda.
          </p>

          <p>
            Recuerda que el SEO es un proceso continuo y a largo plazo. Los resultados no serán inmediatos, pero con
            consistencia y paciencia, verás cómo tu sitio web comienza a escalar posiciones en los resultados de
            búsqueda, atrayendo más tráfico orgánico y potenciales clientes.
          </p>

          <p>
            ¿Estás listo para comenzar tu viaje en el mundo del SEO? Implementa estas estrategias paso a paso y no dudes
            en contactarnos si necesitas ayuda profesional para llevar tu SEO al siguiente nivel.
          </p>
        </motion.div>

        {/* Compartir */}
        <div className="mt-12 pt-8 border-t border-black/10">
          <h3 className="text-lg font-bold mb-4">Comparte este artículo</h3>
          <div className="flex space-x-3">
            <Button variant="outline" size="icon" className="rounded-full">
              <FaTwitter className="text-[#1DA1F2]" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <FaFacebook className="text-[#4267B2]" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <FaLinkedin className="text-[#0077B5]" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <FaInstagram className="text-[#E1306C]" />
            </Button>
          </div>
        </div>

        {/* Autor */}
        <div className="mt-12 bg-[#F2F0F1] rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <Image
              src={article.author.image || "/placeholder.svg"}
              alt={article.author.name}
              width={100}
              height={100}
              className="rounded-full"
            />
            <div>
              <h3 className="text-xl font-bold mb-1">{article.author.name}</h3>
              <p className="text-ceretti-blue mb-3">{article.author.role}</p>
              <p className="text-black/70">{article.author.bio}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Artículos relacionados */}
      <div className="max-w-frame mx-auto px-4 xl:px-0 mt-20">
        <motion.h2
          initial={{ y: "30px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={cn([integralCF.className, "text-3xl mb-8 text-center"])}
        >
          ARTÍCULOS RELACIONADOS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedArticles.map((articulo, index) => (
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
                  src={articulo.image || "/placeholder.svg"}
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

