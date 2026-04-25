import Image from "next/image";
import { forwardRef } from "react";
import Navbar from "./Navbar";

const Hero = forwardRef<HTMLElement>(function Hero(_, ref) {
  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen w-full overflow-hidden"
      style={{
        backgroundImage: "url(/images/heroe-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <Navbar />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center justify-between px-4 md:px-10">

        {/* LEFT TEXT */}
        <div className="max-w-[600px] relative z-20">
          <h1 className="text-white text-sm md:text-xl font-semibold leading-[1.8] whitespace-nowrap scale-[0.9] md:scale-100 origin-left">
            <div>EELA GROUP turns struggling businesses</div>
            <div>into high-converting digital brands</div>
            <div>using powerful marketing plus modern</div>
            <div>websites</div>
          </h1>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex items-end justify-end w-full">
          <Image
            src="/images/heroo-side.png"
            alt="Digital growth visuals"
            width={800}
            height={800}
            className="absolute top-[-5%] right-[-6%] w-[260px] md:w-[550px] h-auto object-contain"
            priority
          />
        </div>

        {/* BIG TEXT */}
        <div className="absolute top-[12%] left-[5%] md:top-[18%] md:left-[3%] z-10 text-left">
          <h1 className="text-3xl md:text-7xl font-extrabold leading-[1.1] tracking-tight scale-[0.9] md:scale-100 origin-left">
            <span className="text-[#fa0201]">Rule </span>
            <span className="text-[#fa0201]">Your Market</span>
          </h1>
        </div>

      </div>
    </section>
  );
});

export default Hero;