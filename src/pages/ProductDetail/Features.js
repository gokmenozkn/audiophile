import styles from './features.module.scss';

export default function Features({ item }) {
  const { includes } = item;

  return (
    <main className={styles.main}>
      <section className={styles.left}>
        <h2 className={styles.title}>Features</h2>
        <p className={styles.content}>{item.features}</p>
      </section>
      <section className={styles.right}>
        <h2 className={styles.title}>In the box</h2>
        <div className={styles.list}>
          {includes &&
            includes.map((item, index) => {
              return (
                <div key={index} className={styles.list__item}>
                  <div className={styles.qty}>{item.quantity}x</div>
                  <div className={styles.equipment}>{item.item}</div>
                </div>
              );
            })}
        </div>
      </section>
    </main>
  );
}
