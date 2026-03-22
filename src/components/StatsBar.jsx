import { motion } from 'framer-motion'

const stats = [
  { number: '6', label: 'ENTRENADORS' },
  { number: '3', label: 'SERVEIS' },
  { number: 'DIU', label: 'TARDA' },
  { number: 'SPM', label: 'MARESME' },
]

export default function StatsBar() {
  return (
    <section style={{ backgroundColor: '#0a0a0a' }}>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 120, damping: 18 }}
        className="border-y border-prime-600"
        style={{ backgroundColor: '#0a0a0a' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-prime-600">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 150, damping: 16, delay: i * 0.1 }}
                className="py-6 sm:py-8 text-center"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-accent leading-none">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
