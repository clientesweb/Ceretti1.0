import Link from "next/link"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "Cómo aumentar seguidores en Instagram en 2025",
    excerpt:
      "Descubre las estrategias más efectivas para crecer en Instagram este año con técnicas probadas y consejos de expertos.",
    image: "/images/blog/articulo1.jpg",
    date: "10 de marzo, 2025",
    category: "Instagram",
  },
  {
    id: 2,
    title: "SEO para redes sociales: Guía completa",
    excerpt:
      "Aprende a optimizar tus perfiles y contenido en redes sociales para mejorar tu visibilidad y alcance orgánico.",
    image: "/images/blog/articulo2.jpg",
    date: "25 de febrero, 2025",
    category: "SEO",
  },
  {
    id: 3,
    title: "Estrategias de contenido efectivas para redes sociales en 2025",
    excerpt: "Conoce las mejores prácticas para crear contenido que resuene con tu audiencia y genere engagement.",
    image: "/images/blog/articulo3.jpg",
    date: "15 de enero, 2025",
    category: "Contenido",
  },
]

const BlogPreview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Nuestro Blog
          </h2>
          <p className="text-gray-600 text-center max-w-2xl">
            Descubre las últimas tendencias, consejos y estrategias para potenciar tu presencia en redes sociales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500 ml-2">{post.date}</span>
                </div>
                <Link href={`/blog/${post.id}`}>
                  <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                \

