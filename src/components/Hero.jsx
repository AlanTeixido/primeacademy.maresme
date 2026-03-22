import { motion } from 'framer-motion'
import { GiSoccerBall, GiSoccerField } from 'react-icons/gi'

const FORM_URL = 'https://forms.gle/EbTKJiyBLPnM51bd9'

export default function Hero() {
  return (
    <section
      id="inici"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-prime-900 via-prime-700 to-prime-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(204,0,0,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(204,0,0,0.06),transparent_50%)]" />

      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-28 left-[8%] text-accent/8 text-7xl sm:text-9xl hidden sm:block"
      >
        <GiSoccerBall />
      </motion.div>
      <motion.div
        animate={{ y: [0, 14, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute bottom-28 right-[8%] text-accent/8 text-6xl sm:text-8xl hidden sm:block"
      >
        <GiSoccerField />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 150, damping: 15, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-accent/10 border border-accent/25 rounded-full px-5 py-2 mb-6 sm:mb-8"
        >
          <GiSoccerBall className="text-accent text-sm" />
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">Sant Pol de Mar — Maresme</span>
        </motion.div>

        <motion.h1
          initial={{ y: -180, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 80, damping: 12, mass: 2.5 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight"
        >
          ENTRENA.
          <br />
          <span className="text-accent">MILLORA.</span>
          <br />
          SUPERA'T.
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 sm:mt-8 text-gray-300/80 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Acadèmia esportiva al Maresme especialitzada en tecnificació futbol 7,
          millora del rendiment i readaptació de lesions. Nascuts 2016-2017. Diumenges a la tarda.
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-bold text-lg uppercase tracking-wider transition-all overflow-hidden"
          >
            <span className="relative z-10">Inscriu-te ara</span>
            <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-xl" />
          </a>
          <a
            href="#serveis"
            className="border-2 border-accent/50 hover:border-accent text-white px-8 py-4 rounded-xl font-bold text-lg uppercase tracking-wider transition-all hover:bg-accent/10"
          >
            Descobreix els serveis
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-accent/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
