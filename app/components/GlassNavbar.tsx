"use client";

import Link from "next/link";
import Image from "next/image";

export default function GlassNavbar() {
  return (
    <header className="fixed top-0 w-full z-50">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4 backdrop-blur-lg bg-white/10 border-b border-white/10 rounded-b-xl">
        
        <Link href="/">
          <Image src="/images/logoo.png" alt="logo" width={120} height={40} />
        </Link>

        <nav className="flex gap-4">
          <Link href="/services">Services</Link>
          <Link href="/">Home</Link>
          <Link href="/contact">Let’s Talk</Link>
        </nav>
      </div>
    </header>
  );
}