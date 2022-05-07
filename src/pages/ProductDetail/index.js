import styles from './styles.module.scss';
import { useParams, Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import CategoryCard from '../../components/CategoryCard';
import BestAudioGear from '../../components/BestAudioGear';
import Footer from '../../components/Footer';
import ProductSection from './ProductSection';
import Features from './Features';
import ImageGallery from './ImageGallery';
import Similar from './Similar';
import { useAppContext } from '../../context/AppContext';

export default function ProductDetail() {
  let ctx = useAppContext();
  let params = useParams();
  let { productID } = params;
  let data = ctx.data;
  let foundItem = data.find((item) => item.id === Number(productID)) || {};

  if (!foundItem) {
    return <Layout />;
  }

  return (
    <Layout>
      <section className={styles.container}>
        <Link className={styles.goBack} to={-1}>
          Go Back
        </Link>
        <ProductSection item={foundItem} />
        <Features item={foundItem} />
        <ImageGallery
          first={foundItem.gallery.first}
          second={foundItem.gallery.second}
          third={foundItem.gallery.third}
        />
        <Similar others={foundItem.others} data={ctx.data} />
        <CategoryCard />
        <BestAudioGear />
      </section>
      <Footer />
    </Layout>
  );
}
