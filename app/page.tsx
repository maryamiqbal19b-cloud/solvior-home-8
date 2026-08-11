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
import { GrowthShowcase } from "./components/GrowthShowcase";

export default function Home() {
  return (
    <>
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
    </>
  );
}
