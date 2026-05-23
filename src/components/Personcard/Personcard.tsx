interface PersonCardProps {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  years?: string;
}

export default function PersonCard({
  name,
  role,
  description,
  imageUrl,
  years,
}: PersonCardProps) {
  return (
    <div className="group flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[3/4] mb-6">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        {/* Years badge */}
        {years && (
          <div
            className="absolute top-4 left-4 bg-amber-500 text-black text-xs font-bold tracking-widest px-3 py-1"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {years}
          </div>
        )}

        {/* Bottom line accent */}
        <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-amber-500 transition-all duration-500" />
      </div>

      {/* Text */}
      <div className="w-6 h-px bg-amber-600 mb-3" />
      <h3
        className="text-white text-xl font-bold mb-1"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {name}
      </h3>
      <p
        className="text-amber-400 text-xs tracking-[0.3em] uppercase mb-4"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {role}
      </p>
      <p
        className="text-stone-400 text-base leading-relaxed"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {description}
      </p>
    </div>
  );
}