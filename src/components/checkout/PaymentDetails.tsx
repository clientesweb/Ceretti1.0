import { Alert, AlertDescription } from "@/components/ui/alert"
import { FaInfoCircle, FaWhatsapp, FaBitcoin, FaUniversity } from "react-icons/fa"

interface PaymentDetailsProps {
  method: string
}

export default function PaymentDetails({ method }: PaymentDetailsProps) {
  if (method === "transferencia") {
    return (
      <Alert className="bg-blue-50 border-blue-200">
        <FaUniversity className="h-4 w-4 text-blue-600 mr-2" />
        <AlertDescription className="text-blue-800">
          <p className="font-medium mb-2">Datos bancarios:</p>
          <p>Banco: Banco Nación Argentina</p>
          <p>Titular: CERETTI MGTM</p>
          <p>CBU: 0110000000000000000000</p>
          <p>Alias: CERETTI.MGTM</p>
          <p className="mt-2 text-sm">
            Una vez realizada la transferencia, recibirás un email con los detalles de tu compra y los próximos pasos.
          </p>
        </AlertDescription>
      </Alert>
    )
  }

  if (method === "cripto") {
    return (
      <Alert className="bg-purple-50 border-purple-200">
        <FaBitcoin className="h-4 w-4 text-purple-600 mr-2" />
        <AlertDescription className="text-purple-800">
          <p className="font-medium mb-2">Datos para pago con criptomonedas:</p>
          <p>Wallet Binance: CERETTI_MGTM</p>
          <p>Aceptamos: USDT, BTC, ETH, BNB</p>
          <p className="mt-2 text-sm">
            Una vez realizado el pago, recibirás un email con los detalles de tu compra y los próximos pasos.
          </p>
        </AlertDescription>
      </Alert>
    )
  }

  if (method === "whatsapp") {
    return (
      <Alert className="bg-green-50 border-green-200">
        <FaWhatsapp className="h-4 w-4 text-green-600 mr-2" />
        <AlertDescription className="text-green-800">
          <p className="font-medium mb-2">Contacto por WhatsApp:</p>
          <p>
            Al finalizar, serás redirigido a WhatsApp para contactar directamente con nuestro equipo al número +54 9
            2262 32-5666.
          </p>
          <p className="mt-2 text-sm">
            Se enviará automáticamente un mensaje con los detalles de tu pedido y podrás coordinar el pago directamente.
          </p>
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <Alert>
      <FaInfoCircle className="h-4 w-4 mr-2" />
      <AlertDescription>Selecciona un método de pago para ver los detalles.</AlertDescription>
    </Alert>
  )
}

