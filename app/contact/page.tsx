"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import GlassNavbar from "../components/GlassNavbar";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Submitted successfully ✅");

        // reset form
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        alert("Something went wrong ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Server error ❌");
    }
  };

  return (
    <>
      <GlassNavbar />

      {/* BACKGROUND SECTION */}
      <section
        className="min-h-screen flex items-center justify-center pt-28 md:pt-32 
        bg-[url('/images/section2312-mobile-bg.png')] 
        md:bg-[url('/images/section2312-bg.png')] 
        bg-cover bg-center relative"
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* FORM */}
        <div className="relative z-10 w-full max-w-2xl p-8 rounded-2xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Let’s Talk
          </h1>

          {/* ✅ IMPORTANT: onSubmit added */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-3 rounded-lg bg-black/40 border border-white/20 focus:outline-none focus:border-red-500"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 rounded-lg bg-black/40 border border-white/20 focus:outline-none focus:border-red-500"
              required
            />

            <input
              type="tel"
              placeholder="Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="p-3 rounded-lg bg-black/40 border border-white/20 focus:outline-none focus:border-red-500"
              required
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="p-3 rounded-lg bg-black/40 border border-white/20 focus:outline-none focus:border-red-500 resize-none"
              required
            />

            <button
              type="submit"
              className="bg-[#fa0201] hover:bg-red-600 transition px-6 py-2 rounded-md text-sm font-medium self-center"
            >
              Submit Form
            </button>
          </form>

          <div className="text-center mt-16 mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-[#fa0201]">
              Rule Your Market
            </h2>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}