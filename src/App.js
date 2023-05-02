import React, { useState } from 'react';
import Navbar from './components/Navbar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import History from './pages/History';

export default function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const pageChange = (page) => setCurrentPage(page);

  const renderPage = () => {
    if (currentPage === 'About') {
      return  <About />;
    }
    else if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    else if (currentPage === 'Resume') {
      return <Resume />;
    }
    else {
      return <Contact />;
    }
  };

  return (
    <main className='app-container'>
      <Navbar currentPage={ currentPage } hanglePageChange={ pageChange } />
      <About />
      <Portfolio />
      <History />
      <Contact />
      <Footer />
    </main>
  );
}