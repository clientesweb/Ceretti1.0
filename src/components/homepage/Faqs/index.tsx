import * as motion from "framer-motion/client"
import { cn } from "@/lib/utils"
import { integralCF } from "@/styles/fonts"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqsData = [
  {
    id: 1,
    question: "¿Cómo garantizan la seguridad de mi cuenta?",
    answer:
      "Utilizamos métodos avanzados que respetan las políticas de cada plataforma. Nuestros servicios son 100% seguros y no requieren contraseñas ni acceso a tus cuentas. Trabajamos con técnicas orgánicas que simulan el comportamiento natural de usuarios reales, evitando cualquier riesgo de penalización.",
  },
  {
    id: 2,
    question: "¿Cuánto tiempo tardan en procesar mi pedido?",
    answer:
      "La mayoría de nuestros pedidos comienzan a procesarse en los primeros 30 minutos tras la confirmación del pago. Dependiendo del volumen y tipo de servicio, la entrega completa puede variar entre 24-72 horas. Para pedidos de gran volumen, ofrecemos entregas graduales que garantizan mayor naturalidad y seguridad.",
  },
  {
    id: 3,
    question: "¿Cómo aseguran la confidencialidad de mis datos?",
    answer:
      "Tu privacidad es nuestra prioridad. Utilizamos encriptación de nivel bancario para todas las transacciones y almacenamiento de datos. Nunca compartimos tu información con terceros y solo requerimos los datos mínimos necesarios para proporcionar nuestros servicios (como el nombre de usuario o URL pública).",
  },
  {
    id: 4,
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos múltiples métodos de pago para tu comodidad: tarjetas de crédito/débito (Visa, Mastercard), PayPal, transferencias bancarias, y criptomonedas (Bitcoin, Ethereum). Todas nuestras transacciones están protegidas con encriptación SSL para garantizar la seguridad de tus datos financieros.",
  },
  {
    id: 5,
    question: "¿Ofrecen algún tipo de garantía?",
    answer:
      "Sí, todos nuestros servicios incluyen garantía de reposición. Si experimentas una disminución en los resultados dentro de los 30 días posteriores a la entrega, repondremos la cantidad perdida sin costo adicional. Para servicios premium, ofrecemos garantías extendidas de hasta 60 días.",
  },
  {
    id: 6,
    question: "¿Cómo puedo contactar con el soporte?",
    answer:
      "Nuestro equipo de soporte está disponible 24/7 a través de múltiples canales: chat en vivo en nuestra web, correo electrónico (soporte@cerettimgtm.com), WhatsApp y Telegram. El tiempo promedio de respuesta es de menos de 2 horas, y garantizamos resolución de problemas en un máximo de 24 horas.",
  },
]

const Faqs = () => {
  return (
    <section className="my-16 md:my-24 px-4 xl:px-0 bg-[#F8F8F8] py-12 md:py-20">
      <div className="max-w-frame mx-auto">
        <motion.div
          initial={{ y: "50px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className={cn([integralCF.className, "text-[32px] leading-[36px] md:text-5xl mb-4 capitalize"])}>
            PREGUNTAS FRECUENTES
          </h2>
          <p className="text-black/60 max-w-2xl mx-auto">
            Resolvemos tus dudas para que puedas impulsar tu presencia digital con total confianza
          </p>
        </motion.div>

        <motion.div
          initial={{ y: "50px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqsData.map((faq) => (
              <AccordionItem key={faq.id} value={`faq-${faq.id}`} className="border-b border-black/10">
                <AccordionTrigger className="text-left font-bold text-base sm:text-lg py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-black/70 pb-5">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ y: "50px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-10 md:mt-16"
        >
          <a
            href="/contacto"
            className="inline-block bg-ceretti-blue hover:bg-ceretti-blue/80 transition-all text-white px-8 py-4 rounded-full hover:animate-pulse"
          >
            ¿Tienes más preguntas? Contáctanos
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Faqs

