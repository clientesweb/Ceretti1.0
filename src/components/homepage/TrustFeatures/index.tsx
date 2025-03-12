import * as motion from "framer-motion/client"
import { cn } from "@/lib/utils"
import { integralCF } from "@/styles/fonts"
import TrustCard from "./TrustCard"

const trustFeaturesData = [
  {
    id: 1,
    title: "SERVICIOS 100% SEGUROS",
    description: "Sin baneos ni shadow-bans",
    iconUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/frame-1654503804702_56x_4d1805a2-6a9e-431c-8284-73a7af4c0eb5-nFdJ8dQ0aBOJiEQOfiUa9auGCqvo8Q.png",
  },
  {
    id: 2,
    title: "PAGO SEGURO",
    description: "Transacciones Encriptadas",
    iconUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/frame-1-1654503768600_56x_aae6ae13-b8bb-4296-b132-260dee1b523e-3nvp8XCevxcQwBVEfB844P3TddJiHR.png",
  },
  {
    id: 3,
    title: "GARANTÍA EXTENDIDA",
    description: "Servicios estables y garantizados",
    iconUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/frame-2-1654503818128_56x_d3a54829-1282-4cbe-8477-a83367993ed5-I0SV0PtrIEnq9CqKySgBb1nvHtjsZ2.png",
  },
  {
    id: 4,
    title: "EFICACIA GARANTIZADA",
    description: "+23.000 Ordenes entregadas",
    iconUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/frame-3-1654503832241_56x_94c0808e-8fb1-47bb-811b-09c6dd84a17b-ULwaxOd4RqEwFbABoTsAhyCoRqBVxk.png",
  },
]

const TrustFeatures = () => {
  return (
    <section className="my-12 md:my-16 px-4 xl:px-0">
      <div className="max-w-frame mx-auto">
        <motion.h2
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={cn([
            integralCF.className,
            "text-[32px] leading-[36px] md:text-5xl mb-8 md:mb-14 text-center capitalize",
          ])}
        >
          POR QUÉ ELEGIRNOS
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustFeaturesData.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ y: "100px", opacity: 0 }}
              whileInView={{ y: "0", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <TrustCard title={feature.title} description={feature.description} iconUrl={feature.iconUrl} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustFeatures

