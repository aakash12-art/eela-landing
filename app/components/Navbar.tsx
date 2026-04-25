import Image from "next/image";
import { useState } from "react";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Let's Talk", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-2 md:px-10">
        
        {/* LOGO */}
        <a href="/" className="inline-flex items-center">
          <Image
            src="/images/logoo.png"
            alt="EELA GROUP"
            width={140}
            height={50}
            className="h-auto w-auto"
            priority
          />
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-4 text-sm font-medium text-white/90 md:gap-8 md:text-base">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`transition-all duration-300 px-3 py-1.5 rounded-full ${
                item.label === "Let's Talk"
                  ? "bg-white text-black font-semibold hover:bg-gray-200 shadow-md"
                  : "backdrop-blur-lg bg-white/20 border border-white/30 text-white hover:bg-white/30 hover:scale-105"
              }`}
            >
              {item.label === "Let's Talk" ? "Let's Talk →" : item.label}
            </a>
          ))}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 mt-4 px-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`w-full text-center transition-all duration-300 px-4 py-2 rounded-full ${
                item.label === "Let's Talk"
                  ? "bg-white text-black font-semibold"
                  : "bg-white/20 border border-white/30 text-white"
              }`}
            >
              {item.label === "Let's Talk" ? "Let's Talk →" : item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}