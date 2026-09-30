import { AboutSection } from '@/components/about-section'
import { ApproachSection } from '@/components/approach-section'
import { ContactSection } from '@/components/contact-section'
import { CtaSection } from '@/components/cta-section'
import { Footer } from '@/components/footer'
import { Gallery } from '@/components/gallery'
import { Hero } from '@/components/hero'
import { ImpactSection } from '@/components/impact-section'
import { Navbar } from '@/components/navbar'
import { PeopleSection } from '@/components/people-section'
import { ProgramsSection } from '@/components/programs-section'
import { siteData } from '@/lib/site-data'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: siteData.name,
  url: 'https://pankhinifoundation.org/',
  email: siteData.email,
  description: siteData.description,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ghaziabad',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN',
  },
  areaServed: ['Uttar Pradesh', 'National Capital Region'],
  knowsAbout: ['Emotional wellbeing', 'Education technology', 'Legal empowerment'],
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ImpactSection />
        <ProgramsSection />
        <ApproachSection />
        <PeopleSection />
        <Gallery />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </>
  )
}
