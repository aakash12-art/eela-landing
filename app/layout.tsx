import type { Metadata } from "next";
import { B612 } from "next/font/google";
import "./globals.css";
import { Tenor_Sans } from "next/font/google";


const tenor = Tenor_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-tenor",
});

const b612 = B612({
  weight: ["400", "700"],
  variable: "--font-b612",
  subsets: ["latin"],
});

export const metadata = {
  title: "EELAA Group - Rule Your Market",
  description:
    "EELAA Group helps businesses grow through digital marketing, branding, and high-converting strategies.",
 
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${b612.variable} h-full antialiased`}>
      <body className={`${tenor.variable} min-h-full flex flex-col bg-[#0a0a0a] text-white`}>
    {children}
  </body>
    </html>
  );
}
