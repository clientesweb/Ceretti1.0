"use client"

import * as motion from "framer-motion/client"
import { cn } from "@/lib/utils"
import { integralCF } from "@/styles/fonts"
import { Button } from "@/components/ui/button"
import { FaArrowLeft, FaClock, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaArrowRight } from "react-icons/fa"
import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"

export default function ArticuloInstagram() {
  const article = {
    id: 1,
    title: "10 estrategias para aumentar tus seguidores en Instagram",
    excerpt: "Descubre las mejores tácticas para crecer orgánicamente en Instagram y aumentar tu engagement.",
    image: "/images/blog/articulo1.jpg",
    category: "redes-sociales",
    date: "15 Mar 2023",
    readTime: "5 min",
    featured: true,
    author: {
      name: "Carlos Ceretti",
      role: "Especialista en Marketing Digital",
      image: "/images/blog/author.jpg",
      bio: "Experto en estrategias de crecimiento para redes sociales con más de 8 años de experiencia en el sector digital.",
    },
    relatedPosts: [5, 3, 2],
  }

  const relatedArticles = [
    {
      id: 5,
      title: "Herramientas esenciales para gestionar redes sociales",
      excerpt: "Una selección de las mejores herramientas para optimizar la gestión de tus redes sociales.",
      image: "/images/blog/articulo5.jpg",
      category: "redes-sociales",
      date: "20 Ene 2023",
      readTime: "7 min",
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
      id: 2,
      title: "Guía completa de SEO para principiantes",
      excerpt:
        "Todo lo que necesitas saber para empezar a optimizar tu sitio web y mejorar tu posicionamiento en buscadores.",
      image: "/images/blog/articulo2.jpg",
      category: "seo",
      date: "28 Feb 2023",
      readTime: "8 min",
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
              {categoriasData.find((cat) => cat.id === "redes-sociales")?.name}
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
            En la era digital actual, Instagram se ha convertido en una de las plataformas más poderosas para construir
            una marca personal o empresarial. Con más de mil millones de usuarios activos mensuales, esta red social
            ofrece un enorme potencial para conectar con tu audiencia objetivo. Sin embargo, conseguir seguidores de
            calidad que realmente interactúen con tu contenido puede ser un desafío.
          </p>

          <p>
            En este artículo, te presentamos 10 estrategias probadas que te ayudarán a aumentar tus seguidores en
            Instagram de manera orgánica y sostenible, mejorando también tu tasa de engagement.
          </p>

          <h2>1. Optimiza tu perfil para atraer a tu audiencia ideal</h2>

          <p>
            Tu perfil de Instagram es tu carta de presentación. Antes de implementar cualquier estrategia de
            crecimiento, asegúrate de que tu perfil esté completamente optimizado:
          </p>

          <ul>
            <li>
              <strong>Foto de perfil clara y reconocible:</strong> Utiliza tu logo si eres una marca o una foto
              profesional si eres un influencer o creador de contenido.
            </li>
            <li>
              <strong>Nombre de usuario memorable:</strong> Elige un nombre fácil de recordar y que refleje tu marca.
            </li>
            <li>
              <strong>Biografía convincente:</strong> Tienes 150 caracteres para explicar quién eres y qué ofreces.
              Incluye palabras clave relevantes y un llamado a la acción claro.
            </li>
            <li>
              <strong>URL estratégica:</strong> Dirige a los usuarios a tu sitio web, landing page o al contenido que
              quieras promocionar en ese momento.
            </li>
            <li>
              <strong>Categoría de negocio adecuada:</strong> Selecciona la categoría que mejor represente tu actividad
              para mejorar la descubribilidad.
            </li>
          </ul>

          <p>
            Un perfil bien optimizado no solo atrae más seguidores, sino que también ayuda a convertir visitantes en
            seguidores.
          </p>

          <h2>2. Crea una estrategia de contenido coherente</h2>

          <figure>
            <Image
              src="/images/blog/articulo1-content1.jpg"
              alt="Estrategia de contenido para Instagram"
              width={800}
              height={500}
              className="rounded-lg w-full h-auto"
            />
            <figcaption className="text-center text-sm text-gray-500 mt-2">
              Una estrategia de contenido bien planificada es fundamental para el crecimiento en Instagram
            </figcaption>
          </figure>

          <p>
            El contenido es el rey en Instagram. Para atraer y retener seguidores, necesitas publicar contenido de alta
            calidad que resuene con tu audiencia objetivo:
          </p>

          <ul>
            <li>
              <strong>Define tu nicho:</strong> Especialízate en un área específica para atraer a una audiencia
              interesada en ese tema.
            </li>
            <li>
              <strong>Mantén una estética visual coherente:</strong> Utiliza un estilo visual reconocible que refleje la
              personalidad de tu marca.
            </li>
            <li>
              <strong>Crea un calendario editorial:</strong> Planifica tu contenido con anticipación para mantener la
              consistencia.
            </li>
            <li>
              <strong>Varía los formatos:</strong> Combina fotos, carruseles, Reels, IGTV y Stories para mantener tu
              feed dinámico e interesante.
            </li>
            <li>
              <strong>Analiza el rendimiento:</strong> Utiliza las estadísticas de Instagram para identificar qué tipo
              de contenido genera mayor engagement y ajusta tu estrategia en consecuencia.
            </li>
          </ul>

          <p>
            Recuerda que la calidad siempre debe primar sobre la cantidad. Es mejor publicar contenido excepcional con
            menos frecuencia que contenido mediocre a diario.
          </p>

          <h2>3. Aprovecha el poder de los hashtags</h2>

          <p>
            Los hashtags siguen siendo una herramienta fundamental para aumentar la visibilidad de tus publicaciones y
            atraer nuevos seguidores:
          </p>

          <ul>
            <li>
              <strong>Investiga hashtags relevantes:</strong> Utiliza herramientas como Flick, Display Purposes o
              incluso la función de búsqueda de Instagram para encontrar hashtags populares en tu nicho.
            </li>
            <li>
              <strong>Crea una estrategia de hashtags:</strong> Combina hashtags de diferentes tamaños (populares,
              medianos y nichos) para maximizar tu alcance.
            </li>
            <li>
              <strong>Utiliza hashtags específicos:</strong> Los hashtags muy generales tienen demasiada competencia.
              Opta por hashtags más específicos relacionados con tu contenido.
            </li>
            <li>
              <strong>Crea un hashtag propio:</strong> Desarrolla un hashtag único para tu marca que tus seguidores
              puedan utilizar.
            </li>
            <li>
              <strong>Actualiza tus hashtags:</strong> No uses siempre los mismos. Actualízalos según las tendencias y
              el contenido específico de cada publicación.
            </li>
          </ul>

          <p>
            Instagram permite hasta 30 hashtags por publicación, pero la calidad y relevancia son más importantes que la
            cantidad. Experimenta con diferentes combinaciones para encontrar lo que funciona mejor para tu cuenta.
          </p>

          <h2>4. Interactúa activamente con tu comunidad</h2>

          <p>
            El engagement es una calle de doble sentido. Para aumentar tus seguidores, debes interactuar activamente con
            tu comunidad y con potenciales seguidores:
          </p>

          <ul>
            <li>
              <strong>Responde a todos los comentarios:</strong> Dedica tiempo a responder los comentarios en tus
              publicaciones de manera personalizada.
            </li>
            <li>
              <strong>Interactúa con cuentas similares:</strong> Comenta y da like a publicaciones de cuentas en tu
              nicho para aumentar tu visibilidad.
            </li>
            <li>
              <strong>Participa en conversaciones relevantes:</strong> Busca publicaciones con hashtags de tu nicho y
              participa en las conversaciones.
            </li>
            <li>
              <strong>Crea contenido que fomente la interacción:</strong> Haz preguntas, encuestas y publicaciones que
              inviten a tus seguidores a comentar.
            </li>
            <li>
              <strong>Utiliza las Stories para interactuar:</strong> Aprovecha las funciones interactivas de las Stories
              como preguntas, encuestas y cuestionarios.
            </li>
          </ul>

          <p>
            El algoritmo de Instagram favorece las cuentas que generan interacciones genuinas, por lo que esta
            estrategia no solo te ayudará a ganar seguidores, sino también a mejorar tu alcance general.
          </p>

          <h2>5. Colabora con otras cuentas e influencers</h2>

          <figure>
            <Image
              src="/images/blog/articulo1-content2.jpg"
              alt="Colaboraciones en Instagram"
              width={800}
              height={500}
              className="rounded-lg w-full h-auto"
            />
            <figcaption className="text-center text-sm text-gray-500 mt-2">
              Las colaboraciones estratégicas pueden multiplicar tu alcance y seguidores
            </figcaption>
          </figure>

          <p>Las colaboraciones son una excelente manera de exponer tu cuenta a nuevas audiencias:</p>

          <ul>
            <li>
              <strong>Identifica potenciales colaboradores:</strong> Busca cuentas complementarias (no competidoras) con
              una audiencia similar a la que quieres atraer.
            </li>
            <li>
              <strong>Propón colaboraciones de valor mutuo:</strong> Ofrece ideas que beneficien a ambas partes, como
              publicaciones conjuntas, takeovers o sorteos colaborativos.
            </li>
            <li>
              <strong>Participa en campañas de UGC (contenido generado por usuarios):</strong> Crea hashtags específicos
              y anima a tus seguidores a crear contenido relacionado con tu marca.
            </li>
            <li>
              <strong>Considera micro-influencers:</strong> No necesitas colaborar solo con grandes influencers. Los
              micro-influencers suelen tener audiencias más comprometidas y tarifas más accesibles.
            </li>
          </ul>

          <p>
            Las colaboraciones estratégicas pueden multiplicar tu alcance y ayudarte a ganar seguidores de calidad que
            ya están interesados en tu nicho.
          </p>

          <h2>6. Utiliza Instagram Reels estratégicamente</h2>

          <p>
            Los Reels se han convertido en una de las funcionalidades más potentes de Instagram para ganar visibilidad y
            nuevos seguidores:
          </p>

          <ul>
            <li>
              <strong>Crea Reels originales y de alta calidad:</strong> Aprovecha esta función para mostrar tu
              creatividad y personalidad.
            </li>
            <li>
              <strong>Sigue las tendencias:</strong> Utiliza música y desafíos populares, pero dándoles tu toque
              personal.
            </li>
            <li>
              <strong>Mantén los Reels cortos y dinámicos:</strong> Los primeros segundos son cruciales para captar la
              atención.
            </li>
            <li>
              <strong>Añade texto explicativo:</strong> Muchos usuarios ven los Reels sin sonido, así que asegúrate de
              que tu mensaje se entienda visualmente.
            </li>
            <li>
              <strong>Publica Reels regularmente:</strong> El algoritmo tiende a favorecer a los usuarios que utilizan
              activamente las nuevas funcionalidades.
            </li>
          </ul>

          <p>
            Los Reels tienen un alcance potencialmente mucho mayor que las publicaciones normales, lo que los convierte
            en una herramienta ideal para atraer nuevos seguidores.
          </p>

          <h2>7. Aprovecha el poder de las Stories</h2>

          <p>
            Las Stories de Instagram son una excelente manera de mantener el engagement con tus seguidores actuales y
            atraer nuevos:
          </p>

          <ul>
            <li>
              <strong>Publica Stories diariamente:</strong> Mantén tu presencia en la parte superior del feed de tus
              seguidores.
            </li>
            <li>
              <strong>Utiliza stickers interactivos:</strong> Preguntas, encuestas, cuestionarios y deslizadores de
              emoji para fomentar la participación.
            </li>
            <li>
              <strong>Crea Highlights organizados:</strong> Agrupa tus mejores Stories en Highlights temáticos para que
              los nuevos visitantes puedan conocer mejor tu contenido.
            </li>
            <li>
              <strong>Utiliza hashtags y ubicaciones:</strong> Añade hashtags relevantes y ubicaciones a tus Stories
              para aumentar su visibilidad.
            </li>
            <li>
              <strong>Comparte publicaciones de otros usuarios:</strong> Cuando te mencionen o etiqueten, comparte ese
              contenido en tus Stories para fortalecer relaciones.
            </li>
          </ul>

          <p>
            Las Stories son menos formales que las publicaciones del feed, lo que te permite mostrar un lado más
            auténtico y cercano de tu marca o personalidad.
          </p>

          <h2>8. Optimiza tus horarios de publicación</h2>

          <p>
            Publicar en los momentos en que tu audiencia está más activa puede aumentar significativamente tu alcance y
            engagement:
          </p>

          <ul>
            <li>
              <strong>Analiza tus estadísticas:</strong> Utiliza Instagram Insights para identificar cuándo tus
              seguidores están más activos.
            </li>
            <li>
              <strong>Experimenta con diferentes horarios:</strong> Prueba publicar en diferentes momentos del día y
              analiza los resultados.
            </li>
            <li>
              <strong>Considera tu zona geográfica objetivo:</strong> Si tu audiencia está en diferentes zonas horarias,
              ajusta tu estrategia en consecuencia.
            </li>
            <li>
              <strong>Mantén la consistencia:</strong> Una vez que encuentres los horarios óptimos, intenta mantener un
              calendario regular.
            </li>
          </ul>

          <p>
            Recuerda que los horarios ideales pueden variar según tu nicho y tipo de audiencia, así que lo que funciona
            para otros puede no funcionar para ti.
          </p>

          <h2>9. Promociona tu cuenta de Instagram en otras plataformas</h2>

          <p>No limites tus esfuerzos solo a Instagram. Promociona tu cuenta en todas tus plataformas digitales:</p>

          <ul>
            <li>
              <strong>Integra Instagram en tu sitio web:</strong> Añade botones de seguimiento y feeds de Instagram en
              tu página web.
            </li>
            <li>
              <strong>Comparte tu contenido de Instagram en otras redes sociales:</strong> Promociona tus mejores
              publicaciones en Facebook, Twitter, LinkedIn, etc.
            </li>
            <li>
              <strong>Incluye tu usuario de Instagram en tu firma de correo electrónico:</strong> Aprovecha cada punto
              de contacto con clientes potenciales.
            </li>
            <li>
              <strong>Menciona tu Instagram en contenido de otras plataformas:</strong> Si tienes un podcast, canal de
              YouTube o blog, invita a tu audiencia a seguirte en Instagram.
            </li>
          </ul>

          <p>
            La promoción cruzada es una estrategia efectiva para dirigir a tu audiencia existente en otras plataformas
            hacia tu cuenta de Instagram.
          </p>

          <h2>10. Analiza, aprende y ajusta constantemente</h2>

          <p>El crecimiento sostenible en Instagram requiere un enfoque de mejora continua:</p>

          <ul>
            <li>
              <strong>Revisa regularmente tus estadísticas:</strong> Analiza qué contenido genera más engagement,
              alcance y nuevos seguidores.
            </li>
            <li>
              <strong>Realiza pruebas A/B:</strong> Experimenta con diferentes tipos de contenido, copys, llamadas a la
              acción y horarios.
            </li>
            <li>
              <strong>Mantente actualizado con los cambios del algoritmo:</strong> Instagram evoluciona constantemente,
              así que mantente informado sobre las últimas actualizaciones.
            </li>
            <li>
              <strong>Aprende de tus competidores:</strong> Analiza qué estrategias están funcionando para cuentas
              similares a la tuya.
            </li>
            <li>
              <strong>Solicita feedback a tu audiencia:</strong> Pregunta directamente a tus seguidores qué tipo de
              contenido les gustaría ver más.
            </li>
          </ul>

          <p>La flexibilidad y la disposición para adaptarte son clave para el éxito a largo plazo en Instagram.</p>

          <h2>Conclusión</h2>

          <p>
            Aumentar tus seguidores en Instagram de manera orgánica requiere tiempo, consistencia y una estrategia bien
            planificada. No existen atajos reales: las tácticas como comprar seguidores o utilizar bots pueden parecer
            tentadoras, pero a la larga perjudican tu cuenta y tu credibilidad.
          </p>

          <p>
            Implementa estas 10 estrategias de forma consistente, adapta tu enfoque según los resultados que obtengas y,
            lo más importante, mantén la autenticidad en todo lo que hagas. El crecimiento sostenible se basa en
            construir una comunidad genuina que realmente valore tu contenido.
          </p>

          <p>
            Recuerda que el número de seguidores es solo una métrica. El verdadero éxito en Instagram se mide por la
            calidad de tu comunidad y el nivel de engagement que generas. Enfócate en crear valor real para tu
            audiencia, y los seguidores llegarán naturalmente.
          </p>

          <p>
            ¿Has probado alguna de estas estrategias? ¿Cuáles han funcionado mejor para ti? Comparte tu experiencia en
            los comentarios y no dudes en contactarnos si necesitas ayuda para implementar estas tácticas en tu
            estrategia de Instagram.
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

