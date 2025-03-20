import Image from "next/image"
import Link from "next/link"
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa"

export default function BlogPost4() {
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
        / Diseño web efectivo para negocios digitales
      </div>

      {/* Article Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Diseño web efectivo para negocios digitales</h1>
        <div className="flex items-center text-gray-500 mb-4">
          <span>5 de febrero, 2025</span>
          <span className="mx-2">•</span>
          <span>4 min de lectura</span>
          <span className="mx-2">•</span>
          <span>Diseño Web</span>
        </div>
      </div>

      {/* Featured Image */}
      <div className="mb-8 rounded-lg overflow-hidden">
        <Image
          src="/images/blog/articulo4.jpg"
          alt="Diseño web efectivo"
          width={1200}
          height={600}
          className="w-full h-auto"
        />
      </div>

      {/* Article Content */}
      <div className="prose max-w-none mb-12">
        <p className="text-lg mb-6">
          El diseño web se ha convertido en un factor crítico para el éxito de los negocios digitales en 2025. Un sitio
          web bien diseñado no solo atrae visitantes, sino que los convierte en clientes leales.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Principios de diseño web efectivo</h2>
        <p>Los sitios web más exitosos de 2025 siguen estos principios fundamentales:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>Simplicidad:</strong> Interfaces limpias y navegación intuitiva que guían al usuario hacia la acción
            deseada.
          </li>
          <li>
            <strong>Velocidad:</strong> Tiempos de carga optimizados, con sitios que responden en menos de 2 segundos.
          </li>
          <li>
            <strong>Diseño responsivo:</strong> Experiencia perfecta en todos los dispositivos, especialmente en
            móviles.
          </li>
          <li>
            <strong>Accesibilidad:</strong> Contenido disponible para todos los usuarios, independientemente de sus
            capacidades.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Tendencias de diseño web en 2025</h2>
        <p>Las tendencias que están definiendo el diseño web este año incluyen:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Microinteracciones que mejoran la experiencia del usuario</li>
          <li>Diseños minimalistas con espacios en blanco estratégicos</li>
          <li>Paletas de colores audaces que reflejan la personalidad de la marca</li>
          <li>Integración de IA para personalizar la experiencia del usuario</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">El impacto del diseño en la conversión</h2>
        <p>
          Un estudio reciente demostró que las empresas que invierten en diseño web profesional experimentan tasas de
          conversión hasta un 200% más altas que aquellas con diseños desactualizados. La confianza del usuario se
          establece en los primeros 50 milisegundos de interacción con un sitio web, lo que hace que el diseño visual
          sea crucial para el éxito comercial.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Conclusión</h2>
        <p>
          El diseño web efectivo no es solo una cuestión estética, sino una herramienta estratégica para el crecimiento
          empresarial. Los negocios que priorizan la experiencia del usuario a través de un diseño web profesional están
          mejor posicionados para destacar en el competitivo mercado digital de 2025.
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
          <Link href="/blog/3" className="group">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <Image
                src="/images/blog/articulo3.jpg"
                alt="Estrategias de contenido"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  Estrategias de contenido efectivas para redes sociales en 2025
                </h4>
                <p className="text-gray-600 text-sm">15 de enero, 2025</p>
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
          <Link href="/blog/6" className="group">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <Image
                src="/images/blog/articulo6.jpg"
                alt="Desarrollo con React"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  Desarrollo con React para aplicaciones modernas
                </h4>
                <p className="text-gray-600 text-sm">5 de marzo, 2025</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

