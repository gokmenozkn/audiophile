import './App.scss';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Headphones from './pages/Headphones';
import Speakers from './pages/Speakers';
import Earphones from './pages/Earphones';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import ScrollToTop from './helper/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/headphones' element={<Headphones />} />
        <Route path='/speakers' element={<Speakers />} />
        <Route path='/earphones' element={<Earphones />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/:categoryName/:productID' element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
