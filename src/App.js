import React, { useState } from 'react';
import Navbar from './Navbar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const hanglePageChange = (page) => setCurrentPage(page);

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
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
    </main>
  );
}