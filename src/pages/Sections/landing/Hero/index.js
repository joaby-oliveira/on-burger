import styles from "./styles.module.scss"
import { Carousel } from "../../../Components/Carousel"
import { Text } from "../../../Components/Text"
import { Button } from "../../../Components/Button"

export const Hero = () => {
  return (
    <section className={`${styles.hero} flex crossCenter`}>
      <Carousel />
      <article>
        <header>
          <h1 className="title">Prove o hambúrguer mais rústico </h1>
        </header>
        <Text>Hambúrgueres feitos artesanalmente, com carne nobre e um sabor inexplicável!</Text>
        <Button href="/cardapio">VER CARDÁPIO</Button>
      </article>
    </section>
  )
}
