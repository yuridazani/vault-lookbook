// src/pages/CollectionDetailPage.jsx

import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { collections } from '../data/collectionsData';
import { ArrowLeft } from 'lucide-react';

const CollectionDetailPage = () => {
  const { collectionId } = useParams();
  const collection = collections.find(c => c.id == collectionId);

  if (!collection) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <h1 className="text-4xl">Koleksi tidak ditemukan.</h1>
      </div>
    );
  }

  return (
    <main className="container mx-auto py-32 px-8 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Link to="/collections" className="flex items-center text-zinc-400 hover:text-white mb-8">
          <ArrowLeft size={20} className="mr-2" />
          Kembali ke Koleksi
        </Link>

        <h1 className="text-4xl md:text-7xl font-bold uppercase">{collection.name}</h1>
        <p className="text-zinc-300 mt-2 mb-16 max-w-2xl">{collection.description}</p>

        {/* Kita pakai lagi layout masonry dari halaman lookbook */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
          {collection.images.map((src, index) => (
            <motion.div
              key={index}
              className="mb-8 break-inside-avoid"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img src={src} alt={`${collection.name} look ${index + 1}`} className="w-full h-auto object-cover"/>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
};

export default CollectionDetailPage;