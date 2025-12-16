import React from 'react';
import { Instagram } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const InstagramFeed: React.FC = () => {
    const images = [1, 2, 3, 4, 5];

    return (
        <section className="bg-[#DCDCDC] border-t border-gray-100 pt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
                <ScrollAnimation animation="fade-in-up">
                    <h2 className="text-3xl font-serif-heading font-bold text-charcoal-800 mb-2">FIND US!</h2>
                    <p className="text-gray-500">@beendless_studio</p>
                </ScrollAnimation>
            </div>

            <div className="w-full overflow-hidden">
                <div className="flex w-full">
                    {images.map((id, index) => (
                        <ScrollAnimation key={index} animation="zoom-in" delay={index * 100} className="w-1/2 md:w-1/3 lg:w-1/5 aspect-square relative group cursor-pointer border-r border-white last:border-r-0">
                            <img
                                src={`https://picsum.photos/id/${160 + id}/600/600`}
                                alt="Instagram"
                                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                                <Instagram size={32} />
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstagramFeed;
