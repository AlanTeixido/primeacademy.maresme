import { motion } from 'framer-motion'
import { HiClock, HiLocationMarker, HiUserGroup } from 'react-icons/hi'
import { GiSnowflake1, GiSunrise } from 'react-icons/gi'

const FORM_URL = 'https://forms.gle/EbTKJiyBLPnM51bd9'

export default function Horaris() {
  return (
    <section id="horaris" className="py-20 sm:py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(204,0,0,0.04),transparent_70%)]" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 18 }}
          className="text-center mb-14 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight">
            <span className="text-accent">HORARIS</span> I UBICACIÓ
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4" />
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
            Ens trobem cada diumenge a la tarda a Sant Pol de Mar.
          </p>
        </motion.div>

        {/* Horaris blocs */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-10">
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 16 }}
            className="p-7 sm:p-8"
            style={{ backgroundColor: '#141414', borderLeft: '4px solid #CC0000' }}
          >
            <div className="flex items-center gap-3 mb-5">
              <GiSnowflake1 className="text-accent text-2xl" />
              <h3 className="text-xl font-black text-white uppercase tracking-widest">Horari d'Hivern</h3>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <HiClock className="text-accent text-lg shrink-0" />
              <div>
                <p className="text-white font-bold text-lg">Diumenges tarda</p>
                <p className="text-accent font-black text-2xl">16:30h - 18:00h</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-2 uppercase tracking-wider font-medium">Setembre — Març</p>
          </motion.div>

          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 16, delay: 0.15 }}
            className="p-7 sm:p-8"
            style={{ backgroundColor: '#141414', borderLeft: '4px solid #CC0000' }}
          >
            <div className="flex items-center gap-3 mb-5">
              <GiSunrise className="text-accent text-2xl" />
              <h3 className="text-xl font-black text-white uppercase tracking-widest">Horari d'Estiu</h3>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <HiClock className="text-accent text-lg shrink-0" />
              <div>
                <p className="text-white font-bold text-lg">Diumenges tarda</p>
                <p className="text-accent font-black text-2xl">17:30h - 19:00h</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-2 uppercase tracking-wider font-medium">Abril — Juny</p>
          </motion.div>
        </div>

        {/* Info bloc */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 120, damping: 16 }}
          className="p-8 sm:p-10"
          style={{ backgroundColor: '#141414', borderLeft: '4px solid #CC0000' }}
        >
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(204,0,0,0.1)' }}>
                <HiLocationMarker className="text-accent text-xl" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg uppercase tracking-wide">Ubicació</h3>
                <p className="text-accent font-black text-xl mt-1">Sant Pol de Mar</p>
                <p className="text-gray-500 text-sm mt-1">Comarca del Maresme, Barcelona</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(204,0,0,0.1)' }}>
                <HiUserGroup className="text-accent text-xl" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg uppercase tracking-wide">Edat</h3>
                <p className="text-accent font-black text-xl mt-1">Nascuts 2016-2017</p>
                <p className="text-gray-500 text-sm mt-1">Obert a altres edats</p>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-prime-600 text-center">
            <p className="text-gray-400 text-base mb-5">
              Vols reservar la teva plaça per al proper diumenge?
            </p>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent hover:bg-accent-hover text-white px-10 py-4 font-black uppercase tracking-widest transition-all hover:shadow-[0_0_30px_rgba(204,0,0,0.5)]"
            >
              INSCRIU-TE
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
