// src/pages/JournalDetailPage.jsx

import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { journalEntries } from '../data/journalData';
import { ArrowLeft } from 'lucide-react';

const JournalDetailPage = () => {
  // 1. Ambil ID dari URL
  const { articleId } = useParams(); 

  // 2. Cari artikel yang sesuai di data kita
  // Kita pakai '==' karena useParams mengembalikan string
  const article = journalEntries.find(entry => entry.id == articleId);

  // 3. Jika artikel tidak ditemukan, tampilkan pesan
  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <h1 className="text-4xl">Artikel tidak ditemukan.</h1>
      </div>
    );
  }

  // 4. Jika artikel ditemukan, tampilkan detailnya
  return (
    <main className="container mx-auto py-32 px-8 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Link to="/journal" className="flex items-center text-zinc-400 hover:text-white mb-8">
          <ArrowLeft size={20} className="mr-2" />
          Kembali ke Journal
        </Link>

        <h1 className="text-4xl md:text-6xl font-bold mb-4">{article.title}</h1>
        <p className="text-zinc-400 mb-8">{article.date}</p>

        <img src={article.imageSrc} alt={article.title} className="w-full h-auto max-h-[60vh] object-cover mb-8" />

        <div className="prose prose-invert prose-lg max-w-none">
          <p>{article.excerpt}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.
          </p>
        </div>
      </motion.div>
    </main>
  );
};

export default JournalDetailPage;