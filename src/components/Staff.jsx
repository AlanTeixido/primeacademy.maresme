import { useState } from 'react'
import { motion } from 'framer-motion'
import xaviImg from '../img/xavi.png'
import lluisImg from '../img/lluis.png'
import janImg from '../img/jan.png'
import lucaImg from '../img/luca.png'
import polImg from '../img/pol.png'
import markelImg from '../img/markel.png'

const staff = [
  {
    name: 'XAVI ARQUÉ',
    rol: 'Director',
    foto: xaviImg,
    initial: 'XA',
    desc: 'Estudiant de CAFE a INEFC · Títol d\'entrenador UEFA C',
  },
  {
    name: 'LLUÍS MORILLA',
    rol: 'Entrenador',
    foto: lluisImg,
    initial: 'LM',
    desc: 'Estudiant de CAFE + Fisioteràpia · Títol d\'entrenador UEFA C',
  },
  {
    name: 'JAN RODRÍGUEZ',
    rol: 'Entrenador',
    foto: janImg,
    initial: 'JR',
    desc: 'Tècnic superior en Ensenyament Socioesportiu · Ex jugador del Girona FC i UE Sant Andreu',
  },
  {
    name: 'LUCA VILA',
    rol: 'Entrenador',
    foto: lucaImg,
    initial: 'LV',
    desc: 'Especialista en metodologia · Entrenador de futbol base',
  },
  {
    name: 'POL ROVIRA',
    rol: 'Entrenador',
    foto: polImg,
    initial: 'PR',
    desc: 'Actual jugador de juvenil nacional · Entrenador de futbol base',
  },
  {
    name: 'MARKEL VILLEGAS',
    rol: 'Entrenador de Porters',
    foto: markelImg,
    initial: 'MV',
    desc: 'Entrenador de porters juvenil preferent · Títol d\'entrenador UEFA C',
  },
]

const cardVariant = {
  hidden: { y: 80, opacity: 0, scale: 0.9 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 14,
      delay: i * 0.12,
    },
  }),
}

function StaffCard({ member, i }) {
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      custom={i}
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="group overflow-hidden hover:shadow-[0_0_35px_rgba(204,0,0,0.2)] transition-all duration-300"
      style={{ backgroundColor: '#111111', border: '1px solid #2a2a2a' }}
    >
      <div className="relative h-72 sm:h-80 overflow-hidden">
        {imgError ? (
          <div className="w-full h-full bg-gradient-to-br from-accent-dark via-accent/30 to-[#111111] flex items-center justify-center">
            <span className="text-5xl font-black text-white/60">{member.initial}</span>
          </div>
        ) : (
          <img
            src={member.foto}
            alt={member.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide">{member.name}</h3>
        <div className="w-10 h-[3px] bg-accent mt-2 mb-2" />
        <p className="text-accent font-bold text-sm uppercase tracking-widest">{member.rol}</p>
        <p className="text-gray-500 text-sm mt-3 leading-relaxed">{member.desc}</p>
      </div>
    </motion.div>
  )
}

export default function Staff() {
  return (
    <section id="staff" className="py-20 sm:py-24 lg:py-32" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 18 }}
          className="text-center mb-14 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight">
            EL NOSTRE <span className="text-accent">STAFF</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4" />
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
            Un equip jove, format i amb passió per l'esport i el desenvolupament dels jugadors.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {staff.map((member, i) => (
            <StaffCard key={member.name} member={member} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
