import { motion } from 'framer-motion'
import { GiSoccerKick, GiHealthNormal, GiStarMedal } from 'react-icons/gi'

const perfils = [
  {
    icon: GiSoccerKick,
    title: 'Futbolistes F7',
    description: 'Jugadors i jugadores de futbol 7 de totes les edats que volen millorar la seva tècnica individual, la presa de decisions i el rendiment al camp.',
    color: 'from-accent/20 to-prime-800',
  },
  {
    icon: GiHealthNormal,
    title: 'Esportistes Lesionats',
    description: 'Qualsevol esportista que necessiti una tornada segura i progressiva a la pràctica esportiva després d\'una lesió, amb acompanyament professional.',
    color: 'from-prime-800 to-accent/15',
  },
  {
    icon: GiStarMedal,
    title: 'Esportistes Ambiciosos',
    description: 'Tots els esportistes que volen portar el seu rendiment al següent nivell, independentment de la disciplina, l\'edat o el nivell actual.',
    color: 'from-accent/10 to-prime-700',
  },
]

const impactVariant = {
  hidden: { scale: 0.4, opacity: 0, rotate: -3 },
  visible: (i) => ({
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
      delay: i * 0.15,
    },
  }),
}

export default function Destinataris() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-prime-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 150, damping: 20 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            A QUI VA <span className="text-accent">DIRIGIT</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Treballem amb esportistes de tots els nivells i edats. Si vols millorar, som el teu equip.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {perfils.map((perfil, i) => (
            <motion.div
              key={perfil.title}
              custom={i}
              variants={impactVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="text-center p-8 sm:p-10 rounded-2xl bg-prime-700/40 border border-prime-600 hover:border-accent/30 transition-all group"
            >
              <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${perfil.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <perfil.icon className="text-accent text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{perfil.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{perfil.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
