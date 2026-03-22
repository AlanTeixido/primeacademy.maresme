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
  hidden: { x: -80, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 160,
      damping: 16,
      delay: i * 0.18,
    },
  }),
}

export default function Metodologia() {
  return (
    <section id="metodologia" className="py-16 sm:py-20 lg:py-24 bg-prime-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(74,222,128,0.06),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 150, damping: 20 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            LA NOSTRA <span className="text-accent">METODOLOGIA</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
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
              className="relative p-6 sm:p-7 rounded-2xl bg-prime-800/60 border border-prime-600 hover:border-accent/30 transition-colors group"
            >
              <div className="text-5xl font-black text-accent/10 absolute top-4 right-5 group-hover:text-accent/20 transition-colors">
                {pas.step}
              </div>
              <pas.icon className="text-accent text-3xl mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">{pas.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{pas.description}</p>

              {i < passos.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-accent/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
