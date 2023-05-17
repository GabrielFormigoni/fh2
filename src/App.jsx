import { About, Contact, Footer, Hero, Navbar, Services, Team, Testimonials } from './components'

function App() {

  return (
    <div className='relative bg-black'>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
