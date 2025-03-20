import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    id: 1,
    title: "10 estrategias para aumentar tus seguidores en Instagram",
    excerpt: "Descubre las mejores tácticas para crecer orgánicamente en Instagram y aumentar tu engagement.",
    image: "/images/blog/articulo1.jpg",
    date: "15 Mar 2025",
    category: "Redes Sociales",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Guía completa de SEO para principiantes",
    excerpt:
      "Todo lo que necesitas saber para empezar a optimizar tu sitio web y mejorar tu posicionamiento en buscadores.",
    image: "/images/blog/articulo2.jpg",
    date: "28 Feb 2025",
    category: "SEO",
    readTime: "8 min",
  },
  {
    id: 3,
    title: "Estrategias de contenido efectivas para redes sociales",
    excerpt: "Conoce las mejores prácticas para crear contenido que resuene con tu audiencia y genere engagement.",
    image: "/images/blog/articulo3.jpg",
    date: "15 Ene 2025",
    category: "Marketing",
    readTime: "6 min",
  },
]

const BlogPreview = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Nuestro Blog</h2>
          <p className="text-gray-600 text-center max-w-2xl">
            Descubre las últimas tendencias, consejos y estrategias para potenciar tu presencia en redes sociales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <Link href={`/blog/${post.id}`}>
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center ml-auto text-gray-500 text-xs">
                    <Clock className="w-3 h-3 mr-1" /> {post.readTime}
                  </div>
                </div>
                <Link href={`/blog/${post.id}`}>
                  <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">{post.title}</h3>
                </Link>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-blue-600 hover:text-blue-800 inline-flex items-center text-sm font-medium"
                >
                  Leer más <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <Button className="rounded-full px-8 py-4 bg-black hover:bg-black/80">
              Ver todos los artículos <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogPreview

