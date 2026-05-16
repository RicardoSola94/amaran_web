import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import Solutions from '@/components/sections/Solutions'
import WhyUs from '@/components/sections/WhyUs'
import Process from '@/components/sections/Process'
import Gallery from '@/components/sections/Gallery'
import Testimonials from '@/components/sections/Testimonials'
import ContactForm from '@/components/sections/ContactForm'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/ui/WhatsAppFloat'
import MobileStickyBar from '@/components/ui/MobileStickyBar'

export const metadata: Metadata = {
  title:
    'Custom Blinds & Screens Tampa Bay | Interior & Exterior Solutions — Amaran Integral Service',
  description:
    'Custom zebra blinds, blackout blinds, zipper screens and motorized shades for Tampa Bay homes and businesses. Interior & exterior solutions. Free in-home estimate. Call (813) 279-3943.',
  alternates: {
    canonical: 'https://amaranintegralservice.com',
  },
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Solutions />
        <WhyUs />
        <Process />
        <Gallery />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileStickyBar />
    </>
  )
}
