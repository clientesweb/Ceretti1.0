import ProductDetails from "./ProductDetails"

const ProductDetailsContent = () => {
  return (
    <section>
      <h3 className="text-xl sm:text-2xl font-bold text-black mb-5 sm:mb-6">Especificaciones del Producto</h3>
      <ProductDetails />

      <div className="mt-8 space-y-6">
        <div>
          <h4 className="text-lg font-bold mb-2">Requisitos para el servicio:</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Tu perfil debe estar en <strong>público</strong> durante todo el proceso.
            </li>
            <li>
              Proporcionar el <strong>link de tu perfil</strong> o publicación donde deseas el servicio.
            </li>
            <li>No cambiar el nombre de usuario durante el proceso.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-2">Beneficios:</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Servicio 100% seguro para tu cuenta.</li>
            <li>Entrega gradual para mayor naturalidad.</li>
            <li>Soporte personalizado durante todo el proceso.</li>
            <li>Garantía de reposición en caso de caída.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-2">Métodos de pago aceptados:</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Transferencia bancaria</li>
            <li>Mercado Pago</li>
            <li>PayPal</li>
            <li>Criptomonedas (Bitcoin, Ethereum, USDT)</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="text-lg font-bold mb-2 text-ceretti-blue">Información importante:</h4>
          <p>
            Una vez realizado el pago, envíanos un mensaje con tu comprobante y los detalles de tu pedido para comenzar
            el proceso inmediatamente.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProductDetailsContent
