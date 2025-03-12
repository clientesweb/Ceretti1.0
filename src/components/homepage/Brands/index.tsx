import Image from "next/image"

const brandsData: { id: string; srcUrl: string }[] = [
  {
    id: "instagram",
    srcUrl: "/icons/versace-logo.svg",
  },
  {
    id: "facebook",
    srcUrl: "/icons/zara-logo.svg",
  },
  {
    id: "tiktok",
    srcUrl: "/icons/gucci-logo.svg",
  },
  {
    id: "youtube",
    srcUrl: "/icons/prada-logo.svg",
  },
  {
    id: "twitter",
    srcUrl: "/icons/calvin-klein-logo.svg",
  },
]

const Brands = () => {
  return (
    <div className="bg-ceretti-blue">
      <div className="max-w-frame mx-auto flex flex-wrap items-center justify-center md:justify-between py-5 md:py-0 sm:px-4 xl:px-0 space-x-7">
        {brandsData.map((brand) => (
          <Image
            key={brand.id}
            priority
            src={brand.srcUrl || "/placeholder.svg"}
            height={0}
            width={0}
            alt={brand.id}
            className="h-auto w-auto max-w-[116px] lg:max-w-48 max-h-[26px] lg:max-h-9 my-5 md:my-11 invert"
          />
        ))}
      </div>
    </div>
  )
}

export default Brands

