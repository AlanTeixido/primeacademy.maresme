import { motion } from 'framer-motion'
import { GiSoccerKick, GiMuscleUp, GiHealthNormal } from 'react-icons/gi'

const serveis = [
  {
    icon: GiSoccerKick,
    title: 'Tecnificació F7',
    description: 'Millora tècnica individual i col·lectiva en format futbol 7. Treballem la tècnica amb pilota, la presa de decisions, la visió de joc i els fonaments tàctics per potenciar el rendiment de cada jugador al camp.',
    features: ['Tècnica individual', 'Joc col·lectiu', 'Tàctica F7', 'Visió de joc'],
  },
  {
    icon: GiMuscleUp,
    title: 'Rendiment Esportiu',
    description: 'Planificació d\'entrenaments adaptats a cada esportista. Millorem la força, la velocitat, la resistència i la coordinació amb programes personalitzats per a qualsevol disciplina esportiva.',
    features: ['Força i velocitat', 'Resistència', 'Coordinació', 'Plans personalitzats'],
  },
  {
    icon: GiHealthNormal,
    title: 'Readaptació de Lesions',
    description: 'Tornada segura a l\'esport combinant exercici terapèutic i preparació física progressiva. Acompanyem l\'esportista des de la lesió fins a la reincorporació completa a la competició.',
    features: ['Exercici terapèutic', 'Progressió segura', 'Retorn a la competició', 'Seguiment continu'],
  },
]

const cardVariant = {
  hidden: { x: -80, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 14,
      delay: i * 0.2,
    },
  }),
}

export default function Serveis() {
  return (
    <section id="serveis" className="py-20 sm:py-24 lg:py-32" style={{ backgroundColor: '#111111' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 18 }}
          className="text-center mb-14 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight">
            ELS NOSTRES <span className="text-accent">SERVEIS</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4" />
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
            Tres àrees d'especialització per cobrir totes les necessitats de l'esportista.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {serveis.map((servei, i) => (
            <motion.div
              key={servei.title}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="group border-l-4 border-l-accent rounded-none overflow-hidden hover:shadow-[0_0_30px_rgba(204,0,0,0.12)] transition-all duration-300"
              style={{ backgroundColor: '#111111', border: 'none', borderLeft: '4px solid #CC0000' }}
            >
              <div className="p-7 sm:p-8 bg-[#141414]">
                <servei.icon className="text-accent mb-5" style={{ fontSize: '4rem' }} />
                <h3 className="text-2xl font-black text-white uppercase tracking-wide mb-3">{servei.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{servei.description}</p>
                <div className="flex flex-wrap gap-2">
                  {servei.features.map((feat) => (
                    <span
                      key={feat}
                      className="text-xs font-bold px-3 py-1.5 bg-accent/10 text-accent border border-accent/20 uppercase tracking-wider"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
