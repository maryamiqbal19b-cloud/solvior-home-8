import { Eyebrow, Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-10 bg-white">
      <Reveal className="max-w-3xl mx-auto text-center mb-12">
        <Eyebrow>Get In Touch</Eyebrow>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-5">
          Need more help? Contact us
        </h2>
        <p className="text-[#1E3A8A]/60 leading-relaxed">
          Have a question or want to work with us? Fill out the form and our
          team will get back to you shortly.
        </p>
      </Reveal>
      <Reveal
        className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4"
        delay={150}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="border border-[#1E3A8A]/15 rounded-xl px-5 py-3.5 focus:outline-none focus:border-[#C7973E] bg-[#F6F3EC]"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-[#1E3A8A]/15 rounded-xl px-5 py-3.5 focus:outline-none focus:border-[#C7973E] bg-[#F6F3EC]"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="border border-[#1E3A8A]/15 rounded-xl px-5 py-3.5 md:col-span-2 focus:outline-none focus:border-[#C7973E] bg-[#F6F3EC]"
        />
        <button className="bg-[#1E3A8A] text-[#F6F3EC] py-3.5 rounded-xl font-semibold hover:bg-[#16294A] transition-colors md:col-span-2">
          Send Message
        </button>
      </Reveal>
    </section>
  );
}