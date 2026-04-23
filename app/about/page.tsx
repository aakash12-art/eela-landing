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
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          
          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-bold mb-12">
            ABOUT <span className="text-[#fa0201]">US</span>
          </h1>

          {/* VISION */}
          <div className="mb-12 p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10">
            <h2 className="text-2xl font-semibold mb-4 text-[#fa0201]">
              Our Vision
            </h2>
            <p className="text-white/80">
              To become a trusted global digital partner by delivering innovative and scalable solutions.
            </p>
          </div>

          {/* MISSION */}
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10">
            <h2 className="text-2xl font-semibold mb-4 text-[#fa0201]">
              Our Mission
            </h2>
            <p className="text-white/80">
              To empower businesses with smart digital solutions that create measurable growth and long-term success.
            </p>
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
    Get Free Consultation
  </a>
</div>
        </div>
      </section>

      <Footer />
    </>
  );
}