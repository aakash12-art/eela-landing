import Footer from "../components/Footer";
import GlassNavbar from "../components/GlassNavbar";
import {
  TrendingUp,
  Code,
  Megaphone,
  Search,
  PenTool,
  Sparkles,
} from "lucide-react";


export default function ServicesPage() {
const services = [
  {
    title: "Meta Ads",
    desc: "High-performing Facebook & Instagram ads.",
    icon: TrendingUp,
  },
  {
    title: "Google Ads",
    desc: "Modern, fast, conversion-focused websites.",
    icon: Code,
  },
  {
    title: "SEO Optimization",
    desc: "Rank higher on Google and get organic traffic.",
    icon: Megaphone,
  },
  {
    title: "Social Media Management",
    desc: "Rank higher on Social media and get organic traffic.",
    icon: Search,
  },
  {
    title: "LinkedInn Ads and Optimisation ",
    desc: "Engaging content that builds trust.",
    icon: PenTool,
  },
  {
    title: "Website and Landing page Development",
    desc: "Stand out and dominate your niche.",
    icon: Sparkles,
  },
];

  return (
    <>
    <GlassNavbar />
      {/* SECTION WITH BACKGROUND */}
      <section
        className="relative min-h-screen flex flex-col justify-center px-6 py-18 pt-28 md:pt-45 text-white"
        style={{
          backgroundImage: "url('/images/problemsoa-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* DARK OVERLAY (IMPORTANT) */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* CONTENT */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-14">
            OUR <span className="text-red-500">SERVICES</span>
          </h1>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {services.map((service, index) => {
  const Icon = service.icon;

  return (
    <div
      key={index}
      className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-red-500 transition duration-300 hover:scale-105"
    >
      
      {/* ICON BOX */}
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 mb-4">
        <Icon className="w-5 h-5 text-red-500" />
      </div>

      {/* TITLE */}
      <h2 className="text-lg font-semibold mb-2">
        {service.title}
      </h2>

      {/* DESCRIPTION */}
      <p className="text-white/70 text-sm">
        {service.desc}
      </p>
    </div>
  );
})}
          </div>
          <div className="text-center mt-16 mb-10">
  <h2 className="text-3xl md:text-5xl font-bold text-[#fa0201]">
    Rule Your Market
  </h2>
</div>
<div className="w-full flex justify-center mt-16 mb-10">
  <a
    href="/contact"
    className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-[#fa0201] transition hover:scale-105 hover:shadow-lg"
  >
    Get Free Consultation
  </a>
</div>
        </div>
        
      </section>

      {/* FOOTER */}
      <Footer />
      
    </>
  );
}