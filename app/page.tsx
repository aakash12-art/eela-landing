"use client";

import { useEffect } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Footer from "./components/Footer";
import { Zap, Target, Search, DollarSign } from "lucide-react";
import { TrendingUp, ShieldCheck, Swords, Moon } from "lucide-react";
const problems = [
  {
    text: "Have outdated or slow websites",
    icon: Zap,
  },
  {
    text: "Run ads without strategy",
    icon: Target,
  },
  {
    text: "Don't appear on Google",
    icon: Search,
  },
  {
    text: "Waste money on random agencies",
    icon: DollarSign,
  },
];

const visions = [
  {
    text: "Your website brings inquiries every day",
    icon: TrendingUp,
  },
  {
    text: "Customers trust you instantly",
    icon: ShieldCheck,
  },
  {
    text: "Competitors struggle while you dominate",
    icon: Swords,
  },
  {
    text: "You get leads even while you sleep",
    icon: Moon,
  },
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

      

      <Section ref={servicesRef} id="services" className="bg-[#fa0201]" contentClassName="items-center justify-center text-center">
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
        backgroundImage="/images/problemso-bg.png"
        overlayClassName="bg-black/60"
        contentClassName="items-center"
      >
        <div className="w-full">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-5xl">Why Most Businesses Fail Online</h2>
         <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
  {problems.map((item, index) => {
    const Icon = item.icon;

    return (
      <div
        key={index}
        className="flex items-center gap-4 p-4 md:p-5 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-red-500 transition"
      >
        {/* ICON BOX */}
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10">
          <Icon className="w-5 h-5 text-red-500" />
        </div>

        {/* TEXT */}
        <p className="text-white font-medium">
          {item.text}
        </p>
      </div>
    );
  })}
</div>

{/* 👇 ADD THIS EXACTLY HERE */}
<div className="mt-10 text-center">
  <p className="text-lg md:text-4xl font-semibold text-white/80">
    But it can be fixed by{" "}
    <span className="text-[#fa0201] font-bold">
      EELAA GROUP
    </span>
  </p>
</div>
        </div>
      </Section>

      <Section
        ref={visionRef}
        id="vision"
        backgroundImage="/images/visiono-bg.png"
        overlayClassName="bg-black/58"
        contentClassName="items-center"
      >
        <div className="w-full">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-5xl">Imagine This for Your Business</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
  {visions.map((item, index) => {
  const Icon = item.icon;

  return (
    <div
      key={index}
      className="flex items-center gap-4 p-4 md:p-5 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-red-500 transition"
    >
      
      {/* ICON BOX */}
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10">
        <Icon className="w-5 h-5 text-red-500" />
      </div>

      {/* TEXT */}
      <p className="text-white font-medium">
        {item.text}
      </p>
    </div>
  );
})}
</div>
          <p className="mt-10 text-center text-lg font-semibold text-[#fa0201] md:text-3xl">
            That&apos;s not luck. That&apos;s EELA GROUP Strategy System
          </p>
        </div>
      </Section>

<Section
  id="deliver"
  backgroundImage="/images/section23-bg.png"
  overlayClassName="bg-black/65"
  contentClassName="items-center justify-end"
>
  <div className="w-full max-w-6xl px-6 md:px-20 lg:px-32 flex items-center justify-center md:justify-end min-h-[80vh] md:min-h-screen">

    <div className="max-w-lg">
      
      <h2 className="mb-6 text-3xl font-bold md:text-5xl">
        What we deliver:
      </h2>

      <div className="space-y-4 text-lg font-semibold md:text-2xl">
        <p>→ Conversion-focused website design</p>
        <p>→ SEO that brings organic traffic</p>
        <p>→ Paid ads that generate ROI</p>
        <p>→ Full digital growth system</p>
      </div>

      <p className="mt-8 text-sm text-white/80 md:text-base">
        We don’t guess. We engineer results.
      </p>

    </div>
  </div>
</Section>

     <Section
  ref={combineRef}
  id="combine"
  backgroundImage="/images/combines-bg.png"
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
        className="bg-[#fa0201] pb-0 mb-0"
        contentClassName="items-center justify-center text-center"
      >
        <div className="cta-content w-full space-y-8">

  {/* 👇 NEW LINE ADDED */}
 <h1 className="text-3xl md:text-5xl font-bold text-white text-center leading-tight max-w-none">
  <span className="block">
    "A website without leads and marketing without 
  </span>
  <span className="block">
    results are just decorations that drain your money"
  </span>
</h1>
  <p className="text-3xl font-bold leading-tight md:text-4xl whitespace-nowrap">
    Will you grow... or get left behind?
  </p>

  <p className="text-3xl md:text-4xl font-bold leading-tight text-white md:whitespace-nowrap mt-4">
    Let&apos;s build your digital dominance today
  </p>

          <a
  href="/contact"
  className="cta-button rounded-full bg-white px-8 py-4 text-base font-semibold text-[#fa0201] transition-transform duration-300 hover:scale-105 md:text-lg"
>
  Get Free Consultation →
</a>

          <div id="contact-anchor" className="h-1 w-full" />
        </div>
      </Section>
     

<Footer />
 
    </main>
  );
}
