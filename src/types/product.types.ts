export type Discount = {
  amount: number
  percentage: number
}

export type Product = {
  id: number
  title: string
  description?: string
  srcUrl: string
  gallery?: string[]
  price: number
  discount: Discount
  rating: number
  platform?: string
}

export type QuantityOption = {
  value: string
  label: string
  price: number
  bonus: string
}

export type GeoType = "calidad" | "mundial"

