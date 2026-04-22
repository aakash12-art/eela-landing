import type { Metadata } from "next";
import { B612 } from "next/font/google";
import "./globals.css";

const b612 = B612({
  weight: ["400", "700"],
  variable: "--font-b612",
  subsets: ["latin"],
});

export const metadata = {
  title: "EELA Group | Digital Marketing & Web Development",
  description: "We help businesses grow with SEO, Ads, and Web Development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${b612.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
