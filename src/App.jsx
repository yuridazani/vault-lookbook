// src/App.jsx
import { useState } from 'react'; // Import useState
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal'; // Import ContactModal

function App() {
  // State untuk mengontrol modal kontak
  const [isContactOpen, setContactOpen] = useState(false);

  return (
    <div className="bg-zinc-900">
      {/* Kirim fungsi untuk membuka modal sebagai prop ke Header */}
      <Header onContactClick={() => setContactOpen(true)} />
      
      <main>
        <Outlet />
      </main>
      
      <Footer />

      {/* Render modal di sini */}
      <ContactModal 
        isOpen={isContactOpen} 
        closeModal={() => setContactOpen(false)} 
      />
    </div>
  );
}

export default App;