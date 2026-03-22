import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Serveis from './components/Serveis'
import Metodologia from './components/Metodologia'
import Destinataris from './components/Destinataris'
import Horaris from './components/Horaris'
import Staff from './components/Staff'
import Preus from './components/Preus'
import SobreNosaltres from './components/SobreNosaltres'
import Contacte from './components/Contacte'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <div className="min-h-screen bg-prime-900">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Serveis />
      <Metodologia />
      <Destinataris />
      <Staff />
      <Preus />
      <Horaris />
      <SobreNosaltres />
      <Contacte />
      <Footer />
      <Analytics />
    </div>
  )
}

export default App
