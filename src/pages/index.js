import Head from 'next/head'
import { Hero } from './Sections/landing/Hero'
import { Offer } from './Sections/landing/Offer'
export default function Home() {
  return (
    <div>
      <Head>
        <title>On Burger</title>
        <meta name="description" content="On Burger hamburgueria lanches artesanais" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Offer />
    </div>
  )
}
