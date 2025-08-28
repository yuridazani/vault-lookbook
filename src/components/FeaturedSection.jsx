// src/components/FeaturedSection.jsx

import { motion } from 'framer-motion';

const FeaturedSection = () => {
  // Varian animasi untuk container agar anak-anaknya muncul satu per satu
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Jeda antar animasi anak
      },
    },
  };

  // Varian animasi untuk item (gambar/teks)
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    },
  };

  return (
    <section className="py-24 bg-zinc-900 text-white">
      <motion.div 
        className="container mx-auto px-8"
        initial="hidden"
        whileInView="visible" // Animasi akan berjalan saat elemen ini masuk ke layar
        viewport={{ once: true, amount: 0.3 }} // Animasi hanya berjalan sekali
        variants={containerVariants}
      >
        <motion.h2 
          className="text-5xl font-bold uppercase mb-4"
          variants={itemVariants}
        >
          Latest Obsessions
        </motion.h2>
        <motion.p 
          className="text-lg text-zinc-400 mb-16 max-w-2xl"
          variants={itemVariants}
        >
          A glimpse into the narrative of our latest collection. Each piece is a statement, a fragment of a larger story waiting to be told.
        </motion.p>

        {/* Grid Layout Asimetris */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end"
          variants={containerVariants}
        >
          {/* Kolom 1 */}
          <motion.div className="md:col-span-1" variants={itemVariants}>
            <img src="/assets/look-01.jpeg" alt="Fashion Look 1" className="w-full h-auto object-cover" />
          </motion.div>
          {/* Kolom 2 */}
          <motion.div className="md:col-span-1 md:-translate-y-16" variants={itemVariants}>
            <img src="/assets/look-02.jpeg" alt="Fashion Look 2" className="w-full h-auto object-cover" />
          </motion.div>
          {/* Kolom 3 */}
          <motion.div className="md:col-span-1" variants={itemVariants}>
            <img src="/assets/look-03.jpeg" alt="Fashion Look 3" className="w-full h-auto object-cover" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeaturedSection;