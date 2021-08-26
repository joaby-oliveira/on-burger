import Head from 'next/head'
import styles from '../../styles/landing.module.scss'
import Landing from './landing/Landing'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>On Burger</title>
        <meta name="description" content="On Burger hamburgueria lanches artesanais" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Landing />
      </main>
    </div>
  )
}
