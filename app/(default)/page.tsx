export const metadata = {
  title: 'Trvium',
  description: 'Saas landing page template!',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Zigzag from '@/components/zigzag'
import Pricing from '@/components/pricing'
import FAQ from '@/components/faq'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Pricing />
      <FAQ />
    </>
  )
}
