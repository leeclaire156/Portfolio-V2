import React, { useState, useEffect } from 'react';
import '../styles/main.css';
import NavTabs from './NavTabs';
import Resume from './pages/Resume';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './footer/Footer';
import { Container } from 'react-bootstrap';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method checks to see what the value of `currentPage` is. 
  // Depending on the value of currentPage, we return the corresponding component to render. This function is called on line 35.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return  <Resume />;
  };

  // This method transfers the information about the currentPage state to re-set the currentPage variable
  const handlePageChange = (page) => setCurrentPage(page);

  // Changes document title
  useEffect(() => {
    document.title = "Claire's Portfolio"
  })

  return (
    <div className='main'>
      {/* We are getting the currentPage from the active nav tab's state and giving it to the handlePageChange */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <Container>
        {renderPage()}
      </Container>
      <Footer />
    </div>
  );
}
