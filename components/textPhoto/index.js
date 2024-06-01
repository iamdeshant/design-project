import React from 'react'
import styles from '@/styles/textphoto.module.css'
import nature from '@/public/nature.jpeg'

const TextPhoto = () => {
  return (
    <div className={styles.container}>
        {[0,1,2,3].map((val)=>(
        <div className={`${val%2 ? styles.textCenter : styles.textStart} ${styles.text}`}>
            <p>Late Night Maggie<br/> Party for the boost</p>
            <img className={`${styles.tiltedImage}`} src={nature.src} alt="Tilted Image"/>
        </div>
        ))}
    </div>
  )
}

export default TextPhoto