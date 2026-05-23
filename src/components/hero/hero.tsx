import "../../index.css";
import { Link } from "react-router-dom";

interface HeroProps {
  onScrollToExperiences?: () => void;
}

export default function Hero({ onScrollToExperiences }: HeroProps) {
  return (
    <section className="relative w-full h-screen min-h-175 flex items-center justify-center overflow-hidden">
      {/* Background Image via Unsplash */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1800&q=80')",
        }}
      />

      {/* Dark overlay with warm gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/90" />

      {/* Decorative top line */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-amber-500/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p
          className="text-amber-400 tracking-[0.5em] uppercase text-xs mb-6 animate-fade-in"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Uma experiência gastronômica
        </p>

        {/* Main Title */}
        <h1
          className="text-white text-6xl md:text-8xl font-black leading-none mb-2 drop-shadow-2xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          La Massie
        </h1>
        <h2
          className="text-amber-400 text-4xl md:text-6xl font-light italic tracking-widest mb-8 drop-shadow-xl"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Pizza&apos;s
        </h2>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-px bg-amber-500/60" />
          <div className="w-2 h-2 rounded-full bg-amber-500" />
          <div className="w-16 h-px bg-amber-500/60" />
        </div>

        {/* Subtitle */}
        <p
          className="text-stone-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Uma jornada única onde cada fatia conta uma história. Ingredientes artesanais, ambiente temático e sabores que ficam na memória.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/reserva"
            className="bg-amber-500 hover:bg-amber-400 text-black font-bold tracking-widest uppercase text-sm px-8 py-4 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Quero fazer minha reserva
          </Link>
          <button
            onClick={onScrollToExperiences}
            className="border border-amber-500/60 hover:border-amber-400 text-amber-300 hover:text-amber-200 font-medium tracking-widest uppercase text-sm px-8 py-4 transition-all duration-300 hover:bg-amber-500/10"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Conhecer a Experiência
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-stone-400 text-xs tracking-widest uppercase" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Rolar
        </span>
        <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}