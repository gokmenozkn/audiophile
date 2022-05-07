import styles from './styles.module.scss';
import { Link, useLocation } from 'react-router-dom';
import useWindow from '../../helper/useWindow';
import bgDesktop from '../../assets/home/desktop/image-hero.jpg';
import bgMobile from '../../assets/home/mobile/image-header.jpg';

export default function Hero() {
  let location = useLocation();
  let pathname = location.pathname.split('/').join('');
  let windowWidth = useWindow();
  let bgImg = windowWidth < 768 ? bgMobile : bgDesktop;

  function HomeSection() {
    return (
      <section
        style={{ backgroundImage: `url(${bgImg})` }}
        className={styles.HomeSection}
      >
        <div className={styles.container}>
          <div className={styles.main}>
            <h3 className={styles.main__ad}>New Product</h3>
            <h1 className={styles.main__title}>XX99 Mark II Headphones</h1>
            <p className={styles.main__content}>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link to='/headphones/4' className={styles.main__btn}>
              See Product
            </Link>
          </div>
        </div>
      </section>
    );
  }

  function GeneralSection() {
    return (
      <section className={styles.general}>
        <h1>{pathname}</h1>
      </section>
    );
  }

  function Section() {
    if (pathname !== '') {
      return <GeneralSection />;
    } else {
      return <HomeSection />;
    }
  }

  return <Section />;
}
