import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface Hotspot {
    id: number | string;
    top: string;
    left: string;
    product: Product;
}

interface LookbookImageProps {
    imageSrc: string;
    altText: string;
    hotspots: Hotspot[];
    className?: string;
}

const LookbookImage: React.FC<LookbookImageProps> = ({ imageSrc, altText, hotspots, className = '' }) => {
    return (
        <div className={`relative inline-block w-full h-full ${className}`}>
            <img
                src={imageSrc}
                alt={altText}
                className="w-full h-full object-cover block"
            />

            {hotspots.map((hotspot, index) => (
                <div
                    key={hotspot.id}
                    className="absolute w-[30px] h-[30px] flex items-center justify-center bg-white rounded-full shadow-md cursor-pointer z-10 transition-transform hover:scale-110 group"
                    style={{ top: hotspot.top, left: hotspot.left }}
                >
                    <span className="text-xs font-bold text-gray-800">{index + 1}</span>

                    {/* Popup Content */}
                    <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white p-3 shadow-xl rounded-md w-[200px] z-20"
                        style={{
                            left: parseInt(hotspot.left) > 50 ? 'auto' : '35px',
                            right: parseInt(hotspot.left) > 50 ? '35px' : 'auto',
                            top: parseInt(hotspot.top) > 50 ? 'auto' : '-10px',
                            bottom: parseInt(hotspot.top) > 50 ? '-10px' : 'auto'
                        }}>
                        <div className="flex gap-3">
                            <Link to={`/product/${hotspot.product.slug}`} className="w-16 h-16 flex-shrink-0 border border-gray-100 rounded overflow-hidden">
                                <img
                                    src={hotspot.product.images[0]}
                                    alt={hotspot.product.name}
                                    className="w-full h-full object-cover"
                                />
                            </Link>
                            <div className="flex flex-col justify-center">
                                <Link to={`/product/${hotspot.product.slug}`} className="text-sm font-medium text-gray-800 hover:text-teal-600 line-clamp-2 leading-tight mb-1">
                                    {hotspot.product.name}
                                </Link>
                                <div className="text-sm">
                                    {hotspot.product.salePrice ? (
                                        <>
                                            <span className="text-gray-400 line-through mr-2 text-xs">${hotspot.product.price}</span>
                                            <span className="text-teal-600 font-bold">${hotspot.product.salePrice}</span>
                                        </>
                                    ) : (
                                        <span className="text-gray-800 font-bold">${hotspot.product.price}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LookbookImage;
