import Hero from '../components/Hero'
import Services from '../components/Services'
import Partners from '../components/Partners'

const Home = () => {
  return (
    <>
      <Hero />
      <div className="unified-section">
        <Partners />
        <Services />
      </div>
    </>
  )
}

export default Home
