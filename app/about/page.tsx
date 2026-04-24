import Footer from "../components/Footer";
import GlassNavbar from "../components/GlassNavbar";

export default function AboutPage() {
  return (
    <>
      <GlassNavbar />

      {/* SECTION */}
      <section
        className="relative min-h-screen flex flex-col justify-center px-6 py-20 pt-28 md:pt-32 text-white"
        style={{
          backgroundImage: "url('/images/problems1-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 w-full">
          
          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center w-full">
  ABOUT <span className="text-[#fa0201]">US</span>
</h1>

          {/* VISION */}
       <div className="grid md:grid-cols-2 gap-16 mt-16 px-6 md:px-16">

  {/* LEFT - VISION */}
  <div>
    <h2 className="text-3xl md:text-6xl font-bold mb-4 text-[#fa0201]">
      Our Vision
    </h2>
    <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-md">
      To become a trusted global digital partner by delivering innovative
      and scalable solutions.
    </p>
  </div>

  {/* RIGHT - MISSION */}
  <div className="md:text-right md:ml-auto">
    <h2 className="text-3xl md:text-6xl font-bold mb-4 text-[#fa0201] text-left">
      Our Mission
    </h2>
    <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-md ml-auto text-left">
  To empower businesses with smart solutions that
  <span className="block">
    create measurable growth and success.
  </span>
</p>
  </div>

</div>
<div className="text-center mt-29 mb-10">
  <h2 className="text-3xl md:text-5xl font-bold text-[#fa0201]">
    Rule Your Market
  </h2>
</div>
<div className="w-full flex justify-center mt-16 mb-10">
  <a
    href="/contact"
    className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-[#fa0201] transition hover:scale-105 hover:shadow-lg"
  >
    Get Free Consultation →
  </a>
</div>
        </div>
      </section>

      <Footer />
    </>
  );
}