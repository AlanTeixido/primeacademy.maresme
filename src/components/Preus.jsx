import { motion } from 'framer-motion'
import { HiCheck } from 'react-icons/hi'

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
  hidden: { y: 80, opacity: 0, scale: 0.9 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 14,
      delay: i * 0.15,
    },
  }),
}

export default function Preus() {
  return (
    <section id="preus" className="py-20 sm:py-24 lg:py-32" style={{ backgroundColor: '#111111' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 18 }}
          className="text-center mb-14 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight">
            ELS NOSTRES <span className="text-accent">PREUS</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4" />
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
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
              className={`relative p-6 sm:p-8 transition-all duration-300 ${
                plan.popular
                  ? 'shadow-[0_0_40px_rgba(204,0,0,0.2)] scale-[1.02]'
                  : 'hover:shadow-[0_0_20px_rgba(204,0,0,0.1)]'
              }`}
              style={{
                backgroundColor: plan.popular ? '#1a0505' : '#141414',
                borderLeft: '4px solid #CC0000',
                borderTop: plan.popular ? '2px solid #CC0000' : 'none',
                borderRight: plan.popular ? '2px solid #CC0000' : 'none',
                borderBottom: plan.popular ? '2px solid #CC0000' : 'none',
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-white text-xs font-black px-5 py-1.5 uppercase tracking-widest">
                    MÉS POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-black text-white uppercase tracking-widest">{plan.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-5xl font-black text-white">{plan.price}€</span>
                  {plan.unit && <span className="text-gray-500 text-lg ml-1">{plan.unit}</span>}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <HiCheck className="text-accent text-lg shrink-0" />
                    <span className="text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-4 font-black uppercase tracking-widest text-sm text-center transition-all ${
                  plan.popular
                    ? 'bg-accent hover:bg-accent-hover text-white hover:shadow-[0_0_25px_rgba(204,0,0,0.5)]'
                    : 'bg-prime-600 hover:bg-accent text-white'
                }`}
              >
                INSCRIU-TE
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
