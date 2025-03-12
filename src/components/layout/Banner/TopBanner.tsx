import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const TopBanner = () => {
  return (
    <div className="bg-ceretti-blue text-white text-center py-2 px-2 sm:px-4 xl:px-0">
      <div className="relative max-w-frame mx-auto">
        <p className="text-xs sm:text-sm">
          ¡No esperes más para destacar en redes sociales!{" "}
          <Link href="#" className="underline font-medium">
            Regístrate ahora
          </Link>
        </p>
        <Button
          variant="ghost"
          className="hover:bg-transparent absolute right-0 top-1/2 -translate-y-1/2 w-fit h-fit p-1 hidden sm:flex"
          size="icon"
          type="button"
          aria-label="cerrar banner"
        >
          <Image priority src="/icons/times.svg" height={13} width={13} alt="cerrar banner" />
        </Button>
      </div>
    </div>
  )
}

export default TopBanner

