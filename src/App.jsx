import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import VaultPreview from './components/VaultPreview'
import Pricing from './components/Pricing'
import Ecosystem from './components/Ecosystem'
import Security from './components/Security'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-windy-darker text-white">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <VaultPreview />
      <Pricing />
      <Ecosystem />
      <Security />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App
