import { Check } from "lucide-react"

const ProductDetails = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium mb-3">Características del servicio</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Inicio inmediato tras confirmación</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Distribución gradual y natural</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Perfiles de alta calidad</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Garantía de reposición (30 días)</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium mb-3">Proceso de entrega</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Tiempo de entrega: 1-3 días</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Seguimiento en tiempo real</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Notificación al completar</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Soporte 24/7</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium mb-3">Especificaciones técnicas</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
          <div className="flex justify-between border-b border-gray-200 py-2">
            <span className="text-gray-600">Tipo de servicio:</span>
            <span className="font-medium">Premium</span>
          </div>
          <div className="flex justify-between border-b border-gray-200 py-2">
            <span className="text-gray-600">Velocidad de entrega:</span>
            <span className="font-medium">Gradual</span>
          </div>
          <div className="flex justify-between border-b border-gray-200 py-2">
            <span className="text-gray-600">Calidad de perfiles:</span>
            <span className="font-medium">Alta</span>
          </div>
          <div className="flex justify-between border-b border-gray-200 py-2">
            <span className="text-gray-600">Retención:</span>
            <span className="font-medium">Excelente</span>
          </div>
          <div className="flex justify-between border-b border-gray-200 py-2">
            <span className="text-gray-600">Soporte:</span>
            <span className="font-medium">Personalizado</span>
          </div>
          <div className="flex justify-between border-b border-gray-200 py-2">
            <span className="text-gray-600">Garantía:</span>
            <span className="font-medium">30 días</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
