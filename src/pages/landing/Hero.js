import Carousel from "../Components/Carousel"
import styles from "../../../styles/Landing.module.scss"

export const Hero = () => {
  return (
    <section className={`${styles.hero} flex`}>
      <Carousel />
      <h1 className="title">Prove o hambúrguer mais rústico </h1>
    </section>
  )
}
