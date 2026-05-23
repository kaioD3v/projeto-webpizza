import "../../index.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  { label: "home", href: "/" },
  { label: "nossa história", href: "/historia" },
  { label: "cardápio", href: "/cardapio" },
  { label: "experiências", href: "/experiencias" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 from-black/80 to-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-none group">
          <span
            className="text-2xl font-black tracking-widest uppercase text-amber-400"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            La Massie
          </span>

          <span
            className="text-xs tracking-[0.4em] uppercase text-stone-300 group-hover:text-amber-300 transition-colors"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Pizza&apos;s
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-xs tracking-[0.2em] uppercase text-stone-300 hover:text-amber-400 transition-colors duration-300 font-medium"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "0.85rem",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          to="/reserva"
          className="hidden lg:inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black text-xs tracking-widest uppercase font-bold px-5 py-2.5 transition-all duration-300 hover:scale-105"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Reservar Mesa
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <span
            className={`block w-6 h-0.5 bg-amber-400 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />

          <span
            className={`block w-6 h-0.5 bg-amber-400 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`block w-6 h-0.5 bg-amber-400 transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-black/95 px-6 pb-6 flex flex-col gap-4 border-t border-amber-900/40">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm tracking-[0.2em] uppercase text-stone-300 hover:text-amber-400 transition-colors py-1"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/reserva"
            className="mt-2 inline-flex justify-center bg-amber-500 text-black text-xs tracking-widest uppercase font-bold px-5 py-3"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Reservar Mesa
          </Link>
        </nav>
      </div>
    </header>
  );
}