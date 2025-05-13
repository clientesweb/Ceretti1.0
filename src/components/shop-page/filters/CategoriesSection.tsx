import Link from "next/link"
import { MdKeyboardArrowRight } from "react-icons/md"

type Category = {
  id: number
  title: string
  value: string
}

export const categories = [
  {
    id: 1,
    title: "Instagram",
    value: "instagram",
  },
  {
    id: 2,
    title: "YouTube",
    value: "youtube",
  },
  {
    id: 3,
    title: "TikTok",
    value: "tiktok",
  },
  {
    id: 4,
    title: "Spotify",
    value: "spotify",
  },
  {
    id: 5,
    title: "Facebook",
    value: "facebook",
  },
  {
    id: 6,
    title: "Threads",
    value: "threads",
  },
  {
    id: 7,
    title: "SoundCloud",
    value: "soundcloud",
  },
  {
    id: 8,
    title: "SEO",
    value: "seo",
  },
]

const CategoriesSection = () => {
  return (
    <div className="flex flex-col space-y-0.5 text-black/60">
      <h3 className="text-black font-bold text-xl mb-4">Plataformas</h3>
      {categories.map((category, idx) => (
        <Link key={idx} href={`/shop?platform=${category.value}`} className="flex items-center justify-between py-2">
          {category.title} <MdKeyboardArrowRight />
        </Link>
      ))}
    </div>
  )
}

export default CategoriesSection
