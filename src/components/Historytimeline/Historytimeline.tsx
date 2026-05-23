interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const milestones: TimelineItem[] = [
  {
    year: "1962",
    title: "O primeiro forno acende",
    description:
      "Giuseppe Massini prepara suas primeiras pizzas na Calábria, usando o forno de pedra construído pelo pai. O caderno de Concetta guia cada receita.",
  },
  {
    year: "1978",
    title: "A travessia",
    description:
      "A família Massini embarca para o Brasil. Com eles vêm o caderno de receitas, a tradição e a determinação de recomeçar sem perder a essência.",
  },
  {
    year: "1980",
    title: "La Massie abre as portas",
    description:
      "O pequeno estabelecimento no Brás, em São Paulo, abre com capacidade para 30 pessoas. Na primeira semana, a fila já dobrava o quarteirão.",
  },
  {
    year: "1988",
    title: "O forno de pedra chega ao Brasil",
    description:
      "Giuseppe manda trazer, peça por peça, um forno de pedra da Calábria. A instalação levou três meses. Ele continua sendo o coração da nossa cozinha.",
  },
  {
    year: "1995",
    title: "Carlo assume o comando",
    description:
      "Com a saúde de Giuseppe fragilizada, Carlo Massini assume a gestão e conduz a primeira grande reforma e expansão da casa.",
  },
  {
    year: "2003",
    title: "Menu de degustação",
    description:
      "Carlo lança o menu degustação — um formato inédito que permite provar diferentes pizzas em porções menores. O público paulistano adota imediatamente.",
  },
  {
    year: "2018",
    title: "Marco e a terceira geração",
    description:
      "De volta de Nápoles e Lyon, Marco Massini assume a cozinha e lança o cardápio contemporâneo — respeitando o caderno de Concetta, mas com olhar do mundo.",
  },
  {
    year: "Hoje",
    title: "O legado continua",
    description:
      "Mais de seis décadas depois, La Massie Pizza's segue fiel à filosofia de Giuseppe: cada pizza feita como se fosse a única do dia.",
  },
];

export default function HistoryTimeline() {
  return (
    <section className="bg-[#0e0b07] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p
            className="text-amber-500 tracking-[0.5em] uppercase text-xs mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Nossa trajetória
          </p>
          <h2
            className="text-white text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Uma linha do{" "}
            <span className="text-amber-400 italic font-light">tempo</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[90px] md:left-1/2 top-0 bottom-0 w-px bg-amber-900/40 -translate-x-1/2" />

          <div className="flex flex-col gap-14">
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ${
                      isEven
                        ? "md:pr-16 md:text-right"
                        : "md:pl-16 md:text-left"
                    } pl-20 md:pl-0`}
                  >
                    <h3
                      className="text-white text-xl font-bold mb-2"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-stone-400 text-base leading-relaxed"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Center dot + year */}
                  <div className="absolute left-[90px] md:left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10">
                    <div className="w-4 h-4 rounded-full bg-amber-500 border-4 border-[#0e0b07] ring-1 ring-amber-700" />
                    <span
                      className="text-amber-400 text-xs font-bold tracking-widest whitespace-nowrap"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {item.year}
                    </span>
                  </div>

                  {/* Empty side on desktop */}
                  <div className="hidden md:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}