import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import icon from '../../assets/shared/desktop/icon-order.svg';
import { useRef } from 'react';

export default function CheckoutModal({ setModal }) {
  const modalRef = useRef();

  function closeModal(e) {
    if (modalRef.current === e.target) {
      setModal(false);
    }
  }

  return (
    <div ref={modalRef} onClick={closeModal} className={styles.background}>
      <div className={styles.modal}>
        <div className={styles.modal__icon}>
          <img src={icon} alt='' />
        </div>
        <h1 className={styles.modal__thanks}>
          THANK YOU <br /> FOR YOUR ORDER
        </h1>
        <p className={styles.modal__text}>
          You will receive an email confirmation shortly.
        </p>
        <div className={styles.modal__itemsRow}></div>
        <Link to='/' className={styles.modal__button}>
          Back to home
        </Link>
      </div>
    </div>
  );
}
