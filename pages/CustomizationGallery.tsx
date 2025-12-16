import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import ScrollAnimation from '../components/ScrollAnimation';

const CustomizationGallery: React.FC = () => {
    // Placeholder images - using a mix from existing assets
    const galleryItems = [
        { id: 1, image: "media/banner/banner-18.jpg", title: "Sci-Fi Cities", size: "col-span-1 md:col-span-2 md:row-span-2" },
        { id: 2, image: "media/banner/banner-19.jpg", title: "Architectural Models", size: "col-span-1 md:col-span-1 md:row-span-1" },
        { id: 3, image: "media/banner/banner-20.jpg", title: "Character Art", size: "col-span-1 md:col-span-1 md:row-span-1" },
        { id: 4, image: "media/products/d2300-1-1.jpg", title: "Custom Lamps", size: "col-span-1 md:col-span-1 md:row-span-2" },
        { id: 5, image: "media/products/d2300-2-1.jpg", title: "Prototypes", size: "col-span-1 md:col-span-1 md:row-span-1" },
        { id: 6, image: "media/products/d2300-3-1.jpg", title: "Spare Parts", size: "col-span-1 md:col-span-2 md:row-span-1" },
        { id: 7, image: "media/products/d2300-4-1.jpg", title: "Artistic Decor", size: "col-span-1 md:col-span-1 md:row-span-1" },
        { id: 8, image: "media/products/d2300-5-1.jpg", title: "Complex Geometry", size: "col-span-1 md:col-span-1 md:row-span-1" },
        { id: 9, image: "media/products/d2300-6-1.jpg", title: "Large Scale", size: "col-span-1 md:col-span-2 md:row-span-1" },
        { id: 10, image: "media/products/d2300-7-1.jpg", title: "Miniatures", size: "col-span-1 md:col-span-1 md:row-span-1" },
    ];

    return (
        <div className="pt-0 pb-20 bg-[#DCDCDC] min-h-screen">
            <PageTitle title="Customization Gallery" breadcrumbs={[{ label: 'Customization', path: '/customize' }]} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation animation="fade-in-up">
                    <div className="mb-8">
                        <Link to="/customize" className="inline-flex items-center text-teal-600 hover:text-teal-700 font-bold mb-4 transition-colors">
                            <ArrowLeft size={20} className="mr-2" /> Back to Customization
                        </Link>
                        <p className="text-gray-600 mt-2">Explore our portfolio of custom projects, from intricate miniatures to large-scale architectural models.</p>
                    </div>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4">
                    {galleryItems.map((item, index) => (
                        <ScrollAnimation key={item.id} animation="zoom-in" delay={index * 50} className={item.size}>
                            <div className="relative group overflow-hidden rounded-2xl shadow-lg h-full w-full">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <h3 className="text-white font-bold text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                                </div>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CustomizationGallery;
