import Footer from "../components/Footer";
import GlassNavbar from "../components/GlassNavbar";

export default function ServicesPage() {
  const services = [
    {
      title: "Digital Marketing",
      desc: "We help your business grow with data-driven digital strategies.",
    },
    {
      title: "Web Development",
      desc: "Modern, fast, conversion-focused websites.",
    },
    {
      title: "Meta Ads",
      desc: "High-performing Facebook & Instagram ads.",
    },
    {
      title: "SEO Optimization",
      desc: "Rank higher on Google and get organic traffic.",
    },
    {
      title: "Content & Blogging",
      desc: "Engaging content that builds trust.",
    },
    {
      title: "Brand Strategy",
      desc: "Stand out and dominate your niche.",
    },
  ];

  return (
    <>
      {/* SECTION WITH BACKGROUND */}
      <section
        className="relative min-h-screen flex flex-col justify-center px-6 py-20 text-white"
        style={{
          backgroundImage: "url('/images/problemso-bg.png')",
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
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-red-500 transition duration-300 hover:scale-105"
              >
                <h2 className="text-xl font-semibold mb-3">
                  {service.title}
                </h2>

                <p className="text-white/70 text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
      <GlassNavbar />
    </>
  );
}