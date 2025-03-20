import { instagramCategories, getProductsByCategory } from "../instagram-services"
import { cn } from "@/lib/utils"
import { integralCF } from "@/styles/fonts"
import ProductCard from "@/components/common/ProductCard"
import Link from "next/link"
import * as motion from "framer-motion/client"

export default function InstagramServicesPage() {
  return (
    <main className="pb-20">
      <div className="bg-[#F2F0F1] py-12 md:py-20 overflow-hidden relative mb-10">
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
            SERVICIOS PARA INSTAGRAM
          </motion.h1>
          <motion.p
            initial={{ y: "50px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-black/60 text-sm lg:text-base mb-6 lg:mb-8 max-w-[700px] mx-auto"
          >
            Impulsa tu presencia en Instagram con nuestros servicios de calidad mundial. Todos nuestros servicios
            incluyen 30 días de garantía ante caídas (1% ~ 5%).
          </motion.p>
        </div>
      </div>

      <div className="max-w-frame mx-auto px-4 xl:px-0">
        {instagramCategories.map((category, index) => (
          <section key={category.id} className="mb-16">
            <motion.h2
              initial={{ y: "50px", opacity: 0 }}
              whileInView={{ y: "0", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={cn([integralCF.className, "text-2xl md:text-4xl mb-6 md:mb-8"])}
            >
              {category.name}
            </motion.h2>
            <motion.div
              initial={{ y: "50px", opacity: 0 }}
              whileInView={{ y: "0", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {getProductsByCategory(category.id)
                .slice(0, 4)
                .map((product) => (
                  <ProductCard key={product.id} data={product} />
                ))}
            </motion.div>
            {getProductsByCategory(category.id).length > 4 && (
              <div className="mt-8 text-center">
                <Link
                  href={`/instagram/${category.id}`}
                  className="inline-block px-8 py-3 border border-black/10 rounded-full hover:bg-ceretti-blue hover:text-white hover:border-ceretti-blue transition-all"
                >
                  Ver todos los {category.name.toLowerCase()}
                </Link>
              </div>
            )}
          </section>
        ))}

        <div className="mt-16 p-8 bg-ceretti-blue/10 rounded-2xl text-center">
          <h2 className={cn([integralCF.className, "text-2xl md:text-3xl mb-4"])}>GARANTÍA DE CALIDAD</h2>
          <p className="text-lg mb-6">Todos nuestros servicios incluyen 30 días de garantía ante caídas (1% ~ 5%).</p>
          <Link
            href="/contacto"
            className="inline-block px-8 py-3 bg-ceretti-blue text-white rounded-full hover:bg-ceretti-blue/80 transition-all"
          >
            ¿Tienes dudas? Contáctanos
          </Link>
        </div>
      </div>
    </main>
  )
}

