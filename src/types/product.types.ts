export type Discount = {
  amount: number
  percentage: number
}

export type Product = {
  id: number
  title: string
  description?: string
  longDescription?: string
  srcUrl: string
  gallery?: string[]
  price: number
  discount: Discount
  rating: number
  platform?: string
  category?: string
  features?: string[]
}

