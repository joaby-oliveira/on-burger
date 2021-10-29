import '../../styles/globals.scss'
import Navbar from './Components/Navbar'
import Topbar from './Components/Topbar'

function MyApp({ Component, pageProps }) {
  return <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Chelsea+Market&family=Raleway:wght@300;400;700&family=Staatliches&display=swap" rel="stylesheet"></link>
    <Topbar />
    <Navbar />
    <Component {...pageProps} />
  </>
}

export default MyApp
