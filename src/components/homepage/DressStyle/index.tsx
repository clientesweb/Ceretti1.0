import { cn } from "@/lib/utils"
import { integralCF } from "@/styles/fonts"
import * as motion from "framer-motion/client"

const platformsData = [
  {
    id: 1,
    title: "Instagram",
    url: "/shop?platform=instagram",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL_E2024-05-2405.21.06-Asquareaspectratioimagefeaturinga3DInstagramlogoinspiredbytheprovidedreference.ThelogohastheclassicInstagramgradientwiththewhi-4Af8AiOp6ugrokyImESdpfoNsRJ1UW.jpeg",
    description: "Impulsa tu presencia en Instagram",
  },
  {
    id: 2,
    title: "Facebook",
    url: "/shop?platform=facebook",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL_E_2024-05-24_06.38.59_-_A_square_aspect_ratio_image_featuring_a_3D_Facebook_logo_inspired_by_the_provided_reference._The_logo_has_the_classic_blue_circle_with_a_white_f_ico-fePHK9IZItSvCkUW1Gm6uf8R0nUCiL.jpeg",
    description: "Destaca en Facebook",
  },
  {
    id: 3,
    title: "TikTok",
    url: "/shop?platform=tiktok",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL_E2024-05-2406.23.54-Asquareaspectratioimagefeaturinga3DTikToklogoinspiredbytheprovidedreference.ThelogohastheclassicTikTokcolorswiththeblack_red-JGNGrEBEfo0cdBP1gAHkOBk9c1uwAL.jpeg",
    description: "Viralízate en TikTok",
  },
  {
    id: 4,
    title: "YouTube",
    url: "/shop?platform=youtube",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL_E2024-05-2403.06.32-Asquareaspectratioimagefeaturinga3DYouTubelogoinspiredbytheprovidedreference.Thelogoisredwithawhiteplayicon_elongatedhorizont_7b5b1c01-8f04-4df1-bfb0-f6aa66a2f82f-XWNWNh4DxwyZRIqrY7RyPHExLZ5L5s.jpeg",
    description: "Crece en YouTube",
  },
  {
    id: 5,
    title: "Spotify",
    url: "/shop?platform=spotify",
    image: "/images/spotify-3d-logo.png",
    description: "Potencia tu música",
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
          {platformsData.map((platform, index) => (
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
                  src={platform.image || "/placeholder.svg"}
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

