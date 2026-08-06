import { TopBar } from "./components/TopBar";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { CoreFeatures } from "./components/CoreFeatures";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Pricing } from "./components/Pricing";
import { Projects } from "./components/Projects";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import { Blog } from "./components/Blog";
import { Footer } from "./components/Footer";
import { GrowthShowcase } from "./components/GrowthShowcase";

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap');`;

export default function Home() {
  return (
    <main
      className="min-h-screen bg-[#F6F3EC] text-[#1E3A8A]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <style>{`
        ${FONT_IMPORT}
        .font-display { font-family: 'Fraunces', serif; }
        ::selection { background: #C7973E; color: #1E3A8A; }
      `}</style>

      <TopBar />
      <Navbar />
      <Hero />
      <CoreFeatures />
      <Marquee />
      <About />
      <Services />
      <Process />
     <GrowthShowcase />
      <Pricing />
      <Projects />
      <Team />
      <Testimonials />
      <Blog />
      <Footer />
    </main>
  );
}