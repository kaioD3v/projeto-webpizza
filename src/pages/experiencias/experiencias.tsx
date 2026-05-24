import { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/Footer/Footer";
import ExperiencePageHero from "../../components/Experiencepagehero/Experiencepagehero";
import RodizioSection from "../../components/Rodiziosection/Rodiziosection";
import AniversarioSection from "../../components/Aniversariosection/Aniversariosection";
import ConfraterSection from "../../components/Confratersection/Confratersection";
import ExperienceBookingModal from "../../components/Experiencebookingmodal/Experiencebookingmodal";
import type { ExperienceType } from "../../components/Experiencebookingmodal/Experiencebookingmodal";

export default function Experiencias() {
  const [modal, setModal] = useState<ExperienceType | null>(null);

  return (
    <div className="bg-[#0e0b07] min-h-screen">
      <Navbar />

      <main>
        <ExperiencePageHero />

        {/* Nav âncora entre experiências */}
        <section className="sticky top-[72px] z-40 bg-[#0e0b07]/95 backdrop-blur-sm border-b border-amber-900/20 px-6 py-3">
          <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto">
            {[
              { label: "Rodízio Artesanal", href: "#rodizio" },
              { label: "Festa de Aniversário", href: "#aniversario" },
              { label: "Confraternizações", href: "#confraternizacao" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex-shrink-0 text-xs tracking-[0.25em] uppercase text-stone-400 hover:text-amber-400 border border-amber-900/30 hover:border-amber-700/50 px-5 py-2 transition-all duration-300"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>

        {/* Seções */}
        <div id="rodizio">
          <RodizioSection onBook={() => setModal("rodizio")} />
        </div>

        {/* Divisor */}
        <div className="flex items-center justify-center py-2 bg-[#0a0804]">
          <div className="w-full max-w-7xl mx-6 h-px bg-gradient-to-r from-transparent via-amber-900/40 to-transparent" />
        </div>

        <div id="aniversario">
          <AniversarioSection onBook={() => setModal("aniversario")} />
        </div>

        <div className="flex items-center justify-center py-2 bg-[#0e0b07]">
          <div className="w-full max-w-7xl mx-6 h-px bg-gradient-to-r from-transparent via-amber-900/40 to-transparent" />
        </div>

        <div id="confraternizacao">
          <ConfraterSection onBook={() => setModal("confraternizacao")} />
        </div>

        {/* FAQ rápido */}
        <section className="bg-[#0a0804] py-20 px-6 border-t border-amber-900/20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p
                className="text-amber-500 tracking-[0.5em] uppercase text-xs mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Dúvidas frequentes
              </p>
              <h2
                className="text-white text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Perguntas{" "}
                <span className="text-amber-400 italic font-light">frequentes</span>
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Com quanto tempo de antecedência devo reservar?",
                  a: "Para o rodízio, no mínimo 48h antes. Para aniversários, 15 dias. Para confraternizações e eventos corporativos, recomendamos pelo menos 30 dias para garantir a personalização completa.",
                },
                {
                  q: "Há cobrança de taxa de reserva?",
                  a: "Para rodízio e aniversários até 20 pessoas, não há taxa antecipada. Para eventos maiores, pedimos uma entrada simbólica de 20% do valor combinado para garantir a data.",
                },
                {
                  q: "Posso levar meu próprio bolo?",
                  a: "Sim, para aniversários. Cobramos apenas uma taxa de corte de R$ 3,50 por pessoa. Para os pacotes Premium e Exclusivo, nosso bolo artesanal já está incluso.",
                },
                {
                  q: "Vocês atendem restrições alimentares?",
                  a: "Sim. Atendemos celíacos, vegetarianos, veganos e outras restrições com aviso prévio. Basta informar no campo de observações ao fazer a reserva.",
                },
                {
                  q: "Qual é o horário de funcionamento?",
                  a: "Quinta a sábado das 18h às 23h. Domingo das 12h às 16h (almoço) e 18h às 22h. Segunda a quarta só para eventos fechados com reserva prévia.",
                },
              ].map((item, i) => (
                <FaqItem key={i} question={item.q} answer={item.a} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-[#060402] py-24 px-6 text-center border-t border-amber-900/20">
          <p
            className="text-amber-500 tracking-[0.5em] uppercase text-xs mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Qual será a sua experiência?
          </p>
          <h2
            className="text-white text-4xl md:text-5xl font-bold mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Sua mesa está esperando
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setModal("rodizio")}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold tracking-widest uppercase text-sm px-8 py-4 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.35)]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              🍕 Marcar Rodízio
            </button>
            <button
              onClick={() => setModal("aniversario")}
              className="inline-flex items-center gap-2 border border-amber-500/50 hover:border-amber-400 text-amber-300 hover:text-amber-200 font-medium tracking-widest uppercase text-sm px-8 py-4 transition-all duration-300 hover:bg-amber-500/10"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              🎂 Marcar Aniversário
            </button>
            <button
              onClick={() => setModal("confraternizacao")}
              className="inline-flex items-center gap-2 border border-amber-500/50 hover:border-amber-400 text-amber-300 hover:text-amber-200 font-medium tracking-widest uppercase text-sm px-8 py-4 transition-all duration-300 hover:bg-amber-500/10"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              🥂 Marcar Evento
            </button>
          </div>
        </section>
      </main>

      <Footer />

      {/* Modal */}
      {modal && (
        <ExperienceBookingModal type={modal} onClose={() => setModal(null)} />
      )}
    </div>
  );
}

// ─── FAQ ITEM ─────────────────────────────────────────────────────────────────
function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-amber-900/25 hover:border-amber-900/50 transition-colors duration-300">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
      >
        <span
          className="text-white text-base font-semibold leading-snug"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 border border-amber-700/50 flex items-center justify-center text-amber-500 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <p
          className="px-6 pb-5 text-stone-400 text-[15px] leading-relaxed"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}