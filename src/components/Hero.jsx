import { motion } from 'framer-motion'

const FORM_URL = 'https://forms.gle/EbTKJiyBLPnM51bd9'

function FootballPitchSVG() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="50" width="900" height="500" stroke="white" strokeWidth="2" fill="none" />
      <line x1="500" y1="50" x2="500" y2="550" stroke="white" strokeWidth="2" />
      <circle cx="500" cy="300" r="80" stroke="white" strokeWidth="2" fill="none" />
      <circle cx="500" cy="300" r="4" fill="white" />
      <rect x="50" y="175" width="130" height="250" stroke="white" strokeWidth="2" fill="none" />
      <rect x="820" y="175" width="130" height="250" stroke="white" strokeWidth="2" fill="none" />
      <rect x="50" y="225" width="50" height="150" stroke="white" strokeWidth="2" fill="none" />
      <rect x="900" y="225" width="50" height="150" stroke="white" strokeWidth="2" fill="none" />
      <path d="M 180 250 A 40 40 0 0 1 180 350" stroke="white" strokeWidth="2" fill="none" />
      <path d="M 820 250 A 40 40 0 0 0 820 350" stroke="white" strokeWidth="2" fill="none" />
      <path d="M 50 50 Q 75 75 50 100" stroke="white" strokeWidth="2" fill="none" />
      <path d="M 950 50 Q 925 75 950 100" stroke="white" strokeWidth="2" fill="none" />
      <path d="M 50 550 Q 75 525 50 500" stroke="white" strokeWidth="2" fill="none" />
      <path d="M 950 550 Q 925 525 950 500" stroke="white" strokeWidth="2" fill="none" />
    </svg>
  )
}

function FootballSVG({ className }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M50 5 L65 25 L58 45 L42 45 L35 25 Z" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.15" />
      <path d="M95 50 L80 35 L80 55 L95 50 Z" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M5 50 L20 35 L20 55 L5 50 Z" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M35 90 L45 75 L55 75 L65 90 Z" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section
      id="inici"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#0a0a0a' }}
    >
      {/* Gradient diagonal negre → vermell fosc */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a0505] to-[#0a0a0a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(204,0,0,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(204,0,0,0.08),transparent_50%)]" />

      {/* Camp de futbol SVG de fons */}
      <FootballPitchSVG />

      {/* Línia diagonal decorativa vermella */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent rotate-[35deg] origin-center" />
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[2px] bg-gradient-to-r from-transparent via-accent/20 to-transparent rotate-[35deg] origin-center" />
      </div>

      {/* Pilota de futbol SVG flotant */}
      <motion.div
        animate={{ y: [0, -25, 0], rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-24 right-[12%] hidden sm:block"
      >
        <FootballSVG className="w-16 h-16 sm:w-24 sm:h-24 text-white/[0.06]" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 18, 0], rotate: [360, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-32 left-[10%] hidden sm:block"
      >
        <FootballSVG className="w-12 h-12 sm:w-16 sm:h-16 text-accent/[0.08]" />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 150, damping: 15, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 px-5 py-2 mb-6 sm:mb-8"
          style={{ clipPath: 'polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%)' }}
        >
          <span className="text-accent text-xs sm:text-sm font-bold uppercase tracking-[0.25em]">Sant Pol de Mar — Maresme</span>
        </motion.div>

        {/* Títol ENORME */}
        <motion.h1
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 14, mass: 1.5 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[10rem] font-black leading-[0.85] tracking-tighter"
        >
          ENTRENA.
          <br />
          <span className="text-accent">MILLORA.</span>
          <br />
          SUPERA'T.
        </motion.h1>

        <motion.p
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 80, damping: 16, delay: 0.4 }}
          className="mt-6 sm:mt-8 text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Acadèmia esportiva al Maresme. Tecnificació F7, rendiment esportiu
          i readaptació de lesions. Nascuts 2016-2017. Diumenges tarda.
        </motion.p>

        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 80, damping: 16, delay: 0.6 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-accent hover:bg-accent-hover text-white px-10 py-4 sm:py-5 font-black text-lg uppercase tracking-widest transition-all overflow-hidden hover:shadow-[0_0_40px_rgba(204,0,0,0.5)]"
            style={{ clipPath: 'polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%)' }}
          >
            <span className="relative z-10">INSCRIU-TE ARA</span>
            <span className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </a>
          <a
            href="#serveis"
            className="border-2 border-white/20 hover:border-accent text-white px-10 py-4 sm:py-5 font-bold text-lg uppercase tracking-widest transition-all hover:bg-accent/5"
            style={{ clipPath: 'polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%)' }}
          >
            ELS SERVEIS
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-accent/40 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-accent rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}
