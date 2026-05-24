interface AniversarioSectionProps {
  onBook: () => void;
}

export default function AniversarioSection({ onBook }: AniversarioSectionProps) {
  const packages = [
    {
      name: "Festa Clássica",
      price: "R$ 1.890",
      desc: "Até 20 pessoas",
      items: ["Rodízio completo 3h", "Mesa decorada temática", "Bolo artesanal da casa", "Músico ao vivo (violão)"],
      highlight: false,
    },
    {
      name: "Festa Premium",
      price: "R$ 3.290",
      desc: "Até 40 pessoas",
      items: ["Rodízio completo 4h", "Salão privativo decorado", "Bolo personalizado", "Duo musical + decoração floral", "Fotógrafo 2h"],
      highlight: true,
    },
    {
      name: "Festa Exclusiva",
      price: "Sob consulta",
      desc: "Acima de 40 pessoas",
      items: ["Estrutura completa sob medida", "Cardápio personalizado", "Decoração temática exclusiva", "DJ ou banda ao vivo", "Coordenador dedicado"],
      highlight: false,
    },
  ];

  return (
    <section className="bg-[#0a0804] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Texto */}
          <div>
            <p className="text-amber-500 tracking-[0.5em] uppercase text-xs mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Experiência 02
            </p>
            <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Festa de{" "}
              <span className="text-amber-400 italic font-light block">Aniversário</span>
            </h2>
            <div className="w-10 h-px bg-amber-600 mb-6" />
            <p className="text-stone-300 text-lg leading-relaxed mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Celebrar anos de vida merece um cenário à altura. Na La Massie, transformamos nosso espaço no palco perfeito para o seu aniversário — com a mesma atenção que dedicamos a cada pizza que sai do nosso forno.
            </p>
            <p className="text-stone-400 text-base leading-relaxed mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Desde a decoração até o bolo artesanal, cada detalhe é pensado junto com você. Trabalhamos com três pacotes — ou criamos algo completamente personalizado para o seu momento.
            </p>
            <p className="text-stone-400 text-base leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Reservas com <strong className="text-white">mínimo 15 dias de antecedência</strong>. Disponível de quinta a domingo. Temos área externa coberta e salão privativo com capacidade para até 80 pessoas.
            </p>
          </div>

          {/* Imagem */}
          <div className="relative group">
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=900&q=80"
                alt="Festa de aniversário"
                className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-amber-700/40" />
            <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-amber-700/40" />
          </div>
        </div>

        {/* Pacotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative p-7 border transition-all duration-300 hover:-translate-y-1
                ${pkg.highlight
                  ? "border-amber-500 bg-amber-500/5 shadow-[0_0_40px_rgba(245,158,11,0.1)]"
                  : "border-amber-900/30 bg-[#13100a] hover:border-amber-800/50"}`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-[10px] font-bold tracking-widest uppercase px-4 py-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Mais escolhido
                </div>
              )}
              <p className="text-stone-400 text-xs tracking-widest uppercase mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {pkg.desc}
              </p>
              <h3 className="text-white text-xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                {pkg.name}
              </h3>
              <p className={`text-2xl font-bold mb-6 ${pkg.highlight ? "text-amber-400" : "text-amber-600"}`}
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {pkg.price}
              </p>
              <ul className="space-y-2.5">
                {pkg.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${pkg.highlight ? "text-amber-400" : "text-amber-700"}`}
                      fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-stone-400 text-sm leading-snug"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onBook}
            className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-bold tracking-widest uppercase text-sm px-10 py-4 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.35)]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Marcar meu Aniversário
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}