import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const LINK = {
  Home: {
    target: '/',
  },
  Headphones: {
    target: '/headphones',
  },
  Speakers: {
    target: '/speakers',
  },
  Earphones: {
    target: '/earphones',
  },
};

const LINK_NAMES = Object.keys(LINK);

const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <h1 className={styles.nav__title}>audiophile</h1>
          <ul className={styles.nav__list}>
            {LINK_NAMES.map((name) => {
              return (
                <li key={name} className={styles.nav__list__item}>
                  <Link to={LINK[name].target}>{name}</Link>
                </li>
              );
            })}
          </ul>
          <div className={styles.nav__icon}>
            <FontAwesomeIcon icon={faCartShopping} size='2x' />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
