// src/pages/CollectionsPage.jsx

import { motion } from 'framer-motion';
import { collections } from '../data/collectionsData';
import { Link } from 'react-router-dom';

const CollectionsPage = () => {
  return (
    <main className="container mx-auto py-32 px-8">
      <motion.h1
        className="text-6xl md:text-8xl font-bold uppercase text-white mb-16 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Collections
      </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {collections.map((collection, index) => (
            // BUNGKUS DENGAN LINK DI SINI
            <Link to={`/collections/${collection.id}`} key={collection.id}>
            <motion.div
                className="relative h-96 overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
            >
                <img 
                src={collection.coverImage} // Gunakan coverImage
                alt={collection.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center p-4">
                <h2 className="text-4xl font-bold text-white uppercase">{collection.name}</h2>
                <p className="text-white text-lg mt-2">{collection.description.split('.')[0]}</p>
                </div>
            </motion.div>
            </Link>
        ))}
        </div>
    </main>
  );
};

export default CollectionsPage;