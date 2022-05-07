import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export default function ListItem({ item }) {
  const { description, name, id, image } = item;

  const isNew = item.new;

  const { desktop } = image;
  let newDesktopURI = desktop.replace('./', '');

  return (
    <div className={styles.card}>
      <img
        className={styles.card__img}
        src={require(`../../${newDesktopURI}`)}
        alt='xx99'
      />
      <div className={styles.card__body}>
        {isNew && <div className={styles.card__body__state}>New Product</div>}
        <h1 className={styles.card__body__title}>{name}</h1>
        <p className={styles.card__body__content}>{description}</p>
        <Link to={`${id}`} className={styles.card__body__btn}>
          See Product
        </Link>
      </div>
    </div>
  );
}
