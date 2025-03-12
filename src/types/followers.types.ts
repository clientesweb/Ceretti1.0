import type { Product } from "./product.types"

export type FollowersOption = {
  amount: number
  price: number
  bonuses?: string
}

export type QualityOption = {
  id: string
  name: string
  followers: FollowersOption[]
}

// Extendemos la interfaz Product para incluir las opciones de seguidores
export interface FollowersProduct extends Product {
  qualityOptions: QualityOption[]
}

