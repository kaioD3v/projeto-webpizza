import PersonCard from "../Personcard/Personcard";

const founders = [
  {
    name: "Giuseppe Massini",
    role: "O Fundador · 1962",
    years: "1927 – 1998",
    imageUrl: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600&q=80",
    description:
      "Nascido na Calábria em 1927, Giuseppe aprendeu a arte da pizza com o pai antes mesmo de saber ler. Homem de poucas palavras e mãos habilidosas, fundou La Massie com a convicção de que comida boa é comida feita com tempo e respeito. Seu forno de pedra ainda está de pé.",
  },
  {
    name: "Rosa Massini",
    role: "A Matriarca · Coração da Casa",
    years: "1931 – 2009",
    imageUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&q=80",
    description:
      "Rosa era quem transformava ingredientes simples em algo especial. Responsável pelas receitas de molhos e sobremesas, ela também garantia que nenhum cliente saísse sem se sentir em casa. A hospitalidade de La Massie é, até hoje, o legado mais vivo de Rosa.",
  },
  {
    name: "Carlo Massini",
    role: "A Segunda Geração · 1985–2010",
    years: "1958 – 2010",
    imageUrl: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=600&q=80",
    description:
      "Filho mais velho de Giuseppe, Carlo assumiu a pizzaria nos anos 80 e foi responsável pela primeira grande expansão da casa. Introduziu o menu de degustação e trouxe fornecedores de ingredientes italianos importados — sem jamais abrir mão da massa artesanal do pai.",
  },
  {
    name: "Marco Massini",
    role: "A Terceira Geração · Hoje",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
    description:
      "Neto de Giuseppe, Marco estudou gastronomia em Nápoles e passou por cozinhas profissionais em Lyon e Milão. Voltou ao Brasil com o compromisso de manter a essência da casa e ao mesmo tempo criar experiências que o avô não poderia ter imaginado. É ele quem assina o menu atual.",
  },
];

export default function FoundersSection() {
  return (
    <section className="bg-[#0a0804] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-amber-500 tracking-[0.5em] uppercase text-xs mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            As pessoas por trás da história
          </p>
          <h2
            className="text-white text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Conheça a família{" "}
            <span className="text-amber-400 italic font-light">Massini</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-20 h-px bg-amber-800" />
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <div className="w-20 h-px bg-amber-800" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {founders.map((person) => (
            <PersonCard key={person.name} {...person} />
          ))}
        </div>
      </div>
    </section>
  );
}