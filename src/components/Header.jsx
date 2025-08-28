// src/components/Header.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Terima prop onContactClick
function Header({ onContactClick }) { 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      className="absolute top-0 left-0 w-full p-8 text-white z-20"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wider">VAULT°</Link>

        <nav className="hidden md:flex space-x-8 font-semibold tracking-wide">
          <Link to="/lookbook" className="hover:text-pink-400 transition-colors">LOOKBOOK</Link>
          <Link to="/collections" className="hover:text-pink-400 transition-colors">COLLECTIONS</Link>
          <Link to="/journal" className="hover:text-pink-400 transition-colors">JOURNAL</Link>
        </nav>

        {/* Tombol Kontak Desktop */}
        <button 
          onClick={onContactClick} // Pasang event di sini
          className="hidden md:block border border-white px-6 py-2 font-bold hover:bg-white hover:text-black transition-colors"
        >
          CONTACT
        </button>

        <div className="md:hidden z-50">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-zinc-900 flex flex-col items-center justify-center space-y-8"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
          >
            <Link to="/lookbook" className="text-3xl font-bold" onClick={() => setIsMenuOpen(false)}>LOOKBOOK</Link>
            <Link to="/collections" className="text-3xl font-bold" onClick={() => setIsMenuOpen(false)}>COLLECTIONS</Link>
            <Link to="/journal" className="text-3xl font-bold" onClick={() => setIsMenuOpen(false)}>JOURNAL</Link>
            
            {/* Tombol Kontak Mobile */}
            <button 
              className="text-3xl font-bold border-2 border-white px-8 py-3" 
              onClick={() => {
                setIsMenuOpen(false); // Tutup menu mobile
                onContactClick();    // Buka modal kontak
              }}
            >
              CONTACT
            </button>

            <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 text-4xl font-bold">&times;</button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;