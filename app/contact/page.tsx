import Footer from "../components/Footer";
import GlassNavbar from "../components/GlassNavbar";

export default function ContactPage() {
  return (
    <>
    <GlassNavbar />
      {/* BACKGROUND SECTION */}
      <section
        className="relative min-h-screen flex items-center justify-center px-6 text-white"
        style={{
          backgroundImage: "url('/images/section23-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* FORM */}
        <div className="relative z-10 w-full max-w-2xl bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10">
          
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Let’s Talk
          </h1>

          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-black/40 border border-white/20 focus:outline-none focus:border-red-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-black/40 border border-white/20 focus:outline-none focus:border-red-500"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="p-3 rounded-lg bg-black/40 border border-white/20 focus:outline-none focus:border-red-500 resize-none"
            />

            <button className="bg-red-500 hover:bg-red-600 transition p-3 rounded-lg font-semibold">
              Send Message
            </button>
          </form>
        </div>
      </section>
 
 
      {/* FOOTER */}
      <Footer />
    </>
  );
}