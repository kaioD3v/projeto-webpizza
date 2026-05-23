import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/Footer/Footer";
import HistoryHero from "../../components/Historyhero/Historyhero";
import HistoryNarrative from "../../components/Historynarrative/Historynarrative";
import HistoryTimeline from "../../components/Historytimeline/Historytimeline";
import FoundersSection from "../../components/Founderssection/Founderssection";

export default function Historia() {
  return (
    <div className="bg-[#0e0b07] min-h-screen">
      <Navbar />
      <main>
        <HistoryHero />
        <HistoryNarrative />
        <HistoryTimeline />
        <FoundersSection />

        {/* CTA final */}
        <section className="bg-[#060402] py-24 px-6 text-center border-t border-amber-900/30">
          <p
            className="text-amber-500 tracking-[0.5em] uppercase text-xs mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Venha fazer parte desta história
          </p>
          <h2
            className="text-white text-4xl md:text-5xl font-bold mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Sua mesa está esperando
          </h2>
          <a
            href="/reserva"
            className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-bold tracking-widest uppercase text-sm px-10 py-4 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.35)]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Reservar Mesa
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}