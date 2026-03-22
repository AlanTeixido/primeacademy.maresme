import { motion } from 'framer-motion'
import { GiSoccerKick, GiHealthNormal, GiStarMedal } from 'react-icons/gi'

const perfils = [
  {
    icon: GiSoccerKick,
    title: 'Futbolistes F7',
    description: 'Jugadors i jugadores de futbol 7 que volen millorar la seva tècnica individual, la presa de decisions i el rendiment al camp. Especialment nascuts 2016-2017, però obert a totes les edats.',
  },
  {
    icon: GiHealthNormal,
    title: 'Esportistes Lesionats',
    description: 'Qualsevol esportista que necessiti una tornada segura i progressiva a la pràctica esportiva després d\'una lesió, amb acompanyament professional.',
  },
  {
    icon: GiStarMedal,
    title: 'Esportistes Ambiciosos',
    description: 'Tots els esportistes que volen portar el seu rendiment al següent nivell, independentment de la disciplina, l\'edat o el nivell actual.',
  },
]

const impactVariant = {
  hidden: { scale: 0.5, opacity: 0, y: 40 },
  visible: (i) => ({
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 14,
      delay: i * 0.15,
    },
  }),
}

export default function Destinataris() {
  return (
    <section className="py-20 sm:py-24 lg:py-32" style={{ backgroundColor: '#111111' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 18 }}
          className="text-center mb-14 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight">
            A QUI VA <span className="text-accent">DIRIGIT</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4" />
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
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
              className="text-center p-8 sm:p-10 group hover:shadow-[0_0_25px_rgba(204,0,0,0.1)] transition-all duration-300"
              style={{ backgroundColor: '#141414', borderLeft: '4px solid #CC0000' }}
            >
              <perfil.icon className="text-accent mx-auto mb-5 group-hover:scale-110 transition-transform duration-300" style={{ fontSize: '4rem' }} />
              <h3 className="text-xl font-black text-white uppercase tracking-wide mb-3">{perfil.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{perfil.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
