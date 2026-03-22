import { motion } from 'framer-motion'
import { GiSoccerBall } from 'react-icons/gi'
import { HiHeart, HiShieldCheck, HiUserGroup } from 'react-icons/hi'

const valors = [
  { icon: HiShieldCheck, title: 'Professionalitat', text: 'Metodologia basada en l\'evidència científica i l\'experiència al camp.' },
  { icon: HiHeart, title: 'Passió', text: 'L\'esport és la nostra vida. Estimem el que fem i ho transmetem.' },
  { icon: HiUserGroup, title: 'Proximitat', text: 'Tracte personalitzat i proper. Cada esportista és únic per a nosaltres.' },
]

const fadeUp = {
  hidden: { y: 50, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 16,
      delay: i * 0.15,
    },
  }),
}

export default function SobreNosaltres() {
  return (
    <section id="nosaltres" className="py-20 sm:py-24 lg:py-32" style={{ backgroundColor: '#111111' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 16 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-6">
              SOBRE <span className="text-accent">NOSALTRES</span>
            </h2>
            <div className="w-20 h-1 bg-accent mb-6" />
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
              Prime Academy Maresme neix de la passió per l'esport i el compromís amb el benestar
              de l'esportista. Som una acadèmia esportiva ubicada a Sant Pol de Mar, al cor del Maresme.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-4">
              La nostra metodologia professional combina la tecnificació esportiva amb la prevenció
              i readaptació de lesions, oferint un servei integral que acompanya l'esportista en
              cada fase del seu desenvolupament.
            </p>
            <p className="text-gray-500 text-base leading-relaxed">
              Treballem amb persones de totes les edats que comparteixen una mateixa ambició:
              ser millors cada dia. Des del futbolista que vol perfeccionar la seva tècnica fins
              a l'esportista que vol tornar a competir després d'una lesió.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 16, delay: 0.2 }}
            className="space-y-5"
          >
            {valors.map((valor, i) => (
              <motion.div
                key={valor.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-start gap-4 p-5 hover:shadow-[0_0_20px_rgba(204,0,0,0.08)] transition-all duration-300"
                style={{ backgroundColor: '#141414', borderLeft: '4px solid #CC0000' }}
              >
                <div className="w-11 h-11 flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(204,0,0,0.1)' }}>
                  <valor.icon className="text-accent text-lg" />
                </div>
                <div>
                  <h4 className="text-white font-black uppercase tracking-wide mb-1">{valor.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{valor.text}</p>
                </div>
              </motion.div>
            ))}

            <div className="flex items-center gap-3 pt-2 pl-1">
              <GiSoccerBall className="text-accent text-lg" />
              <span className="text-gray-400 text-sm font-medium italic">
                "L'esport transforma vides. Nosaltres t'acompanyem en el camí."
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
