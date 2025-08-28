// src/components/ImageModal.jsx

import { motion, AnimatePresence } from 'framer-motion';

const ImageModal = ({ selectedImage, closeModal }) => {
  if (!selectedImage) return null;

  return (
    // AnimatePresence penting agar animasi saat keluar bisa berjalan
    <AnimatePresence>
      {/* Latar belakang overlay */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeModal} // Tutup modal saat overlay diklik
      >
        {/* Kontainer gambar agar klik pada gambar tidak menutup modal */}
        <motion.div
          className="relative"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()} // Mencegah event klik menyebar ke overlay
        >
          <img
            src={selectedImage}
            alt="Enlarged lookbook"
            className="max-w-[80vw] max-h-[80vh] object-contain"
          />
          <button
            onClick={closeModal}
            className="absolute -top-4 -right-4 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg"
          >
            &times;
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageModal;