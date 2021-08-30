import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/logo.svg'
import { useState } from 'react'
const Navbar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>
      <nav className="flex column">
        <div className="navbar flex spaceBetween crossCenter">
          <Image src={logo} />
          {!isMenuOpen && (
            <svg className="menuIcon" onClick={() => setIsMenuOpen(!isMenuOpen)} width="54" height="30" viewBox="0 0 54 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" width="51" height="4" fill="#CEC9C9" />
              <rect y="2" width="51" height="4" fill="white" />
              <rect x="3" y="12" width="51" height="4" fill="#CEC9C9" />
              <rect y="14" width="51" height="4" fill="white" />
              <rect x="3" y="24" width="51" height="4" fill="#CEC9C9" />
              <rect y="26" width="51" height="4" fill="white" />
            </svg>
          )}
          {isMenuOpen && (
            <svg className="menuIcon" onClick={() => setIsMenuOpen(!isMenuOpen)} width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="7" y="2" width="51" height="4" transform="rotate(45 7 2)" fill="#CEC9C9" />
              <rect x="4" y="38.0625" width="51" height="4" transform="rotate(-45 4 38.0625)" fill="#CEC9C9" />
              <rect x="0.200928" y="38" width="51" height="4" transform="rotate(-45 0.200928 38)" fill="white" />
              <rect x="3.82837" y="2" width="51" height="4" transform="rotate(45 3.82837 2)" fill="white" />
            </svg>
          )}
        </div>
        <div className={`${isMenuOpen ? 'menu menuOpen' : 'menu menuClosed'} flex mainCenter crossCenter`}>
          <ul>
            <li>
              <Link href="/"><a className={`${props.home ? 'active' : ''}`}>Início</a></Link>
            </li>
            <li>
              <Link href="/cardapio"><a className={`${props.menu ? 'active' : ''}`}>Cardápio</a></Link>
            </li>
            <li>
              <Link href="/sobre-nos"><a className={`${props.about ? 'active' : ''}`}>Sobre nós</a></Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
