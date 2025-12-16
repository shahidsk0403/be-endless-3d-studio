import React, { useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface Slide {
    id: number;
    image: string;
    title: string;
    subtitle: string;
    cta: string;
    link: string;
}

const HeroSlider: React.FC<{ slides?: Slide[] }> = ({ slides: customSlides }) => {

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const autoplaySpeed = 4000;

    const defaultSlides: Slide[] = [
        { id: 1, image: "media/banner/homepage-slider-image-first.jpg", title: "Endless Possibilities", subtitle: "Bring your imagination to life with precision 3D printing.", cta: "SHOP NOW", link: "/shop" },
        { id: 2, image: "media/banner/homepage-slider-image-second.jpg", title: "Print Smart, Live Green", subtitle: "Eco-friendly materials for a cleaner, smarter future.", cta: "SHOP NOW", link: "/shop" },
        { id: 3, image: "media/banner/homepage-slider-image-third.jpg", title: "Your Idea, Our Print", subtitle: "Innovation meets craftsmanship in every printed detail", cta: "CUSTOMIZE", link: "/customize" }
    ];

    const slides = customSlides || defaultSlides;

    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed,
        arrows: true,
        beforeChange: (_: any, next: number) => setCurrentSlideIndex(next),
    };

    return (
        // REMOVE ALL FIXED HEIGHTS HERE
        <section className="w-full mb-8">
            <div className="w-full">
                <Slider {...settings}>

                    {slides.map((slide) => (
                        <div key={slide.id} className="w-full">

                            {/* DO NOT FORCE HEIGHT */}
                            <div className="w-full relative">

                                {/* Image controls its own height */}
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="
                                        w-full
                                        h-auto
                                        object-contain
                                        sm:object-cover
                                    "
                                />

                                {/* Text overlay */}
                                <div className="absolute inset-0 flex items-center justify-center text-center">
                                    <div>
                                        <h2 className="title-slider">{slide.title}</h2>
                                        <p className="description-slider">{slide.subtitle}</p>

                                        <Link to={slide.link} className="button-slider button-white">
                                            {slide.cta}
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}

                </Slider>
            </div>
        </section>
    );
};

export default HeroSlider;
