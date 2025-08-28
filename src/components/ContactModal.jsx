// src/components/ContactModal.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Twitter, Mail } from 'lucide-react';

const ContactModal = ({ isOpen, closeModal }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="bg-zinc-800 text-white p-8 md:p-12 rounded-lg relative w-full max-w-lg text-center"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white text-2xl"
            >
              &times;
            </button>
            <h2 className="text-4xl font-bold uppercase mb-4">Get In Touch</h2>
            <p className="text-zinc-300 mb-8">
              For collaborations, press inquiries, or just to say hello.
            </p>
            <div className="flex flex-col items-center space-y-4">
              <a href="mailto:hello@vault.com" className="flex items-center text-lg hover:text-pink-400 transition-colors">
                <Mail className="mr-3" size={24} />
                hello@vault.com
              </a>
              <div className="flex space-x-6 pt-4">
                <a href="#" className="hover:text-pink-400 transition-colors"><Instagram size={28} /></a>
                <a href="#" className="hover:text-pink-400 transition-colors"><Twitter size={28} /></a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;