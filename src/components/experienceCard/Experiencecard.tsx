import "../../index.css";


interface ExperienceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
  label: string;
  badge?: string;
}

export default function ExperienceCard({
  title,
  description,
  imageUrl,
  href,
  label,
  badge,
}: ExperienceCardProps) {
  return (
    <a
      href={href}
      className="group relative overflow-hidden block cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-120 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 from-black/90 via-black/30 to-transparent" />

        {/* Badge */}
        {badge && (
          <div className="absolute top-5 right-5 bg-amber-500 text-black text-xs font-bold tracking-widest uppercase px-3 py-1.5"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {badge}
          </div>
        )}

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-7">
          <div className="w-8 h-px bg-amber-500 mb-4 transition-all duration-500 group-hover:w-16" />
          <h3
            className="text-white text-2xl font-bold mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {title}
          </h3>
          <p
            className="text-stone-300 text-sm leading-relaxed mb-5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {description}
          </p>
          <span
            className="inline-flex items-center gap-2 text-amber-400 text-xs tracking-[0.3em] uppercase font-semibold group-hover:gap-4 transition-all duration-300"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {label}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </a>
  );
}