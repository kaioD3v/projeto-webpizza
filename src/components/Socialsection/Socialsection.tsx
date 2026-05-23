import "../../index.css";


interface SocialCardProps {
  platform: "instagram" | "youtube";
  handle: string;
  href: string;
  imageUrl: string;
  followers?: string;
  description: string;
}

function SocialCard({ platform, handle, href, imageUrl, followers }: SocialCardProps) {
  const isInstagram = platform === "instagram";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block"
    >
      {/* Polaroid-style frame */}
      <div className="bg-stone-100 p-3 pb-10 shadow-2xl rotate-0 group-hover:-rotate-1 transition-transform duration-500 hover:shadow-amber-900/30">
        <div className="relative overflow-hidden aspect-square">
          <img
            src={imageUrl}
            alt={handle}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Platform overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <span
              className="text-white text-sm tracking-widest uppercase font-bold"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Seguir
            </span>
          </div>
        </div>
        {/* Polaroid label */}
        <div className="mt-3 text-center">
          <p
            className="text-stone-700 text-sm font-semibold tracking-wide"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {handle}
          </p>
        </div>
      </div>

      {/* Platform Icon */}
      <div
        className={`absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
          isInstagram
            ? "bg-linear-to-br from-purple-600 via-pink-500 to-amber-400"
            : "bg-red-600"
        }`}
      >
        {isInstagram ? (
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        )}
      </div>

      {/* Followers badge */}
      {followers && (
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-xs font-bold tracking-wider px-3 py-1 whitespace-nowrap"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          {followers} seguidores
        </div>
      )}
    </a>
  );
}

export default function SocialSection() {
  return (
    <section className="bg-[#0a0804] py-28 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p
            className="text-amber-500 tracking-[0.5em] uppercase text-xs mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Siga nossa aventura
          </p>
          <h2
            className="text-white text-3xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Acompanhe La Massie e a equipe
            <br />
            <span className="text-amber-400 italic font-light">no Instagram e no YouTube</span>
          </h2>
        </div>

        {/* Polaroid Cards */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24">
          <SocialCard
            platform="instagram"
            handle="@lamassie.pizzas"
            href="https://instagram.com"
            imageUrl="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80"
            followers="48k"
            description="Veja bastidores, novidades e o dia a dia da pizzaria"
          />
          <SocialCard
            platform="youtube"
            handle="La Massie Pizza's"
            href="https://youtube.com"
            imageUrl="https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=600&q=80"
            followers="92k"
            description="Vídeos da experiência temática e receitas exclusivas"
          />
        </div>
      </div>
    </section>
  );
}