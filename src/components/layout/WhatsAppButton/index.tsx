"use client"

import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"

const WhatsAppButton = () => {
  const whatsappNumber = "542262325666"
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hola%20Ceretti%20Management,%20me%20gustaría%20conocer%20más%20sobre%20vuestros%20servicios.`

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp size={24} />
    </Link>
  )
}

export default WhatsAppButton
