import Image from "next/image"

const brandsData: { id: string; srcUrl: string }[] = [
  {
    id: "instagram",
    srcUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IG_1-7BrA6yWbVo8CafAOZXPEsL8uM24Z8R.png",
  },
  {
    id: "facebook",
    srcUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB-xLU7w8RTG58dvQD05HuNVqha1b7jnG.png",
  },
  {
    id: "tiktok",
    srcUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TT-AgHz60BLdeX0l8fzh0XxCO6oLYXCFm.png",
  },
  {
    id: "youtube",
    srcUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/YT-A1iIs9gY9XkDEgco1Nt91aN1ldy6mo.png",
  },
  {
    id: "spotify",
    srcUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SP-vUA72D0pIh1RxzlsCv6IEItY44xNkR.png",
  },
]

const Brands = () => {
  return (
    <div className="bg-ceretti-blue relative overflow-hidden">
      {/* Picas decorativas */}
      <div className="absolute top-0 left-0 w-4 h-4 bg-ceretti-lightBlue/20 rounded-full" />
      <div className="absolute top-8 left-12 w-2 h-2 bg-ceretti-lightBlue/20 rounded-full" />
      <div className="absolute bottom-4 right-8 w-3 h-3 bg-ceretti-lightBlue/20 rounded-full" />
      <div className="absolute top-6 right-24 w-2 h-2 bg-ceretti-lightBlue/20 rounded-full" />

      <div className="max-w-frame mx-auto flex flex-wrap items-center justify-center md:justify-between py-5 md:py-0 sm:px-4 xl:px-0 space-x-7">
        {brandsData.map((brand) => (
          <div key={brand.id} className="relative group cursor-pointer">
            <div className="absolute -inset-2 bg-ceretti-lightBlue/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Image
              priority
              src={brand.srcUrl || "/placeholder.svg"}
              height={40}
              width={40}
              alt={brand.id}
              className="h-8 w-8 md:h-10 md:w-10 my-5 md:my-11 object-contain relative"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Brands

