import { motion } from 'framer-motion'
import { HiClipboardCheck, HiAdjustments, HiEye, HiLightningBolt } from 'react-icons/hi'

const passos = [
  {
    icon: HiClipboardCheck,
    step: '01',
    title: 'Avaluació Inicial',
    description: 'Analitzem el teu estat físic, nivell tècnic i objectius per dissenyar el millor pla per a tu.',
  },
  {
    icon: HiAdjustments,
    step: '02',
    title: 'Pla Personalitzat',
    description: 'Creem un programa d\'entrenament adaptat a les teves necessitats específiques i calendari.',
  },
  {
    icon: HiEye,
    step: '03',
    title: 'Seguiment Continu',
    description: 'Monitoritzem el teu progrés setmana a setmana i ajustem el pla segons la teva evolució.',
  },
  {
    icon: HiLightningBolt,
    step: '04',
    title: 'Tornada a la Competició',
    description: 'Reincorporació progressiva i segura a l\'activitat esportiva amb total confiança.',
  },
]

const stepVariant = {
  hidden: { y: 60, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 14,
      delay: i * 0.18,
    },
  }),
}

export default function Metodologia() {
  return (
    <section id="metodologia" className="py-20 sm:py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(204,0,0,0.04),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 18 }}
          className="text-center mb-14 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight">
            LA NOSTRA <span className="text-accent">METODOLOGIA</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4" />
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
            Un procés estructurat per garantir els millors resultats en cada etapa.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {passos.map((pas, i) => (
            <motion.div
              key={pas.step}
              custom={i}
              variants={stepVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="relative p-6 sm:p-7 group hover:shadow-[0_0_25px_rgba(204,0,0,0.1)] transition-all duration-300"
              style={{ backgroundColor: '#141414', borderLeft: '4px solid #CC0000' }}
            >
              <div className="text-5xl font-black text-accent/10 absolute top-4 right-5 group-hover:text-accent/20 transition-colors">
                {pas.step}
              </div>
              <pas.icon className="text-accent text-3xl mb-4" />
              <h3 className="text-lg font-black text-white uppercase tracking-wide mb-2">{pas.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{pas.description}</p>

              {i < passos.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-accent/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
