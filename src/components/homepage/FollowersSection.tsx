import * as motion from "framer-motion/client"
import { cn } from "@/lib/utils"
import { integralCF } from "@/styles/fonts"
import FollowersProductCard from "../common/FollowersProductCard"
import Link from "next/link"

type FollowersOption = {
  amount: number
  price: number
  bonuses?: string
}

type QualityOption = {
  id: string
  name: string
  followers: FollowersOption[]
}

type FollowersProduct = {
  id: number
  title: string
  srcUrl: string
  rating: number
  qualityOptions: QualityOption[]
}

type FollowersSectionProps = {
  title: string
  data: FollowersProduct[]
  viewAllLink?: string
}

const FollowersSection = ({ title, data, viewAllLink }: FollowersSectionProps) => {
  return (
    <section className="max-w-frame mx-auto px-4 xl:px-0">
      <motion.h2
        initial={{ y: "100px", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={cn([integralCF.className, "text-[32px] md:text-5xl mb-8 md:mb-14 capitalize text-center"])}
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ y: "100px", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {data.map((product) => (
            <FollowersProductCard key={product.id} data={product} />
          ))}
        </div>

        {viewAllLink && (
          <div className="w-full text-center">
            <Link
              href={viewAllLink}
              className="w-full inline-block sm:w-[218px] px-[54px] py-4 border rounded-full hover:bg-black hover:text-white text-black transition-all font-medium text-sm sm:text-base border-black/10"
            >
              Ver Todos
            </Link>
          </div>
        )}
      </motion.div>
    </section>
  )
}

export default FollowersSection

