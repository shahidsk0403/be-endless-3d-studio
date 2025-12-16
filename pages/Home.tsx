import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ShopByCategory from '../components/ShopByCategory';
import BestSellers from '../components/BestSellers';
import CustomizeSection from '../components/CustomizeSection';
import AboutSection from '../components/AboutSection';
import InstagramFeed from '../components/InstagramFeed';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col">
            <HeroSlider />
            <ShopByCategory />
            <BestSellers />
            <CustomizeSection />
            <AboutSection />
            <InstagramFeed />
        </div>
    );
};

export default Home;