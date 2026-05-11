export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center gap-4">
          <img src="/logo-fabri3d.png" className="w-16 h-16 object-contain" />
          <div>
            <h1 className="text-3xl font-black">Fabri3D</h1>
            <p className="text-gray-500">Impressão 3D • Projetos Personalizados</p>
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-semibold">
            Tecnologia & Criatividade
          </span>

          <h2 className="text-6xl font-black mt-6 mb-6 leading-tight">
            Transformando ideias em peças reais.
          </h2>

          <p className="text-lg text-gray-600 mb-8">
            A Fabri3D cria peças úteis, decorativas e personalizadas com impressão 3D de alta qualidade.
          </p>

          <div className="flex gap-4">
            <button className="bg-black text-white px-8 py-4 rounded-2xl font-bold">
              Ver Produtos
            </button>

            <button className="border-2 border-black px-8 py-4 rounded-2xl font-bold">
              Solicitar Orçamento
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-10 rounded-[40px] shadow-2xl">
          <div className="bg-white rounded-[30px] p-10">
            <img src="/logo-fabri3d.png" className="w-48 mx-auto mb-8" />

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 rounded-2xl p-5">
                <h3 className="font-bold">Peças Úteis</h3>
              </div>

              <div className="bg-gray-100 rounded-2xl p-5">
                <h3 className="font-bold">Projetos Personalizados</h3>
              </div>

              <div className="bg-gray-100 rounded-2xl p-5">
                <h3 className="font-bold">Alta Precisão</h3>
              </div>

              <div className="bg-gray-100 rounded-2xl p-5">
                <h3 className="font-bold">Envio para todo Brasil</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
