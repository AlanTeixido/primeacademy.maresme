import { GiSoccerBall } from 'react-icons/gi'
import { FaInstagram } from 'react-icons/fa'

const footerLinks = {
  'Acadèmia': ['Serveis', 'Metodologia', 'Horaris', 'Sobre nosaltres'],
  'Serveis': ['Tecnificació F7', 'Rendiment esportiu', 'Readaptació de lesions'],
  'Legal': ['Avís legal', 'Privacitat', 'Cookies'],
}

export default function Footer() {
  return (
    <footer className="bg-prime-800 border-t border-prime-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <a href="#inici" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center">
                <GiSoccerBall className="text-accent text-lg" />
              </div>
              <div className="leading-tight">
                <span className="text-lg font-black tracking-tight block">
                  Prime <span className="text-accent">Academy</span>
                </span>
                <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-medium">
                  Maresme
                </span>
              </div>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-5">
              Acadèmia esportiva a Sant Pol de Mar. Tecnificació futbol 7, millora del rendiment
              i readaptació de lesions. Sessions els diumenges a la tarda.
            </p>
            <a
              href="https://instagram.com/primeacademy.maresme"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-accent transition-colors text-sm"
            >
              <FaInstagram className="text-lg" />
              @primeacademy.maresme
            </a>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <span className="text-gray-400 hover:text-accent text-sm transition-colors cursor-pointer">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-prime-600 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 Prime Academy Maresme. Tots els drets reservats.
          </p>
          <p className="text-gray-600 text-xs">
            Sant Pol de Mar, Maresme — Barcelona
          </p>
        </div>
      </div>
    </footer>
  )
}
