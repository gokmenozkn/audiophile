import styles from './styles.module.scss';
import ListItem from '../ListItem';

export default function List({ data }) {
  return (
    <section className={styles.list}>
      <div className={styles.flex}>
        {data.length > 0 &&
          data.map((item) => <ListItem key={item.id} item={item} />)}
      </div>
    </section>
  );
}
