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
    <section id="contacte" className="py-20 sm:py-24 lg:py-32" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 18 }}
          className="text-center mb-14 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight">
            <span className="text-accent">CONTACTA</span> AMB NOSALTRES
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4" />
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
            Tens preguntes? Vols inscriure't? Escriu-nos i et respondrem el més aviat possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 16 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="nom" className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="nom"
                  required
                  value={formData.nom}
                  onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                  className="w-full px-4 py-3 bg-[#141414] border-l-4 border-l-accent border-y-0 border-r-0 text-white placeholder-gray-600 focus:ring-1 focus:ring-accent outline-none transition-all"
                  style={{ border: 'none', borderLeft: '4px solid #CC0000', backgroundColor: '#141414' }}
                  placeholder="El teu nom"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 text-white placeholder-gray-600 focus:ring-1 focus:ring-accent outline-none transition-all"
                    style={{ border: 'none', borderLeft: '4px solid #CC0000', backgroundColor: '#141414' }}
                    placeholder="el.teu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="telefon" className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">
                    Telèfon
                  </label>
                  <input
                    type="tel"
                    id="telefon"
                    value={formData.telefon}
                    onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                    className="w-full px-4 py-3 text-white placeholder-gray-600 focus:ring-1 focus:ring-accent outline-none transition-all"
                    style={{ border: 'none', borderLeft: '4px solid #CC0000', backgroundColor: '#141414' }}
                    placeholder="+34 600 000 000"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="missatge" className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">
                  Missatge
                </label>
                <textarea
                  id="missatge"
                  rows="4"
                  required
                  value={formData.missatge}
                  onChange={(e) => setFormData({ ...formData, missatge: e.target.value })}
                  className="w-full px-4 py-3 text-white placeholder-gray-600 focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                  style={{ border: 'none', borderLeft: '4px solid #CC0000', backgroundColor: '#141414' }}
                  placeholder="En què podem ajudar-te?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent-hover text-white py-4 font-black uppercase tracking-widest transition-all hover:shadow-[0_0_30px_rgba(204,0,0,0.5)]"
              >
                {submitted ? 'MISSATGE ENVIAT!' : 'ENVIAR MISSATGE'}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 16, delay: 0.2 }}
            className="space-y-5"
          >
            <div className="flex items-start gap-4 p-5" style={{ backgroundColor: '#141414', borderLeft: '4px solid #CC0000' }}>
              <HiLocationMarker className="text-accent text-xl mt-0.5 shrink-0" />
              <div>
                <h4 className="text-white font-bold uppercase tracking-wider text-sm">Ubicació</h4>
                <p className="text-gray-500 text-sm mt-0.5">Sant Pol de Mar, Maresme (Barcelona)</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5" style={{ backgroundColor: '#141414', borderLeft: '4px solid #CC0000' }}>
              <HiMail className="text-accent text-xl mt-0.5 shrink-0" />
              <div>
                <h4 className="text-white font-bold uppercase tracking-wider text-sm">Formulari d'inscripció</h4>
                <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="text-accent text-sm mt-0.5 hover:underline font-bold">
                  Omple el formulari online →
                </a>
              </div>
            </div>

            <a
              href="https://wa.me/34600123456?text=Hola!%20M'agradaria%20tenir%20més%20informació%20sobre%20Prime%20Academy%20Maresme"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] hover:bg-[#1ebe57] text-white font-black uppercase tracking-widest transition-all hover:shadow-[0_0_25px_rgba(37,211,102,0.4)]"
            >
              <FaWhatsapp className="text-xl" />
              WHATSAPP
            </a>

            <a
              href="https://instagram.com/primeacademy.maresme"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white font-black uppercase tracking-widest transition-all"
            >
              <FaInstagram className="text-xl" />
              @primeacademy.maresme
            </a>

            <div className="h-40 flex items-center justify-center" style={{ backgroundColor: '#141414', borderLeft: '4px solid #CC0000' }}>
              <div className="text-center">
                <HiLocationMarker className="text-accent text-3xl mx-auto mb-2" />
                <p className="text-gray-300 text-sm font-bold uppercase tracking-wider">Sant Pol de Mar</p>
                <p className="text-gray-600 text-xs mt-0.5">Comarca del Maresme, Barcelona</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
