import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CartModal from './CartModal';
import useWindow from '../../helper/useWindow';
import hamburgerIcon from '../../assets/shared/tablet/icon-hamburger.svg';

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

function Mobile(props) {
  let navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <div
        className={styles.container}
        style={{ backgroundColor: props.color }}
      >
        <nav className={styles.nav}>
          <div
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className={styles.nav__hamburger}
          >
            <img src={hamburgerIcon} alt='' />
          </div>
          <h1 onClick={() => navigate('/')} className={styles.nav__title}>
            audiophile
          </h1>
          <div
            className={styles.nav__icon}
            onClick={() => props.setIsModalOpen((prev) => !prev)}
          >
            <FontAwesomeIcon icon={faCartShopping} size='2x' />
          </div>
        </nav>
        {isDropdownOpen && (
          <div
            className={styles.dropdown}
            style={{ backgroundColor: props.color }}
          >
            <div className={styles.row}>
              {LINK_NAMES.map((name) => {
                return (
                  <Link key={name} to={LINK[name].target}>
                    {name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
      {props.isModalOpen && <CartModal setModal={props.setIsModalOpen} />}
    </>
  );
}

function Desktop(props) {
  let navigate = useNavigate();

  return (
    <>
      <div
        className={styles.container}
        style={{ backgroundColor: props.color }}
      >
        <nav className={styles.nav}>
          <h1 onClick={() => navigate('/')} className={styles.nav__title}>
            audiophile
          </h1>
          <ul className={styles.nav__list}>
            {LINK_NAMES.map((name) => {
              return (
                <li key={name} className={styles.nav__list__item}>
                  <Link to={LINK[name].target}>{name}</Link>
                </li>
              );
            })}
          </ul>
          <div
            className={styles.nav__icon}
            onClick={() => props.setIsModalOpen((prev) => !prev)}
          >
            <FontAwesomeIcon icon={faCartShopping} size='2x' />
          </div>
        </nav>
      </div>
      {props.isModalOpen && <CartModal setModal={props.setIsModalOpen} />}
    </>
  );
}

function Navbar() {
  let location = useLocation();
  let pathname = location.pathname.split('/').join('');

  const [color, setColor] = useState('#191919');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const windowWidth = useWindow();

  useEffect(() => {
    if (pathname !== '') {
      setColor('black');
    } else {
      setColor('#191919');
    }
  }, [pathname]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen]);

  if (windowWidth < 768) {
    return (
      <Mobile
        color={color}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    );
  }

  return (
    <Desktop
      color={color}
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
    />
  );
}

export default Navbar;
