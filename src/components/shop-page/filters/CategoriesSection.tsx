import Link from "next/link"
import { MdKeyboardArrowRight } from "react-icons/md"

type Category = {
  title: string
  slug: string
}

const categoriesData: Category[] = [
  {
    title: "Instagram",
    slug: "/shop?platform=instagram",
  },
  {
    title: "Facebook",
    slug: "/shop?platform=facebook",
  },
  {
    title: "TikTok",
    slug: "/shop?platform=tiktok",
  },
  {
    title: "YouTube",
    slug: "/shop?platform=youtube",
  },
  {
    title: "Twitter/X",
    slug: "/shop?platform=twitter",
  },
  {
    title: "Spotify",
    slug: "/shop?platform=spotify",
  },
]

const CategoriesSection = () => {
  return (
    <div className="flex flex-col space-y-0.5 text-black/60">
      <h3 className="text-black font-bold text-xl mb-4">Plataformas</h3>
      {categoriesData.map((category, idx) => (
        <Link key={idx} href={category.slug} className="flex items-center justify-between py-2">
          {category.title} <MdKeyboardArrowRight />
        </Link>
      ))}
    </div>
  )
}

export default CategoriesSection

