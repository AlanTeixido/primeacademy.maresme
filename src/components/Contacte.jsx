import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiLocationMarker, HiMail } from 'react-icons/hi'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

const FORM_URL = 'https://forms.gle/EbTKJiyBLPnM51bd9'

export default function Contacte() {
  const [formData, setFormData] = useState({ nom: '', email: '', telefon: '', missatge: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ nom: '', email: '', telefon: '', missatge: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contacte" className="py-16 sm:py-20 lg:py-24 bg-prime-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 150, damping: 20 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            <span className="text-accent">CONTACTA</span> AMB NOSALTRES
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Tens preguntes? Vols inscriure't? Escriu-nos i et respondrem el més aviat possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-gray-300 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="nom"
                  required
                  value={formData.nom}
                  onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-prime-800 border border-prime-600 text-white placeholder-gray-500 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                  placeholder="El teu nom"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-prime-800 border border-prime-600 text-white placeholder-gray-500 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    placeholder="el.teu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="telefon" className="block text-sm font-medium text-gray-300 mb-2">
                    Telèfon
                  </label>
                  <input
                    type="tel"
                    id="telefon"
                    value={formData.telefon}
                    onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-prime-800 border border-prime-600 text-white placeholder-gray-500 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    placeholder="+34 600 000 000"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="missatge" className="block text-sm font-medium text-gray-300 mb-2">
                  Missatge
                </label>
                <textarea
                  id="missatge"
                  rows="4"
                  required
                  value={formData.missatge}
                  onChange={(e) => setFormData({ ...formData, missatge: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-prime-800 border border-prime-600 text-white placeholder-gray-500 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                  placeholder="En què podem ajudar-te?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent-hover text-white py-3.5 rounded-xl font-bold uppercase tracking-wider transition-all hover:shadow-[0_0_25px_rgba(204,0,0,0.4)]"
              >
                {submitted ? 'Missatge enviat!' : 'Enviar missatge'}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.2 }}
            className="space-y-5"
          >
            <div className="flex items-start gap-4 p-4 rounded-xl bg-prime-800 border border-prime-600">
              <HiLocationMarker className="text-accent text-xl mt-0.5 shrink-0" />
              <div>
                <h4 className="text-white font-semibold text-sm">Ubicació</h4>
                <p className="text-gray-400 text-sm mt-0.5">Sant Pol de Mar, Maresme (Barcelona)</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-prime-800 border border-prime-600">
              <HiMail className="text-accent text-xl mt-0.5 shrink-0" />
              <div>
                <h4 className="text-white font-semibold text-sm">Formulari d'inscripció</h4>
                <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="text-accent text-sm mt-0.5 hover:underline">
                  Omple el formulari online
                </a>
              </div>
            </div>

            <a
              href="https://wa.me/34600123456?text=Hola!%20M'agradaria%20tenir%20més%20informació%20sobre%20Prime%20Academy%20Maresme"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#1ebe57] text-white font-bold uppercase tracking-wider transition-all hover:shadow-[0_0_25px_rgba(37,211,102,0.4)]"
            >
              <FaWhatsapp className="text-xl" />
              Escriu-nos per WhatsApp
            </a>

            <a
              href="https://instagram.com/primeacademy.maresme"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white font-bold uppercase tracking-wider transition-all"
            >
              <FaInstagram className="text-xl" />
              @primeacademy.maresme
            </a>

            <div className="rounded-xl overflow-hidden border border-prime-600 h-40 bg-gradient-to-br from-prime-700 via-prime-800 to-prime-700 flex items-center justify-center">
              <div className="text-center">
                <HiLocationMarker className="text-accent text-3xl mx-auto mb-2" />
                <p className="text-gray-300 text-sm font-medium">Sant Pol de Mar</p>
                <p className="text-gray-500 text-xs mt-0.5">Comarca del Maresme, Barcelona</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
