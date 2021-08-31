import '../../styles/globals.scss'
import Navbar from './Components/Navbar'
import Topbar from './Components/Topbar'

function MyApp({ Component, pageProps }) {
  return <>
    <Topbar />
    <Navbar />
    <Component {...pageProps} />
  </>
}

export default MyApp
