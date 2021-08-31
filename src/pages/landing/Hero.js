import Carousel from "../Components/Carousel"
import styles from "../../../styles/Landing.module.scss"
import { Text } from "../Components/Text"
import { CtaMenu } from "../Components/CtaMenu"

export const Hero = () => {
  return (
    <section className={`${styles.hero} flex crossCenter`}>
      <Carousel />
      <article>
        <header>
          <h1 className="title">Prove o hambúrguer mais rústico </h1>
        </header>
        <Text>Hambúrgueres feitos artesanalmente, com carne nobre e um sabor inexplicável!</Text>
        <CtaMenu href="/cardapio">VER CARDÁPIO</CtaMenu>
      </article>
    </section>
  )
}
