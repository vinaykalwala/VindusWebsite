import React, { useState, useEffect } from 'react';
import '../styles/homebanner.css';
import Banner1 from '../assets/banner22.jpeg';
import Banner2 from '../assets/banner11.jpg';
import Banner3 from '../assets/banner3.png';
import Banner4 from '../assets/banner13.jpg';
import Banner5 from '../assets/banner21.jpg';

const slides = [
    { id: 1, image: Banner1, title: 'Unleash AI Innovation', description: 'Transform your business with cutting-edge AI solutions.' },
    { id: 2, image: Banner2, title: 'Sustainable Tech', description: 'Pioneer a greener tomorrow with eco-friendly tech.' },
    { id: 3, image: Banner3, title: 'Business Synergy', description: 'Elevate efficiency with seamless software integration.' },
    { id: 4, image: Banner4, title: 'Master Your Data', description: 'Gain insights with next-level analytics.' },
    { id: 5, image: Banner5, title: 'Intelligence Redefined', description: 'Empower growth with smart solutions.' },
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 4000); // 4-second auto-slide

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel">
            <div
                className="carousel-inner"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
                        key={slide.id}
                    >
                        <img src={slide.image} alt={slide.title} className="carousel-image" />
                        <div className="carousel-caption">
                            <h2 className="slide-title">{slide.title}</h2>
                            <p className="slide-description">{slide.description}</p>
                            <a href="/services" className="explore-button">Explore More</a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Thumbnail Previews */}
            <div className="carousel-thumbnails">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    >
                        <img src={slide.image} alt={`Thumbnail ${index + 1}`} />
                        <span className="thumbnail-title">{slide.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
