import { motion } from 'framer-motion'
import { HiCheck } from 'react-icons/hi'
import { GiLightningHelix } from 'react-icons/gi'

const FORM_URL = 'https://forms.gle/EbTKJiyBLPnM51bd9'

const plans = [
  {
    name: 'Sessió Grupal',
    price: '20',
    unit: '/ sessió',
    description: 'Perfecte per provar o per sessions puntuals',
    features: [
      'Jugadors 3-8 x 1 entrenador',
      'Situacions reals de joc',
      'Assegurança d\'accidents inclosa',
      'Diumenges tarda',
    ],
    popular: false,
  },
  {
    name: 'Pack Mensual',
    price: '60',
    unit: '/ mes',
    description: 'El més popular — entrena cada diumenge',
    features: [
      '4 sessions grupals incloses',
      'Jugadors 3-8 x 1 entrenador',
      'Situacions reals de joc',
      'Assegurança d\'accidents inclosa',
      'Estalvi de 20€ vs sessions soltes',
    ],
    popular: true,
  },
  {
    name: 'Pack Prime',
    price: '150',
    unit: '',
    description: 'Compromís total amb el teu progrés',
    features: [
      '10 sessions grupals incloses',
      'Jugadors 3-8 x 1 entrenador',
      'Situacions reals de joc',
      'Assegurança d\'accidents inclosa',
      'Estalvi de 50€ vs sessions soltes',
      'Màxima flexibilitat d\'ús',
    ],
    popular: false,
  },
]

const cardVariant = {
  hidden: { y: 100, opacity: 0, scale: 0.8 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 160,
      damping: 16,
      delay: i * 0.15,
    },
  }),
}

export default function Preus() {
  return (
    <section id="preus" className="py-16 sm:py-20 lg:py-24 bg-prime-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 150, damping: 20 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            ELS NOSTRES <span className="text-accent">PREUS</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Plans flexibles adaptats a les teves necessitats. Sense permanència.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className={`relative rounded-2xl p-6 sm:p-8 border transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-accent/10 to-prime-900 border-accent shadow-[0_0_40px_rgba(204,0,0,0.15)] scale-[1.02]'
                  : 'bg-prime-900 border-prime-600 hover:border-prime-500'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                    <GiLightningHelix /> Més popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">{plan.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-5xl font-black text-white">{plan.price}€</span>
                  {plan.unit && <span className="text-gray-400 text-lg">{plan.unit}</span>}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <HiCheck className="text-accent text-lg shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-3.5 rounded-xl font-bold uppercase tracking-wider text-sm text-center transition-all ${
                  plan.popular
                    ? 'bg-accent hover:bg-accent-hover text-white hover:shadow-[0_0_25px_rgba(204,0,0,0.5)]'
                    : 'bg-prime-600 hover:bg-prime-500 text-white border border-prime-500 hover:border-accent/40'
                }`}
                style={{ animation: 'none' }}
                onMouseEnter={(e) => {
                  if (plan.popular) e.currentTarget.style.animation = 'energy-glow 1s ease-out'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.animation = 'none'
                }}
              >
                Inscriu-te
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
