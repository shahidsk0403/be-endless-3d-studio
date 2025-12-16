import React from 'react';
import ProductDetailTemplate from '../ProductDetailTemplate';
// This file serves as an explicit entry point for Moon City Lamp if hard routing is required.
// In the main App, we route via slug, which is more efficient, but this structure fulfills the spec requirement.
const MoonCityLamp: React.FC = () => {
    return <ProductDetailTemplate />;
};
export default MoonCityLamp;