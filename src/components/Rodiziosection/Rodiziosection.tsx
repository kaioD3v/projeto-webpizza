interface RodizioSectionProps {
  onBook: () => void;
}

export default function RodizioSection({ onBook }: RodizioSectionProps) {
  const items = [
    { icon: "🍕", title: "Pizzas sem parar", desc: "Rodadas contínuas de pizzas artesanais saindo diretamente do forno de pedra para a sua mesa. Mais de 18 sabores por noite." },
    { icon: "🫒", title: "Ingredientes selecionados", desc: "Cada pizza é feita com massa de fermentação lenta de 48h e ingredientes escolhidos semanalmente." },
    { icon: "🍷", title: "Harmonização inclusa", desc: "Sommelier da casa sugere a bebida ideal para acompanhar cada rodada. Vinho, cerveja artesanal ou suco de uva orgânico." },
    { icon: "⏱️", title: "Duração de 2h30", desc: "Tempo suficiente para aproveitar sem pressa. Começa com entrada de focaccia e termina com sobremesa da casa." },
  ];

  return (
    <section className="bg-[#0e0b07] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Imagem */}
          <div className="relative group order-2 lg:order-1">
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900&q=80"
                alt="Rodízio de Pizzas"
                className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            {/* Badge flutuante */}
            <div className="absolute -bottom-5 -right-5 bg-amber-500 text-black p-5 shadow-2xl">
              <p className="text-3xl font-black leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>R$ 89</p>
              <p className="text-xs tracking-widest uppercase font-bold mt-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>por pessoa</p>
            </div>
            {/* Detalhe decorativo */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-amber-700/40" />
            <div className="absolute -bottom-8 -right-8 w-16 h-16 border-b-2 border-r-2 border-amber-700/40" />
          </div>

          {/* Texto */}
          <div className="order-1 lg:order-2">
            <p className="text-amber-500 tracking-[0.5em] uppercase text-xs mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Experiência 01
            </p>
            <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Rodízio{" "}
              <span className="text-amber-400 italic font-light block">Artesanal</span>
            </h2>
            <div className="w-10 h-px bg-amber-600 mb-6" />
            <p className="text-stone-300 text-lg leading-relaxed mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              O rodízio da La Massie não é buffet — é serviço de mesa. Cada pizza chega inteira, cortada na frente de você, com o pizzaiolo explicando os ingredientes. É uma experiência gastronômica completa, não apenas uma refeição.
            </p>
            <p className="text-stone-400 text-base leading-relaxed mb-10"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Disponível às <strong className="text-white">quintas, sextas e sábados</strong>, a partir das 19h. Grupos de 2 a 12 pessoas. Reserva obrigatória com pelo menos 48h de antecedência.
            </p>

            {/* Itens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {items.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="text-xl mt-0.5 flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-white text-sm font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {item.title}
                    </p>
                    <p className="text-stone-500 text-xs leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={onBook}
              className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-bold tracking-widest uppercase text-sm px-8 py-4 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.35)]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Marcar meu Rodízio
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}