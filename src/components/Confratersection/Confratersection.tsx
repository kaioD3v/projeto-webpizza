interface ConfraterSectionProps {
  onBook: () => void;
}

export default function ConfraterSection({ onBook }: ConfraterSectionProps) {
  const steps = [
    {
      number: "01",
      title: "Você entra em contato",
      desc: "Nosso time de eventos recebe sua solicitação e entra em contato em até 24h para entender o seu evento.",
    },
    {
      number: "02",
      title: "Montamos a proposta",
      desc: "Criamos um cardápio e estrutura sob medida para o seu grupo, com opções de rodízio, menu fixo ou estações temáticas.",
    },
    {
      number: "03",
      title: "Confirmação e reserva",
      desc: "Com a proposta aprovada, você confirma com uma entrada simbólica e pronto — sua data está garantida.",
    },
    {
      number: "04",
      title: "O evento acontece",
      desc: "No dia, você chega e aproveita. Cuidamos de tudo: montagem, serviço, bebidas e desmontagem.",
    },
  ];

  const includes = [
    { icon: "🏛️", text: "Salão privativo para até 120 pessoas" },
    { icon: "👨‍🍳", text: "Equipe de pizzaiolos exclusiva para o evento" },
    { icon: "🍕", text: "Cardápio personalizado com mínimo 12 sabores" },
    { icon: "🎤", text: "Espaço com sistema de som e projetor" },
    { icon: "🍷", text: "Open bar de bebidas não alcoólicas incluso" },
    { icon: "🌿", text: "Decoração base inclusa (upgrades disponíveis)" },
    { icon: "🧾", text: "Emissão de nota fiscal para pessoa jurídica" },
    { icon: "📋", text: "Coordenador de eventos dedicado no dia" },
  ];

  return (
    <section className="bg-[#0e0b07] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header com imagem */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Imagem */}
          <div className="relative group">
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&q=80"
                alt="Confraternização e eventos"
                className="w-full h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-white text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Até 120 pessoas
                </p>
                <p className="text-amber-400 text-sm tracking-widest uppercase"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  capacidade total
                </p>
              </div>
            </div>
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-amber-700/40" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-amber-700/40" />
          </div>

          {/* Texto */}
          <div>
            <p className="text-amber-500 tracking-[0.5em] uppercase text-xs mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Experiência 03
            </p>
            <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Confraternizações{" "}
              <span className="text-amber-400 italic font-light block">&amp; Eventos</span>
            </h2>
            <div className="w-10 h-px bg-amber-600 mb-6" />
            <p className="text-stone-300 text-lg leading-relaxed mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Final de ano da empresa, reunião de equipe, evento corporativo ou simplesmente juntar a galera de uma forma diferente — a La Massie tem a estrutura e a experiência para tornar qualquer ocasião memorável.
            </p>
            <p className="text-stone-400 text-base leading-relaxed mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Nosso espaço foi projetado para ser versátil. Montamos o salão do jeito que o seu evento pede: fileiras para palestras, mesas redondas para jantar, estações abertas para coquetéis. Você decide — nós executamos.
            </p>

            {/* O que está incluso */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {includes.map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <span className="text-base flex-shrink-0 mt-0.5">{item.icon}</span>
                  <p className="text-stone-400 text-sm leading-snug"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Passo a passo */}
        <div className="border-t border-amber-900/20 pt-20">
          <div className="text-center mb-14">
            <p className="text-amber-500 tracking-[0.5em] uppercase text-xs mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Como funciona
            </p>
            <h3 className="text-white text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Do contato ao{" "}
              <span className="text-amber-400 italic font-light">evento</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                {/* Linha conectora */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-5 left-full w-full h-px bg-amber-900/30 z-0" />
                )}
                <div className="relative z-10">
                  <div className="w-10 h-10 border-2 border-amber-700 flex items-center justify-center mb-5">
                    <span className="text-amber-500 text-sm font-bold tracking-widest"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {step.number}
                    </span>
                  </div>
                  <h4 className="text-white text-base font-bold mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                    {step.title}
                  </h4>
                  <p className="text-stone-500 text-sm leading-relaxed"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={onBook}
              className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-bold tracking-widest uppercase text-sm px-10 py-4 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.35)]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Marcar minha Confraternização
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