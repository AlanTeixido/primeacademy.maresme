import { motion } from 'framer-motion'

const FORM_URL = 'https://forms.gle/EbTKJiyBLPnM51bd9'

export default function FreeDayBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 120, damping: 16 }}
      style={{ backgroundColor: '#CC0000' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="text-center sm:text-left">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight">
            PRIMER DIA GRATUÏT
          </h3>
          <p className="text-white/80 text-sm sm:text-base mt-1 font-medium">
            Vine a provar-ho sense compromís
          </p>
        </div>
        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 bg-white text-[#CC0000] px-8 sm:px-10 py-3.5 sm:py-4 font-black text-sm sm:text-base uppercase tracking-widest transition-all hover:bg-gray-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
        >
          RESERVA ARA
        </a>
      </div>
    </motion.section>
  )
}
