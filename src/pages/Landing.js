import Carousel from "./Components/Carousel"
import styles from "../../styles/landing.module.scss"

const Landing = () => {
  return (
    <section>
      <Carousel />
      <h1 className={styles.title}>Prove o hambúrguer mais rústico </h1>
    </section>
  )
}

export default Landing
