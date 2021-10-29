import styles from "./styles.module.scss"

export const Text = ({children}) => {
  return (
    <p className={styles.text}>
      {children}
    </p>
  )
}
