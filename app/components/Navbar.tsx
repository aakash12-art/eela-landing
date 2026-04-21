import Image from "next/image";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#vision" },
  { label: "Let's Talk", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="absolute left-0 top-0 z-30 w-full">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#" className="inline-flex items-center">
          <Image src="/images/logoo.png" alt="EELA GROUP" width={150} height={55} priority />
        </a>

        <nav className="flex items-center gap-4 text-sm font-medium text-white/90 md:gap-8 md:text-base">
          {navItems.map((item) => (
  <a
    key={item.label}
    href={item.href}
    onClick={(e) => {
      if (item.href === "#contact") {
        e.preventDefault();
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }}
    className="transition-colors duration-300 hover:text-[#ff2a2a]"
  >
    {item.label}
  </a>
))}
        </nav>
      </div>
    </header>
  );
}
