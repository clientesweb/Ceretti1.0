"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false)
  const phoneNumber = "5492262325666"
  const message = "¡Impulsa tus redes! Contáctanos"

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "absolute right-0 px-4 py-2 rounded-full bg-ceretti-blue text-white text-sm whitespace-nowrap transition-all duration-300",
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4",
        )}
        style={{ transform: isHovered ? "translateX(-100%)" : "translateX(-90%)" }}
      >
        ¡Impulsa tus redes! Contáctanos
      </div>
      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 border border-ceretti-blue/20">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E2%80%9CPNG%E2%80%9D.-Xrg8Ms25QKq73lQXFdacO7MILrKrdp.png"
          alt="CERETTI MGTM"
          className="w-10 h-10 object-contain"
        />
      </div>
    </a>
  )
}

export default WhatsAppButton

