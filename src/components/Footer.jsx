// src/components/Footer.jsx

import { Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-zinc-400 py-12 px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div>
          <h3 className="text-2xl font-bold text-white tracking-wider">VAULT°</h3>
          <p className="mt-2 text-sm">&copy; 2025 VAULT°. All Rights Reserved.</p>
        </div>
        <div className="flex space-x-4 mt-8 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">
            <Instagram size={24} />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Twitter size={24} />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Youtube size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;