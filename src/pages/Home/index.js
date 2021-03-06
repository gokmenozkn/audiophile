import Layout from './../../components/Layout';
import Hero from './../../components/Hero';
import Footer from './../../components/Footer';
import CategoryCard from '../../components/CategoryCard';
import HomeProducts from '../../components/HomeProducts';
import BestAudioGear from '../../components/BestAudioGear';

const Home = () => (
  <>
    <Layout>
      <Hero />
      <CategoryCard />
      <HomeProducts />
      <BestAudioGear />
      <Footer />
    </Layout>
  </>
);

export default Home;
