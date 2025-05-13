import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const FaqContent = () => {
  return (
    <section>
      <h3 className="text-xl sm:text-2xl font-bold text-black mb-5 sm:mb-6">Preguntas Frecuentes</h3>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left">¿Cuánto tiempo tarda en completarse el servicio?</AccordionTrigger>
          <AccordionContent>
            El tiempo de entrega varía según la cantidad solicitada, pero generalmente se completa entre 1-3 días para
            pedidos estándar. Los pedidos más grandes pueden tomar hasta 5-7 días para garantizar una distribución
            natural.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left">¿Es seguro para mi cuenta?</AccordionTrigger>
          <AccordionContent>
            Sí, nuestro servicio es 100% seguro. Utilizamos métodos que cumplen con las políticas de la plataforma y
            nunca solicitamos contraseñas ni acceso a tu cuenta. Trabajamos con perfiles reales y entrega gradual para
            mantener la seguridad de tu cuenta.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left">
            ¿Qué información necesito proporcionar para iniciar el servicio?
          </AccordionTrigger>
          <AccordionContent>
            Solo necesitamos el enlace a tu perfil o publicación donde deseas el servicio. Es importante que tu perfil
            esté en público durante todo el proceso. No requerimos contraseñas ni información sensible.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-left">
            ¿Qué sucede si pierdo algunos seguidores/likes después de la entrega?
          </AccordionTrigger>
          <AccordionContent>
            Ofrecemos una garantía de reposición de 30 días. Si experimentas una caída en el número de seguidores/likes
            durante este período, nos comprometemos a reponerlos sin costo adicional. Simplemente contáctanos con los
            detalles de tu pedido.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="text-left">
            ¿Puedo solicitar un reembolso si no estoy satisfecho?
          </AccordionTrigger>
          <AccordionContent>
            Nuestra prioridad es tu satisfacción. Si no estás conforme con el servicio, trabajaremos para resolver
            cualquier problema. Ofrecemos reembolsos parciales o totales según cada caso, siempre que se soliciten
            dentro de los primeros 7 días después de completar el servicio.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger className="text-left">¿Cómo puedo hacer seguimiento de mi pedido?</AccordionTrigger>
          <AccordionContent>
            Una vez confirmado tu pedido, recibirás actualizaciones regulares sobre el progreso. También puedes
            contactarnos en cualquier momento para solicitar información actualizada sobre el estado de tu servicio.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default FaqContent
