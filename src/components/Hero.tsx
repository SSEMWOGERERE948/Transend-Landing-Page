'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { motion } from 'framer-motion'
// Import slick carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// You'll need to add these to your project:
// npm install react-slick @types/react-slick slick-carousel framer-motion

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  }

  const images = [
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1749&q=80",
    "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
  ]

  return (
    <div id="home" className="relative bg-[#0B1F3A] pt-12 overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        style={{
          backgroundImage: 'radial-gradient(circle, #1a3b66 10%, transparent 10%)',
          backgroundSize: '50px 50px',
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 items-center">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-3xl sm:text-5xl font-bold text-white leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Transform Your Future Through Global Education
            </motion.h1>
            <motion.p
              className="mt-4 text-sm sm:text-lg text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Your journey to international education starts here. Expert guidance for studying abroad, visa assistance, and university placements.
            </motion.p>
            <motion.div
              className="mt-6 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link href="/#contact" className="bg-[#007FFF] text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 flex items-center gap-2 transition-colors duration-300">
                Get Started <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/#services" className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-[#0B1F3A] transition-colors duration-300">
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="relative h-[300px] sm:h-[400px] w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {mounted && (
              <Slider {...sliderSettings}>
                {images.map((src, index) => (
                  <div key={index} className="relative h-[300px] sm:h-[400px]">
                    <Image
                      src={src}
                      alt={`Students studying abroad ${index + 1}`}
                      fill
                      className="rounded-lg shadow-2xl object-cover"
                    />
                  </div>
                ))}
              </Slider>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
