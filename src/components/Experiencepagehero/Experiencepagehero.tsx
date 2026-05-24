export default function ExperiencePageHero() {
  return (
    <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, #f59e0b 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute bottom-0 w-full h-32 bg-linear-to-t from-[#0e0b07] to-transparent" />

      <div className="relative max-w-3xl mx-auto">
        <p
          className="text-amber-500 tracking-[0.5em] uppercase text-xs mb-5"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          La Massie Pizza&apos;s
        </p>
        <h1
          className="text-white text-5xl md:text-7xl font-black leading-none mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Nossas{" "}
          <span className="text-amber-400 italic font-light">Experiências</span>
        </h1>
        <div className="flex items-center justify-center gap-4 my-6">
          <div className="w-16 h-px bg-amber-800" />
          <div className="w-2 h-2 rounded-full bg-amber-500" />
          <div className="w-16 h-px bg-amber-800" />
        </div>
        <p
          className="text-stone-400 text-lg leading-relaxed max-w-xl mx-auto"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Cada visita a La Massie é única. Escolha a experiência que combina com o seu momento — e venha criar memórias à mesa.
        </p>
      </div>
    </section>
  );
}