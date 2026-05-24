import { useState } from "react";

export type ExperienceType = "rodizio" | "aniversario" | "confraternizacao";

interface ExperienceBookingModalProps {
  type: ExperienceType;
  onClose: () => void;
}

const EXPERIENCE_LABELS: Record<ExperienceType, { title: string; subtitle: string; color: string }> = {
  rodizio: {
    title: "Rodízio Artesanal",
    subtitle: "Escolha a data e horário para seu rodízio",
    color: "text-amber-400",
  },
  aniversario: {
    title: "Festa de Aniversário",
    subtitle: "Vamos planejar sua celebração juntos",
    color: "text-rose-400",
  },
  confraternizacao: {
    title: "Confraternização & Evento",
    subtitle: "Conte sobre o seu evento para montarmos a proposta",
    color: "text-emerald-400",
  },
};

const MONTH_NAMES = [
  "Janeiro","Fevereiro","Março","Abril","Maio","Junho",
  "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro",
];
const WEEK_DAYS = ["D","S","T","Q","Q","S","S"];

const UNAVAILABLE: Record<string, number[]> = {
  "2026-5": [1, 5, 10, 11, 18, 19, 25],
  "2026-6": [7, 8, 14, 15, 21, 22],
  "2026-7": [4, 5, 12, 19, 20],
};

const TIME_SLOTS = ["18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30"];
const UNAVAIL_TIMES = ["19:00","20:30"];

type ModalStep = "date" | "time" | "details" | "done";

function getDaysInMonth(y: number, m: number) { return new Date(y, m + 1, 0).getDate(); }
function getFirstDay(y: number, m: number) { return new Date(y, m, 1).getDay(); }

export default function ExperienceBookingModal({ type, onClose }: ExperienceBookingModalProps) {
  const meta = EXPERIENCE_LABELS[type];
  const today = new Date();
  const [step, setStep]         = useState<ModalStep>("date");
  const [viewY, setViewY]       = useState(today.getFullYear());
  const [viewM, setViewM]       = useState(today.getMonth());
  const [selDate, setSelDate]   = useState<Date | null>(null);
  const [selTime, setSelTime]   = useState<string | null>(null);
  const [name, setName]         = useState("");
  const [phone, setPhone]       = useState("");
  const [guests, setGuests]     = useState(2);
  const [notes, setNotes]       = useState("");
  const [pkg, setPkg]           = useState("");

  const unavailDays = UNAVAILABLE[`${viewY}-${viewM + 1}`] ?? [];
  const daysInM = getDaysInMonth(viewY, viewM);
  const firstDay = getFirstDay(viewY, viewM);
  const cells: (number | null)[] = [...Array(firstDay).fill(null), ...Array.from({ length: daysInM }, (_, i) => i + 1)];

  const prevMonth = () => { if (viewM === 0) { setViewM(11); setViewY(y => y - 1); } else setViewM(m => m - 1); };
  const nextMonth = () => { if (viewM === 11) { setViewM(0); setViewY(y => y + 1); } else setViewM(m => m + 1); };

  const valid = name.trim().length >= 3 && phone.trim().length >= 8;

  const pkgOptions =
    type === "aniversario"
      ? ["Festa Clássica (até 20p)", "Festa Premium (até 40p)", "Festa Exclusiva (40p+)"]
      : type === "confraternizacao"
      ? ["Até 30 pessoas", "31 a 60 pessoas", "61 a 120 pessoas", "Acima de 120 pessoas"]
      : [];

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 py-6" onClick={onClose}>
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

      <div
        className="relative z-10 bg-[#13100a] border border-amber-900/40 w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-[0_0_80px_rgba(0,0,0,0.9)]"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: "modalIn 0.3s cubic-bezier(0.34,1.56,0.64,1) forwards" }}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#13100a] border-b border-amber-900/30 px-6 py-5 flex items-start justify-between z-10">
          <div>
            <p className="text-amber-500 text-[10px] tracking-[0.4em] uppercase mb-1"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              {meta.subtitle}
            </p>
            <h3 className={`text-xl font-bold ${meta.color}`}
              style={{ fontFamily: "'Playfair Display', serif" }}>
              {meta.title}
            </h3>
          </div>
          <button onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-stone-500 hover:text-white transition-colors flex-shrink-0 mt-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Steps indicator */}
        {step !== "done" && (
          <div className="px-6 pt-5 pb-0">
            <div className="flex items-center gap-1 mb-5">
              {(["date","time","details"] as ModalStep[]).map((s) => {
                const steps: ModalStep[] = ["date","time","details","done"];
                const cur = steps.indexOf(step);
                const idx = steps.indexOf(s);
                return (
                  <div key={s} className="flex items-center flex-1">
                    <div className={`h-1 flex-1 rounded-full transition-all duration-500
                      ${cur > idx ? "bg-amber-500" : cur === idx ? "bg-amber-700" : "bg-stone-800"}`} />
                  </div>
                );
              })}
            </div>
            <p className="text-stone-600 text-[10px] tracking-widest uppercase mb-5"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              {step === "date" ? "1 · Escolha a data" : step === "time" ? "2 · Escolha o horário" : "3 · Seus dados"}
            </p>
          </div>
        )}

        <div className="px-6 pb-7">

          {/* ── STEP DATE ── */}
          {step === "date" && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <button onClick={prevMonth} className="w-8 h-8 flex items-center justify-center text-stone-500 hover:text-amber-400 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                  </svg>
                </button>
                <span className="text-white text-sm font-bold tracking-widest uppercase"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {MONTH_NAMES[viewM]} {viewY}
                </span>
                <button onClick={nextMonth} className="w-8 h-8 flex items-center justify-center text-stone-500 hover:text-amber-400 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-7 mb-1">
                {WEEK_DAYS.map((d) => (
                  <div key={d} className="text-center text-[10px] text-stone-700 py-1 font-bold"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {d}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {cells.map((day, i) => {
                  if (!day) return <div key={`e-${i}`} />;
                  const isPast = new Date(viewY, viewM, day) < new Date(today.getFullYear(), today.getMonth(), today.getDate());
                  const isUnavail = unavailDays.includes(day) || isPast;
                  const isSel = selDate?.getDate() === day && selDate?.getMonth() === viewM && selDate?.getFullYear() === viewY;
                  return (
                    <button key={day} disabled={isUnavail}
                      onClick={() => { setSelDate(new Date(viewY, viewM, day)); setStep("time"); }}
                      className={`aspect-square text-sm font-semibold transition-all duration-200 flex items-center justify-center rounded-sm
                        ${isSel ? "bg-amber-500 text-black" :
                          isUnavail ? "text-stone-800 cursor-not-allowed" :
                          "text-white bg-emerald-950/40 border border-emerald-900/30 hover:bg-amber-500 hover:text-black"}`}
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {day}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-5 mt-4 pt-4 border-t border-amber-900/20">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm bg-emerald-950/40 border border-emerald-900/30" />
                  <span className="text-stone-600 text-xs" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Disponível</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm bg-transparent border border-stone-800" />
                  <span className="text-stone-600 text-xs" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Indisponível</span>
                </div>
              </div>
            </div>
          )}

          {/* ── STEP TIME ── */}
          {step === "time" && selDate && (
            <div>
              <p className="text-amber-500 text-xs mb-4 tracking-wide"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {selDate.getDate()} de {MONTH_NAMES[selDate.getMonth()]} de {selDate.getFullYear()}
              </p>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {TIME_SLOTS.map(t => {
                  const isUna = UNAVAIL_TIMES.includes(t);
                  const isSel = selTime === t;
                  return (
                    <button key={t} disabled={isUna}
                      onClick={() => { setSelTime(t); setStep("details"); }}
                      className={`py-3.5 text-sm font-bold tracking-widest transition-all duration-200 border
                        ${isUna ? "border-stone-800 text-stone-700 cursor-not-allowed" :
                          isSel ? "border-amber-500 bg-amber-500 text-black" :
                          "border-amber-900/30 text-white hover:bg-amber-500 hover:border-amber-500 hover:text-black"}`}
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {isUna ? <span className="line-through opacity-30">{t}</span> : t}
                    </button>
                  );
                })}
              </div>
              <button onClick={() => setStep("date")}
                className="flex items-center gap-2 text-stone-600 hover:text-amber-400 text-xs transition-colors"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                </svg>
                Voltar ao calendário
              </button>
            </div>
          )}

          {/* ── STEP DETAILS ── */}
          {step === "details" && selDate && selTime && (
            <div>
              {/* Resumo */}
              <div className="flex items-center gap-3 mb-6 p-3 bg-amber-500/5 border border-amber-900/30">
                <div className="flex-1">
                  <p className="text-white text-sm font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {selDate.getDate()} de {MONTH_NAMES[selDate.getMonth()]} · {selTime}
                  </p>
                  <p className="text-stone-500 text-xs" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {meta.title}
                  </p>
                </div>
                <button onClick={() => setStep("date")}
                  className="text-amber-600 text-[10px] tracking-widest uppercase hover:text-amber-400 transition-colors"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Alterar
                </button>
              </div>

              <div className="space-y-4">
                {/* Nome */}
                <div>
                  <label className="block text-stone-500 text-[10px] tracking-widest uppercase mb-1.5"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Nome completo *
                  </label>
                  <input type="text" value={name} onChange={e => setName(e.target.value)}
                    placeholder="Seu nome"
                    className="w-full bg-[#0e0b07] border border-amber-900/30 focus:border-amber-500 outline-none text-white px-4 py-3 text-sm placeholder:text-stone-700 transition-colors"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }} />
                </div>

                {/* Telefone */}
                <div>
                  <label className="block text-stone-500 text-[10px] tracking-widest uppercase mb-1.5"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    WhatsApp *
                  </label>
                  <input type="tel" value={phone} onChange={e => setPhone(e.target.value)}
                    placeholder="(11) 99999-9999"
                    className="w-full bg-[#0e0b07] border border-amber-900/30 focus:border-amber-500 outline-none text-white px-4 py-3 text-sm placeholder:text-stone-700 transition-colors"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }} />
                </div>

                {/* Pessoas */}
                <div>
                  <label className="block text-stone-500 text-[10px] tracking-widest uppercase mb-1.5"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Número de pessoas
                  </label>
                  <div className="flex items-center gap-4">
                    <button onClick={() => setGuests(g => Math.max(1, g - 1))}
                      className="w-10 h-10 border border-amber-900/40 text-amber-400 hover:bg-amber-500/10 transition-colors text-xl font-bold flex items-center justify-center">
                      −
                    </button>
                    <span className="text-white text-xl font-bold w-8 text-center"
                      style={{ fontFamily: "'Playfair Display', serif" }}>
                      {guests}
                    </span>
                    <button onClick={() => setGuests(g => g + 1)}
                      className="w-10 h-10 border border-amber-900/40 text-amber-400 hover:bg-amber-500/10 transition-colors text-xl font-bold flex items-center justify-center">
                      +
                    </button>
                  </div>
                </div>

                {/* Pacote (aniversário / confra) */}
                {pkgOptions.length > 0 && (
                  <div>
                    <label className="block text-stone-500 text-[10px] tracking-widest uppercase mb-1.5"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {type === "aniversario" ? "Pacote desejado" : "Porte do evento"}
                    </label>
                    <div className="grid grid-cols-1 gap-2">
                      {pkgOptions.map(opt => (
                        <button key={opt} onClick={() => setPkg(opt)}
                          className={`text-left px-4 py-2.5 border text-sm transition-all duration-200
                            ${pkg === opt
                              ? "border-amber-500 bg-amber-500/10 text-amber-300"
                              : "border-amber-900/20 text-stone-400 hover:border-amber-800/40"}`}
                          style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Observações */}
                <div>
                  <label className="block text-stone-500 text-[10px] tracking-widest uppercase mb-1.5"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Observações (opcional)
                  </label>
                  <textarea value={notes} onChange={e => setNotes(e.target.value)} rows={3}
                    placeholder={type === "confraternizacao" ? "Conte sobre o evento, tema, necessidades especiais..." : "Alguma preferência ou informação especial?"}
                    className="w-full bg-[#0e0b07] border border-amber-900/30 focus:border-amber-500 outline-none text-white px-4 py-3 text-sm placeholder:text-stone-700 transition-colors resize-none"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }} />
                </div>
              </div>

              <button
                disabled={!valid}
                onClick={() => setStep("done")}
                className={`w-full mt-6 py-4 font-bold tracking-widest uppercase text-sm transition-all duration-300
                  ${valid
                    ? "bg-amber-500 hover:bg-amber-400 text-black hover:shadow-[0_0_30px_rgba(245,158,11,0.35)]"
                    : "bg-stone-800 text-stone-600 cursor-not-allowed"}`}
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Confirmar Reserva
              </button>
            </div>
          )}

          {/* ── STEP DONE ── */}
          {step === "done" && selDate && selTime && (
            <div className="text-center py-4">
              <div
                className="w-16 h-16 rounded-full bg-amber-500/10 border-2 border-amber-500 flex items-center justify-center mx-auto mb-6"
                style={{ animation: "popIn 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards" }}>
                <svg className="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                </svg>
              </div>

              <p className="text-amber-500 text-[10px] tracking-[0.5em] uppercase mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Reserva confirmada
              </p>
              <h4 className="text-white text-2xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                Até breve,
              </h4>
              <h4 className={`text-2xl font-light italic mb-4 ${meta.color}`}
                style={{ fontFamily: "'Playfair Display', serif" }}>
                {name.split(" ")[0]}!
              </h4>
              <p className="text-stone-400 text-sm leading-relaxed mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Sua reserva de <strong className="text-white">{meta.title}</strong> para{" "}
                <strong className="text-white">{selDate.getDate()} de {MONTH_NAMES[selDate.getMonth()]}</strong> às{" "}
                <strong className="text-white">{selTime}</strong> foi recebida.
                Em breve entraremos em contato pelo WhatsApp para confirmar os detalhes.
              </p>

              <div className="bg-[#0e0b07] border border-amber-900/20 p-4 text-left space-y-2 mb-6">
                {[
                  ["Data", `${selDate.getDate()} de ${MONTH_NAMES[selDate.getMonth()]}`],
                  ["Horário", selTime],
                  ["Pessoas", `${guests}`],
                  ...(pkg ? [["Pacote", pkg] as [string, string]] : []),
                ].map(([label, val]) => (
                  <div key={label} className="flex justify-between items-center">
                    <span className="text-stone-600 text-xs tracking-widest uppercase"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}>{label}</span>
                    <span className="text-white text-sm font-semibold"
                      style={{ fontFamily: "'Playfair Display', serif" }}>{val}</span>
                  </div>
                ))}
              </div>

              <button onClick={onClose}
                className="w-full border border-amber-900/40 text-amber-400 hover:border-amber-500 text-sm tracking-widest uppercase py-3 transition-all"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Fechar
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.93) translateY(16px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.5); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}