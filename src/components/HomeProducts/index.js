import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import zx9 from './../../assets/home/desktop/image-speaker-zx9.png';
import zx7 from './../../assets/home/desktop/image-speaker-zx7.jpg';
import yx1 from './../../assets/home/desktop/image-earphones-yx1.jpg';
import personImage from './../../assets/shared/desktop/image-best-gear.jpg';

export default function HomeProducts() {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <div className={styles.zx9}>
          <div className={styles.flex}>
            <div className={styles.left}>
              <img src={zx9} alt='zx9' />
            </div>
            <div className={styles.right}>
              <h1 className={styles.right__title}>ZX9 SPEAKER</h1>
              <p className={styles.right__content}>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Link className={styles.right__btn} to='/zx9'>
                See Product
              </Link>
            </div>
          </div>
        </div>

        <div
          className={styles.zx7}
          style={{ background: `url(${zx7})`, backgroundSize: 'cover' }}
        >
          <div className={styles.body}>
            <h1 className={styles.body__title}>ZX7 SPEAKER</h1>
            <Link className={styles.body__link} to='/zx7'>
              See Product
            </Link>
          </div>
        </div>

        <div className={styles.yx1}>
          <div className={styles.flex}>
            <div
              className={styles.left}
              style={{
                backgroundImage: `url(${yx1})`,
                backgroundSize: 'cover',
              }}
            ></div>
            <div className={styles.right}>
              <h1 className={styles.right__title}>YX1 EARPHONES</h1>
              <Link className={styles.right__link} to='/yx1'>
                See Product
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.group20}>
        <div className={styles.flex}>
          <div className={styles.left}>
            <h1 className={styles.title}>
              Bringing you the <span className={styles.red}>best</span> audio gear
            </h1>
            <p className={styles.content}>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
          <div className={styles.right}>
            <img src={personImage} alt='personImage' />
          </div>
        </div>
      </div>
    </div>
  );
}
