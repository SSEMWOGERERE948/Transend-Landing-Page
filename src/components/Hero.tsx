'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';

// Import slick carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true, // Keeps the fade animation
  };

  const images = [
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1749&q=80",
    "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  ];

  return (
    <div id="home" className="relative bg-[#0B1F3A] pt-20">
      {/* Animated Dots Background */}
      <div className="absolute inset-0 bg-transparent z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/path-to-your-dot-image.png')] animate-pulse"></div>
        {/* Add any other animated background effects here if needed */}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Transform Your Future Through Global Education
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Your journey to international education starts here. Expert guidance for studying abroad, visa assistance, and university placements.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="/#contact" className="bg-[#007FFF] text-white px-8 py-4 rounded-md font-medium hover:bg-blue-600 flex items-center gap-2">
                Get Started <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/#services" className="border border-white text-white px-8 py-4 rounded-md font-medium hover:bg-white hover:text-[#0B1F3A]">
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative w-full h-[400px]">
            {mounted && (
              <Slider {...sliderSettings}>
                {images.map((src, index) => (
                  <div key={index} className="h-[400px] w-full">
                    <Image
                      src={src}
                      alt={`Students studying abroad ${index + 1}`}
                      fill
                      priority
                      className="rounded-lg shadow-2xl object-cover"
                    />
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
