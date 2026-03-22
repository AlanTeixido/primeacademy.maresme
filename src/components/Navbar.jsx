import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import logo from '../img/logo.jpg'

const navLinks = [
  { name: 'Inici', href: '#inici' },
  { name: 'Serveis', href: '#serveis' },
  { name: 'Staff', href: '#staff' },
  { name: 'Preus', href: '#preus' },
  { name: 'Horaris', href: '#horaris' },
  { name: 'Contacte', href: '#contacte' },
]

const FORM_URL = 'https://forms.gle/EbTKJiyBLPnM51bd9'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-prime-900/95 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#inici" className="flex items-center gap-2.5 group">
            <img src={logo} alt="Prime Academy Maresme" className="h-10 sm:h-12 w-auto rounded-lg" />
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-accent transition-colors text-sm font-medium uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-lg font-bold text-sm uppercase tracking-wider transition-all hover:shadow-[0_0_20px_rgba(204,0,0,0.4)]"
            >
              Inscriu-te
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white text-2xl p-2"
            aria-label="Obrir menú"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-prime-800/98 backdrop-blur-md border-t border-prime-600 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-300 hover:text-accent py-2 text-sm font-medium uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block bg-accent text-white text-center px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wider mt-2"
              >
                Inscriu-te
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
