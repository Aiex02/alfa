import Image from 'next/image'

import { NavBar } from '../components/NavBar/NavBar'
import { Spacer } from '@/components/Spacer/Spacer'
import { Footer } from '@/components/Footer/Footer'
import { AboutUs } from '@/components/AboutUs/AboutUs'
import { Ilustration } from '@/components/Ilustration/Ilustration'
import { Services } from '@/components/Services/Services'
import { Tech } from '@/components/Tech/Tech'

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
      <Footer />
      
      </>
  )
}
