import { motion } from 'framer-motion'
import xaviImg from '../img/xavi.png'
import lluisImg from '../img/lluis.png'
import janImg from '../img/jan.png'
import lucaImg from '../img/luca.png'
import polImg from '../img/pol.png'
import markelImg from '../img/markel.png'

const staff = [
  {
    name: 'Xavi Arqué',
    rol: 'Director',
    foto: xaviImg,
    desc: 'Estudiant de CAFE a INEFC · Títol d\'entrenador UEFA C',
  },
  {
    name: 'Lluís Morilla',
    rol: 'Entrenador',
    foto: lluisImg,
    desc: 'Estudiant de CAFE + Fisioteràpia · Títol d\'entrenador UEFA C',
  },
  {
    name: 'Jan Rodríguez',
    rol: 'Entrenador',
    foto: janImg,
    desc: 'Tècnic superior en Ensenyament Socioesportiu · Ex jugador del Girona FC i UE Sant Andreu',
  },
  {
    name: 'Luca Vila',
    rol: 'Entrenador',
    foto: lucaImg,
    desc: 'Especialista en metodologia · Entrenador de futbol base',
  },
  {
    name: 'Pol Rovira',
    rol: 'Entrenador',
    foto: polImg,
    desc: 'Actual jugador de juvenil nacional · Entrenador de futbol base',
  },
  {
    name: 'Markel Villegas',
    rol: 'Entrenador de Porters',
    foto: markelImg,
    desc: 'Entrenador de porters juvenil preferent · Títol d\'entrenador UEFA C',
  },
]

const cardVariant = {
  hidden: { scale: 0.4, opacity: 0, y: 50 },
  visible: (i) => ({
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 180,
      damping: 16,
      delay: i * 0.1,
    },
  }),
}

export default function Staff() {
  return (
    <section id="staff" className="py-16 sm:py-20 lg:py-24 bg-prime-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 150, damping: 20 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            EL NOSTRE <span className="text-accent">STAFF</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Un equip jove, format i amb passió per l'esport i el desenvolupament dels jugadors.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {staff.map((member, i) => (
            <motion.div
              key={member.name}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="group rounded-2xl bg-prime-900 border border-prime-600 overflow-hidden hover:border-accent/50 hover:shadow-[0_0_30px_rgba(204,0,0,0.15)] transition-all duration-300"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden bg-prime-700">
                <img
                  src={member.foto}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-prime-900 via-transparent to-transparent" />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-black text-white uppercase tracking-wide">{member.name}</h3>
                <p className="text-accent font-bold text-sm mt-1 uppercase tracking-wider">{member.rol}</p>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">{member.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
