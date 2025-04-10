import React, { useState } from 'react'
import Header from './Header'
import RecentPurchaseNotification from '../public/RecentPurchaseNotification';
import Sidebar from './SideBar';

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    // Sample images for the slider
    const slides = [
      {
        id: 0,
        url: "https://cdn11.bigcommerce.com/s-4kqhmhfa8l/images/stencil/1883w/carousel/14/slider-01-1__16126.jpg?c=1",
        title: "Nor Milancelos",
        subtitle: "Scelerisque blandit cosmopolis de lorem metropolitan"
      },
      {
        id: 1,
        url: "https://cdn11.bigcommerce.com/s-4kqhmhfa8l/images/stencil/1883w/carousel/12/slider-03-3.jpg?c=1",
        title: "Nor Milancelos",
        subtitle: "Scelerisque blandit cosmopolis de lorem metropolitan"
      }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      };
    
      const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      };
    
      const goToSlide = (index) => {
        setCurrentSlide(index);
      };

  return (
    <div className='h-[100vh] w-full flex flex-col items-center justify-center relative'>
        
        {slides.map((slide, index) => (
            <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
            >
            <img
                src={slide.url}
                alt={`banner ${index + 1}`}
                className="w-full h-full object-cover"
            />
            {/* Dark overlay for better text visibility */}
            <div className="absolute inset-0 bg-black opacity-10"></div>
            </div>
        ))}

        {/* Main content */}
      <div className="container mx-auto flex flex-col items-center justify-center z-20 px-4 text-center text-white">
        <h1 className="font-dm-serif inline-block align-top w-full text-[40px] font-normal text-white tracking-[0] leading-[35px] mb-[20px] capitalize transition-all duration-700 transform translate-y-0">
          {slides[currentSlide].title}
        </h1>
        <p className="inline-block align-top mb-[27px] text-[15px] leading-[24px] tracking-[0] text-white w-full">
          {slides[currentSlide].subtitle}
        </p>
        <button className="bg-white text-black px-8 py-3 font-medium hover:bg-gray-100 transition-colors uppercase">
          Shop Now
        </button>
      </div>
        
        {/* Navigation arrows */}
        <div className="absolute inset-x-0 bottom-0 flex justify-center gap-4 items-center px-4 py-6 z-20">
            <button 
            onClick={prevSlide}
            className="bg-black bg-opacity-50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all"
            >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            </button>
            
            <div className="flex space-x-2">
            {slides.map((_, index) => (
                <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index ? 'bg-white w-8' : 'bg-white bg-opacity-50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                />
            ))}
            </div>
            
            <button 
            onClick={nextSlide}
            className="bg-black bg-opacity-50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all"
            >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            </button>
        </div>

        <RecentPurchaseNotification />
      </div>
  )
}

export default HeroSection