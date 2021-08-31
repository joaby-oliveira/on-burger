import Carousel from "../Components/Carousel"
import styles from "../../../styles/Landing.module.scss"
import { Text } from "../Components/Text"

export const Hero = () => {
  return (
    <section className={`${styles.hero} flex`}>
      <Carousel />
      <header>
        <header>
          <h1 className="title">Prove o hambúrguer mais rústico </h1>
        </header>
        <Text>Hambúrgueres feitos artesanalmente, com carne nobre e um sabor inexplicável!</Text>
      </header>
    </section>
  )
}
