import Layout from '@/Components/HOC/Layout'
import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
let shelfImages = [
    "/assets/Shelf1.jpeg",
    "/assets/Shelf2.jpg",
    "/assets/Shelf3.jpeg",
    "/assets/Shelf4.jpeg",
    "/assets/Shelf5.jpeg"
];

const Carousal = () => {
  return (
    <Layout headingText={'Image Carousal'}>
        <div className={styles.carousalContainer}>
            <div className={`${styles.icon} ${styles.prev}`}>
                {'Prev'}
            </div>
            <div className={styles.innerContainer} >
                {shelfImages.map((imagePath, index) => {
                    return (
                    <div key={index} className={styles.item}> 
                        <Image src={imagePath} alt='' fill={true} />
                    </div>)
                })}
            </div>
            <div className={`${styles.icon} ${styles.next}`}>
                {'Next'}
            </div>
        </div>
    </Layout>

  )
}

export default Carousal