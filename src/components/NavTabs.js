import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header>
      <Navbar collapseOnSelect expand='lg'>
        <Container>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className="me-auto">
            <Nav.Link href='#home'
              onClick={() => handlePageChange('Home')}
              className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
              Home
            </Nav.Link>
            <Nav.Link href='#about'
              onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
              About
            </Nav.Link>
            <Nav.Link href='#portfolio'
              onClick={() => handlePageChange('Portfolio')}
              className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
              Portfolio
            </Nav.Link>
            <Nav.Link href='#contact'
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
              Contact
            </Nav.Link>
            <button className="button">
              <a href="../assets/Lee_Claire_Resume.pdf" download="Lee_Claire_Resume.pdf">
                Download Resume
              </a>
            </button>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header >
  );
}