import Link from "next/link"
import { MdKeyboardArrowRight } from "react-icons/md"
import { instagramCategories } from "@/app/instagram-services"

const CategoriesSection = () => {
  return (
    <div className="flex flex-col space-y-0.5 text-black/60">
      <h3 className="text-black font-bold text-xl mb-4">Categorías</h3>
      {instagramCategories.map((category, idx) => (
        <Link key={idx} href={`/instagram/${category.id}`} className="flex items-center justify-between py-2">
          {category.name} <MdKeyboardArrowRight />
        </Link>
      ))}
    </div>
  )
}

export default CategoriesSection

