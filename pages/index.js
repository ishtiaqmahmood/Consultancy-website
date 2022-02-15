import Adv from '../components/Adv'
import Country from '../components/Country'
import Events from '../components/Events'
import Footer from '../components/Footer'
import HomeComponent from '../components/HomeComponent'
import Navbar from '../components/Navbar'
import News from '../components/News'
import Services from '../components/Services'
import Testimonial from '../components/Testimonial'
import Universities from '../components/Universities'

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeComponent />
      <Universities />
      <Services />
      <News />
      <Events />
      <Country />
      <Testimonial />
      <Adv />
      <Footer />
    </>
  )
}
