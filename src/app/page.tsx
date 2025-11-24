export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-[#0D4B8C]">Pronto Volvemos</h1>
          <p className="text-lg md:text-xl text-gray-600">
            Estamos trabajando en algo increíble. Regresa pronto para descubrir las novedades.
          </p>
        </div>

        <div className="flex items-center justify-center gap-2">
          <div className="h-2 w-2 rounded-full bg-[#0D4B8C] animate-pulse" style={{ animationDelay: "0ms" }} />
          <div className="h-2 w-2 rounded-full bg-[#0D4B8C] animate-pulse" style={{ animationDelay: "200ms" }} />
          <div className="h-2 w-2 rounded-full bg-[#0D4B8C] animate-pulse" style={{ animationDelay: "400ms" }} />
        </div>
      </div>
    </div>
  )
}
