import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import useWindow from '../../helper/useWindow';

// ZX9
import zx9 from './../../assets/home/desktop/image-speaker-zx9.png';

// ZX7
import zx7Desktop from './../../assets/home/desktop/image-speaker-zx7.jpg';
import zx7Mobile from './../../assets/home/mobile/image-speaker-zx7.jpg';

// YX1
import yx1 from './../../assets/home/desktop/image-earphones-yx1.jpg';

export default function HomeProducts() {
  let windowWidth = useWindow();
  let zx7Bg = windowWidth < 768 ? zx7Mobile : zx7Desktop;

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
              <Link className={styles.right__btn} to='/speakers/6'>
                See Product
              </Link>
            </div>
          </div>
        </div>

        <div
          className={styles.zx7}
          style={{ backgroundImage: `url(${zx7Bg})`, backgroundSize: 'cover' }}
        >
          <div className={styles.body}>
            <h1 className={styles.body__title}>ZX7 SPEAKER</h1>
            <Link className={styles.body__link} to='/speakers/5'>
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
                backgroundPosition: 'center',
              }}
            ></div>
            <div className={styles.rightContainer}>
              <div className={styles.right}>
                <h1 className={styles.right__title}>YX1 EARPHONES</h1>
                <Link className={styles.right__link} to='/earphones/1'>
                  See Product
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
