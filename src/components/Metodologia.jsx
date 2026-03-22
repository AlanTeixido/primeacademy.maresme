import { motion } from 'framer-motion'
import { HiClipboardCheck, HiAdjustments, HiEye, HiLightningBolt } from 'react-icons/hi'
import { GiSoccerBall, GiMuscleUp, GiLightBulb } from 'react-icons/gi'

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

const segments = [
  { icon: GiSoccerBall, label: 'TÈCNICA INDIVIDUAL', sub: 'Intel·ligència de joc', startAngle: 0, endAngle: 120, color: '#CC0000' },
  { icon: GiMuscleUp, label: 'FÍSIC', sub: 'Treball físic específic', startAngle: 120, endAngle: 240, color: '#880000' },
  { icon: GiLightBulb, label: 'MODEL', sub: 'Aspectes tecnico-tàctics', startAngle: 240, endAngle: 360, color: '#aa0000' },
]

function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = ((angleDeg - 90) * Math.PI) / 180
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
}

function arcPath(cx, cy, r, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, r, endAngle)
  const end = polarToCartesian(cx, cy, r, startAngle)
  const largeArc = endAngle - startAngle > 180 ? 1 : 0
  return `M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y} Z`
}

function MethodologyDiagram() {
  const cx = 150, cy = 150, r = 120

  return (
    <div className="relative w-[300px] h-[300px] mx-auto">
      <svg viewBox="0 0 300 300" className="w-full h-full">
        {segments.map((seg, i) => (
          <path
            key={seg.label}
            d={arcPath(cx, cy, r, seg.startAngle + 2, seg.endAngle - 2)}
            fill={seg.color}
            className="transition-all duration-300 hover:opacity-80"
            style={{ cursor: 'pointer' }}
          />
        ))}
        <circle cx={cx} cy={cy} r="50" fill="#0a0a0a" />
        <text x={cx} y={cy - 5} textAnchor="middle" fill="white" fontSize="16" fontWeight="900" letterSpacing="2">
          MPA
        </text>
        <text x={cx} y={cy + 14} textAnchor="middle" fill="#CC0000" fontSize="8" fontWeight="700" letterSpacing="1">
          METODOLOGIA
        </text>
      </svg>

      {/* Labels al voltant */}
      {segments.map((seg, i) => {
        const midAngle = (seg.startAngle + seg.endAngle) / 2
        const labelR = r + 45
        const pos = polarToCartesian(cx, cy, labelR, midAngle)
        const iconPos = polarToCartesian(cx, cy, r * 0.65, midAngle)
        return (
          <div key={seg.label}>
            <div
              className="absolute flex items-center justify-center"
              style={{ left: iconPos.x - 12, top: iconPos.y - 12, width: 24, height: 24 }}
            >
              <seg.icon className="text-white text-lg" />
            </div>
          </div>
        )
      })}
    </div>
  )
}

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

        {/* Diagrama circular */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 16 }}
          className="mb-16 sm:mb-20"
        >
          <div className="grid md:grid-cols-[1fr_300px_1fr] gap-8 items-center">
            <div className="space-y-6 text-right hidden md:block">
              <div>
                <h4 className="text-white font-black uppercase tracking-wider text-sm">Tècnica Individual</h4>
                <p className="text-gray-500 text-xs mt-1">Intel·ligència de joc</p>
              </div>
              <div className="mt-12">
                <h4 className="text-white font-black uppercase tracking-wider text-sm">Físic</h4>
                <p className="text-gray-500 text-xs mt-1">Treball físic específic</p>
              </div>
            </div>

            <MethodologyDiagram />

            <div className="space-y-6 hidden md:block">
              <div className="mt-6">
                <h4 className="text-white font-black uppercase tracking-wider text-sm">Model</h4>
                <p className="text-gray-500 text-xs mt-1">Aspectes tecnico-tàctics</p>
              </div>
            </div>
          </div>

          {/* Mobile labels */}
          <div className="grid grid-cols-3 gap-4 mt-8 md:hidden">
            {segments.map((seg) => (
              <div key={seg.label} className="text-center">
                <seg.icon className="text-accent text-2xl mx-auto mb-1" />
                <h4 className="text-white font-black uppercase tracking-wider text-xs">{seg.label}</h4>
                <p className="text-gray-500 text-[10px] mt-0.5">{seg.sub}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Passos */}
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
