import { useState } from 'react'
import Slider from 'react-slick'

import styles from "../../../styles/landing.module.scss"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


import sliderPic1 from "../../../public/sliderPic1.png"
import sliderPic2 from "../../../public/sliderPic2.png"
import sliderPic3 from "../../../public/sliderPic3.png"
import sliderPic4 from "../../../public/sliderPic4.png"

const sliderImages = [
  sliderPic1,
  sliderPic2,
  sliderPic3,
  sliderPic4
]

const Carousel = () => {
  console.log(sliderImages);
  const [imageIndex, setImageIndex] = useState(0)

  const PrevArrow = ({ onClick }) => (
    <div className="arrow prev" onClick={onClick}>
      <svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 19L3 10.5L12 2" stroke="#F0E6E6" stroke-width="4" />
      </svg>
    </div>
  )
  const NextArrow = ({ onClick }) => (
    <div className="arrow next" onClick={onClick}>
      <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2L10.4706 10L2 18" stroke="#F0E6E6" stroke-width="4" />
      </svg>
    </div>
  )

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 600,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next)
  }

  return (
    <Slider {...settings} className={styles.carousel}>
      {sliderImages.map((image, index) => (
        <div className={index === imageIndex ? `${styles.slide} ${styles.activeSlide}` : `${styles.slide}`}>
          {console.log(image.src)}
          <img src={image.src} alt="Imagem de lanche na cidade de Marília"/>
        </div>
      ))}
    </Slider>
  )

}
export default Carousel