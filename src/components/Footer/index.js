import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <h1 className={styles.nav__brand}>audiophile</h1>
          <ul className={styles.nav__list}>
            <li>
              <Link className={styles.link} to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link className={styles.link} to='/headphones'>
                Headphones
              </Link>
            </li>
            <li>
              <Link className={styles.link} to='/speakers'>
                Speakers
              </Link>
            </li>
            <li>
              <Link className={styles.link} to='/earphones'>
                Earphones
              </Link>
            </li>
          </ul>
        </nav>

        <section className={styles.content}>
          <div className={styles.left}>
            <p>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
          </div>
          <div className={styles.right}>
            <div className={styles.social}>
              <FontAwesomeIcon
                className={styles.icon}
                icon={faFacebookSquare}
                color='white'
                size='2x'
              />
              <FontAwesomeIcon
                className={styles.icon}
                icon={faTwitter}
                color='white'
                size='2x'
              />
              <FontAwesomeIcon
                className={styles.icon}
                icon={faInstagram}
                color='white'
                size='2x'
              />
            </div>
          </div>
        </section>

        <section className={styles.bottom}>
          Copyright 2021. All Rights Reserved
        </section>
      </div>
    </footer>
  );
}
