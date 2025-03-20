import Image from "next/image"
import Link from "next/link"
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa"

export default function BlogPost6() {
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
        / Desarrollo con React para aplicaciones modernas
      </div>

      {/* Article Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Desarrollo con React para aplicaciones modernas</h1>
        <div className="flex items-center text-gray-500 mb-4">
          <span>5 de marzo, 2025</span>
          <span className="mx-2">•</span>
          <span>6 min de lectura</span>
          <span className="mx-2">•</span>
          <span>Desarrollo Web</span>
        </div>
      </div>

      {/* Featured Image */}
      <div className="mb-8 rounded-lg overflow-hidden">
        <Image
          src="/images/blog/articulo6.jpg"
          alt="Desarrollo con React"
          width={1200}
          height={600}
          className="w-full h-auto"
        />
      </div>

      {/* Article Content */}
      <div className="prose max-w-none mb-12">
        <p className="text-lg mb-6">
          React sigue siendo una de las bibliotecas más populares para el desarrollo de interfaces de usuario en 2025.
          Su ecosistema ha evolucionado significativamente, ofreciendo herramientas y patrones que facilitan la creación
          de aplicaciones web modernas, rápidas y escalables.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Ventajas de React en 2025</h2>
        <p>Las razones por las que React continúa dominando el panorama del desarrollo frontend incluyen:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>Componentes reutilizables:</strong> La arquitectura basada en componentes permite crear interfaces
            modulares y mantenibles.
          </li>
          <li>
            <strong>Virtual DOM:</strong> Optimiza el rendimiento al minimizar las manipulaciones del DOM real.
          </li>
          <li>
            <strong>Ecosistema robusto:</strong> Bibliotecas como Redux, React Query y Framer Motion complementan
            perfectamente la funcionalidad principal.
          </li>
          <li>
            <strong>Soporte para Server Components:</strong> La renderización en el servidor ha mejorado
            significativamente, ofreciendo mejor SEO y rendimiento.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">React vs. otros frameworks en 2025</h2>
        <p>Aunque han surgido competidores fuertes, React mantiene ventajas clave:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Mayor comunidad de desarrolladores y recursos disponibles</li>
          <li>Flexibilidad para integrarse con cualquier stack tecnológico</li>
          <li>Curva de aprendizaje más gradual comparada con frameworks más opinionados</li>
          <li>Mejor soporte para aplicaciones de gran escala y complejidad</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Mejores prácticas para React en 2025</h2>
        <p>Para aprovechar al máximo React en proyectos actuales:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Utilizar TypeScript para mejorar la seguridad de tipos y la mantenibilidad</li>
          <li>Implementar patrones de renderizado condicional para optimizar el rendimiento</li>
          <li>Adoptar React Server Components para contenido estático</li>
          <li>Utilizar herramientas modernas de testing como Testing Library y Cypress</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Conclusión</h2>
        <p>
          React sigue siendo una elección sólida para el desarrollo de aplicaciones web modernas en 2025. Su
          flexibilidad, rendimiento y ecosistema maduro lo convierten en una herramienta indispensable para
          desarrolladores que buscan crear experiencias de usuario excepcionales con código mantenible y escalable.
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
          <Link href="/blog/5" className="group">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <Image
                src="/images/blog/articulo5.jpg"
                alt="Herramientas para redes sociales"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  Herramientas esenciales para gestión de redes sociales
                </h4>
                <p className="text-gray-600 text-sm">18 de febrero, 2025</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

