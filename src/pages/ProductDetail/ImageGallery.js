import styles from './image-gallery.module.scss';

export default function ImageGallery({ first, second, third }) {
  const formattedFirstImg = first.desktop.replace('./', '');
  const firstImg = require(`../../${formattedFirstImg}`);

  const formattedSecondImg = second.desktop.replace('./', '');
  const secondImg = require(`../../${formattedSecondImg}`);

  const formattedThirdImg = third.desktop.replace('./', '');
  const thirdImg = require(`../../${formattedThirdImg}`);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div
          style={{
            backgroundImage: `url(${firstImg})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          className={[styles.one, styles.img].join(' ')}
        ></div>
        <div
          className={[styles.two, styles.img].join(' ')}
          style={{
            backgroundImage: `url(${secondImg})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        ></div>
        <div
          className={[styles.three, styles.img].join(' ')}
          style={{
            backgroundImage: `url(${thirdImg})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        ></div>
      </div>
    </div>
  );
}
