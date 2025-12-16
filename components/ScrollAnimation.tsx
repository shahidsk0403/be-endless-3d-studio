import React, { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
    children: React.ReactNode;
    animation?: 'fade-in' | 'fade-in-up' | 'fade-in-left' | 'fade-in-right' | 'zoom-in' | 'flip-in';
    duration?: number;
    delay?: number;
    threshold?: number;
    className?: string;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
    children,
    animation = 'fade-in-up',
    duration = 1000,
    delay = 0,
    threshold = 0.1,
    className = ''
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: threshold,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold]);

    const getAnimationClass = () => {
        switch (animation) {
            case 'fade-in': return 'animate-fade-in';
            case 'fade-in-up': return 'animate-fade-in-up';
            case 'fade-in-left': return 'animate-fade-in-left';
            case 'fade-in-right': return 'animate-fade-in-right';
            case 'zoom-in': return 'animate-zoom-in';
            case 'flip-in': return 'animate-flip-in preserve-3d';
            default: return 'animate-fade-in-up';
        }
    };

    return (
        <div
            ref={ref}
            className={`${className} ${isVisible ? getAnimationClass() : 'opacity-0'}`}
            style={{
                animationDuration: `${duration}ms`,
                animationDelay: `${delay}ms`
            }}
        >
            {children}
        </div>
    );
};

export default ScrollAnimation;
