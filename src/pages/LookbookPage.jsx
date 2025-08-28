// src/pages/LookbookPage.jsx

import { useState } from 'react'; // <-- 1. Import useState
import { motion } from 'framer-motion';
import Header from '../components/Header';
import { galleryImages } from '../data/galleryData';
import ImageModal from '../components/ImageModal'; // <-- 2. Import komponen Modal

const LookbookPage = () => {
  // 3. Buat state untuk menyimpan gambar yang dipilih
  const [selectedImage, setSelectedImage] = useState(null);

  // 4. Fungsi untuk membuka dan menutup modal
  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-zinc-900 min-h-screen">
      <Header />

      <main className="container mx-auto py-32 px-8">
        <motion.h1 
          className="text-6xl md:text-8xl font-bold uppercase text-white mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          The Lookbook
        </motion.h1>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
          {galleryImages.map((image, index) => (
            // 5. Tambahkan onClick pada wrapper gambar
            <motion.div
              key={image.id}
              className="mb-8 break-inside-avoid cursor-pointer" // Tambah cursor-pointer
              onClick={() => openModal(image.src)} // Panggil fungsi openModal saat diklik
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <img 
                src={image.src} 
                alt={`Lookbook Image ${image.id}`}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </div>
      </main>

      {/* 6. Render komponen Modal di sini */}
      <ImageModal selectedImage={selectedImage} closeModal={closeModal} />
    </div>
  );
};

export default LookbookPage;