import "../../index.css";


const footerLinks = [
  { label: "home", href: "/" },
  { label: "nossa história", href: "/historia" },
  { label: "pizzaria temática", href: "/pizzaria" },
  { label: "menu secreto", href: "/menu" },
  { label: "experiências", href: "/experiencias" },
  { label: "loja", href: "/loja" },
];

const locations = [
  {
    name: "Pizzaria Temática",
    address: "Rua das Massas, 1791 – Centro, São Paulo – SP",
  },
  {
    name: "Menu Secreto",
    address: "Av. dos Sabores, 2875 – Centro, São Paulo – SP",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#060402] border-t border-amber-900/30">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <div>
            <h3
              className="text-amber-400 text-3xl font-black tracking-widest uppercase"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              La Massie
            </h3>
            <p
              className="text-stone-400 text-sm tracking-[0.4em] uppercase"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Pizza&apos;s
            </p>
          </div>
          <p
            className="text-stone-400 text-sm leading-relaxed max-w-xs"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Uma experiência gastronômica única onde cada pizza conta uma história. Arte, sabor e magia em cada visita.
          </p>
          {/* Socials */}
          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-amber-900/50 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:border-amber-500 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-amber-900/50 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:border-amber-500 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Nav Links */}
        <div>
          <h4
            className="text-amber-400 text-xs tracking-[0.4em] uppercase mb-6 font-semibold"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Navegação
          </h4>
          <ul className="flex flex-col gap-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-stone-400 hover:text-amber-400 text-sm tracking-wide transition-colors duration-300 capitalize"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h4
            className="text-amber-400 text-xs tracking-[0.4em] uppercase mb-6 font-semibold"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Localização
          </h4>
          <div className="flex flex-col gap-6">
            {locations.map((loc) => (
              <div key={loc.name}>
                <p
                  className="text-white text-sm font-semibold mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {loc.name}
                </p>
                <p
                  className="text-stone-400 text-sm leading-relaxed"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {loc.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-amber-900/20 px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-stone-600 text-xs tracking-widest"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            © {new Date().getFullYear()} — Todos os direitos reservados — La Massie Pizza&apos;s
          </p>
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 rounded-full bg-amber-700" />
            <div className="w-1 h-1 rounded-full bg-amber-600" />
            <div className="w-1 h-1 rounded-full bg-amber-500" />
          </div>
        </div>
      </div>
    </footer>
  );
}