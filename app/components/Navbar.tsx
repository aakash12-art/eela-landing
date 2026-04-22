import Image from "next/image";


const navItems = [
 { label: "Services", href: "/services" },
  { label: "About", href: "#vision" },
  { label: "Let's Talk", href: "/contact" },
];

export default function Navbar() {
  return (<header className="sticky top-[-10px] z-50 w-full bg-transparent">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-0 md:px-10">
        <a href="/" className="inline-flex items-center -ml-13">
          <Image src="/images/logoo.png" alt="EELA GROUP" width={150} height={55} className="h-auto w-auto" priority />
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
  className={`transition-all duration-300 px-3 py-1.5 rounded-full ${
  item.label === "Let's Talk"
    ? "bg-white text-black font-semibold hover:bg-gray-200 shadow-md"
    : "backdrop-blur-lg bg-white/20 border border-white/30 text-white hover:bg-white/30 hover:scale-105"
}`}
>
  {item.label}
</a>
))}
        </nav>
      </div>
    </header>
  );
}
