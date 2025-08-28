// src/pages/HomePage.jsx

import { motion } from 'framer-motion';
import Header from '../components/Header';
import FeaturedSection from '../components/FeaturedSection'; // <--- 1. IMPORT

function HomePage() {
  return (
    // Hapus min-h-screen agar tingginya mengikuti konten
    <div className="bg-zinc-900">
      {/* Hero Section Container */}
      <div className="relative min-h-screen overflow-hidden">
        <Header />

        <div className="absolute top-0 left-0 w-full h-full z-0"> {/* Ubah z-[-1] menjadi z-0 */}
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source src="/assets/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        </div>

        <motion.div
          className="relative flex flex-col items-center justify-center min-h-screen text-white text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* ... (kode h1, p, button tidak berubah) ... */}
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-widest"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Vintage Vault
          </motion.h1>

          <motion.p
            className="mt-4 text-lg md:text-xl max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            A curated space where timeless design meets modern rebellion. Explore the lookbook and redefine your style.
          </motion.p>

          <motion.button
            className="mt-8 bg-pink-500 text-black px-10 py-4 font-bold text-lg hover:bg-pink-400 transition-colors"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            EXPLORE THE LOOKBOOK
          </motion.button>
        </motion.div>
      </div>

      {/* 2. PANGGIL KOMPONEN BARU DI SINI */}
      <FeaturedSection />
    </div>
  );
}

export default HomePage;