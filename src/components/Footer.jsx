import { FaInstagram } from 'react-icons/fa'
import logo from '../img/logo.jpg'

const FORM_URL = 'https://forms.gle/EbTKJiyBLPnM51bd9'

const footerLinks = {
  'Acadèmia': [
    { text: 'Serveis', href: '#serveis' },
    { text: 'Metodologia', href: '#metodologia' },
    { text: 'Staff', href: '#staff' },
    { text: 'Horaris', href: '#horaris' },
  ],
  'Serveis': [
    { text: 'Tecnificació F7', href: '#serveis' },
    { text: 'Rendiment esportiu', href: '#serveis' },
    { text: 'Readaptació de lesions', href: '#serveis' },
    { text: 'Preus', href: '#preus' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-prime-800 border-t border-prime-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <a href="#inici" className="inline-block mb-4">
              <img src={logo} alt="Prime Academy Maresme" className="h-16 sm:h-20 w-auto rounded-xl" />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-5">
              Acadèmia esportiva a Sant Pol de Mar. Tecnificació futbol 7, millora del rendiment
              i readaptació de lesions. Sessions els diumenges a la tarda.
            </p>
            <div className="flex items-center gap-4">
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
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.text}>
                    <a href={link.href} className="text-gray-400 hover:text-accent text-sm transition-colors">
                      {link.text}
                    </a>
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
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-hover text-sm font-semibold transition-colors"
          >
            Inscriu-te ara →
          </a>
        </div>
      </div>
    </footer>
  )
}
