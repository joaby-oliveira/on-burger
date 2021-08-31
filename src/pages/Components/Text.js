import styles from "../../../styles/Components.module.scss"

export const Text = ({children}) => {
  return (
    <p className={styles.text}>
      {children}
    </p>
  )
}
