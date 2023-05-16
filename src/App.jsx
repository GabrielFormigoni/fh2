import { About, Contact, Footer, Hero, Navbar, Services, Team } from './components'

function App() {

  return (
    <div className='relative'>
        <Navbar />
        <Hero />
      <About />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
