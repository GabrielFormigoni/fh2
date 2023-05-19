import { About, Contact, Footer, Hero, Navbar, Services, Team, Testimonials } from './components'

function App() {

  return (
    <div className='relative bg-black-100 bg-opacity-95'>
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
