import React, { useState } from 'react';
import Navbar from '/components/Navbar';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const hanglePageChange = (page) => setCurrentPage(page);

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
    <main>
      <Navbar currentPage={ currentPage } hanglePageChange={ hanglePageChange } />
      { renderPage() }
      <Footer />
    </main>
  );
}