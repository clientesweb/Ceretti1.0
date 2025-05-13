import { cn } from "@/lib/utils"
import { integralCF } from "@/styles/fonts"
import * as motion from "framer-motion/client"

const data = [
  {
    id: 1,
    title: "Instagram",
    description: "Impulsa tu presencia en Instagram con nuestros servicios de seguidores, likes, visitas y más.",
    imgSrc: "/images/instagram-3d-logo.png",
    link: "/shop?platform=instagram",
  },
  {
    id: 2,
    title: "YouTube",
    description: "Aumenta tus suscriptores, visitas y engagement en YouTube con nuestros servicios de calidad.",
    imgSrc: "/images/youtube-3d-logo.png",
    link: "/shop?platform=youtube",
  },
  {
    id: 3,
    title: "TikTok",
    description: "Haz crecer tu cuenta de TikTok con seguidores, likes y visitas de calidad.",
    imgSrc: "/images/tiktok-3d-logo.png",
    link: "/shop?platform=tiktok",
  },
  {
    id: 4,
    title: "Spotify",
    description: "Mejora tu presencia en Spotify con reproducciones, seguidores y oyentes mensuales.",
    imgSrc: "/images/spotify-3d-logo.png",
    link: "/shop?platform=spotify",
  },
  {
    id: 5,
    title: "Threads",
    description: "Impulsa tu cuenta de Threads con seguidores y likes de calidad.",
    imgSrc: "/images/threads-logo.png",
    link: "/shop?platform=threads",
  },
  {
    id: 6,
    title: "SoundCloud",
    description: "Aumenta tu presencia en SoundCloud con reproducciones, seguidores y likes.",
    imgSrc: "/images/soundcloud-logo.png",
    link: "/shop?platform=soundcloud",
  },
]

const DressStyle = () => {
  return (
    <div className="px-4 xl:px-0">
      <section className="max-w-frame mx-auto bg-[#F0F0F0] px-6 pb-6 pt-10 md:p-[70px] rounded-[40px] text-center">
        <motion.h2
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={cn([integralCF.className, "text-[32px] leading-[36px] md:text-5xl mb-8 md:mb-14 capitalize"])}
        >
          EXPLORA POR PLATAFORMA
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {data.map((platform, index) => (
            <motion.div
              key={platform.id}
              initial={{ y: "100px", opacity: 0 }}
              whileInView={{ y: "0", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-square overflow-hidden bg-black rounded-2xl">
                <img
                  src={platform.imgSrc || "/placeholder.svg"}
                  alt={platform.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{platform.title}</h3>
                  <p className="text-sm opacity-90">{platform.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default DressStyle
