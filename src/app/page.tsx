import { Spacer } from '@/components/Spacer/Spacer'
import { AboutUs } from '@/components/AboutUs/AboutUs'
import { Ilustration } from '@/components/Ilustration/Ilustration'
import { Services } from '@/components/Services/Services'
import { Legi } from '@/components/Legi/Legi'
import { Contact } from '@/components/Contact/contact'
import { Clients } from '@/components/Clients/clients'

export default function Home() {
  return (
      <>
      <Ilustration/>
      <Spacer />
      <AboutUs />
      <Spacer />
      <Services />
      <Spacer />
      <Legi />
      <Spacer />
      <Clients />
      <Spacer />
      <Contact />
      <Spacer />
      </>
  )
}
