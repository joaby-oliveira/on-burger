import Link from 'next/link'
import styles from '../../../styles/Components.module.scss'

export const CtaMenu = ({ href, children }) => {
  return (
    (
      <Link href={href}>
        <a className={`${styles.button} ${styles.color}`} href={href}>
          {children}
        </a>
      </Link>
    )
  )
}
