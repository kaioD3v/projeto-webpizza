export default function HistoryHero() {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] flex items-end justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=900&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b07] via-black/50 to-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 pb-20 max-w-3xl mx-auto">
        <p
          className="text-amber-500 tracking-[0.5em] uppercase text-xs mb-5"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Desde 1962
        </p>
        <h1
          className="text-white text-5xl md:text-7xl font-black leading-none mb-4 drop-shadow-2xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Uma história de
          <br />
          <span className="text-amber-400 italic font-light">farinha e paixão</span>
        </h1>
        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="w-16 h-px bg-amber-700" />
          <div className="w-2 h-2 rounded-full bg-amber-500" />
          <div className="w-16 h-px bg-amber-700" />
        </div>
      </div>
    </section>
  );
}