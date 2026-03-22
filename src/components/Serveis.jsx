import { motion } from 'framer-motion'
import { GiSoccerKick, GiMuscleUp, GiHealthNormal } from 'react-icons/gi'

const serveis = [
  {
    icon: GiSoccerKick,
    title: 'Tecnificació F7',
    description: 'Millora tècnica individual i col·lectiva en format futbol 7. Treballem la tècnica amb pilota, la presa de decisions, la visió de joc i els fonaments tàctics per potenciar el rendiment de cada jugador al camp.',
    gradient: 'from-accent/15 to-prime-700',
    features: ['Tècnica individual', 'Joc col·lectiu', 'Tàctica F7', 'Visió de joc'],
  },
  {
    icon: GiMuscleUp,
    title: 'Rendiment Esportiu',
    description: 'Planificació d\'entrenaments adaptats a cada esportista. Millorem la força, la velocitat, la resistència i la coordinació amb programes personalitzats per a qualsevol disciplina esportiva.',
    gradient: 'from-prime-700 to-accent/15',
    features: ['Força i velocitat', 'Resistència', 'Coordinació', 'Plans personalitzats'],
  },
  {
    icon: GiHealthNormal,
    title: 'Readaptació de Lesions',
    description: 'Tornada segura a l\'esport combinant exercici terapèutic i preparació física progressiva. Acompanyem l\'esportista des de la lesió fins a la reincorporació completa a la competició.',
    gradient: 'from-accent/10 via-prime-600 to-prime-700',
    features: ['Exercici terapèutic', 'Progressió segura', 'Retorn a la competició', 'Seguiment continu'],
  },
]

const cardVariant = {
  hidden: { scale: 0.5, opacity: 0, y: 60 },
  visible: (i) => ({
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 180,
      damping: 14,
      delay: i * 0.15,
    },
  }),
}

export default function Serveis() {
  return (
    <section id="serveis" className="py-16 sm:py-20 lg:py-24 bg-prime-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 150, damping: 20 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            ELS NOSTRES <span className="text-accent">SERVEIS</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
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
              className="group rounded-2xl bg-prime-700/50 border border-prime-600 overflow-hidden hover:border-accent/40 transition-colors"
              style={{ animation: 'none' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.animation = 'pulse-sport 1.2s ease-in-out infinite'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.animation = 'none'
              }}
            >
              <div className={`h-44 bg-gradient-to-br ${servei.gradient} flex items-center justify-center relative`}>
                <servei.icon className="text-6xl sm:text-7xl text-accent/30 group-hover:text-accent/50 transition-colors duration-300" />
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{servei.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{servei.description}</p>
                <div className="flex flex-wrap gap-2">
                  {servei.features.map((feat) => (
                    <span
                      key={feat}
                      className="text-xs font-semibold px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20"
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
