import { motion } from 'framer-motion'
import { HiCheck } from 'react-icons/hi'
import { HiUser, HiUserGroup, HiUsers } from 'react-icons/hi'

const FORM_URL = 'https://forms.gle/EbTKJiyBLPnM51bd9'

const sessions = [
  {
    name: 'Sessió Grupal',
    icon: HiUsers,
    price: '20',
    unit: '/ sessió',
    features: [
      'Jugadors 3-8 x 1 entrenador',
      'Situacions reals de joc',
      'Assegurança d\'accidents inclosa',
    ],
    packs: [
      { label: 'Pack Mensual', detail: '4 sessions', price: '60€' },
      { label: 'Pack Prime', detail: '10 sessions', price: '135€' },
    ],
    popular: false,
    theme: 'light',
  },
  {
    name: 'Sessió Dual',
    icon: HiUserGroup,
    price: '35',
    unit: '/ sessió',
    features: [
      'Jugadors 2 x 1 entrenador',
      'Potencia\'t amb el teu company/a',
      'Assegurança d\'accidents inclosa',
    ],
    packs: [],
    popular: true,
    theme: 'red',
  },
  {
    name: 'Sessió Individual',
    icon: HiUser,
    price: '50',
    unit: '/ sessió',
    features: [
      'Jugador 1 x 1 entrenador',
      'Correcció personalitzada',
      'Assegurança d\'accidents inclosa',
    ],
    packs: [],
    popular: false,
    theme: 'dark',
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

function getCardStyle(theme, popular) {
  if (theme === 'red') {
    return {
      backgroundColor: '#CC0000',
      border: '2px solid #CC0000',
    }
  }
  if (theme === 'light') {
    return {
      backgroundColor: '#1a1a1a',
      borderLeft: '4px solid #CC0000',
    }
  }
  return {
    backgroundColor: '#0e0e0e',
    borderLeft: '4px solid #CC0000',
  }
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
            SESSIONS I <span className="text-accent">PREUS</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4" />
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
            Tres tipus de sessió adaptats al teu nivell i objectius. Sense permanència.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {sessions.map((session, i) => (
            <motion.div
              key={session.name}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className={`relative p-6 sm:p-8 transition-all duration-300 ${
                session.popular ? 'shadow-[0_0_40px_rgba(204,0,0,0.25)] scale-[1.02]' : 'hover:shadow-[0_0_20px_rgba(204,0,0,0.1)]'
              }`}
              style={getCardStyle(session.theme, session.popular)}
            >
              {session.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-white text-[#CC0000] text-xs font-black px-5 py-1.5 uppercase tracking-widest">
                    MÉS POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <session.icon className={`mx-auto mb-3 ${session.theme === 'red' ? 'text-white' : 'text-accent'}`} style={{ fontSize: '3rem' }} />
                <h3 className={`text-xl font-black uppercase tracking-widest ${session.theme === 'red' ? 'text-white' : 'text-white'}`}>
                  {session.name}
                </h3>
                <div className="mt-4">
                  <span className={`text-5xl font-black ${session.theme === 'red' ? 'text-white' : 'text-white'}`}>{session.price}€</span>
                  <span className={`text-lg ml-1 ${session.theme === 'red' ? 'text-white/70' : 'text-gray-500'}`}>{session.unit}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {session.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <HiCheck className={`text-lg shrink-0 ${session.theme === 'red' ? 'text-white' : 'text-accent'}`} />
                    <span className={session.theme === 'red' ? 'text-white/90' : 'text-gray-400'}>{feature}</span>
                  </li>
                ))}
              </ul>

              {session.packs.length > 0 && (
                <div className="mb-6 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-3">Packs disponibles</p>
                  {session.packs.map((pack) => (
                    <div key={pack.label} className="flex items-center justify-between py-2">
                      <div>
                        <span className="text-white text-sm font-bold">{pack.label}</span>
                        <span className="text-gray-500 text-xs ml-2">({pack.detail})</span>
                      </div>
                      <span className="text-accent font-black text-sm">{pack.price}</span>
                    </div>
                  ))}
                </div>
              )}

              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-4 font-black uppercase tracking-widest text-sm text-center transition-all ${
                  session.theme === 'red'
                    ? 'bg-white text-[#CC0000] hover:bg-gray-100'
                    : 'bg-accent hover:bg-accent-hover text-white hover:shadow-[0_0_25px_rgba(204,0,0,0.5)]'
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
