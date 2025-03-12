"use client"

import { useState } from "react"
import Rating from "../ui/Rating"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAppDispatch } from "@/lib/hooks/redux"
import { addToCart } from "@/lib/features/carts/cartsSlice"

type FollowersOption = {
  amount: number
  price: number
  bonuses?: string
}

type QualityOption = {
  id: string
  name: string
  followers: FollowersOption[]
}

type FollowersProductCardProps = {
  data: {
    id: number
    title: string
    srcUrl: string
    rating: number
    qualityOptions: QualityOption[]
  }
}

const FollowersProductCard = ({ data }: FollowersProductCardProps) => {
  const [selectedQuality, setSelectedQuality] = useState<string>(data.qualityOptions[0].id)
  const [selectedFollowers, setSelectedFollowers] = useState<string>("100")
  const dispatch = useAppDispatch()

  const currentQualityOption = data.qualityOptions.find((option) => option.id === selectedQuality)
  const currentFollowersOption = currentQualityOption?.followers.find(
    (option) => option.amount === Number.parseInt(selectedFollowers),
  )

  const handleAddToCart = () => {
    if (!currentQualityOption || !currentFollowersOption) return

    dispatch(
      addToCart({
        id: data.id,
        name: `${data.title} - ${currentFollowersOption.amount} seguidores (${currentQualityOption.name})`,
        srcUrl: data.srcUrl,
        price: currentFollowersOption.price,
        attributes: [currentQualityOption.name, `${currentFollowersOption.amount} seguidores`],
        discount: { amount: 0, percentage: 0 },
        quantity: 1,
      }),
    )
  }

  return (
    <div className="flex flex-col border border-black/10 rounded-[20px] p-4 h-full">
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="bg-[#F0EEED] rounded-[13px] w-full md:w-1/3 aspect-square overflow-hidden">
          <Image
            src={data.srcUrl || "/placeholder.svg"}
            width={295}
            height={298}
            className="rounded-md w-full h-full object-contain hover:scale-110 transition-all duration-500"
            alt={data.title}
            priority
          />
        </div>

        <div className="flex flex-col w-full md:w-2/3">
          <h3 className="text-black font-bold text-xl mb-2">{data.title}</h3>

          <div className="flex items-end mb-2">
            <Rating
              initialValue={data.rating}
              allowFraction
              SVGclassName="inline-block"
              emptyClassName="fill-gray-50"
              size={19}
              readonly
            />
            <span className="text-black text-xs ml-[11px] pb-0.5">
              {data.rating.toFixed(1)}
              <span className="text-black/60">/5</span>
            </span>
          </div>

          <div className="mt-2 mb-4">
            <RadioGroup
              defaultValue={selectedQuality}
              onValueChange={setSelectedQuality}
              className="flex flex-col space-y-2"
            >
              {data.qualityOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.id} id={option.id} />
                  <Label htmlFor={option.id} className="cursor-pointer">
                    {option.name}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="mb-4">
            <Select defaultValue={selectedFollowers} onValueChange={setSelectedFollowers}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Seleccionar cantidad" />
              </SelectTrigger>
              <SelectContent>
                {currentQualityOption?.followers.map((option) => (
                  <SelectItem key={option.amount} value={option.amount.toString()}>
                    {option.amount} seguidores {option.bonuses ? `+ ${option.bonuses}` : ""}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {currentFollowersOption && (
            <div className="mt-auto">
              <div className="flex items-center space-x-2 mb-3">
                <span className="font-bold text-black text-2xl">
                  ${currentFollowersOption.price.toLocaleString("es-AR")}
                </span>
              </div>

              {currentFollowersOption.bonuses && (
                <div className="bg-ceretti-blue/10 text-ceretti-blue rounded-lg p-2 mb-3 text-sm">
                  <span className="font-medium">Bonificación:</span> {currentFollowersOption.bonuses}
                </div>
              )}

              <Button onClick={handleAddToCart} className="w-full bg-ceretti-blue hover:bg-ceretti-blue/80 text-white">
                Agregar al carrito
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default FollowersProductCard

