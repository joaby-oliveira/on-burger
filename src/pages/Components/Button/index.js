import Link from 'next/link'
import styles from './styles.module.scss'

export const Button = ({ href, children }) => {
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
