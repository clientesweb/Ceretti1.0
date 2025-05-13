import Rating from "../ui/Rating"
import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/types/product.types"

interface ProductCardProps {
  data: Product
}

const ProductCard = ({ data }: ProductCardProps) => {
  // Función para determinar la URL correcta según el ID del producto
  const getProductUrl = () => {
    switch (data.id) {
      case 1:
        return `/shop/product/1/seguidores-instagram-premium`
      case 2:
        return `/shop/product/2/likes-instagram`
      case 3:
        return `/shop/product/3/visitas-instagram`
      case 4:
        return `/shop/product/4/visitas-historias-instagram`
      case 5:
        return `/shop/product/5/guardados-instagram`
      case 6:
        return `/shop/product/6/comentarios-instagram`
      case 9:
        return `/shop/product/9/suscriptores-youtube`
      case 10:
        return `/shop/product/10/visitas-youtube`
      case 11:
        return `/shop/product/11/reproducciones-spotify`
      case 12:
        return `/shop/product/12/seguidores-spotify`
      case 13:
        return `/shop/product/13/oyentes-mensuales-spotify`
      case 15:
        return `/shop/product/15/visitas-tiktok`
      case 16:
        return `/shop/product/16/seguidores-tiktok`
      case 17:
        return `/shop/product/17/likes-tiktok`
      case 18:
        return `/shop/product/18/seguidores-facebook`
      case 19:
        return `/shop/product/19/likes-facebook`
      case 20:
        return `/shop/product/20/promo-tiktok`
      case 21:
        return `/shop/product/21/likes-youtube-premium`
      case 22:
        return `/shop/product/22/comentarios-youtube-random`
      case 23:
        return `/shop/product/23/comentarios-youtube-personalizados`
      case 24:
        return `/shop/product/24/reaccion-quiz-instagram`
      case 25:
        return `/shop/product/25/barra-reaccion-instagram`
      case 26:
        return `/shop/product/26/visitas-historias-premium-instagram`
      case 27:
        return `/shop/product/27/impresiones-posteos-instagram`
      case 28:
        return `/shop/product/28/comentarios-random-instagram`
      case 29:
        return `/shop/product/29/comentarios-personalizados-instagram`
      case 30:
        return `/shop/product/30/compartidos-posteos-instagram`
      case 31:
        return `/shop/product/31/servicio-reporte-spam`
      case 32:
        return `/shop/product/32/seguidores-threads`
      case 33:
        return `/shop/product/33/likes-threads`
      case 34:
        return `/shop/product/34/seguidores-soundcloud`
      case 35:
        return `/shop/product/35/reproducciones-soundcloud`
      case 36:
        return `/shop/product/36/likes-soundcloud`
      case 37:
        return `/shop/product/37/comentarios-random-soundcloud`
      case 38:
        return `/shop/product/38/retencion-google-20s`
      case 39:
        return `/shop/product/39/retencion-google-140s`
      case 40:
        return `/shop/product/40/trafico-seo-web`
      default:
        return `/shop/product/${data.id}/${data.title.split(" ").join("-").toLowerCase()}`
    }
  }

  return (
    <Link
      href={getProductUrl()}
      className="group flex flex-col items-start bg-white rounded-2xl p-4 border border-black/5 hover:border-ceretti-blue/20 transition-all duration-300 h-full"
    >
      <div className="bg-[#F8F9FB] rounded-xl w-full aspect-square mb-4 overflow-hidden relative">
        <Image
          src={data.srcUrl || "/placeholder.svg"}
          width={295}
          height={295}
          className="w-full h-full object-contain p-6 group-hover:scale-110 transition-all duration-500"
          alt={data.title}
          priority
        />
        {data.discount.percentage > 0 && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
            -{data.discount.percentage}%
          </span>
        )}
      </div>
      <div className="flex flex-col flex-grow w-full">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-lg leading-tight">{data.title}</h3>
          {data.platform && (
            <span className="shrink-0 text-xs font-medium px-2 py-1 rounded-full bg-ceretti-blue/10 text-ceretti-blue">
              {data.platform}
            </span>
          )}
        </div>
        {data.description && <p className="text-sm text-black/60 mb-3 line-clamp-2">{data.description}</p>}
        <div className="flex items-center mb-3 mt-auto">
          <Rating
            initialValue={data.rating}
            allowFraction
            SVGclassName="inline-block"
            emptyClassName="fill-gray-50"
            size={16}
            readonly
          />
          <span className="text-black text-xs ml-2">
            {data.rating.toFixed(1)}
            <span className="text-black/60">/5</span>
          </span>
        </div>
        <div className="flex flex-col space-y-1">
          <span className="text-sm text-black/60">Precio habitual</span>
          <div className="flex items-center space-x-2">
            {data.discount.percentage > 0 ? (
              <>
                <span className="font-bold text-xl text-black line-through text-black/40">${data.price} ARS</span>
                <span className="font-bold text-xl text-black">
                  Desde ${Math.round(data.price - (data.price * data.discount.percentage) / 100)} ARS
                </span>
              </>
            ) : (
              <span className="font-bold text-xl text-black">Desde ${data.price} ARS</span>
            )}
          </div>
          {data.discount.percentage > 0 && <span className="text-sm text-red-600 font-medium">Precio de oferta</span>}
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
