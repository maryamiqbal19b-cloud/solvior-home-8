import { Eyebrow, Reveal } from "./Reveal";
import { TEAM } from "./data";

const BIOS = [
  "Leads client strategy from first call to final delivery, keeping every engagement on track.",
  "Changing marketplace business environment, the key to success lies. In today's dynamic.",
  "Turns messy operations data into a plan the whole team can actually execute.",
  "Builds the growth playbooks clients use long after the engagement ends.",
];

export function Team() {
  return (
        <section id="team" className="py-24 px-6 md:px-10 max-w-6xl mx-auto overflow-hidden bg-[#F8F9FA]">
       <div className="text-center mb-14">
       <Eyebrow>Meet Our Team</Eyebrow>
       <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0B1B33] text-center">
       Decades of our combined
       <br />
        consultant expert
      </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {TEAM.map((t, i) => {
          const tilt = "";
          return (
            <Reveal key={t.name} delay={i * 100}>
              <div
               className="relative group overflow-hidden"
              >
                <img
                  src={t.img}
                  alt={t.name}
                  className="h-72 sm:h-96 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Default name/role - fades out on hover */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0B1B33]/85 backdrop-blur-sm px-5 py-4 transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="text-white font-display text-lg font-bold">
                    {t.name}
                  </h3>
                  <p className="text-white/70 text-sm">{t.role}</p>
                </div>

                {/* Hover overlay - bio + social icons */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B33]/95 via-[#0B1B33]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-5">
                  <div>
                    <h3 className="text-white font-display text-lg font-bold">
                      {t.name}
                    </h3>
                    <p className="text-[#60A5FA] text-sm mb-3">{t.role}</p>
                    <p className="text-white/75 text-sm leading-relaxed">
                      {BIOS[i % BIOS.length]}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    {["in", "tw", "ig", "fb"].map((s) => (
                      <span
                        key={s}
                        className="w-8 h-8 rounded-full bg-white/15 hover:bg-[#2563EB] flex items-center justify-center text-white text-xs font-bold transition-colors cursor-pointer"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}