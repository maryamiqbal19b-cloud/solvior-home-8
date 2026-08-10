import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TopBar } from "./components/TopBar";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap');`;

export const metadata: Metadata = {
  title: "Solvior — Business Consulting",
  description: "Transform your ideal business with expert consultancy services today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col bg-[#F6F3EC] text-[#1E3A8A]"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <style>{`
          ${FONT_IMPORT}
          .font-display { font-family: 'Fraunces', serif; }
          ::selection { background: #C7973E; color: #1E3A8A; }
        `}</style>

        <TopBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
