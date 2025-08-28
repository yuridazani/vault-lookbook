// src/pages/JournalPage.jsx

import { motion } from 'framer-motion';
import { journalEntries } from '../data/journalData';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const JournalPage = () => {
  return (
    <main className="container mx-auto py-32 px-8 text-white">
      <motion.h1
        className="text-6xl md:text-8xl font-bold uppercase mb-16 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        The Journal
      </motion.h1>

      <div className="space-y-20">
        {journalEntries.map((entry, index) => (
          <motion.div
            key={entry.id}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {/* Mengubah urutan gambar berdasarkan index (genap/ganjil) */}
            <div className={`w-full h-96 ${index % 2 === 1 ? 'md:order-last' : ''}`}>
              <img src={entry.imageSrc} alt={entry.title} className="w-full h-full object-cover" />
            </div>
            
            <div className="flex flex-col">
            <p className="text-zinc-400 mb-2">{entry.date}</p>
            <h2 className="text-4xl font-bold mb-4">{entry.title}</h2>
            <p className="text-zinc-300 mb-6">{entry.excerpt}</p>

            {/* UBAH BAGIAN INI */}
            <Link to={`/journal/${entry.id}`} className="flex items-center font-bold text-pink-500 hover:text-pink-400">
                Read More <ArrowRight className="ml-2" size={20} />
            </Link>

            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default JournalPage;