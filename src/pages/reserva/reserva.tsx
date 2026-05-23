import { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/Footer/Footer";
 
// ─── TIPOS ────────────────────────────────────────────────────────────────────
type Step = "calendar" | "time" | "table" | "confirm" | "done";
 
interface TableData {
  id: number;
  number: number;
  seats: number;
  minSeats: number;
  zone: string;
  x: number; // % position
  y: number;
  shape: "rect" | "round";
  available: boolean;
}
 
// ─── DADOS ────────────────────────────────────────────────────────────────────
const MONTH_NAMES = [
  "Janeiro","Fevereiro","Março","Abril","Maio","Junho",
  "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro",
];
const WEEK_DAYS = ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];
 
// Dias indisponíveis (simulados)
const UNAVAILABLE_DAYS: Record<string, number[]> = {
  "2026-5":  [1, 5, 10, 11, 18, 19, 25],
  "2026-6":  [7, 8, 14, 15, 21, 22, 28, 29],
  "2026-7":  [4, 5, 12, 19, 20, 26],
};
 
const TIME_SLOTS = [
  "18:00","18:30","19:00","19:30","20:00",
  "20:30","21:00","21:30","22:00","22:30",
];
 
const UNAVAILABLE_TIMES = ["19:00","20:00","21:30"];
 
const TABLES: TableData[] = [
  // Zona Principal — mesas retangulares
  { id: 1,  number: 21, seats: 6, minSeats: 3, zone: "Principal", x: 74, y: 62, shape: "rect", available: true },
  { id: 2,  number: 22, seats: 6, minSeats: 3, zone: "Principal", x: 74, y: 52, shape: "rect", available: false },
  { id: 3,  number: 23, seats: 6, minSeats: 3, zone: "Principal", x: 74, y: 42, shape: "rect", available: true },
  { id: 4,  number: 24, seats: 6, minSeats: 3, zone: "Principal", x: 74, y: 32, shape: "rect", available: true },
  { id: 5,  number: 25, seats: 6, minSeats: 3, zone: "Principal", x: 64, y: 47, shape: "rect", available: false },
  { id: 6,  number: 26, seats: 6, minSeats: 3, zone: "Principal", x: 64, y: 57, shape: "rect", available: true },
  { id: 7,  number: 27, seats: 6, minSeats: 3, zone: "Principal", x: 64, y: 67, shape: "rect", available: true },
  { id: 8,  number: 28, seats: 6, minSeats: 3, zone: "Principal", x: 58, y: 32, shape: "rect", available: false },
  { id: 9,  number: 29, seats: 6, minSeats: 3, zone: "Principal", x: 64, y: 37, shape: "rect", available: true },
  { id: 10, number: 30, seats: 6, minSeats: 3, zone: "Principal", x: 64, y: 47, shape: "rect", available: true },
  // Zona Refeitório — mesas maiores
  { id: 11, number: 41, seats: 6, minSeats: 3, zone: "Refeitório", x: 27, y: 36, shape: "rect", available: true },
  { id: 12, number: 42, seats: 6, minSeats: 3, zone: "Refeitório", x: 35, y: 36, shape: "rect", available: false },
  { id: 13, number: 43, seats: 6, minSeats: 3, zone: "Refeitório", x: 43, y: 36, shape: "rect", available: true },
  { id: 14, number: 44, seats: 6, minSeats: 3, zone: "Refeitório", x: 27, y: 50, shape: "rect", available: true },
  { id: 15, number: 45, seats: 8, minSeats: 5, zone: "Refeitório", x: 35, y: 50, shape: "rect", available: true },
  { id: 16, number: 47, seats: 6, minSeats: 3, zone: "Refeitório", x: 27, y: 64, shape: "rect", available: false },
  { id: 17, number: 48, seats: 8, minSeats: 5, zone: "Refeitório", x: 35, y: 64, shape: "rect", available: true },
  { id: 18, number: 51, seats: 6, minSeats: 3, zone: "Refeitório", x: 35, y: 78, shape: "rect", available: true },
  { id: 19, number: 52, seats: 6, minSeats: 3, zone: "Refeitório", x: 43, y: 78, shape: "rect", available: false },
  // Mesas redondas
  { id: 20, number: 32, seats: 8, minSeats: 4, zone: "Principal", x: 58, y: 18, shape: "round", available: true },
  { id: 21, number: 33, seats: 6, minSeats: 3, zone: "Principal", x: 68, y: 25, shape: "rect", available: false },
  { id: 22, number: 35, seats: 8, minSeats: 4, zone: "Refeitório", x: 50, y: 50, shape: "round", available: true },
  { id: 23, number: 54, seats: 8, minSeats: 4, zone: "Refeitório", x: 55, y: 78, shape: "round", available: true },
];
 
// ─── HELPERS ──────────────────────────────────────────────────────────────────
function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}
 
// ─── STEP INDICATOR ───────────────────────────────────────────────────────────
function StepIndicator({ current }: { current: Step }) {
  const steps: { key: Step; label: string }[] = [
    { key: "calendar", label: "Data" },
    { key: "time",     label: "Horário" },
    { key: "table",    label: "Mesa" },
    { key: "confirm",  label: "Confirmar" },
  ];
  const order: Step[] = ["calendar","time","table","confirm","done"];
  const currentIdx = order.indexOf(current);
 
  return (
    <div className="flex items-center justify-center gap-0 mb-12">
      {steps.map((s, i) => {
        const idx = order.indexOf(s.key);
        const done = currentIdx > idx;
        const active = currentIdx === idx;
        return (
          <div key={s.key} className="flex items-center">
            <div className="flex flex-col items-center gap-1.5">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all duration-300
                ${done   ? "bg-amber-500 border-amber-500 text-black" :
                  active ? "bg-transparent border-amber-500 text-amber-400" :
                           "bg-transparent border-stone-700 text-stone-600"}`}>
                {done ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                  </svg>
                ) : i + 1}
              </div>
              <span className={`text-[10px] tracking-widest uppercase transition-colors
                ${active ? "text-amber-400" : done ? "text-amber-600" : "text-stone-600"}`}
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {s.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={`w-16 md:w-24 h-px mx-2 mb-4 transition-colors ${done ? "bg-amber-500" : "bg-stone-800"}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}
 
// ─── STEP 1: CALENDÁRIO ───────────────────────────────────────────────────────
function CalendarStep({ onSelect }: { onSelect: (date: Date) => void }) {
  const today = new Date();
  const [viewYear,  setViewYear]  = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
 
  const unavail = UNAVAILABLE_DAYS[`${viewYear}-${viewMonth + 1}`] ?? [];
  const daysInMonth  = getDaysInMonth(viewYear, viewMonth);
  const firstDayOfWeek = getFirstDayOfMonth(viewYear, viewMonth);
 
  const prev = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };
  const next = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };
 
  const cells: (number | null)[] = [
    ...Array(firstDayOfWeek).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
 
  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-white text-3xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
          Escolha uma <span className="text-amber-400 italic font-light">data</span>
        </h2>
        <p className="text-stone-500 text-sm" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Dias em verde estão disponíveis para reserva
        </p>
      </div>
 
      <div className="bg-[#13100a] border border-amber-900/30 p-6">
        {/* Header do mês */}
        <div className="flex items-center justify-between mb-6">
          <button onClick={prev} className="w-8 h-8 flex items-center justify-center text-stone-400 hover:text-amber-400 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <h3 className="text-white font-bold tracking-widest uppercase text-sm"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {MONTH_NAMES[viewMonth]} {viewYear}
          </h3>
          <button onClick={next} className="w-8 h-8 flex items-center justify-center text-stone-400 hover:text-amber-400 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
 
        {/* Dias da semana */}
        <div className="grid grid-cols-7 mb-2">
          {WEEK_DAYS.map(d => (
            <div key={d} className="text-center text-[10px] text-stone-600 tracking-widest uppercase py-1"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              {d}
            </div>
          ))}
        </div>
 
        {/* Células */}
        <div className="grid grid-cols-7 gap-1">
          {cells.map((day, i) => {
            if (!day) return <div key={`empty-${i}`} />;
            const isPast = new Date(viewYear, viewMonth, day) < new Date(today.getFullYear(), today.getMonth(), today.getDate());
            const isUnavail = unavail.includes(day) || isPast;
            return (
              <button
                key={day}
                disabled={isUnavail}
                onClick={() => onSelect(new Date(viewYear, viewMonth, day))}
                className={`aspect-square rounded-sm text-sm font-semibold transition-all duration-200 flex items-center justify-center
                  ${isUnavail
                    ? "text-stone-700 bg-stone-900/50 cursor-not-allowed"
                    : "text-white bg-emerald-900/30 border border-emerald-800/50 hover:bg-amber-500 hover:border-amber-500 hover:text-black cursor-pointer"
                  }`}
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {day}
              </button>
            );
          })}
        </div>
 
        {/* Legenda */}
        <div className="flex items-center gap-6 mt-6 pt-4 border-t border-amber-900/20">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-emerald-900/30 border border-emerald-800/50" />
            <span className="text-stone-500 text-xs" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Disponível</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-stone-900/50" />
            <span className="text-stone-500 text-xs" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Indisponível</span>
          </div>
        </div>
      </div>
    </div>
  );
}
 
// ─── STEP 2: HORÁRIO ──────────────────────────────────────────────────────────
function TimeStep({ date, onSelect, onBack }: { date: Date; onSelect: (t: string) => void; onBack: () => void }) {
  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          {date.getDate()} de {MONTH_NAMES[date.getMonth()]} de {date.getFullYear()}
        </p>
        <h2 className="text-white text-3xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
          Escolha o <span className="text-amber-400 italic font-light">horário</span>
        </h2>
        <p className="text-stone-500 text-sm" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Horários disponíveis para este dia
        </p>
      </div>
 
      <div className="bg-[#13100a] border border-amber-900/30 p-6">
        <div className="grid grid-cols-2 gap-3">
          {TIME_SLOTS.map(time => {
            const isUnavail = UNAVAILABLE_TIMES.includes(time);
            return (
              <button
                key={time}
                disabled={isUnavail}
                onClick={() => onSelect(time)}
                className={`py-4 text-base font-bold tracking-widest transition-all duration-200 border
                  ${isUnavail
                    ? "text-stone-700 border-stone-800 bg-stone-900/30 cursor-not-allowed"
                    : "text-white border-amber-900/40 hover:bg-amber-500 hover:border-amber-500 hover:text-black cursor-pointer"
                  }`}
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {isUnavail ? (
                  <span className="line-through opacity-40">{time}</span>
                ) : time}
              </button>
            );
          })}
        </div>
      </div>
 
      <button onClick={onBack} className="mt-6 flex items-center gap-2 text-stone-500 hover:text-amber-400 text-sm transition-colors mx-auto"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
        </svg>
        Voltar ao calendário
      </button>
    </div>
  );
}
 
// ─── STEP 3: MAPA DE MESAS ────────────────────────────────────────────────────
function TableStep({
  date, time, onSelect, onBack
}: {
  date: Date; time: string;
  onSelect: (t: TableData) => void;
  onBack: () => void;
}) {
  const [hovered, setHovered] = useState<number | null>(null);
 
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          {date.getDate()} de {MONTH_NAMES[date.getMonth()]} · {time}
        </p>
        <h2 className="text-white text-3xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
          Escolha sua <span className="text-amber-400 italic font-light">mesa</span>
        </h2>
        <p className="text-stone-500 text-sm" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Clique em uma mesa disponível para selecioná-la
        </p>
      </div>
 
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Mapa */}
        <div className="lg:col-span-2 bg-[#13100a] border border-amber-900/30 p-4">
          {/* Zone labels */}
          <div className="relative w-full" style={{ paddingBottom: "75%" }}>
            <div className="absolute inset-0">
              {/* Background map */}
              <div className="absolute inset-0 rounded-sm overflow-hidden"
                style={{ background: "linear-gradient(135deg, #1a1208 0%, #0f0c06 50%, #1a1208 100%)" }}>
                {/* Grid lines */}
                <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f59e0b" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
 
                {/* Zone labels */}
                <div className="absolute top-3 left-3 text-amber-800/60 text-[10px] tracking-widest uppercase border border-amber-900/30 px-2 py-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Refeitório
                </div>
                <div className="absolute top-3 right-3 text-amber-800/60 text-[10px] tracking-widest uppercase border border-amber-900/30 px-2 py-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Salão Principal
                </div>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-amber-900/40 text-[9px] tracking-widest uppercase"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  ↓ Entrada
                </div>
 
                {/* Divisória */}
                <div className="absolute top-0 bottom-0 border-l border-dashed border-amber-900/20" style={{ left: "58%" }} />
 
                {/* Mesas */}
                {TABLES.map(table => {
                  const isHov = hovered === table.id;
                  return (
                    <button
                      key={table.id}
                      disabled={!table.available}
                      onClick={() => table.available && onSelect(table)}
                      onMouseEnter={() => setHovered(table.id)}
                      onMouseLeave={() => setHovered(null)}
                      style={{ left: `${table.x}%`, top: `${table.y}%` }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-200
                        ${table.shape === "round"
                          ? "rounded-full w-8 h-8 md:w-10 md:h-10"
                          : "rounded-sm w-7 h-5 md:w-9 md:h-6"}
                        ${!table.available
                          ? "bg-stone-800/80 border border-stone-700/50 cursor-not-allowed"
                          : isHov
                            ? "bg-amber-500 border-2 border-amber-300 scale-125 z-10 cursor-pointer"
                            : "bg-emerald-900/60 border border-emerald-700/60 hover:scale-110 cursor-pointer"
                        }
                      `}
                    >
                      <span className={`text-[8px] md:text-[9px] font-bold block text-center leading-none
                        ${!table.available ? "text-stone-600" : isHov ? "text-black" : "text-emerald-300"}`}>
                        {table.number}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
 
          {/* Legenda */}
          <div className="flex items-center gap-6 mt-3 pt-3 border-t border-amber-900/20">
            <div className="flex items-center gap-2">
              <div className="w-4 h-3 rounded-sm bg-emerald-900/60 border border-emerald-700/60" />
              <span className="text-stone-500 text-xs" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Disponível</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-3 rounded-sm bg-stone-800/80 border border-stone-700/50" />
              <span className="text-stone-500 text-xs" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Ocupada</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-amber-500" />
              <span className="text-stone-500 text-xs" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Redonda</span>
            </div>
          </div>
        </div>
 
        {/* Lista lateral */}
        <div className="bg-[#13100a] border border-amber-900/30 p-4 overflow-y-auto max-h-[440px]">
          <p className="text-amber-500 text-[10px] tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Mesas disponíveis
          </p>
          <div className="flex flex-col gap-2">
            {TABLES.filter(t => t.available).map(table => (
              <button
                key={table.id}
                onClick={() => onSelect(table)}
                onMouseEnter={() => setHovered(table.id)}
                onMouseLeave={() => setHovered(null)}
                className={`text-left p-3 border transition-all duration-200
                  ${hovered === table.id
                    ? "border-amber-500 bg-amber-500/10"
                    : "border-amber-900/20 hover:border-amber-700/40"}`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white text-sm font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Mesa {table.number}
                  </span>
                  <span className="text-amber-500 text-[10px] tracking-widest uppercase"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {table.zone}
                  </span>
                </div>
                <p className="text-stone-500 text-xs" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {table.seats} pessoas · Mín. {table.minSeats}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
 
      <button onClick={onBack} className="mt-6 flex items-center gap-2 text-stone-500 hover:text-amber-400 text-sm transition-colors mx-auto"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
        </svg>
        Voltar ao horário
      </button>
    </div>
  );
}
 
// ─── STEP 4: CONFIRMAÇÃO ──────────────────────────────────────────────────────
function ConfirmStep({
  date, time, table, onConfirm, onBack
}: {
  date: Date; time: string; table: TableData;
  onConfirm: (name: string, guests: number) => void;
  onBack: () => void;
}) {
  const [name,   setName]   = useState("");
  const [phone,  setPhone]  = useState("");
  const [guests, setGuests] = useState(table.minSeats);
 
  const valid = name.trim().length >= 3 && phone.trim().length >= 8;
 
  return (
    <div className="max-w-xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-white text-3xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
          Confirmar <span className="text-amber-400 italic font-light">reserva</span>
        </h2>
        <p className="text-stone-500 text-sm" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Revise os dados e preencha suas informações
        </p>
      </div>
 
      {/* Resumo */}
      <div className="bg-[#13100a] border border-amber-900/30 p-6 mb-6">
        <p className="text-amber-500 text-[10px] tracking-[0.4em] uppercase mb-4"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Resumo da reserva
        </p>
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Data", value: `${date.getDate()} de ${MONTH_NAMES[date.getMonth()]}` },
            { label: "Horário", value: time },
            { label: "Mesa", value: `Mesa ${table.number} · ${table.zone}` },
          ].map(item => (
            <div key={item.label} className="text-center p-3 border border-amber-900/20">
              <p className="text-stone-600 text-[10px] tracking-widest uppercase mb-1"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {item.label}
              </p>
              <p className="text-white text-sm font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
 
      {/* Formulário */}
      <div className="bg-[#13100a] border border-amber-900/30 p-6 space-y-5">
        <p className="text-amber-500 text-[10px] tracking-[0.4em] uppercase"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Seus dados
        </p>
 
        <div>
          <label className="block text-stone-400 text-xs tracking-widest uppercase mb-2"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Nome completo
          </label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Como podemos te chamar?"
            className="w-full bg-[#0e0b07] border border-amber-900/30 focus:border-amber-500 outline-none text-white px-4 py-3 text-sm placeholder:text-stone-700 transition-colors"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          />
        </div>
 
        <div>
          <label className="block text-stone-400 text-xs tracking-widest uppercase mb-2"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Telefone / WhatsApp
          </label>
          <input
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="(11) 99999-9999"
            className="w-full bg-[#0e0b07] border border-amber-900/30 focus:border-amber-500 outline-none text-white px-4 py-3 text-sm placeholder:text-stone-700 transition-colors"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          />
        </div>
 
        <div>
          <label className="block text-stone-400 text-xs tracking-widest uppercase mb-2"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Número de convidados (máx. {table.seats})
          </label>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setGuests(g => Math.max(table.minSeats, g - 1))}
              className="w-10 h-10 border border-amber-900/40 text-amber-400 hover:bg-amber-500/10 transition-colors text-lg font-bold"
            >−</button>
            <span className="text-white text-xl font-bold w-8 text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              {guests}
            </span>
            <button
              onClick={() => setGuests(g => Math.min(table.seats, g + 1))}
              className="w-10 h-10 border border-amber-900/40 text-amber-400 hover:bg-amber-500/10 transition-colors text-lg font-bold"
            >+</button>
            <span className="text-stone-600 text-xs ml-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              pessoas
            </span>
          </div>
        </div>
      </div>
 
      <div className="flex gap-4 mt-6">
        <button onClick={onBack}
          className="flex-1 py-4 border border-amber-900/40 text-stone-400 hover:text-amber-400 hover:border-amber-700 text-sm tracking-widest uppercase transition-all"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Voltar
        </button>
        <button
          disabled={!valid}
          onClick={() => onConfirm(name, guests)}
          className={`flex-1 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300
            ${valid
              ? "bg-amber-500 hover:bg-amber-400 text-black hover:shadow-[0_0_30px_rgba(245,158,11,0.35)]"
              : "bg-stone-800 text-stone-600 cursor-not-allowed"}`}
          style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Confirmar Reserva
        </button>
      </div>
    </div>
  );
}
 
// ─── STEP 5: CONCLUÍDO ────────────────────────────────────────────────────────
function DoneStep({ date, time, table, name, guests }: {
  date: Date; time: string; table: TableData; name: string; guests: number;
}) {
  return (
    <div className="max-w-md mx-auto text-center">
      {/* Checkmark animado */}
      <div className="w-20 h-20 rounded-full bg-amber-500/10 border-2 border-amber-500 flex items-center justify-center mx-auto mb-8"
        style={{ animation: "popIn 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards" }}>
        <svg className="w-10 h-10 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
        </svg>
      </div>
 
      <p className="text-amber-500 text-xs tracking-[0.5em] uppercase mb-3"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        Reserva confirmada
      </p>
      <h2 className="text-white text-4xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
        Até breve,<br/>
        <span className="text-amber-400 italic font-light">{name.split(" ")[0]}!</span>
      </h2>
      <p className="text-stone-400 text-base leading-relaxed mt-4 mb-8"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        Sua mesa está reservada. Em breve você receberá uma confirmação pelo WhatsApp.
      </p>
 
      {/* Card resumo */}
      <div className="bg-[#13100a] border border-amber-500/30 p-6 text-left space-y-4 mb-8">
        {[
          { icon: "📅", label: "Data", value: `${date.getDate()} de ${MONTH_NAMES[date.getMonth()]} de ${date.getFullYear()}` },
          { icon: "🕐", label: "Horário", value: time },
          { icon: "🪑", label: "Mesa", value: `Mesa ${table.number} — ${table.zone}` },
          { icon: "👥", label: "Convidados", value: `${guests} pessoa${guests > 1 ? "s" : ""}` },
        ].map(item => (
          <div key={item.label} className="flex items-center gap-4">
            <span className="text-xl w-6 text-center">{item.icon}</span>
            <div>
              <p className="text-stone-600 text-[10px] tracking-widest uppercase"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>{item.label}</p>
              <p className="text-white text-sm font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>{item.value}</p>
            </div>
          </div>
        ))}
      </div>
 
      <a href="/"
        className="inline-flex items-center gap-2 border border-amber-900/40 text-amber-400 hover:border-amber-500 text-sm tracking-widest uppercase px-8 py-3 transition-all"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        Voltar ao início
      </a>
 
      <style>{`
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.5); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
 
// ─── PÁGINA PRINCIPAL ─────────────────────────────────────────────────────────
export default function Reserva() {
  const [step,   setStep]   = useState<Step>("calendar");
  const [date,   setDate]   = useState<Date   | null>(null);
  const [time,   setTime]   = useState<string | null>(null);
  const [table,  setTable]  = useState<TableData | null>(null);
  const [name,   setName]   = useState("");
  const [guests, setGuests] = useState(0);
 
  return (
    <div className="bg-[#0e0b07] min-h-screen">
      <Navbar />
 
      {/* Hero topo */}
      <section className="relative pt-32 pb-16 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #f59e0b 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#0e0b07] to-transparent" />
        <div className="relative">
          <p className="text-amber-500 tracking-[0.5em] uppercase text-xs mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            La Massie Pizza&apos;s
          </p>
          <h1 className="text-white text-5xl md:text-6xl font-black leading-none"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Faça sua{" "}
            <span className="text-amber-400 italic font-light">Reserva</span>
          </h1>
        </div>
      </section>
 
      {/* Conteúdo */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          {step !== "done" && <StepIndicator current={step} />}
 
          {step === "calendar" && (
            <CalendarStep onSelect={d => { setDate(d); setStep("time"); }} />
          )}
          {step === "time" && date && (
            <TimeStep date={date} onSelect={t => { setTime(t); setStep("table"); }} onBack={() => setStep("calendar")} />
          )}
          {step === "table" && date && time && (
            <TableStep date={date} time={time} onSelect={t => { setTable(t); setStep("confirm"); }} onBack={() => setStep("time")} />
          )}
          {step === "confirm" && date && time && table && (
            <ConfirmStep
              date={date} time={time} table={table}
              onBack={() => setStep("table")}
              onConfirm={(n, g) => { setName(n); setGuests(g); setStep("done"); }}
            />
          )}
          {step === "done" && date && time && table && (
            <DoneStep date={date} time={time} table={table} name={name} guests={guests} />
          )}
        </div>
      </section>
 
      <Footer />
    </div>
  );
}