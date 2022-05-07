import Layout from './../../components/Layout';
import Hero from './../../components/Hero';
import Footer from './../../components/Footer';
import CategoryCard from '../../components/CategoryCard';
import BestAudioGear from '../../components/BestAudioGear';
import List from '../../components/List';
import { useAppContext } from '../../context/AppContext';

const Headphones = () => {
  const { data } = useAppContext();
  const headphones = [...data]
    .filter((item) => item.category === 'headphones')
    .sort((a, b) => Number(b.new) - Number(a.new));

  return (
    <Layout>
      <Hero />
      <List data={headphones} />
      <CategoryCard />
      <BestAudioGear />
      <Footer />
    </Layout>
  );
};

export default Headphones;
