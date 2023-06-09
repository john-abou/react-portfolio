import React, { useState } from 'react';
import Navbar from './components/Navbar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import History from './pages/History';
import Contact from './pages/Contact'

export default function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const pageChange = (page) => setCurrentPage(page);

  return (
    <main className='app-container'>
      <Navbar currentPage={ currentPage } hanglePageChange={ pageChange } />
      <About />
      <Portfolio />
      <History />
      <Contact />
    </main>
  );
}