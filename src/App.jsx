import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import VaultPreview from './components/VaultPreview'
import Pricing from './components/Pricing'
import AgentHosting from './components/AgentHosting'
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
      <AgentHosting />
      <Ecosystem />
      <Security />
      {/* Testimonials PULLED 2026-08-07.

          The four entries in Testimonials.jsx are invented: named people
          ("Sarah Chen", "Marcus Rodriguez"), a named employer ("GlobalTech,
          200 employees"), job titles, and specific fabricated results
          ("34% CSAT improvement", "2.1M followers", "12K requests/hour").
          Windy Cloud has never had a paying customer, so not one of them can
          be real. Publishing invented endorsements with invented metrics is
          deceptive advertising under the FTC endorsement guides, and it is a
          far bigger liability than an empty space on the page.

          The component file is left in the repo, unrendered, so nothing is
          lost. Restore this line only when the quotes are from real, consenting
          customers — and keep their written permission on file. */}
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App
