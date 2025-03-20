import { cn } from "@/lib/utils"
import { integralCF } from "@/styles/fonts"
import * as motion from "framer-motion/client"

const ShopHeader = () => {
  return (
    <div className="bg-[#F2F0F1] py-12 md:py-20 overflow-hidden relative">
      {/* Picas decorativas */}
      <div className="absolute top-12 left-8 w-4 h-4 bg-ceretti-blue/20 rounded-full" />
      <div className="absolute top-24 left-24 w-2 h-2 bg-ceretti-blue/20 rounded-full" />
      <div className="absolute bottom-8 right-16 w-3 h-3 bg-ceretti-blue/20 rounded-full" />
      <div className="absolute top-16 right-32 w-2 h-2 bg-ceretti-blue/20 rounded-full" />

      <div className="max-w-frame mx-auto px-4 xl:px-0 text-center">
        <motion.h1
          initial={{ y: "50px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={cn([integralCF.className, "text-4xl lg:text-[64px] lg:leading-[64px] mb-5 lg:mb-8"])}
        >
          NUESTROS SERVICIOS
        </motion.h1>
        <motion.p
          initial={{ y: "50px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-black/60 text-sm lg:text-base mb-6 lg:mb-8 max-w-[700px] mx-auto"
        >
          Explora nuestra amplia gama de servicios diseñados para impulsar tu presencia en redes sociales. Desde
          seguidores hasta likes, comentarios y visualizaciones, tenemos todo lo que necesitas para destacar en el mundo
          digital.
        </motion.p>
      </div>
    </div>
  )
}

export default ShopHeader

