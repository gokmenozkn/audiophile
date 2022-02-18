import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.main}>
          <h3 className={styles.main__ad}>New Product</h3>
          <h1 className={styles.main__title}>XX99 Mark II Headphones</h1>
          <p className={styles.main__content}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link to='/xx99' className={styles.main__btn}>See Product</Link>
        </div>
      </div>
    </div>
  );
}
