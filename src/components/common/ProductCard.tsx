import Rating from "../ui/Rating"
import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/types/product.types"

interface ProductCardProps {
  data: Product
}

const ProductCard = ({ data }: ProductCardProps) => {
  return (
    <Link
      href={`/shop/product/${data.id}/${data.title.split(" ").join("-")}`}
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
                  A partir de ${Math.round(data.price - (data.price * data.discount.percentage) / 100)} ARS
                </span>
              </>
            ) : (
              <span className="font-bold text-xl text-black">A partir de ${data.price} ARS</span>
            )}
          </div>
          {data.discount.percentage > 0 && <span className="text-sm text-red-600 font-medium">Precio de oferta</span>}
        </div>
      </div>
    </Link>
  )
}

export default ProductCard

