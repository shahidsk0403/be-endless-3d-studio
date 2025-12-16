import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { StoreProvider } from './context/StoreContext';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Customization from './pages/Customization';
import CustomizationGallery from './pages/CustomizationGallery';
import ProductDetailTemplate from './pages/ProductDetailTemplate';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';
import Account from './pages/Account';
import Login from './pages/Login';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';

const App: React.FC = () => {
  return (
    <StoreProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/customize" element={<Customization />} />
            <Route path="/customization-gallery" element={<CustomizationGallery />} />
            {/* Dynamic Product Route covering all 11 products */}
            <Route path="/product/:slug" element={<ProductDetailTemplate />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/account" element={<Account />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </Layout>
      </Router>
    </StoreProvider>
  );
};

export default App;