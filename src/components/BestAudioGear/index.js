import styles from './styles.module.scss';
import personImageDesktop from '../../assets/shared/desktop/image-best-gear.jpg';
import personImageTablet from '../../assets/shared/tablet/image-best-gear.jpg';
import { useState, useEffect } from 'react';

function useImage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let image;

  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  if (windowWidth > 768) {
    image = personImageDesktop;
  } else if (windowWidth <= 768) {
    image = personImageTablet;
  }

  return image;
}

export default function BestAudioGear() {
  const image = useImage();

  return (
    <div className={styles.group20}>
      <div className={styles.flex}>
        <div className={styles.left}>
          <h1 className={styles.title}>
            Bringing you the <span className={styles.red}>best</span> audio gear
          </h1>
          <p className={styles.content}>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div
          className={styles.right}
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
      </div>
    </div>
  );
}
