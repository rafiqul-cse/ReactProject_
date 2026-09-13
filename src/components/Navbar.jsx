import { useState } from "react";
import logo from "../assets/logo-text.png";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        
        <button
          type="button"
          className="p-2 -ml-2 rounded-md text-slate-700 hover:bg-slate-100 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>

        {/* Brand logo: left on desktop, centered on mobile */}
        <a href="#home" className="flex items-center gap-2 md:mr-8">
          <img src={logo} alt="Dev Stack" className="h-8 w-auto" />
        </a>


        <ul className="hidden md:flex flex-1 items-center justify-center gap-8 text-sm font-medium text-slate-600">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="transition-colors hover:text-brand-pink aria-[current=page]:text-brand-pink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>


        <div className="flex items-center gap-2 sm:gap-4">
          <button
            type="button"
            className="hidden text-sm font-medium text-slate-700 hover:text-slate-900 sm:inline-block"
          >
            Sign In
          </button>
          <button
            type="button"
            className="brand-gradient-bg rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-brand-pink/30 transition-transform hover:scale-[1.03]"
          >
            Sign Up
          </button>
        </div>
      </nav>

      {menuOpen && (
        <ul className="flex flex-col gap-1 border-t border-slate-100 bg-white px-4 py-3 text-sm font-medium text-slate-700 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="block rounded-md px-2 py-2 hover:bg-slate-50"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
