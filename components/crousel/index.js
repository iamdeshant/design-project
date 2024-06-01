import React, { useState } from 'react';
import styles from '@/styles/carousel.module.css';
import nora from '../../public/nora.webp'
import zakir from '../../public/zakir.jpeg'

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    { src: nora.src, alt: 'Image 2', description: <><span>Nora fatehi</span> for an event hosted by XYZ performed <span>at Pune</span></> },
    { src: zakir.src, alt: 'Image 2', description: <><span>Zakir Khan</span> for an event hosted by XYZ performed <span>at Pune</span></> },
  ];
  const nextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className={styles.root}>
    <p className={styles.title}>Recent shows made star- <br/> studded via StarClinch</p>
    <div className={styles.carousel}>
      <button className={styles.prevBtn} onClick={prevSlide}>{'<'}</button>
      <div className={styles.slide}>
        <img className={styles.image} src={images[currentImageIndex].src} alt={images[currentImageIndex].alt} />
        <p className={styles.describe}>{images[currentImageIndex].description}</p>
      </div>
      <button className={styles.nextBtn} onClick={nextSlide}>{'>'}</button>
    </div>
    </div>
  );
};

export default Carousel;
