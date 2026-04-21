import Image from "next/image";
import { forwardRef } from "react";
import Navbar from "./Navbar";

const Hero = forwardRef<HTMLElement>(function Hero(_, ref) {
  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        backgroundImage: "url(/images/heroe-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/55" />
      <Navbar />
<div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-end justify-between px-6 pb-16 pt-28 md:px-10">
        <div className="hero-text w-[480px] z-10">
          <h1 className="text-white text-xl md:text-2xl font-semibold leading-snug">
      EELA GROUP turns struggling businesses <br />
      into high-converting digital brands <br />
      using powerful marketing plus modern <br />
      websites
    </h1>
        </div>

        <div className="hero-image relative z-0 flex items-end justify-between gap-10">
          <Image
  src="/images/heroo-side.png"
  alt="Digital growth visuals"
  width={700}
  height={700}
  className="object-contain w-[400px] md:w-[500px] lg:w-[550px] mt-[-20px]"
  priority
/>
        </div>
      </div>
    </section>
  );
});

export default Hero;
