import Image from "next/image"
import Link from "next/link"
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa"

export default function BlogPost3() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Breadcrumb */}
      <div className="text-sm mb-6 text-gray-500">
        <Link href="/" className="hover:text-primary">
          Inicio
        </Link>{" "}
        /{" "}
        <Link href="/blog" className="hover:text-primary">
          Blog
        </Link>{" "}
        / Estrategias de contenido efectivas para redes sociales en 2025
      </div>

      {/* Article Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Estrategias de contenido efectivas para redes sociales en 2025
        </h1>
        <div className="flex items-center text-gray-500 mb-4">
          <span>15 de enero, 2025</span>
          <span className="mx-2">•</span>
          <span>5 min de lectura</span>
          <span className="mx-2">•</span>
          <span>Redes Sociales</span>
        </div>
      </div>

      {/* Featured Image */}
      <div className="mb-8 rounded-lg overflow-hidden">
        <Image
          src="/images/blog/articulo3.jpg"
          alt="Estrategias de contenido para redes sociales"
          width={1200}
          height={600}
          className="w-full h-auto"
        />
      </div>

      {/* Article Content */}
      <div className="prose max-w-none mb-12">
        <p className="text-lg mb-6">
          En el dinámico panorama digital de 2025, las estrategias de contenido para redes sociales han evolucionado
          significativamente. Este artículo explora las tácticas más efectivas que están generando resultados
          excepcionales para marcas y creadores de contenido.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">La importancia del contenido auténtico</h2>
        <p>
          Los algoritmos de las redes sociales en 2025 priorizan más que nunca la autenticidad. Las marcas que muestran
          su lado humano y comparten historias genuinas están experimentando un engagement hasta tres veces mayor que
          aquellas que mantienen un enfoque puramente comercial. Los consumidores buscan conexiones reales, no solo
          transacciones.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Contenido de formato corto: la tendencia dominante</h2>
        <p>
          Los videos cortos continúan dominando todas las plataformas. Con la atención del usuario más fragmentada que
          nunca, el contenido que comunica mensajes impactantes en menos de 60 segundos está generando los mejores
          resultados. Las estadísticas muestran que el 72% de los usuarios prefiere consumir contenido en este formato.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Estrategias de contenido por plataforma</h2>
        <p>Cada red social requiere un enfoque único:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>Instagram:</strong> Contenido visual de alta calidad con historias que fomenten la interacción
            directa.
          </li>
          <li>
            <strong>TikTok:</strong> Videos creativos que capturan la atención en los primeros 3 segundos.
          </li>
          <li>
            <strong>LinkedIn:</strong> Contenido profesional que aporta valor y demuestra experiencia en el sector.
          </li>
          <li>
            <strong>Twitter:</strong> Comentarios oportunos sobre tendencias actuales y conversaciones relevantes.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Conclusión</h2>
        <p>
          El éxito en las redes sociales en 2025 depende de crear contenido auténtico, adaptado a cada plataforma y que
          genere conexiones reales con la audiencia. Las marcas que logran equilibrar creatividad, autenticidad y
          estrategia están viendo resultados extraordinarios en términos de engagement y conversión.
        </p>
      </div>

      {/* Author Section */}
      <div className="flex items-center mb-8 p-6 bg-gray-50 rounded-lg">
        <Image src="/images/blog/author.jpg" alt="Autor" width={80} height={80} className="rounded-full mr-4" />
        <div>
          <h3 className="font-bold text-lg">Carlos Martínez</h3>
          <p className="text-gray-600">
            Especialista en marketing digital con más de 8 años de experiencia en estrategias de contenido para redes
            sociales.
          </p>
        </div>
      </div>

      {/* Share Section */}
      <div className="mb-12">
        <h3 className="text-xl font-bold mb-4">Comparte este artículo</h3>
        <div className="flex space-x-4">
          <a href="#" className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800">
            <FaLinkedin size={20} />
          </a>
          <a href="#" className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600">
            <FaWhatsapp size={20} />
          </a>
        </div>
      </div>

      {/* Related Articles */}
      <div>
        <h3 className="text-2xl font-bold mb-6">Artículos relacionados</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/blog/1" className="group">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <Image
                src="/images/blog/articulo1.jpg"
                alt="Cómo aumentar seguidores en Instagram"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  Cómo aumentar seguidores en Instagram de forma orgánica en 2025
                </h4>
                <p className="text-gray-600 text-sm">10 de marzo, 2025</p>
              </div>
            </div>
          </Link>
          <Link href="/blog/2" className="group">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <Image
                src="/images/blog/articulo2.jpg"
                alt="SEO para redes sociales"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  SEO para redes sociales: Optimiza tu presencia digital
                </h4>
                <p className="text-gray-600 text-sm">25 de febrero, 2025</p>
              </div>
            </div>
          </Link>
          <Link href="/blog/4" className="group">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <Image
                src="/images/blog/articulo4.jpg"
                alt="Diseño web efectivo"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  Diseño web efectivo para negocios digitales
                </h4>
                <p className="text-gray-600 text-sm">5 de febrero, 2025</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

