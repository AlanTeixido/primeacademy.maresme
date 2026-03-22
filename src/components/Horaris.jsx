import { motion } from 'framer-motion'
import { HiCalendar, HiClock, HiLocationMarker, HiUserGroup } from 'react-icons/hi'

const FORM_URL = 'https://forms.gle/EbTKJiyBLPnM51bd9'

export default function Horaris() {
  return (
    <section id="horaris" className="py-16 sm:py-20 lg:py-24 bg-prime-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(204,0,0,0.05),transparent_70%)]" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 150, damping: 20 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            <span className="text-accent">HORARIS</span> I UBICACIÓ
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Ens trobem cada diumenge a la tarda a Sant Pol de Mar.
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 150, damping: 18 }}
          className="rounded-2xl bg-gradient-to-br from-prime-800 via-prime-700 to-prime-800 border border-prime-600 p-8 sm:p-12"
        >
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0">
                <HiCalendar className="text-accent text-xl" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Dia</h3>
                <p className="text-accent font-semibold text-xl mt-1">Diumenges</p>
                <p className="text-gray-400 text-sm mt-1">Sessions setmanals regulars</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0">
                <HiClock className="text-accent text-xl" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Horari</h3>
                <p className="text-accent font-semibold text-xl mt-1">Tarda</p>
                <p className="text-gray-400 text-sm mt-1">Horari adaptat per a tothom</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0">
                <HiLocationMarker className="text-accent text-xl" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Ubicació</h3>
                <p className="text-accent font-semibold text-xl mt-1">Sant Pol de Mar</p>
                <p className="text-gray-400 text-sm mt-1">Comarca del Maresme, Barcelona</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0">
                <HiUserGroup className="text-accent text-xl" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Edat</h3>
                <p className="text-accent font-semibold text-xl mt-1">Nascuts 2016-2017</p>
                <p className="text-gray-400 text-sm mt-1">Obert a altres edats</p>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-prime-600 text-center">
            <p className="text-gray-300 text-base mb-5">
              Vols reservar la teva plaça per al proper diumenge?
            </p>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent hover:bg-accent-hover text-white px-8 py-3.5 rounded-xl font-bold uppercase tracking-wider transition-all hover:shadow-[0_0_25px_rgba(204,0,0,0.4)]"
            >
              Inscriu-te
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
