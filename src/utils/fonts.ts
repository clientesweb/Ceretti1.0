import { Inter, Poppins } from "next/font/google"
import localFont from "next/font/local"

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const integralCF = localFont({
  src: [
    {
      path: "../fonts/IntegralCF-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/IntegralCF-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/IntegralCF-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
})

