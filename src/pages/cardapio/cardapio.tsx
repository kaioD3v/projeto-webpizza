import { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/Footer/Footer";

// ─── TIPOS ────────────────────────────────────────────────────────────────────
interface Pizza {
  id: number;
  name: string;
  category: string;
  description: string;
  ingredients: string[];
  price: number;
  imageUrl: string;
  tag?: string;
}

// ─── DADOS ────────────────────────────────────────────────────────────────────
const WHATSAPP_NUMBER = "5511999999999"; // ← troque pelo número real

const pizzas: Pizza[] = [
  {
    id: 1,
    name: "Massini Clássica",
    category: "Tradicionais",
    description:
      "A pizza que deu origem a tudo. Molho de tomate San Marzano, mussarela de búfala fresca, manjericão colhido na hora e um fio de azeite extra virgem siciliano. A receita original do caderno de Concetta, sem nenhuma alteração desde 1962.",
    ingredients: ["Tomate San Marzano", "Mussarela de búfala", "Manjericão fresco", "Azeite extra virgem"],
    price: 72,
    imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
    tag: "Original",
  },
  {
    id: 2,
    name: "Calabresa da Rosa",
    category: "Tradicionais",
    description:
      "Homenagem à matriarca Rosa Massini, que insistia que calabresa de qualidade merece uma pizza à altura. Linguiça calabresa artesanal defumada, cebola roxa caramelizada no vinho tinto e azeitona preta siciliana.",
    ingredients: ["Calabresa artesanal defumada", "Cebola roxa caramelizada", "Azeitona preta siciliana", "Orégano fresco"],
    price: 68,
    imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    tag: "Mais pedida",
  },
  {
    id: 3,
    name: "Quatro Queijos do Brás",
    category: "Tradicionais",
    description:
      "Desenvolvida no primeiro inverno da família em São Paulo, quando o frio pedia conforto. Mussarela, gorgonzola italiano, parmesão envelhecido 24 meses e provolone defumado, sobre base de azeite e alho.",
    ingredients: ["Mussarela", "Gorgonzola italiano", "Parmesão 24 meses", "Provolone defumado"],
    price: 76,
    imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
  },
  {
    id: 4,
    name: "Napolitana Verdadeira",
    category: "Tradicionais",
    description:
      "Marco trouxe essa receita diretamente de Nápoles após anos de aperfeiçoamento. Massa de fermentação lenta de 48 horas, molho de tomate cru, anchova, alcaparra, azeitona e generosa camada de parmesão.",
    ingredients: ["Molho de tomate cru", "Anchova do Mediterrâneo", "Alcaparra", "Azeitona", "Parmesão"],
    price: 78,
    imageUrl: "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?w=800&q=80",
    tag: "Napoli",
  },
  {
    id: 5,
    name: "Bianca de Alho",
    category: "Tradicionais",
    description:
      "Sem molho de tomate — apenas a pureza da massa com ricota fresca batida com ervas, lascas de alho confitado no azeite por três horas, mussarela de búfala e sálvia frita. Simples e memorável.",
    ingredients: ["Ricota fresca com ervas", "Alho confitado", "Mussarela de búfala", "Sálvia frita"],
    price: 74,
    imageUrl: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=800&q=80",
  },
  {
    id: 6,
    name: "Funghi e Truffa",
    category: "Especiais",
    description:
      "Para os momentos que merecem algo extraordinário. Mix de cogumelos frescos e secos — shiitake, porcini e portobello — sobre base de creme de funghi, finalizada com raspas de trufa negra e azeite trufado.",
    ingredients: ["Shiitake", "Porcini", "Portobello", "Creme de funghi", "Trufa negra", "Azeite trufado"],
    price: 98,
    imageUrl: "https://images.unsplash.com/photo-1544982503-9f984c14501a?w=800&q=80",
    tag: "Chef",
  },
  {
    id: 7,
    name: "Bresaola e Rúcula",
    category: "Especiais",
    description:
      "A favorita da segunda geração. Base de mussarela gratinada, coberta após o forno com fatias finas de bresaola curada por 90 dias, rúcula selvagem temperada com limão siciliano e lascas de parmesão.",
    ingredients: ["Bresaola curada 90 dias", "Rúcula selvagem", "Limão siciliano", "Parmesão em lascas"],
    price: 92,
    imageUrl: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=800&q=80",
  },
  {
    id: 8,
    name: "Burrata & Tomate Confit",
    category: "Especiais",
    description:
      "Tomates-cereja confitados por quatro horas no azeite com tomilho e alecrim, base de molho sugo leve, e uma burrata inteira posta ao centro depois de sair do forno. Finalizada com pesto genovês artesanal.",
    ingredients: ["Tomate-cereja confit", "Burrata inteira", "Pesto genovês artesanal", "Tomilho fresco"],
    price: 96,
    imageUrl: "https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=800&q=80",
    tag: "Favorita",
  },
  {
    id: 9,
    name: "Camarão ao Limão",
    category: "Especiais",
    description:
      "Camarões rosa salteados na manteiga com alho e limão-siciliano, sobre base de creme de cream cheese levemente defumado. Finalizada com raspas de limão, cebolinha e páprica defumada espanhola.",
    ingredients: ["Camarão rosa", "Cream cheese defumado", "Limão-siciliano", "Páprica defumada"],
    price: 104,
    imageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80",
  },
  {
    id: 10,
    name: "Parma e Figo",
    category: "Especiais",
    description:
      "Uma das criações de Marco após seu estágio em Lyon. Presunto de Parma 18 meses, figos frescos fatiados, gorgonzola cremoso e mel de acácia — um equilíbrio perfeito entre salgado, doce e umami.",
    ingredients: ["Presunto de Parma 18 meses", "Figo fresco", "Gorgonzola", "Mel de acácia"],
    price: 99,
    imageUrl: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=800&q=80",
    tag: "Marco",
  },
  {
    id: 11,
    name: "Vegana da Estação",
    category: "Vegetarianas",
    description:
      "Muda a cada estação conforme os melhores vegetais disponíveis. Na versão atual: abobrinha grelhada, berinjela assada, pimentão vermelho e amarelo, cebola roxa, base de hummus de grão-de-bico e azeite de ervas.",
    ingredients: ["Abobrinha grelhada", "Berinjela assada", "Pimentão", "Hummus artesanal", "Azeite de ervas"],
    price: 70,
    imageUrl: "https://images.unsplash.com/photo-1511689660979-10d2b1afd49d?w=800&q=80",
    tag: "Vegana",
  },
  {
    id: 12,
    name: "Espinafre e Ricota",
    category: "Vegetarianas",
    description:
      "Clássica italiana com alma. Base branca de bechamel leve, espinafre refogado no alho, ricota fresca temperada com noz-moscada e pimenta-do-reino, mussarela e parmesão para gratinar.",
    ingredients: ["Bechamel leve", "Espinafre refogado", "Ricota fresca", "Noz-moscada", "Parmesão"],
    price: 66,
    imageUrl: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=800&q=80",
  },
  {
    id: 13,
    name: "Caprese Massini",
    category: "Vegetarianas",
    description:
      "A salada caprese transformada em pizza — como Giuseppe fazia nos domingos em família. Tomate heirloom fatiado, mussarela de búfala, manjericão fresco, azeite extra virgem e redução de balsâmico de Modena.",
    ingredients: ["Tomate heirloom", "Mussarela de búfala", "Manjericão", "Balsâmico de Modena"],
    price: 72,
    imageUrl: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=800&q=80",
  },
  {
    id: 14,
    name: "Carne Seca e Catupiry",
    category: "Brasileiras",
    description:
      "A pizza que abraçou o Brasil sem abandonar as origens. Carne seca desfiada e dessalgada por 24 horas, catupiry original, cebola caramelizada lentamente e tomate seco. Carlo criou essa receita nos anos 90 — e nunca mais saiu do cardápio.",
    ingredients: ["Carne seca desfiada", "Catupiry original", "Cebola caramelizada", "Tomate seco"],
    price: 82,
    imageUrl: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80",
    tag: "Brasil",
  },
  {
    id: 15,
    name: "Frango com Requeijão",
    category: "Brasileiras",
    description:
      "Frango caipira cozido e desfiado no próprio caldo, temperado com ervas frescas, base de requeijão cremoso, milho verde e catupiry na borda. Uma das preferidas dos clientes mais antigos da casa.",
    ingredients: ["Frango caipira desfiado", "Requeijão cremoso", "Milho verde", "Catupiry na borda"],
    price: 74,
    imageUrl: "https://images.unsplash.com/photo-1548369937-47519962c11a?w=800&q=80",
  },
  {
    id: 16,
    name: "Portuguesa Revisitada",
    category: "Brasileiras",
    description:
      "A portuguesa de sempre, mas com cada ingrediente escolhido a dedo. Presunto cozido artesanal, ovo de galinha caipira, cebola em pétalas, azeitona verde recheada e pimentão assado na brasa.",
    ingredients: ["Presunto artesanal", "Ovo caipira", "Pimentão assado", "Azeitona verde recheada"],
    price: 70,
    imageUrl: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf6f?w=800&q=80",
  },
  {
    id: 17,
    name: "Pepperoni Picante",
    category: "Brasileiras",
    description:
      "Para quem gosta de sentir. Pepperoni italiano picante importado, dupla camada de mussarela, pimenta calabresa fresca e mel de pimenta para finalizar — o contraste que vicia.",
    ingredients: ["Pepperoni italiano picante", "Mussarela dupla", "Pimenta calabresa", "Mel de pimenta"],
    price: 78,
    imageUrl: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80",
  },
  {
    id: 18,
    name: "Nutella & Morango",
    category: "Doces",
    description:
      "A sobremesa que transformamos em pizza. Massa assada e pincelada com manteiga de baunilha, generosa camada de Nutella, morangos frescos fatiados e finalização com açúcar de confeiteiro e menta.",
    ingredients: ["Nutella", "Morango fresco", "Manteiga de baunilha", "Açúcar de confeiteiro", "Menta"],
    price: 60,
    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
    tag: "Doce",
  },
  {
    id: 19,
    name: "Banana com Canela",
    category: "Doces",
    description:
      "A favorita das crianças da família Massini por três gerações. Banana-nanica fatiada, leite condensado, canela em pó, mussarela levemente gratinada e calda de caramelo artesanal. Comfort food na sua forma mais pura.",
    ingredients: ["Banana-nanica", "Leite condensado", "Canela", "Mussarela", "Caramelo artesanal"],
    price: 55,
    imageUrl: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80",
    tag: "Doce",
  },
  {
    id: 20,
    name: "Brigadeiro Gourmet",
    category: "Doces",
    description:
      "A fusão mais brasileira que já saiu da nossa cozinha. Base de chocolate belga 70%, brigadeiro gourmet ao centro, granulado crocante e uma bola de sorvete de creme servida ao lado. Coma rápido.",
    ingredients: ["Chocolate belga 70%", "Brigadeiro gourmet", "Granulado crocante", "Sorvete de creme"],
    price: 62,
    imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80",
    tag: "Doce",
  },
];

const categories = ["Todas", "Tradicionais", "Especiais", "Vegetarianas", "Brasileiras", "Doces"];

// ─── MODAL ────────────────────────────────────────────────────────────────────
function PizzaModal({ pizza, onClose }: { pizza: Pizza; onClose: () => void }) {
  const message = encodeURIComponent(
    `Olá! Vim pelo site e gostaria de pedir a pizza *${pizza.name}* (R$ ${pizza.price},00). Poderia me ajudar? 😊`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Card */}
      <div
        className="relative z-10 bg-[#13100a] border border-amber-900/40 w-full max-w-md overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)]"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: "modalIn 0.3s cubic-bezier(0.34,1.56,0.64,1) forwards" }}
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={pizza.imageUrl}
            alt={pizza.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#13100a] via-transparent to-transparent" />

          {/* Tag */}
          {pizza.tag && (
            <div
              className="absolute top-4 left-4 bg-amber-500 text-black text-xs font-bold tracking-widest uppercase px-3 py-1"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {pizza.tag}
            </div>
          )}

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="px-7 pt-5 pb-7">
          {/* Category */}
          <p
            className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-2"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {pizza.category}
          </p>

          {/* Name + Price */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <h3
              className="text-white text-2xl font-bold leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {pizza.name}
            </h3>
            <span
              className="text-amber-400 text-xl font-bold whitespace-nowrap mt-0.5"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              R$ {pizza.price},00
            </span>
          </div>

          {/* Description */}
          <p
            className="text-stone-400 text-[15px] leading-relaxed mb-5"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {pizza.description}
          </p>

          {/* Ingredients */}
          <div className="flex flex-wrap gap-2 mb-7">
            {pizza.ingredients.map((ing) => (
              <span
                key={ing}
                className="text-xs text-stone-400 border border-amber-900/40 px-2.5 py-1 tracking-wide"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {ing}
              </span>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#1fb956] text-white font-bold tracking-widest uppercase text-sm py-4 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,211,102,0.35)]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {/* WhatsApp icon */}
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Venha Pedir
          </a>
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.92) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}

// ─── CARD DA PIZZA ────────────────────────────────────────────────────────────
function PizzaCard({ pizza, onClick }: { pizza: Pizza; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative text-left overflow-hidden bg-[#13100a] border border-amber-900/20 hover:border-amber-700/50 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(0,0,0,0.6)]"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={pizza.imageUrl}
          alt={pizza.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#13100a] via-black/10 to-transparent" />

        {pizza.tag && (
          <div
            className="absolute top-3 left-3 bg-amber-500 text-black text-[10px] font-bold tracking-widest uppercase px-2.5 py-1"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {pizza.tag}
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/10 transition-colors duration-500 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70 text-amber-400 text-xs tracking-[0.3em] uppercase px-4 py-2"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Ver detalhes
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="w-5 h-px bg-amber-700 mb-3 transition-all duration-300 group-hover:w-10" />
        <h3
          className="text-white text-lg font-bold mb-1 leading-snug group-hover:text-amber-200 transition-colors"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {pizza.name}
        </h3>
        <p
          className="text-stone-500 text-sm leading-relaxed line-clamp-2 mb-4"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {pizza.description}
        </p>
        <div className="flex items-center justify-between">
          <span
            className="text-amber-400 font-bold text-lg"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            R$ {pizza.price},00
          </span>
          <span
            className="text-xs text-stone-600 tracking-widest uppercase group-hover:text-amber-600 transition-colors"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            ver mais →
          </span>
        </div>
      </div>
    </button>
  );
}

// ─── PÁGINA PRINCIPAL ─────────────────────────────────────────────────────────
export default function Cardapio() {
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [selectedPizza, setSelectedPizza] = useState<Pizza | null>(null);

  const filtered =
    activeCategory === "Todas"
      ? pizzas
      : pizzas.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-[#0e0b07] min-h-screen">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
        {/* bg texture */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #f59e0b 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0e0b07] to-transparent" />

        <div className="relative max-w-3xl mx-auto">
          <p
            className="text-amber-500 tracking-[0.5em] uppercase text-xs mb-5"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Feitas com farinha, tempo e respeito
          </p>
          <h1
            className="text-white text-5xl md:text-7xl font-black leading-none mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Nosso{" "}
            <span className="text-amber-400 italic font-light">Cardápio</span>
          </h1>
          <p
            className="text-stone-400 text-lg max-w-xl mx-auto mt-6 leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Cada pizza é preparada na hora, com massa de fermentação lenta e ingredientes escolhidos um a um. Clique em qualquer pizza para conhecer todos os detalhes.
          </p>
        </div>
      </section>

      {/* ── FILTROS ───────────────────────────────────────────── */}
      <section className="sticky top-[72px] z-40 bg-[#0e0b07]/95 backdrop-blur-sm border-b border-amber-900/20 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 text-xs tracking-[0.3em] uppercase px-5 py-2.5 transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-amber-500 border-amber-500 text-black font-bold"
                  : "border-amber-900/40 text-stone-400 hover:border-amber-700 hover:text-amber-300"
              }`}
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {cat}
            </button>
          ))}
          <span
            className="ml-auto flex-shrink-0 text-xs text-stone-600 tracking-widest"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {filtered.length} pizzas
          </span>
        </div>
      </section>

      {/* ── GRID ──────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((pizza) => (
            <PizzaCard
              key={pizza.id}
              pizza={pizza}
              onClick={() => setSelectedPizza(pizza)}
            />
          ))}
        </div>
      </section>

      <Footer />

      {/* ── MODAL ─────────────────────────────────────────────── */}
      {selectedPizza && (
        <PizzaModal pizza={selectedPizza} onClose={() => setSelectedPizza(null)} />
      )}
    </div>
  );
}