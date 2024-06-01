import React, { useState } from 'react'
import styles from "@/styles/circle.module.css"
import arjit from '../../public/arjit.png'
import nora from '../../public/nora.webp'
import zakir from '../../public/zakir.jpeg'

const CircleImage = () => {
    const [currentCategory, setCurrentCategory] = useState(1);
    const [animateCurtain, setAnimateCurtain] = useState(false);

  const switchCategory = () => {
    setAnimateCurtain(true);
    const nextCategory = (currentCategory % 3) + 1;
    setCurrentCategory(nextCategory);
    setTimeout(() => {
      setAnimateCurtain(false);
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.category}>
        <div className={styles.circle}>
          <div className={`${styles.imageContainer} ${currentCategory === 1 ? styles.visible : styles.hidden}`}>
            <img src={arjit.src} alt="Singer" />
          </div>
          <div className={`${styles.imageContainer} ${currentCategory === 2 ? styles.visible : styles.hidden}`}>
            <img src={nora.src} alt="Dancer" />
          </div>
          <div className={`${styles.imageContainer} ${currentCategory === 3 ? styles.visible : styles.hidden}`}>
            <img src={zakir.src} alt="Comedian" />
          </div>
          <div className={`${styles.curtain} ${animateCurtain ? styles.animate : ''}`}></div>
        </div>
        <p onClick={switchCategory}>Click here to view more</p>
      </div>
      <div className={styles.content}>
        <p>Choose from <span>100+ Categories</span></p>
        <a href="#">Explore all categories &rarr;</a>
      </div>
    </div>
  );
};



export default CircleImage