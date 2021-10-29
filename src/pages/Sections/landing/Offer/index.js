import Image from 'next/image'
import styles from './styles.module.scss'

import megas from '../../../../../public/megas.png'
export const Offer = () => {
  return (
    <div className={`${styles.container} flex column mainCenter crossCenter`}>
      <h1 className={`${styles.title}`}>#SEXTOU</h1>
      <h2 className={`${styles.subtitle}`}>PROVE AGORA OS MEGAS</h2>
      <div className={`${styles.imageContainer}`}>
        <Image className={`${styles.image}`} src={megas} />
      </div>
      <h2 className={`${styles.dayOfferText}`}>PROMOÇÃO DO DIA</h2>
      <h2 className={`${styles.offerTitle}`}>QUALQUER MEGA POR APENAS <span className={`${styles.highlight}`}>R$21,90</span></h2>
    </div>
  )
}