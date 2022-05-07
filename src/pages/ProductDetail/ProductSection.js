/* eslint-disable */
import styles from './product-section.module.scss';
import { useState } from 'react';
import { useAppContext } from '../../context/AppContext';

export default function ProductSection({ item }) {
  const { name, price, image, description } = item;
  const isNew = item.new;
  let { desktop } = image;
  let newDesktopURI = desktop.replace('./', '');

  const [qty, setQty] = useState(1);

  const { addToCart } = useAppContext();

  let formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  function increaseQty() {
    setQty((prevVal) => prevVal + 1);
  }

  function decreaseQty() {
    setQty((prevVal) => {
      if (prevVal > 1) {
        return prevVal - 1;
      } else {
        return prevVal;
      }
    });
  }

  return (
    <main className={styles.main}>
      <img
        className={styles.img}
        src={require(`../../${newDesktopURI}`)}
        alt='item'
      />
      <div className={styles.content}>
        {isNew && <h5 className={styles.content__state}>New Product</h5>}
        <h1 className={styles.content__title}>{name}</h1>
        <p className={styles.content__body}>{description}</p>
        <div className={styles.content__price}>{formattedPrice}</div>
        <div className={styles.content__qty}>
          <div className={styles.content__qty__number}>
            <div onClick={decreaseQty} className={styles.icon}>
              -
            </div>
            <div
              style={{
                fontSize: '1.3rem',
                textTransform: 'uppercase',
                fontWeight: 'bold',
              }}
            >
              {qty}
            </div>
            <div onClick={increaseQty} className={styles.icon}>
              +
            </div>
          </div>
          <button
            data-testid='add-to-cart'
            onClick={() => addToCart(item, qty)}
            className={styles.content__qty__add}
          >
            Add to cart
          </button>
        </div>
      </div>
    </main>
  );
}
