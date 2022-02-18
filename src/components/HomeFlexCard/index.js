import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import earphone from './../../assets/shared/desktop/image-category-thumbnail-earphones.png';
import headphone from './../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import speaker from './../../assets/shared/desktop/image-category-thumbnail-speakers.png';

const CARD = {
  Headphones: {
    logo: headphone,
    url: '/headphones',
    style: {},
  },
  Speakers: {
    logo: speaker,
    url: '/speakers',
    style: {
      width: 12.149 + 'rem',
      height: 14.6 + 'rem',
    },
  },
  Earhphones: {
    logo: earphone,
    url: '/earhphones',
    style: {
      width: 17.8 + 'rem',
      height: 16.1 + 'rem',
    },
  },
};

const CARD_NAMES = Object.keys(CARD);

export default function HomeFlexCard() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        {CARD_NAMES.map((item) => {
          return (
            <div className={styles.card} key={item}>
              <img
                className={styles.card__img}
                style={CARD[item].style}
                src={CARD[item].logo}
                alt='headphone'
              />
              <div className={styles.card__body}>
                <h3 className={styles.card__title}>{item}</h3>
                <Link className={styles.card__link} to={CARD[item].url}>
                  Shop
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
