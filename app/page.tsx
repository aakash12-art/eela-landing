"use client";

import { useEffect } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./components/Hero";
import Section from "./components/Section";

const problems = [
  "Outdated or slow websites",
  "Run ads without strategy",
  "Don't appear on Google",
  "Waste money on random agencies",
];

const vision = [
  "Your website brings inquiries every day",
  "Customers trust you instantly",
  "Competitors struggle while you dominate",
  "You get leads even while you sleep",
];

const deliver = [
  "Conversion-focused website design",
  "SEO that brings organic traffic",
  "Paid ads that generate ROI",
  "Full digital growth system",
];

const combine = [
  "Marketing psychology",
  "Data-driven ad strategy",
  "Modern UI/UX design",
  "Performance tracking systems",
];

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null);
  const section2Ref = useRef<HTMLElement | null>(null);
  const servicesRef = useRef<HTMLElement | null>(null);
  const problemsRef = useRef<HTMLElement | null>(null);
  const visionRef = useRef<HTMLElement | null>(null);
  const deliverRef = useRef<HTMLElement | null>(null);
  const combineRef = useRef<HTMLElement | null>(null);
  const finalCtaRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 85%",
        },
      });

      gsap.from(".hero-image", {
        x: 100,
        opacity: 0,
        duration: 1.1,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 85%",
        },
      });

      gsap.to(".section2-bg", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.from(".services-text > *", {
        y: 32,
        opacity: 0,
        stagger: 0.16,
        duration: 0.8,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".problem-card", {
        y: 40,
        opacity: 0,
        stagger: 0.14,
        duration: 0.75,
        scrollTrigger: {
          trigger: problemsRef.current,
          start: "top 68%",
        },
      });

      gsap.from(".vision-card", {
        opacity: 0,
        scale: 0.94,
        stagger: 0.14,
        duration: 0.8,
        scrollTrigger: {
          trigger: visionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".deliver-left", {
        x: -70,
        opacity: 0,
        duration: 0.9,
        scrollTrigger: {
          trigger: deliverRef.current,
          start: "top 68%",
        },
      });

      gsap.from(".deliver-item", {
        x: 36,
        opacity: 0,
        stagger: 0.14,
        duration: 0.7,
        scrollTrigger: {
          trigger: deliverRef.current,
          start: "top 68%",
        },
      });

      gsap.from(".combine-item", {
        y: 30,
        opacity: 0,
        stagger: 0.16,
        duration: 0.7,
        scrollTrigger: {
          trigger: combineRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".cta-content", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: finalCtaRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".cta-button", {
        scale: 0.85,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: finalCtaRef.current,
          start: "top 70%",
        },
      });
    });

    return () => context.revert();
  }, []);

  return (
    <main className="bg-[#0a0a0a] text-white">
      <Hero ref={heroRef} />

      

      <Section ref={servicesRef} id="services" className="bg-[#ff2a2a]" contentClassName="items-center justify-center text-center">
        <div className="services-text max-w-4xl space-y-5">
          <p className="text-2xl font-bold leading-tight md:text-4xl">
            Stop Losing Customers Online While Your Competitors Grow Every Day.
          </p>
          <p className="text-lg leading-relaxed md:text-2xl">
            Your business is invisible on Google, social media, and ads — and every second you wait, you are losing
            money
          </p>
        </div>
      </Section>

      <Section
        ref={problemsRef}
        id="problems"
        backgroundImage="/images/problems-bg.png"
        overlayClassName="bg-black/60"
        contentClassName="items-center"
      >
        <div className="w-full">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-5xl">Problems Holding Your Growth Back</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {problems.map((item) => (
              <article
                key={item}
                className="problem-card rounded-2xl border border-white/25 bg-white/10 p-7 backdrop-blur-md transition-transform duration-300 hover:scale-[1.02]"
              >
                <p className="text-xl font-semibold md:text-2xl">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section
        ref={visionRef}
        id="vision"
        backgroundImage="/images/vision-bg.jpeg"
        overlayClassName="bg-black/58"
        contentClassName="items-center"
      >
        <div className="w-full">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-5xl">Our Vision For Your Business</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {vision.map((item) => (
              <article key={item} className="vision-card rounded-2xl border border-[#ff2a2a]/50 bg-black/35 p-7">
                <p className="text-xl font-semibold md:text-2xl">{item}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center text-lg font-semibold text-[#ff5f5f] md:text-2xl">
            That&apos;s not luck. That&apos;s EELA GROUP STRATEGY SYSTEM
          </p>
        </div>
      </Section>

      <Section
        ref={deliverRef}
        id="deliver"
        backgroundImage="/images/section2-bg.png"
        overlayClassName="bg-black/70"
        contentClassName="items-center"
      >
        <div className="grid w-full gap-10 md:grid-cols-2">
          <div className="deliver-left text-3xl font-bold leading-tight md:text-6xl">
            We don&apos;t guess.
            <br />
            We engineer results.
          </div>

          <div className="space-y-4 self-center text-lg md:text-2xl">
            {deliver.map((item) => (
              <p key={item} className="deliver-item rounded-xl border border-white/15 bg-black/35 p-4">
                {item}
              </p>
            ))}
          </div>
        </div>
      </Section>

     <Section
  ref={combineRef}
  id="combine"
  backgroundImage="/images/combine-bg.jpeg"
  overlayClassName="bg-black/65"
  contentClassName="items-center justify-start"
>
        <div className="w-full max-w-6xl px-6 md:px-12 flex items-center min-h-screen">
  
  {/* LEFT CONTENT */}
  <div className="max-w-lg text-left">
    
    <h2 className="mb-6 text-3xl font-bold md:text-5xl">
      We Combine
    </h2>

    <div className="space-y-4 text-lg font-semibold md:text-2xl">
      <p>→ Marketing psychology</p>
      <p>→ Data-driven ad strategy</p>
      <p>→ Modern UI/UX design</p>
      <p>→ Performance tracking systems</p>
    </div>

    <p className="mt-8 text-sm text-white/80 md:text-base">
      Built for businesses that want growth, not experiments
    </p>

  </div>

</div>
      </Section>

      <Section
        ref={finalCtaRef}
        id="final-cta"
        className="bg-[#ff2a2a]"
        contentClassName="items-center justify-center text-center"
      >
        <div className="cta-content max-w-3xl space-y-8">
          <h2 className="text-3xl font-bold leading-tight md:text-6xl">
            Will you grow... or get left behind?
            <br />
            Let&apos;s build your digital dominance today
          </h2>

          <a
  href="#contact"
  className="cta-button rounded-full bg-black px-8 py-4 text-base font-semibold text-white transition-transform duration-300 hover:scale-105 md:text-lg"
>
  Get Free Consultation
</a>

          <div id="contact-anchor" className="h-1 w-full" />
        </div>
      </Section>
      <section
  id="contact"
  className="w-full bg-black text-white py-20 px-6 md:px-10"
>
  <div className="max-w-5xl mx-auto">

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Let’s Talk About Your Growth 🚀
    </h2>

    <p className="text-gray-400 mb-10">
      Tell us about your business and goals.
      We’ll get back to you with a strategy that actually works.
    </p>

    {/* Form */}
    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

      <input
        type="text"
        placeholder="Your Name"
        className="p-3 bg-transparent border border-gray-600 rounded"
        required
      />

      <input
        type="email"
        placeholder="Email Address"
        className="p-3 bg-transparent border border-gray-600 rounded"
        required
      />

      <input
        type="tel"
        placeholder="Phone Number"
        className="p-3 bg-transparent border border-gray-600 rounded"
        required
      />

      <input
        type="text"
        placeholder="Business Name"
        className="p-3 bg-transparent border border-gray-600 rounded"
      />

      {/* Dropdown */}
      <select className="p-3 bg-black border border-gray-600 rounded col-span-1 md:col-span-2">
        <option>Select Service</option>
        <option>Website Development</option>
        <option>SEO</option>
        <option>Paid Ads</option>
        <option>Digital Marketing</option>
        <option>Full Growth System</option>
      </select>

      {/* Message */}
      <textarea
        placeholder="Tell us about your requirement..."
        rows={5}
        className="p-3 bg-transparent border border-gray-600 rounded col-span-1 md:col-span-2"
      />

      {/* Button */}
      <button
        type="submit"
        className="bg-red-500 hover:bg-red-600 transition-all px-6 py-3 rounded col-span-1 md:col-span-2"
      >
        Get Free Consultation
      </button>
    </form>

    {/* Contact Info */}
    <div className="mt-10 text-gray-400">
      <p>📧 info@eelaagroup.com</p>
      <p>📞 +91 XXXXX XXXXX</p>
    </div>

  </div>
</section>

    </main>
  );
}
