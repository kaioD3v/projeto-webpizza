export default function HistoryNarrative() {
  return (
    <section className="bg-[#0e0b07] py-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Bloco 1 — Origem */}
        <div className="mb-20">
          <p
            className="text-amber-500 tracking-[0.4em] uppercase text-xs mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            As origens
          </p>
          <h2
            className="text-white text-3xl md:text-4xl font-bold mb-8 leading-snug"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Conheça a história de La Massie Pizza&apos;s
          </h2>
          <div
            className="text-stone-300 text-lg leading-relaxed space-y-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            <p>
              Em 1962, em uma pequena cidade ao sul da Calábria, na Itália, Giuseppe Massini
              acordava antes do amanhecer todos os dias para preparar a massa que alimentaria
              a vizinhança. Filho de padeiro, neto de padeiro, Giuseppe carregava nas mãos
              calejadas o conhecimento acumulado de três gerações — a proporção exata da farinha,
              o tempo certo do descanso, o calor necessário do forno de pedra.
            </p>
            <p>
              Mas o que diferenciava Giuseppe de todos os outros padeiros da região não era
              apenas a técnica. Era a obsessão. Ele acreditava que uma boa pizza não era
              simplesmente comida — era um ato de cuidado. Uma forma de dizer, sem palavras,
              que aquela pessoa merecia algo feito com atenção, com tempo, com respeito.
            </p>
          </div>
        </div>

        {/* Imagem intercalada */}
        <div className="relative mb-20 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=1200&q=80"
            alt="Preparação artesanal de pizza"
            className="w-full h-[420px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e0b07]/60 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <p
              className="text-amber-400 italic text-xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              "A massa não mente. Ela mostra exatamente quanto cuidado você colocou."
            </p>
            <p
              className="text-stone-400 text-sm mt-2 tracking-widest uppercase"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              — Giuseppe Massini, 1962
            </p>
          </div>
        </div>

        {/* Bloco 2 — Chegada ao Brasil */}
        <div className="mb-20">
          <p
            className="text-amber-500 tracking-[0.4em] uppercase text-xs mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            A travessia
          </p>
          <h2
            className="text-white text-3xl md:text-4xl font-bold mb-8 leading-snug"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Da Calábria para o Brasil
          </h2>
          <div
            className="text-stone-300 text-lg leading-relaxed space-y-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            <p>
              Em 1978, com a esposa Rosa e três filhos pequenos, Giuseppe tomou a decisão
              mais difícil de sua vida: embarcar num navio com destino ao Brasil. Trouxe
              na bagagem pouca roupa, algumas fotos e um caderno surrado com receitas
              escritas à mão pela mãe, Concetta — receitas que nenhuma das duas gerações
              anteriores havia deixado sair da família.
            </p>
            <p>
              Instalados em São Paulo, Giuseppe e Rosa abriram um pequeno estabelecimento
              no bairro do Brás. O nome veio naturalmente: os clientes chamavam o local
              simplesmente de "a massie" — uma corruptela carinhosa do sobrenome da família,
              que em dialeto calabrês também evoca a ideia de "as massas", "os nossos".
              O nome ficou.
            </p>
            <p>
              Nos primeiros anos a luta foi grande. Giuseppe trabalhava do meio-dia até a
              madrugada. Rosa cuidava da casa, das crianças e ainda vinha ajudar no caixa
              nos fins de semana. Mas a qualidade das pizzas não demorou a circular de boca
              em boca — e em pouco tempo a fila dobrava o quarteirão nas sextas-feiras.
            </p>
          </div>
        </div>

        {/* Bloco 3 — O legado */}
        <div className="mb-12">
          <p
            className="text-amber-500 tracking-[0.4em] uppercase text-xs mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            O legado
          </p>
          <h2
            className="text-white text-3xl md:text-4xl font-bold mb-8 leading-snug"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Três gerações, uma só essência
          </h2>
          <div
            className="text-stone-300 text-lg leading-relaxed space-y-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            <p>
              Hoje, mais de seis décadas após aquelas primeiras madrugadas na Calábria,
              La Massie Pizza&apos;s é conduzida pela terceira geração da família Massini.
              Marco, neto de Giuseppe, cresceu entre fornos e bancadas de mármore.
              Formou-se em gastronomia em Nápoles, passou por restaurantes na França
              e voltou ao Brasil com um único objetivo: honrar o que o avô construiu
              sem abrir mão de evoluir.
            </p>
            <p>
              O forno de pedra original ainda está lá — restaurado, mas funcional.
              O caderno de receitas de Concetta ainda é consultado toda semana.
              E a filosofia de Giuseppe permanece intacta: cada pizza que sai da nossa
              cozinha é feita como se fosse a única que vai sair hoje.
            </p>
            <p>
              Porque para nós, nunca foi sobre quantidade. Sempre foi sobre o cuidado
              que você merece sentir quando se senta à nossa mesa.
            </p>
          </div>
        </div>

        {/* Divider decorativo */}
        <div className="flex items-center justify-center gap-4 py-4">
          <div className="w-24 h-px bg-amber-800" />
          <div className="w-2 h-2 rounded-full bg-amber-500" />
          <div className="w-24 h-px bg-amber-800" />
        </div>
      </div>
    </section>
  );
}