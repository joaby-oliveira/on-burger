import { useState } from "react"

import styles from "./styles.module.scss"

const Topbar = () => {
  const [isClosed, setIsClosed] = useState(false)
  return (
    <div className={`${styles.topbar} flex ${isClosed ? `${styles.closed}` : ''}`}>
      <p>Você está no site da unidade "Marília | Zona Sul"</p>
      <svg onClick={() => { setIsClosed(true) }} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2L2 16M2 2L16 16" stroke="#291E1E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  )
}

export default Topbar
