import Reveal from './Reveal.jsx'

export default function CtaBanner() {
  return (
<<<<<<< HEAD
    <section className="relative w-full overflow-hidden py-12 lg:py-24">
      {/* Content */}
      <div className="relative mx-auto flex max-w-[1000px] flex-col items-center px-6 text-center">
        
        {/* Tag */}
        <Reveal as="p" className="text-xs sm:text-sm font-mono tracking-[0.25em] font-bold text-white mb-4">
          Get in Touch
        </Reveal>
        
=======
    <section className="relative w-full py-12 lg:py-24">

      <div className="relative z-10 mx-auto flex max-w-[1000px] flex-col items-center px-6 text-center">

        {/* Tag */}
        <Reveal as="p" className="text-xs sm:text-sm font-mono tracking-[0.25em] font-bold text-white/60 mb-4">
          Get in Touch
        </Reveal>

>>>>>>> 586b25297a4c5b1201b9510cd6f45178c2c70b8c
        {/* Heading */}
        <Reveal
          as="h2"
          delay={100}
          className="font-display font-black text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.0] mb-4"
        >
          Certified Pros.<br />Homes Built to Last.
        </Reveal>
<<<<<<< HEAD
        
        {/* Paragraph */}
        <Reveal 
          delay={200}
          className="text-[15px] sm:text-base text-white/85 font-sans max-w-xl mx-auto leading-relaxed mb-8"
        >
          Let our warrior-grade specialists enhance your home's efficiency and comfort.
        </Reveal>
        
=======

        {/* Paragraph */}
        <Reveal
          delay={200}
          className="text-[15px] sm:text-base text-white/75 font-sans max-w-xl mx-auto leading-relaxed mb-8"
        >
          Let our warrior-grade specialists enhance your home's efficiency and comfort.
        </Reveal>

>>>>>>> 586b25297a4c5b1201b9510cd6f45178c2c70b8c
        {/* CTA Button */}
        <Reveal delay={300}>
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-phsOrange px-7 py-4 font-display text-sm font-bold tracking-[0.12em] text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-phsOrangeDark hover:shadow-lg active:translate-y-0 relative z-10"
          >
            <span>Get Your Free Quote</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
