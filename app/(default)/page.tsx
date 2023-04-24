export const metadata = {
  title: 'Trvium',
  description: 'Securely pay with cryptocurrency - Fast and Easy!',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
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
      <Newsletter />
    </>
  )
}
