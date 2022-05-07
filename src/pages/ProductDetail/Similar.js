import styles from './similar.module.scss';
import useWindow from '../../helper/useWindow';
import { useNavigate } from 'react-router-dom';

function Card(props) {
  let windowWidth = useWindow();
  let navigate = useNavigate();

  const { name, image, slug, data } = props;
  const foundItem = data.find((d) => d.slug === slug);
  const formattedImg =
    windowWidth < 768
      ? image.mobile.replace('./', '')
      : image.desktop.replace('./', '');

  return (
    <div className={styles.card}>
      <img
        className={styles.card__img}
        src={require(`../../${formattedImg}`)}
        alt=''
      />
      <div className={styles.card__body}>
        <div className={styles.card__body__title}>{name}</div>
        <button
          onClick={() => navigate(`/${foundItem.category}/${foundItem.id}`)}
          className={styles.btn}
        >
          see product
        </button>
      </div>
    </div>
  );
}

export default function Similar({ others, data }) {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>You may also like</h1>
      <div className={styles.cards}>
        {others.map((item) => (
          <Card key={item.slug} {...item} data={data} />
        ))}
      </div>
    </div>
  );
}
