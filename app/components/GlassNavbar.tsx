"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function GlassNavbar() {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 80) {
        // scrolling DOWN → hide
        setShow(false);
      } else {
        // scrolling UP → show
        setShow(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logoo.png"
            alt="EELA GROUP"
            width={120}
            height={40}
          />
        </Link>

        {/* NAV */}
        <nav className="flex items-center gap-4 text-sm md:text-base">
          <Link href="/services" className="text-white hover:text-red-500">
            Services
          </Link>

          <Link href="/" className="text-white hover:text-red-500">
            Home
          </Link>

          <Link
            href="/contact"
            className="px-4 py-1.5 rounded-full bg-white text-black font-semibold hover:bg-gray-200"
          >
             Let's Talk →
          </Link>
        </nav>
      </div>
    </header>
  );
}