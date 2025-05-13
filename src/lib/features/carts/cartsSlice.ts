import { compareArrays } from "@/lib/utils"
import type { Discount } from "@/types/product.types"
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

const calcAdjustedTotalPrice = (totalPrice: number, data: CartItem, quantity?: number): number => {
  return (
    (totalPrice + data.discount.percentage > 0
      ? Math.round(data.price - (data.price * data.discount.percentage) / 100)
      : data.discount.amount > 0
        ? Math.round(data.price - data.discount.amount)
        : data.price) * (quantity ? quantity : data.quantity)
  )
}

export type RemoveCartItem = {
  id: number
  attributes: string[]
}

export type CartItem = {
  id: number
  name: string
  srcUrl: string
  price: number
  attributes: string[]
  discount: Discount
  quantity: number
}

export type Cart = {
  items: CartItem[]
  totalQuantities: number
}

export type Coupon = {
  code: string
  discountPercentage: number
}

// Lista de cupones disponibles
export const availableCoupons: Coupon[] = [
  { code: "POTENCIADO", discountPercentage: 10 },
  { code: "FAMILIATT", discountPercentage: 10 },
  { code: "REVENDEDOR5", discountPercentage: 5 },
  { code: "REVENDEDOR10", discountPercentage: 10 },
  { code: "REVENDEDOR15", discountPercentage: 15 },
  { code: "REVENDEDOR20", discountPercentage: 20 },
  { code: "REVENDEDOR25", discountPercentage: 25 },
]

// Define a type for the slice state
interface CartsState {
  cart: Cart | null
  totalPrice: number
  adjustedTotalPrice: number
  action: "update" | "add" | "delete" | null
  appliedCoupon: Coupon | null
  couponDiscount: number
}

// Define the initial state using that type
const initialState: CartsState = {
  cart: null,
  totalPrice: 0,
  adjustedTotalPrice: 0,
  action: null,
  appliedCoupon: null,
  couponDiscount: 0,
}

// Función auxiliar para calcular el precio con descuento de productos
const calculateProductDiscountedPrice = (cart: Cart | null): number => {
  if (!cart) return 0

  return cart.items.reduce((total, item) => {
    const itemPrice =
      item.discount.percentage > 0
        ? Math.round(item.price - (item.price * item.discount.percentage) / 100)
        : item.discount.amount > 0
          ? Math.round(item.price - item.discount.amount)
          : item.price
    return total + itemPrice * item.quantity
  }, 0)
}

export const cartsSlice = createSlice({
  name: "carts",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      // if cart is empty then add
      if (state.cart === null) {
        state.cart = {
          items: [action.payload],
          totalQuantities: action.payload.quantity,
        }
        state.totalPrice = action.payload.price * action.payload.quantity

        // Calcular precio ajustado sin cupón
        const itemPrice =
          action.payload.discount.percentage > 0
            ? Math.round(action.payload.price - (action.payload.price * action.payload.discount.percentage) / 100)
            : action.payload.discount.amount > 0
              ? Math.round(action.payload.price - action.payload.discount.amount)
              : action.payload.price

        state.adjustedTotalPrice = itemPrice * action.payload.quantity

        // Recalcular el descuento del cupón si hay uno aplicado
        if (state.appliedCoupon) {
          state.couponDiscount = Math.round((state.adjustedTotalPrice * state.appliedCoupon.discountPercentage) / 100)
          state.adjustedTotalPrice = state.adjustedTotalPrice - state.couponDiscount
        }
        return
      }

      // check item in cart
      const isItemInCart = state.cart.items.find(
        (item) => action.payload.id === item.id && compareArrays(action.payload.attributes, item.attributes),
      )

      if (isItemInCart) {
        state.cart = {
          ...state.cart,
          items: state.cart.items.map((eachCartItem) => {
            if (
              eachCartItem.id === action.payload.id
                ? !compareArrays(eachCartItem.attributes, isItemInCart.attributes)
                : eachCartItem.id !== action.payload.id
            )
              return eachCartItem

            return {
              ...isItemInCart,
              quantity: action.payload.quantity + isItemInCart.quantity,
            }
          }),
          totalQuantities: state.cart.totalQuantities + action.payload.quantity,
        }
        state.totalPrice = state.totalPrice + action.payload.price * action.payload.quantity

        // Recalcular el precio ajustado completo
        state.adjustedTotalPrice = calculateProductDiscountedPrice(state.cart)

        // Recalcular el descuento del cupón si hay uno aplicado
        if (state.appliedCoupon) {
          state.couponDiscount = Math.round((state.adjustedTotalPrice * state.appliedCoupon.discountPercentage) / 100)
          state.adjustedTotalPrice = state.adjustedTotalPrice - state.couponDiscount
        }
        return
      }

      state.cart = {
        ...state.cart,
        items: [...state.cart.items, action.payload],
        totalQuantities: state.cart.totalQuantities + action.payload.quantity,
      }
      state.totalPrice = state.totalPrice + action.payload.price * action.payload.quantity

      // Recalcular el precio ajustado completo
      state.adjustedTotalPrice = calculateProductDiscountedPrice(state.cart)

      // Recalcular el descuento del cupón si hay uno aplicado
      if (state.appliedCoupon) {
        state.couponDiscount = Math.round((state.adjustedTotalPrice * state.appliedCoupon.discountPercentage) / 100)
        state.adjustedTotalPrice = state.adjustedTotalPrice - state.couponDiscount
      }
    },
    removeCartItem: (state, action: PayloadAction<RemoveCartItem>) => {
      if (state.cart === null) return

      // check item in cart
      const isItemInCart = state.cart.items.find(
        (item) => action.payload.id === item.id && compareArrays(action.payload.attributes, item.attributes),
      )

      if (isItemInCart) {
        state.cart = {
          ...state.cart,
          items: state.cart.items
            .map((eachCartItem) => {
              if (
                eachCartItem.id === action.payload.id
                  ? !compareArrays(eachCartItem.attributes, isItemInCart.attributes)
                  : eachCartItem.id !== action.payload.id
              )
                return eachCartItem

              return {
                ...isItemInCart,
                quantity: eachCartItem.quantity - 1,
              }
            })
            .filter((item) => item.quantity > 0),
          totalQuantities: state.cart.totalQuantities - 1,
        }

        state.totalPrice = state.totalPrice - isItemInCart.price * 1

        // Recalcular el precio ajustado completo
        state.adjustedTotalPrice = calculateProductDiscountedPrice(state.cart)

        // Recalcular el descuento del cupón si hay uno aplicado
        if (state.appliedCoupon) {
          state.couponDiscount = Math.round((state.adjustedTotalPrice * state.appliedCoupon.discountPercentage) / 100)
          state.adjustedTotalPrice = state.adjustedTotalPrice - state.couponDiscount
        }
      }
    },
    remove: (state, action: PayloadAction<RemoveCartItem & { quantity: number }>) => {
      if (!state.cart) return

      // check item in cart
      const isItemInCart = state.cart.items.find(
        (item) => action.payload.id === item.id && compareArrays(action.payload.attributes, item.attributes),
      )

      if (!isItemInCart) return

      state.cart = {
        ...state.cart,
        items: state.cart.items.filter((pItem) => {
          return pItem.id === action.payload.id
            ? !compareArrays(pItem.attributes, isItemInCart.attributes)
            : pItem.id !== action.payload.id
        }),
        totalQuantities: state.cart.totalQuantities - isItemInCart.quantity,
      }
      state.totalPrice = state.totalPrice - isItemInCart.price * isItemInCart.quantity

      // Recalcular el precio ajustado completo
      state.adjustedTotalPrice = calculateProductDiscountedPrice(state.cart)

      // Recalcular el descuento del cupón si hay uno aplicado
      if (state.appliedCoupon) {
        state.couponDiscount = Math.round((state.adjustedTotalPrice * state.appliedCoupon.discountPercentage) / 100)
        state.adjustedTotalPrice = state.adjustedTotalPrice - state.couponDiscount
      }
    },
    applyCoupon: (state, action: PayloadAction<string>) => {
      const couponCode = action.payload.trim().toUpperCase()
      const coupon = availableCoupons.find((c) => c.code === couponCode)

      if (coupon) {
        state.appliedCoupon = coupon

        // Calcular el precio con descuento de productos
        const productDiscountedPrice = calculateProductDiscountedPrice(state.cart)

        // Calcular el descuento del cupón
        state.couponDiscount = Math.round((productDiscountedPrice * coupon.discountPercentage) / 100)

        // Actualizar el precio ajustado
        state.adjustedTotalPrice = productDiscountedPrice - state.couponDiscount
      }
    },
    removeCoupon: (state) => {
      // Calcular el precio con descuento de productos sin el cupón
      state.adjustedTotalPrice = calculateProductDiscountedPrice(state.cart)
      state.appliedCoupon = null
      state.couponDiscount = 0
    },
    clearCart: (state) => {
      state.cart = null
      state.totalPrice = 0
      state.adjustedTotalPrice = 0
      state.action = null
      state.appliedCoupon = null
      state.couponDiscount = 0
    },
  },
})

export const { addToCart, removeCartItem, remove, clearCart, applyCoupon, removeCoupon } = cartsSlice.actions

export default cartsSlice.reducer
