import Head from 'next/head'
import styles from '../../styles/landing.module.scss'
import Navbar from './Components/Navbar'
import Landing from './Landing'
export default function Home() {
  return (
    <div>
      <Head>
        <title>On Burger</title>
        <meta name="description" content="On Burger hamburgueria lanches artesanais" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <Landing />
      </main>
    </div>
  )
}
