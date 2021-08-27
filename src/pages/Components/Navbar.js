import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/logo.svg'
const Navbar = () => {
  return (
    <nav className="flex spaceBetween crossCenter">
      <Image src={logo} />
      <svg width="54" height="30" viewBox="0 0 54 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="menuIcon">
        <rect x="3" width="51" height="4" fill="#CEC9C9" />
        <rect y="2" width="51" height="4" fill="white" />
        <rect x="3" y="12" width="51" height="4" fill="#CEC9C9" />
        <rect y="14" width="51" height="4" fill="white" />
        <rect x="3" y="24" width="51" height="4" fill="#CEC9C9" />
        <rect y="26" width="51" height="4" fill="white" />
      </svg>
    </nav>
  )
}

export default Navbar
