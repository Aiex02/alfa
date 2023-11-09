
import { NavBar } from '../components/NavBar/NavBar'
import { Spacer } from '@/components/Spacer/Spacer'
import { Footer } from '@/components/Footer/Footer'
import { AboutUs } from '@/components/AboutUs/AboutUs'
import { Ilustration } from '@/components/Ilustration/Ilustration'
import { Services } from '@/components/Services/Services'
import { Tech } from '@/components/Tech/Tech'
import { Contact } from '@/components/Contact/contact'
import { Clients } from '@/components/Clients/clients'
import './global.css'

export default function Home() {
  return (
      <>
      <NavBar />
      <Ilustration/>
      <Spacer />
      <AboutUs />
      <Spacer />
      <Services />
      <Spacer />
      <Tech />
      <Spacer />
      <Clients />
      <Spacer />
      <Contact />
      <Spacer />
      <Footer />
      </>
  )
}
