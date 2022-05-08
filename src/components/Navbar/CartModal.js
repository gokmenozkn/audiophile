import styles from './cart-modal.module.scss';
import { useAppContext } from '../../context/AppContext';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import calculateTotal from '../../helper/calculateTotal';

export function CartItem({ item }) {
  const { decreaseByOne, increaseByOne } = useAppContext();
  const image = item.img || {};
  let { desktop } = image;
  let newDesktopURI = desktop.replace('./', '');

  return (
    <div className={styles.list__item}>
      <div className={styles.list__item__left}>
        <img src={require(`../../${newDesktopURI}`)} alt='' />

        <div className={styles.Info}>
          <h5 className={styles.Info__title}>{item.name}</h5>
          <div className={styles.Info__price}>$ {item.price}</div>
        </div>
      </div>
      <div className={styles.list__item__right}>
        <div onClick={() => decreaseByOne(item)} className={styles.operator}>
          -
        </div>
        <div className={styles.Quantity}>{item.qty}</div>
        <div onClick={() => increaseByOne(item)} className={styles.operator}>
          +
        </div>
      </div>
    </div>
  );
}

function CartModal({ setModal }) {
  const { cart, removeAll } = useAppContext();
  const modalRef = useRef();
  const navigate = useNavigate();

  function CloseModal(e) {
    if (modalRef.current === e.target) setModal(false);
  }

  let total = calculateTotal(cart);

  return (
    <div ref={modalRef} onClick={CloseModal} className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h3 data-testid='cart-length'>
              Cart ({(Array.isArray(cart) && cart.length) || 0})
            </h3>
            <span onClick={removeAll}>Remove all</span>
          </div>

          <div className={styles.list}>
            {cart.length > 0 &&
              cart.map((item) => {
                return <CartItem item={item} key={item.id} />;
              })}
          </div>

          <div className={styles.TotalContainer}>
            <div className={styles.total}>Total</div>
            <div className={styles.total_price}>$ {total}</div>
          </div>

          <button
            onClick={() => navigate('/checkout')}
            className={styles.CheckoutButton}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
