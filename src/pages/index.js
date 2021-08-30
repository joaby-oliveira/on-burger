import Head from 'next/head'
import Navbar from './Components/Navbar'
import Topbar from './Components/Topbar'
import Landing from './Landing'
export default function Home() {
  return (
    <div>
      <Topbar />
      <Head>
        <title>On Burger</title>
        <meta name="description" content="On Burger hamburgueria lanches artesanais" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Landing />
      </main>
    </div>
  )
}
