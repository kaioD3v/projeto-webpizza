import "../../index.css";


import ExperienceCard from "../experienceCard/Experiencecard";

const experiences = [
  {
    title: "Rodizio de Pizzas",
    description:
      "Uma experiência sensorial única com pizzas artesanais em um ambiente italiano clássico. Cada detalhe foi pensado para transportar você a outro mundo.",
    imageUrl:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80",
    href: "/pizzaria",
    label: "Ir para Pizzaria",
    badge: "Destaque",
  },
  {
    title: "Aniversário La Massie",
    description:
      "Celebre conosco! Uma festa de aniversário inesquecível com decoração temática, menu especial e uma atmosfera que mistura nostalgia e modernidade.",
    imageUrl:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=900&q=80",
    href: "/menu",
    label: "Ver o Menu",
  },
  {
    title: "Confraternizações e Eventos",
    description:
      "O espaço perfeito para confraternizações, eventos corporativos e celebrações especiais. Oferecemos um ambiente acolhedor, serviço impecável e um cardápio personalizado para tornar seu evento inesquecível.",
    imageUrl:
      "https://images.unsplash.com/photo-1610614819513-58e34989848b?w=900&q=80",
    href: "/fondue",
    label: "Conhecer o Fondue",
  },
];

interface ExperienceSectionProps {
  sectionRef?: React.RefObject<HTMLElement | null>;
}

export default function ExperienceSection({ sectionRef }: ExperienceSectionProps) {
  return (
    <section
      ref={sectionRef}
      className="bg-[#0e0b07] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className="text-amber-500 tracking-[0.5em] uppercase text-xs mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Escolha sua jornada
          </p>
          <h2
            className="text-white text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Qual experiência você
            <br />
            <span className="text-amber-400 italic font-light">deseja escolher?</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-20 h-px bg-amber-800" />
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <div className="w-20 h-px bg-amber-800" />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.href} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}