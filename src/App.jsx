import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
    </div>
  )
}

export default App
