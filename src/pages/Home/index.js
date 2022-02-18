import Layout from './../../components/Layout';
import Hero from './../../components/Hero';
import Footer from './../../components/Footer';
import HomeFlexCard from '../../components/HomeFlexCard';
import HomeProducts from '../../components/HomeProducts';

const Home = () => (
  <>
    <Layout>
      <Hero />
      <HomeFlexCard />
      <HomeProducts />
      <Footer />
    </Layout>
  </>
);

export default Home;
