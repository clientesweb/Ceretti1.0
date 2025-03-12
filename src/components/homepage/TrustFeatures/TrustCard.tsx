import Image from "next/image"

type TrustCardProps = {
  title: string
  description: string
  iconUrl: string
}

const TrustCard = ({ title, description, iconUrl }: TrustCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center text-center h-full">
      <div className="mb-4 relative w-16 h-16 flex items-center justify-center">
        <div className="absolute -inset-1 bg-ceretti-blue/10 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300" />
        <Image src={iconUrl || "/placeholder.svg"} alt={title} width={56} height={56} className="relative" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-black/60 text-sm">{description}</p>
    </div>
  )
}

export default TrustCard

